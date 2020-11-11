/*jshint esversion: 6 */
  var modal = document.getElementById('myModal2');
  var span = document.getElementById('modal-close');
function fetch() {
    // GET SEARCH TERM	

    var data = new FormData();
    data.append('search', document.getElementById("search_text").value);
    data.append('ajax', 1);

    // AJAX SEARCH REQUEST
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "assets/php/search.php", true);
    xhr.onload = function () {
      if (this.status==200) {
        var results = JSON.parse(this.response),
            wrapper = document.getElementById("results");
        wrapper.innerHTML = "";
        if (results.length > 0) {
          for(var res of results) {
            var line = document.createElement("div");
            line.innerHTML = `<h3>${res['check_option']}</h3><p>${res['details']}</p>`;
            wrapper.appendChild(line);
          }
        } else {
          wrapper.innerHTML = "No results found";
        }
      } else {
        alert("ERROR LOADING FILE!");
      }
    };
    xhr.send(data);
    return false;
}


$('#search_button').on('click', (e) => {  
  e.preventDefault();
  modal.style.display = "block";	
  fetch();
});

span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
