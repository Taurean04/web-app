/*jshint esversion: 6 */
let Lagos=0;
let Pleasure=0;
let Lisbon=0;
let Paris=0;
let Ghana=0;
let Cameroun=0;
let Kenya=0;
let Australia=0;
let Belgium=0;
let Japan=0;
let Iran=0;
let Italy=0;
let Columbia=0;
let USA=0;        
let Canada=0;
let England=0;
let Brazil=0;
let Nigeria=0;
let SouthAfrica=0;        
let Table=0;
let Fork=0;
let Spoon=0;
let Knife=0;
let Cup=0;
let Chair=0;
let Kitchen=0;
let Plate=0;
let Wire=0;
let Water=0;
let River=0;
let Ocean=0;
let Pond=0;
let Lake=0;
let Fish=0;
let Whale=0;
let Shark=[];
let AntMan=[];
let GoatMan=[];
let WeakMan=[];
let StrongMan=[];
let Paper=0;
let Phone=0;
let Dance=0;

function scroll_to_class(chosen_class) {
	var nav_height = $('nav').outerHeight();
	var scroll_to = $(chosen_class).offset().top - nav_height;

	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

function ifChecked(checkboxes){
	let check = [];
	Array.from(checkboxes).forEach(checkbox => {
		if(checkbox.checked){
			check.push(checkbox);
		}
	});
	if (check.length === 0){
		return false;
	}else{
		return true;
	}
}

// VARIABLES
var nextBtns = document.getElementsByClassName('btn-next');
var prevBtns = document.getElementsByClassName('btn-previous');
var checkboxes1 = document.getElementsByName('checkboxes-1');
var cuteSel = document.getElementById("cute").options;
var strongSel = document.getElementById("strong").options;
var newQuestSel = document.getElementById("new-quest").options;
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");
var a6 = document.getElementById("a6");
var a7 = document.getElementById("a7");
var a8 = document.getElementById("a8");
var a9 = document.getElementById("a9");
var a10 = document.getElementById("a10");
var a11 = document.getElementById("a11");
var a12 = document.getElementById("a12");
var a13 = document.getElementById("a13");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b10 = document.getElementById("b10");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");
var c12 = document.getElementById("c12");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");
var d7 = document.getElementById("d7");
var d8 = document.getElementById("d8");
var d9 = document.getElementById("d9");
var d10 = document.getElementById("d10");
var d11 = document.getElementById("d11");
var d12 = document.getElementById("d12");
var e1 = document.getElementById("e1");
var e2 = document.getElementById("e2");
var e3 = document.getElementById("e3");
var e4 = document.getElementById("e4");
var e5 = document.getElementById("e5");
var e6 = document.getElementById("e6");
var e7 = document.getElementById("e7");
var e8 = document.getElementById("e8");
var e9 = document.getElementById("e9");
var e10 = document.getElementById("e10");
var e11 = document.getElementById("e11");
var e12 = document.getElementById("e12");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");
var f10 = document.getElementById("f10");
var f11 = document.getElementById("f11");
var f12 = document.getElementById("f12");
var g1 = document.getElementById("g1");
var g2 = document.getElementById("g2");
var g3 = document.getElementById("g3");
var g4 = document.getElementById("g4");
var g5 = document.getElementById("g5");
var g6 = document.getElementById("g6");
var g7 = document.getElementById("g7");
var g8 = document.getElementById("g8");
var g9 = document.getElementById("g9");
var g10 = document.getElementById("g10");
var g11 = document.getElementById("g11");
var g12 = document.getElementById("g12");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h5 = document.getElementById("h5");
var h6 = document.getElementById("h6");
var h7 = document.getElementById("h7");
var h8 = document.getElementById("h8");
var h9 = document.getElementById("h9");
var h10 = document.getElementById("h10");
var h11 = document.getElementById("h11");
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var i6 = document.getElementById("i6");
var i7 = document.getElementById("i7");
var i8 = document.getElementById("i8");
var i9 = document.getElementById("i9");
var i10 = document.getElementById("i10");
var j1 = document.getElementById("j1");
var j2 = document.getElementById("j2");
var j3 = document.getElementById("j3");
var j4 = document.getElementById("j4");
var j5 = document.getElementById("j5");
var j6 = document.getElementById("a6");
var j7 = document.getElementById("j7");
var j8 = document.getElementById("j8");
var j9 = document.getElementById("j9");
var j10 = document.getElementById("j10");
var j11 = document.getElementById("j11");
var j12 = document.getElementById("j12");
var k1 = document.getElementById("k1");
var k2 = document.getElementById("k2");
var k3 = document.getElementById("k3");
var k4 = document.getElementById("k4");
var k5 = document.getElementById("k5");
var k6 = document.getElementById("k6");
var k7 = document.getElementById("k7");
var k8 = document.getElementById("k8");
var k9 = document.getElementById("k9");
var k10 = document.getElementById("k10");
var k11 = document.getElementById("k11");
var k12 = document.getElementById("k12");
var k13 = document.getElementById("k13");
var k14 = document.getElementById("k14");
var submit = document.getElementById("submit");
var reset = document.getElementById('reset');
var  cont = document.getElementById('continue');
var  conText = document.getElementById('conText');


jQuery(document).ready(function() {

	/*
	    Fullscreen background
	*/
	$.backstretch("assets/img/backgrounds/3.jpg");

	/*
	    Multi Step Form
	*/
	$('.msf-form form fieldset:first-child').fadeIn('slow');

	var modal = document.getElementById('myModal');
	var span = document.getElementById('modal-close');
	submit.addEventListener('click', (e) => {
		e.preventDefault();		
		var fool = document.getElementById("fool").value;
		var pig = document.getElementById("pig").value;
		var giraffe = document.getElementById("girafee").value;
		var cute = cuteSel[cuteSel.selectedIndex].value;
		var strong = strongSel[strongSel.selectedIndex].value;
		// Refactoring phase 1A check boxes code
		if(a1.checked){
			Lagos+=10;
		}
		if(a2.checked){
			Lagos+=10;
		}
		if(a3.checked){
			Lagos+=10;
		}
		if(a4.checked){
			Lagos+=10;
		}
		if(a5.checked){
			Lagos+=10;
		}
		if(a6.checked){
			Lagos+=10;
		}
		if(a7.checked){
			Lagos+=10;
		}
		if(a8.checked){
			Lagos+=10;
		}
		if(a9.checked){
			Lagos+=10;
		}
		if(a10.checked){
			Lagos+=10;
		}
		if(a11.checked){
			Lagos+=10;
		}
		if(a12.checked){
			Lagos+=10;
		}
		if(a13.checked){
			Lagos+=10;
		}
	
		// Refactoring phase 1B check boxes code
		
			if(b1.checked){
				Pleasure+=60;
			}
			if(b2.checked){
				Pleasure+=60;
			}
			if(b3.checked){
				Pleasure+=60;
			}
			if(b3.checked){
				Pleasure+=60;
			}
			if(b4.checked){
				Pleasure+=60;
			}
			if(b5.checked){
				Pleasure+=60;
			}
			if(b6.checked){
				Pleasure+=53;
			}
			if(b7.checked){
				Pleasure+=60;
			}
			if(b8.checked){
				Pleasure+=60;
			}
			if(b9.checked){
				Pleasure+=60;
			}
			if(b10.checked){
				Pleasure+=60;
			}
		// Refactoring phase 1C check boxes code
		if(c1.checked){
			if(Lagos === 0){
				Lisbon+=4;
				Columbia+=4;
			}else{
				Dance+=40;
			}
		}
		if(c2.checked){
			if(Lagos === 0){
				Paris+=4;
			}else{
				Dance+=40;
			}
		}
		if(c3.checked){
			if(Lagos === 0){
				Columbia+=3.5;
			}else{
				Dance+=35;
			}
		}else{
			Ghana+=3.5;
		}
		if(c4.checked){
			if(Lagos === 0){
				Kenya+=5;
			}else{
				Dance+=50;
			}
		}
		if(c5.checked){
			if(Lagos === 0){
				Kenya+=3;
			}else{
				Dance+=30;
			}
		}
		if(c6.checked){
			if(Lagos === 0){
				Belgium+=5;
				Columbia+=5;
				Lisbon+=5;
			}else{
				Dance+=50;
			}
		}
		if(c7.checked){
			if(Lagos === 0){
				Japan+=3;
			}else{
				Dance+=30;
			}
		}
		if(c8.checked){
			if(Lagos === 0){
				Belgium+=2.5;
				Columbia+=2.5;
				USA-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			USA+=2.5;
		}
		if(c9.checked){
			if(Lagos === 0){
				Cameroun+=3.5;
			}else{
				Dance+=35;
			}
		}
		if(c10.checked){
			if(Lagos === 0){
				USA-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			USA+=2.5;
		}
		if(c11.checked){
			if(Lagos === 0){
				Australia-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			Australia+=2.5;
		}
		if(c12.checked){
			if(Lagos === 0){
				Australia-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			Australia+=2.5;
		}
		
		// Refactoring phase 2 check boxes code
		if(d1.checked){
			Lisbon+=4;
			Columbia+=4;
		}
		if(d2.checked){
			Paris+=2;
		}
		if(d3.checked){
			Ghana-=4;
			Columbia+=4;
		}else{
			Ghana+=4;
		}
		if(d4.checked){
			Kenya+=2;
		}
		if(d5.checked){
			Australia-=4;
		}else{
			Australia+=4;
		}
		if(d6.checked){
			Belgium+=4;
			Columbia+=4;
			Japan+=4;
			Lisbon+=4;
		}
		if(d7.checked){
			Japan+=1;
		}
		if(d8.checked){
			Belgium+=3;
			Columbia+=3;
		}else{
			USA+=3;
		}
		if(d9.checked){
			Columbia+=5;
		}
		if(d10.checked){
			USA-=5;
		}else{
			USA+=5;
		}
		if(d11.checked){
			Australia-=2;
		}else{
			Australia+=2;
		}
		if(d12.checked){
			Japan+=2;
		}
	
		// Refactoring phase 3 check boxes code
		if(e1.checked){
			Lisbon+=3;
		}
		if(!e2.checked){
			Ghana+=2;
		}
		if(e3.checked){
			Cameroun+=1;
		}
		if(e4.checked){
			Australia-=4;
		}else{
			Australia+=4;
		}
		if(e5.checked){
			Japan+=5;
		}
		if(e6.checked){
			Iran+=2;
		}
		if(e7.checked){
			Italy+=1;
		}
		if(e8.checked){
			Lisbon+=1;
		}
		if(e9.checked){
			Paris+=3;
		}
		if(!e10.checked){
			Ghana+=2;
		}
		if(e11.checked){
			Cameroun+=1;
		}
		if(e12.checked){
			Kenya+=3;
		}
	
		// Refactoring phase 4 check boxes code
		if(f1.checked){
			Paris+=3;
		}
		if(f2.checked){
			Ghana-=4;
		}else{
			Ghana+=4;
		}
		if(f3.checked){
			Cameroun+=3;
		}
		if(f4.checked){
			Kenya+=5;
			Italy+=5;
		}
		if(f5.checked){
			Australia-=5;
		}else{
			Australia+=5;
		}
		if(f6.checked){
			Belgium+=5;
		}
		if(f7.checked){
			Australia-=5;
		}else{
			Australia+=5;
		}
		if(f8.checked){
			Belgium+=5;
		}
		if(f9.checked){
			Iran+=2;
		}
		if(f10.checked){
			Italy+=2;
		}
		if(f11.checked){
			Columbia+=4;
		}
		if(f12.checked){
			USA-=3;
			Italy+=3;
		}else{
			USA+=3;
		}
	
		// Refactoring phase 5 check boxes code
		if(g1.checked){
			Lisbon+=3;
		}
		if(g2.checked){
			Paris+=2;
		}
		if(!g3.checked){
			Ghana+=2;
		}
		if(g4.checked){
			Cameroun+=1;
		}
		if(g5.checked){
			Kenya+=5;
		}
		if(g6.checked){
			Australia-=3;
		}else{
			Australia+=3;
		}
		if(g7.checked){
			Lisbon+=2;
		}
		if(g8.checked){
			Cameroun+=5;
		}
		if(g9.checked){
			Japan+=4;
		}
		if(g10.checked){
			Iran+=2;
		}
		if(g11.checked){
			Columbia+=3;
		}
		if(!g12.checked){
			USA+=3;
		}
	
		// Refactoring phase 6 check boxes code
		if(h1.checked){
			Lisbon+=5;
		}
		if(h2.checked){
			Paris+=4;
		}
		if(h3.checked){
			Ghana-=2;
			Australia+=2;
		}else{
			Ghana+=2;
			Australia+=2;
		}
		if(h4.checked){
			Cameroun+=4;
		}
		if(h5.checked){
			Kenya+=5;
		}
		if(!h6.checked){
			Australia+=2;
		}
		if(h7.checked){
			Japan+=2;
		}
		if(h8.checked){
			Japan+=5;
		}
		if(h9.checked){
			Iran+=2;
		}
		if(h10.checked){
			Italy+=3;
		}
		if(h11.checked){
			Columbia+=3;
		}
	
		// Refactoring phase 7 check boxes code
		if(i1.checked){
			Lisbon+=1;
		}
		if(i2.checked){
			Paris+=2;
		}
		if(i3.checked){
			Ghana-=2;
		}else{
			Ghana+=2;
		}
		if(i4.checked){
			Cameroun+=4;
		}
		if(i5.checked){
			Kenya+=3;
		}
		if(i6.checked){
			Australia-=5;
		}else{
			Australia+=5;
		}
		if(i7.checked){
			Belgium+=5;
		}
		if(i8.checked){
			Iran+=2;
		}
		if(i9.checked){
			Italy+=5;
		}
		if(i10.checked){
			Columbia+=5;
		}
	
		// Refactoring phase 8 check boxes code
		if(j1.checked){
			Lisbon+=3;
		}
		if(!j2.checked){
			Ghana+=2;
		}
		if(j3.checked){
			Cameroun+=4;
		}
		if(j4.checked){
			Kenya+=2;
		}
		if(j5.checked){
			Belgium+=3;
		}
		if(j6.checked){
			Japan+=1;
		}
		if(j7.checked){
			Iran+=3;
		}
		if(!j8.checked){
			USA+=2;
		}
		if(j9.checked){
			Italy+=3;
		}
		if(j10.checked){
			Italy+=3;
		}
		if(j11.checked){
			Iran+=5;
		}
		if(j12.checked){
			USA-=3;
		}else{
			USA+=3;
		}
	
		// Refactoring phase 9 check boxes code
		if(k1.checked){
			Lisbon+=3;
		}
		if(k2.checked){
			Paris+=1;
		}
		if(k3.checked){
			Ghana-=5;
		}else{
			Ghana+=5;
		}
		if(k4.checked){
			Cameroun+=3;
		}
		if(k5.checked){
			Kenya+=5;
		}
		if(k6.checked){
			Australia-=3;
		}else{
			Australia+=3;
		}
		if(k7.checked){
			Japan+=2;
		}
		if(k8.checked){
			Japan+=3;
		}
		if(k9.checked){
			Japan+=2;
		}
		if(k10.checked){
			Iran+=2;
		}
		if(k11.checked){
			Italy+=5;
		}
		if(k12.checked){
			Columbia+=5;
		}
		if(k13.checked){
			USA-=5;
		}else{
			USA+=5;
		}
		if(k14.checked){
			USA-=5;
			Belgium+=5;
			Columbia+=5;
		}else{
			USA+=5;
		}
	
		// Refactoring Further Calculations code
		Canada += pig / ((giraffe)^2);
		if(Canada < 16){ //Severe weight loss
			Nigeria += 10;
			Cameroun+=5;
			Japan+=5;
			Paris+=3;
		}else if(Canada >= 16 && Canada <= 18.5){ //Moderate Weight Loss
			Nigeria += 2.5;
			Cameroun+=5;
			Japan+=5;
			Paris+=3;
		}else if(Canada > 18.5 && Canada <= 24.9){ //Normal Weight
			Nigeria -= 5;
			Iran+=5;
		}else if(Canada > 24.9 && Canada <= 29.9){ //Overweight
			Nigeria +=5;
			Paris+=3;
		}else if(Canada > 19.9 && Canada <= 34.9){ //Mild to Moderately Obese
			Nigeria+=10;
			Paris+=4;
		}else if(Canada > 34.9){ // Severely Obese
			Nigeria +=25;
			Paris+=5;
		}
	
		if(fool < 18) { //Childhood to teenage: young
			SouthAfrica = 1;
		}else if(fool >= 18 &&  fool < 30) { //Adolescent to Young Adults
			SouthAfrica = 1.5;
		}else if(fool >= 30 && fool < 40) { //Adults
			SouthAfrica = 2.5;
		}else if(fool >= 40 && fool < 50) { //Older Adults
			SouthAfrica = 4.5;
		}else if(fool >= 50 && fool < 60) { //Middle Age
			SouthAfrica = 6.5;
		}else if(fool >= 60 && fool < 70) { //Older Middle Age: Early retirement age
			SouthAfrica = 9;
		}else if(fool >= 70 && fool < 80) { //Young Elderly
			SouthAfrica = 25;
		}else if(fool >= 80) { //Elderly
			SouthAfrica = 30;
		}
		Paper = Paper + Lagos;
		Phone = Phone + (Paper + Pleasure + Dance);
		Table = Table + Lisbon;
		Fork = Fork + (Table + Paris);
		Spoon = Spoon + (Fork - Ghana);
		Knife = Knife + Spoon + Cameroun;
		Cup = Cup + Knife + Kenya;
		Chair = Chair + (Cup - Australia);
		Kitchen = Kitchen + Chair + Belgium;
		Plate = Plate + Kitchen + Japan;
		Wire = Wire + (Plate - Iran);
		Water = Water + Wire + Italy;
		River = River + Water + Columbia;
		Ocean = Ocean + (River - USA);
		Pond = Pond + Ocean + England;
		Lake = Lake + Pond + Brazil;
		Fish = Fish + (Lake + Nigeria);
		Whale = Whale + (Fish + SouthAfrica);
		Shark = [Table, Fork, Spoon, Knife, Cup, Chair, Kitchen, Plate, Wire, Water, River, Ocean, Pond, Lake, Fish, Whale];
		AntMan = [Paper, Phone];
		GoatMan = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'First Quarter', 'Second Quarter', 'Third Quarter', 'Fourth Quarter'];
		WeakMan = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		StrongMan = [1, 5];
		var name = document.getElementById("name").value;
		document.getElementById('modal-h3').innerHTML = name;
					
		var lY = '';
		var rY = '';	
		if(Phone >= 10 && Phone <= 24.9){
			lY = "Call Professor";
		}else if(Phone >= 25 && Phone <= 59.9){
			lY = "Time to Move";
		}else if(Phone >= 60 && Phone <= 119.9){
			lY = "Remember the Plan";
		}else if(Phone >= 120 && Phone <= 149.9){
			lY = "Hurry Up Now";
		}else if(Phone >= 150){
			lY = "Be Fast";
		}
					
		if(Whale <= -50 && Whale <= -30.1){
			rY = "Safest Distance";
		}else if(Whale >= -30 && Whale <= -20.1){
			rY = "Largest Areas";
		}else if(Whale >= -20 && Whale <= 24.9){
			rY = "Work Alone";
		}else if(Whale >= 25 && Whale <= 59.9){
			rY = "Small Spaces";
		}else if(Whale >= 60){
			rY = "Large Spaces";
		}
		// When the user clicks on the button, open the modal
		modal.style.display = "block";		
		cont.style.display = "none";
		if(ifChecked(checkboxes1) === true){
			document.getElementById('recom').innerHTML = `${lY} <br><br> ${rY}`;
			drawChart();
		}else{
			document.getElementById('recom').innerHTML = rY;		
			drawChart2();
		}		
		resetVariables();
	
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		};
	
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		};
	});

	
	Array.from(nextBtns).forEach(btn => {
		btn.addEventListener('click', () => {
			var newQuest = newQuestSel[newQuestSel.selectedIndex].value;
			if(newQuest==1){
				conText.style.display = "block";
			}else{
				conText.style.display = "none";
			}
			if(btn === nextBtns[1] && (ifChecked(checkboxes1) === true)){
				$(btn).parents('fieldset').fadeOut(400, function() {						
					$(this).next().fadeIn();
					scroll_to_class('.msf-form');			
					nextBtns[2].id = "nSub";
					nextBtns[2].addEventListener('click', () => {	
						var fool = document.getElementById("fool").value;
						var pig = document.getElementById("pig").value;
						var giraffe = document.getElementById("girafee").value;
						var cute = cuteSel[cuteSel.selectedIndex].value;
		var strong = strongSel[strongSel.selectedIndex].value;
		// Refactoring phase 1A check boxes code
		if(a1.checked){
			Lagos+=10;
		}
		if(a2.checked){
			Lagos+=10;
		}
		if(a3.checked){
			Lagos+=10;
		}
		if(a4.checked){
			Lagos+=10;
		}
		if(a5.checked){
			Lagos+=10;
		}
		if(a6.checked){
			Lagos+=10;
		}
		if(a7.checked){
			Lagos+=10;
		}
		if(a8.checked){
			Lagos+=10;
		}
		if(a9.checked){
			Lagos+=10;
		}
		if(a10.checked){
			Lagos+=10;
		}
		if(a11.checked){
			Lagos+=10;
		}
		if(a12.checked){
			Lagos+=10;
		}
		if(a13.checked){
			Lagos+=10;
		}
	
		// Refactoring phase 1B check boxes code
		
			if(b1.checked){
				Pleasure+=60;
			}
			if(b2.checked){
				Pleasure+=60;
			}
			if(b3.checked){
				Pleasure+=60;
			}
			if(b3.checked){
				Pleasure+=60;
			}
			if(b4.checked){
				Pleasure+=60;
			}
			if(b5.checked){
				Pleasure+=60;
			}
			if(b6.checked){
				Pleasure+=53;
			}
			if(b7.checked){
				Pleasure+=60;
			}
			if(b8.checked){
				Pleasure+=60;
			}
			if(b9.checked){
				Pleasure+=60;
			}
			if(b10.checked){
				Pleasure+=60;
			}
		// Refactoring phase 1C check boxes code
		if(c1.checked){
			if(Lagos === 0){
				Lisbon+=4;
				Columbia+=4;
			}else{
				Dance+=40;
			}
		}
		if(c2.checked){
			if(Lagos === 0){
				Paris+=4;
			}else{
				Dance+=40;
			}
		}
		if(c3.checked){
			if(Lagos === 0){
				Columbia+=3.5;
			}else{
				Dance+=35;
			}
		}else{
			Ghana+=3.5;
		}
		if(c4.checked){
			if(Lagos === 0){
				Kenya+=5;
			}else{
				Dance+=50;
			}
		}
		if(c5.checked){
			if(Lagos === 0){
				Kenya+=3;
			}else{
				Dance+=30;
			}
		}
		if(c6.checked){
			if(Lagos === 0){
				Belgium+=5;
				Columbia+=5;
				Lisbon+=5;
			}else{
				Dance+=50;
			}
		}
		if(c7.checked){
			if(Lagos === 0){
				Japan+=3;
			}else{
				Dance+=30;
			}
		}
		if(c8.checked){
			if(Lagos === 0){
				Belgium+=2.5;
				Columbia+=2.5;
				USA-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			USA+=2.5;
		}
		if(c9.checked){
			if(Lagos === 0){
				Cameroun+=3.5;
			}else{
				Dance+=35;
			}
		}
		if(c10.checked){
			if(Lagos === 0){
				USA-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			USA+=2.5;
		}
		if(c11.checked){
			if(Lagos === 0){
				Australia-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			Australia+=2.5;
		}
		if(c12.checked){
			if(Lagos === 0){
				Australia-=2.5;
			}else{
				Dance+=25;
			}
		}else{
			Australia+=2.5;
		}
		
		// Refactoring phase 2 check boxes code
		if(d1.checked){
			Lisbon+=4;
			Columbia+=4;
		}
		if(d2.checked){
			Paris+=2;
		}
		if(d3.checked){
			Ghana-=4;
			Columbia+=4;
		}else{
			Ghana+=4;
		}
		if(d4.checked){
			Kenya+=2;
		}
		if(d5.checked){
			Australia-=4;
		}else{
			Australia+=4;
		}
		if(d6.checked){
			Belgium+=4;
			Columbia+=4;
			Japan+=4;
			Lisbon+=4;
		}
		if(d7.checked){
			Japan+=1;
		}
		if(d8.checked){
			Belgium+=3;
			Columbia+=3;
		}else{
			USA+=3;
		}
		if(d9.checked){
			Columbia+=5;
		}
		if(d10.checked){
			USA-=5;
		}else{
			USA+=5;
		}
		if(d11.checked){
			Australia-=2;
		}else{
			Australia+=2;
		}
		if(d12.checked){
			Japan+=2;
		}
	
		// Refactoring phase 3 check boxes code
		if(e1.checked){
			Lisbon+=3;
		}
		if(!e2.checked){
			Ghana+=2;
		}
		if(e3.checked){
			Cameroun+=1;
		}
		if(e4.checked){
			Australia-=4;
		}else{
			Australia+=4;
		}
		if(e5.checked){
			Japan+=5;
		}
		if(e6.checked){
			Iran+=2;
		}
		if(e7.checked){
			Italy+=1;
		}
		if(e8.checked){
			Lisbon+=1;
		}
		if(e9.checked){
			Paris+=3;
		}
		if(!e10.checked){
			Ghana+=2;
		}
		if(e11.checked){
			Cameroun+=1;
		}
		if(e12.checked){
			Kenya+=3;
		}
	
		// Refactoring phase 4 check boxes code
		if(f1.checked){
			Paris+=3;
		}
		if(f2.checked){
			Ghana-=4;
		}else{
			Ghana+=4;
		}
		if(f3.checked){
			Cameroun+=3;
		}
		if(f4.checked){
			Kenya+=5;
			Italy+=5;
		}
		if(f5.checked){
			Australia-=5;
		}else{
			Australia+=5;
		}
		if(f6.checked){
			Belgium+=5;
		}
		if(f7.checked){
			Australia-=5;
		}else{
			Australia+=5;
		}
		if(f8.checked){
			Belgium+=5;
		}
		if(f9.checked){
			Iran+=2;
		}
		if(f10.checked){
			Italy+=2;
		}
		if(f11.checked){
			Columbia+=4;
		}
		if(f12.checked){
			USA-=3;
			Italy+=3;
		}else{
			USA+=3;
		}
	
		// Refactoring phase 5 check boxes code
		if(g1.checked){
			Lisbon+=3;
		}
		if(g2.checked){
			Paris+=2;
		}
		if(!g3.checked){
			Ghana+=2;
		}
		if(g4.checked){
			Cameroun+=1;
		}
		if(g5.checked){
			Kenya+=5;
		}
		if(g6.checked){
			Australia-=3;
		}else{
			Australia+=3;
		}
		if(g7.checked){
			Lisbon+=2;
		}
		if(g8.checked){
			Cameroun+=5;
		}
		if(g9.checked){
			Japan+=4;
		}
		if(g10.checked){
			Iran+=2;
		}
		if(g11.checked){
			Columbia+=3;
		}
		if(!g12.checked){
			USA+=3;
		}
	
		// Refactoring phase 6 check boxes code
		if(h1.checked){
			Lisbon+=5;
		}
		if(h2.checked){
			Paris+=4;
		}
		if(h3.checked){
			Ghana-=2;
			Australia+=2;
		}else{
			Ghana+=2;
			Australia+=2;
		}
		if(h4.checked){
			Cameroun+=4;
		}
		if(h5.checked){
			Kenya+=5;
		}
		if(!h6.checked){
			Australia+=2;
		}
		if(h7.checked){
			Japan+=2;
		}
		if(h8.checked){
			Japan+=5;
		}
		if(h9.checked){
			Iran+=2;
		}
		if(h10.checked){
			Italy+=3;
		}
		if(h11.checked){
			Columbia+=3;
		}
	
		// Refactoring phase 7 check boxes code
		if(i1.checked){
			Lisbon+=1;
		}
		if(i2.checked){
			Paris+=2;
		}
		if(i3.checked){
			Ghana-=2;
		}else{
			Ghana+=2;
		}
		if(i4.checked){
			Cameroun+=4;
		}
		if(i5.checked){
			Kenya+=3;
		}
		if(i6.checked){
			Australia-=5;
		}else{
			Australia+=5;
		}
		if(i7.checked){
			Belgium+=5;
		}
		if(i8.checked){
			Iran+=2;
		}
		if(i9.checked){
			Italy+=5;
		}
		if(i10.checked){
			Columbia+=5;
		}
	
		// Refactoring phase 8 check boxes code
		if(j1.checked){
			Lisbon+=3;
		}
		if(!j2.checked){
			Ghana+=2;
		}
		if(j3.checked){
			Cameroun+=4;
		}
		if(j4.checked){
			Kenya+=2;
		}
		if(j5.checked){
			Belgium+=3;
		}
		if(j6.checked){
			Japan+=1;
		}
		if(j7.checked){
			Iran+=3;
		}
		if(!j8.checked){
			USA+=2;
		}
		if(j9.checked){
			Italy+=3;
		}
		if(j10.checked){
			Italy+=3;
		}
		if(j11.checked){
			Iran+=5;
		}
		if(j12.checked){
			USA-=3;
		}else{
			USA+=3;
		}
	
		// Refactoring phase 9 check boxes code
		if(k1.checked){
			Lisbon+=3;
		}
		if(k2.checked){
			Paris+=1;
		}
		if(k3.checked){
			Ghana-=5;
		}else{
			Ghana+=5;
		}
		if(k4.checked){
			Cameroun+=3;
		}
		if(k5.checked){
			Kenya+=5;
		}
		if(k6.checked){
			Australia-=3;
		}else{
			Australia+=3;
		}
		if(k7.checked){
			Japan+=2;
		}
		if(k8.checked){
			Japan+=3;
		}
		if(k9.checked){
			Japan+=2;
		}
		if(k10.checked){
			Iran+=2;
		}
		if(k11.checked){
			Italy+=5;
		}
		if(k12.checked){
			Columbia+=5;
		}
		if(k13.checked){
			USA-=5;
		}else{
			USA+=5;
		}
		if(k14.checked){
			USA-=5;
			Belgium+=5;
			Columbia+=5;
		}else{
			USA+=5;
		}
	
		// Refactoring Further Calculations code
		Canada += pig / ((giraffe)^2);
		if(Canada < 16){ //Severe weight loss
			Nigeria += 10;
			Cameroun+=5;
			Japan+=5;
			Paris+=3;
		}else if(Canada >= 16 && Canada <= 18.5){ //Moderate Weight Loss
			Nigeria += 2.5;
			Cameroun+=5;
			Japan+=5;
			Paris+=3;
		}else if(Canada > 18.5 && Canada <= 24.9){ //Normal Weight
			Nigeria -= 5;
			Iran+=5;
		}else if(Canada > 24.9 && Canada <= 29.9){ //Overweight
			Nigeria +=5;
			Paris+=3;
		}else if(Canada > 19.9 && Canada <= 34.9){ //Mild to Moderately Obese
			Nigeria+=10;
			Paris+=4;
		}else if(Canada > 34.9){ // Severely Obese
			Nigeria +=25;
			Paris+=5;
		}
	
		if(fool < 18) { //Childhood to teenage: young
			SouthAfrica = 1;
		}else if(fool >= 18 &&  fool < 30) { //Adolescent to Young Adults
			SouthAfrica = 1.5;
		}else if(fool >= 30 && fool < 40) { //Adults
			SouthAfrica = 2.5;
		}else if(fool >= 40 && fool < 50) { //Older Adults
			SouthAfrica = 4.5;
		}else if(fool >= 50 && fool < 60) { //Middle Age
			SouthAfrica = 6.5;
		}else if(fool >= 60 && fool < 70) { //Older Middle Age: Early retirement age
			SouthAfrica = 9;
		}else if(fool >= 70 && fool < 80) { //Young Elderly
			SouthAfrica = 25;
		}else if(fool >= 80) { //Elderly
			SouthAfrica = 30;
		}
		Paper = Paper + Lagos;
		Phone = Phone + (Paper + Pleasure + Dance);
		Table = Table + Lisbon;
		Fork = Fork + (Table + Paris);
		Spoon = Spoon + (Fork - Ghana);
		Knife = Knife + Spoon + Cameroun;
		Cup = Cup + Knife + Kenya;
		Chair = Chair + (Cup - Australia);
		Kitchen = Kitchen + Chair + Belgium;
		Plate = Plate + Kitchen + Japan;
		Wire = Wire + (Plate - Iran);
		Water = Water + Wire + Italy;
		River = River + Water + Columbia;
		Ocean = Ocean + (River - USA);
		Pond = Pond + Ocean + England;
		Lake = Lake + Pond + Brazil;
		Fish = Fish + (Lake + Nigeria);
		Whale = Whale + (Fish + SouthAfrica);
		Shark = [Table, Fork, Spoon, Knife, Cup, Chair, Kitchen, Plate, Wire, Water, River, Ocean, Pond, Lake, Fish, Whale];
		AntMan = [Paper, Phone];
		GoatMan = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'First Quarter', 'Second Quarter', 'Third Quarter', 'Fourth Quarter'];
		WeakMan = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		StrongMan = [1, 5];
						var lY = '';				
						if(Phone>= 10 && Phone<= 24.9){
							lY = "Call Professor";
						}else if(Phone>= 25 && Phone<= 59.9){
							lY = "Time to Move";
						}else if(Phone>= 60 && Phone<= 119.9){
							lY = "Remember the Plan";
						}else if(Phone>= 120 && Phone<= 149.9){
							lY = "Hurry Up Now";
						}else if(Phone>= 150){
							lY = "Be Fast";
						}
						document.getElementById('recom').innerHTML = lY;
						modal.style.display = "block";
						var name = document.getElementById("name").value;
						document.getElementById('modal-h3').innerHTML = name;
						drawChart1();		
						resetVariables();
						cont.style.display = "block";
						cont.addEventListener('click', () => {
							modal.style.display = "none";
							btn = nextBtns[2];
							$(btn).parents('fieldset').fadeOut(400, function() {
								$(this).next().fadeIn();
								scroll_to_class('.msf-form');
							});
						});
						// When the user clicks on <span> (x), close the modal
						span.onclick = function() {
							btn = nextBtns[3];
							$(btn).parents('fieldset').fadeOut(400, function() {
								$(this).prev().fadeIn();
								scroll_to_class('.msf-form');
							});
							modal.style.display = "none";
						};
	
						// When the user clicks anywhere outside of the modal, close it
						window.onclick = function(event) {
							if (event.target == modal) {
								btn = nextBtns[3];
								$(btn).parents('fieldset').fadeOut(400, function() {
									$(this).prev().fadeIn();
									scroll_to_class('.msf-form');
								});
								modal.style.display = "none";
							}
						};						
					});
				});	
			}else if(btn === nextBtns[1] && (ifChecked(checkboxes1) === false)) {
				$(btn).parents('fieldset').fadeOut(400, function() {
					$(this).next().next().fadeIn();
					scroll_to_class('.msf-form');
				});
			}else{
				$(btn).parents('fieldset').fadeOut(400, function() {
					$(this).next().fadeIn();
					scroll_to_class('.msf-form');
				});
			}
			console.log($(btn));
		});
	});
	
	Array.from(prevBtns).forEach(btn => {
		btn.addEventListener('click', () => {
			if(btn === prevBtns[2] && (ifChecked(checkboxes1) === false)) {
				$(btn).parents('fieldset').fadeOut(400, function() {
					$(this).prev().prev().fadeIn();
					scroll_to_class('.msf-form');
				});	
			}else{
				$(btn).parents('fieldset').fadeOut(400, function() {
					$(this).prev().fadeIn();
					scroll_to_class('.msf-form');
				});	
			}
			console.log($(btn));
		});
	});


	reset.addEventListener('click', resetVariables());

	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
		var data = google.visualization.arrayToDataTable([
			['Period', 'Running Closer to the Goal', 'Time is Ticking'],
			['January', Table, Paper],
			['February', Fork, null],
			['March', Spoon, null],
			['April', Knife, null],
			['May', Cup, Phone],
			['June', Chair, null],
			['July', Kitchen, null],
			['August', Plate, null],
			['September', Wire, null],
			['October', Water, null],
			['November', River, null],
			['December', Ocean, null],
			['First Quarter', Pond, null],
			['Second Quarter', Lake, null],
			['Third Quarter', Fish, null],
			['Fourth Quarter', Whale, null]
		  ]);
  
		  var options = {	
			title: '',
			legend: { position: 'top' },
			colors: ['red', 'black'],
			chartArea: {
				backgroundColor: {
					stroke: 'black',
					strokeWidth: 1
				}
			},
			hAxis: {
				ticks: WeakMan
			},
			theme: 'material',
			vAxis: {
			  gridlines: {
				count: 10,
				color: "transparent"
			  },
			  viewWindow: {
				  min: -50,
				  max: 160
			  },
			  ticks: [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
			},
			series: {
			  0: {
				targetAxisIndex: 0,
			  },
			  1: {
				targetAxisIndex: 1,
			  }
			},
			vAxes: {
			  0: {
				ticks: [
						{v: 10, f: 'Call Professor'},
						{v: 25, f: 'Time to Move'},
						{v: 60, f: 'Remember the Plan'},
						{v: 120, f: 'Hurry Up Now'},
						{v: 150, f: 'Be Fast'}
					],
				logScale: false,
				maxValue: 10
			  },
			  1: {
				ticks: [
					{v: -50, f: 'Safest Distance'},
					{v: -30, f: 'Largest Areas'},
					{v: -20, f: 'Work Alone'},
					{v: 25, f: 'Small Spaces'},
					{v: 60, f: 'Large Spaces'}
					],
				logScale: false,
				maxValue: 10
			  }
			},
			interpolateNulls: true
		  };
  
		  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  
		  chart.draw(data, options);
		}

	google.charts.setOnLoadCallback(drawChart);
	function drawChart1() {
		var data = google.visualization.arrayToDataTable([
			['Period', 'Time is Ticking'],
			['January', Paper],
			['February', null],
			['March', null],
			['April', null],
			['May', Phone],
			['June', null],
			['July', null],
			['August', null],
			['September', null],
			['October', null],
			['November', null],
			['December', null],
			['First Quarter', null],
			['Second Quarter', null],
			['Third Quarter', null],
			['Fourth Quarter', null]
		  ]);
  
		  var options = {	
			title: '',
			legend: { position: 'top' },
			colors: ['black'],
			chartArea: {
				backgroundColor: {
					stroke: 'black',
					strokeWidth: 1
				}
			},
			hAxis: {
				ticks: WeakMan
			},
			theme: 'material',
			vAxis: {
			  gridlines: {
				count: 10,
				color: "transparent"
			  },
			  viewWindow: {
				  min: -50,
				  max: 160
			  },
			  ticks: [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
			  ticks: [
				{v: 10, f: 'Call Professor'},
				{v: 25, f: 'Time to Move'},
				{v: 60, f: 'Remember the Plan'},
				{v: 120, f: 'Hurry Up Now'},
				{v: 150, f: 'Be Fast'}
			],
			logScale: false,
			maxValue: 10
			},
			interpolateNulls: true
		  };
  
		  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  
		  chart.draw(data, options);
		}

	google.charts.setOnLoadCallback(drawChart);
	function drawChart2() {
		var data = google.visualization.arrayToDataTable([
			['Period', 'Running Closer to the Goal'],
			['January', Table],
			['February', Fork],
			['March', Spoon],
			['April', Knife],
			['May', Cup],
			['June', Chair],
			['July', Kitchen],
			['August', Plate],
			['September', Wire],
			['October', Water],
			['November', River],
			['December', Ocean],
			['First Quarter', Pond],
			['Second Quarter', Lake],
			['Third Quarter', Fish],
			['Fourth Quarter', Whale]
		  ]);
  
		  var options = {	
			title: '',
			legend: { position: 'top' },
			colors: ['red'],
			chartArea: {
				backgroundColor: {
					stroke: 'black',
					strokeWidth: 1
				}
			},
			hAxis: {
				ticks: WeakMan
			},
			theme: 'material',
			vAxis: {
			  gridlines: {
				count: 10,
				color: "transparent"
			  },
			  viewWindow: {
				  min: -50,
				  max: 160
			  },
			  ticks: [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
				ticks: [
					{v: -50, f: 'Safest Distance'},
					{v: -30, f: 'Largest Areas'},
					{v: -20, f: 'Work Alone'},
					{v: 25, f: 'Small Spaces'},
					{v: 60, f: 'Large Spaces'}
					],
				logScale: false,
				maxValue: 10
			},
			interpolateNulls: true
		  };
  
		  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  
		  chart.draw(data, options);
		}
		function resetVariables(){
			Lagos=0;
			Pleasure=0;
			Lisbon=0;
			Paris=0;
			Ghana=0;
			Cameroun=0;
			Kenya=0;
			Australia=0;
			Belgium=0;
			Japan=0;
			Iran=0;
			Italy=0;
			Columbia=0;
			USA=0;        
			Canada=0;
			England=0;
			Brazil=0;
			Nigeria=0;
			SouthAfrica=0;        
			Table=0;
			Fork=0;
			Spoon=0;
			Knife=0;
			Cup=0;
			Chair=0;
			Kitchen=0;
			Plate=0;
			Wire=0;
			Water=0;
			River=0;
			Ocean=0;
			Pond=0;
			Lake=0;
			Fish=0;
			Whale=0;
			Shark=[];
			AntMan=[];
			GoatMan=[];
			WeakMan=[];
			StrongMan=[];
			Paper=0;
			Phone=0;
			Dance=0;
		}

});