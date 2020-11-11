<?php
   include("assets/php/config.php");
   session_start();
   global  $error;
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,md5($_POST['password'])); 
      
      $sql = "SELECT user_id FROM users WHERE username = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      if (!$result) {
        printf("Error: %s\n", mysqli_error($db));
        exit();
    }
      $row = mysqli_fetch_array($result);
    //   $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
        //  session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         
         header("location: index.html");
      }else {
        $error = "Your Login Name or Password is invalid";
      }
   }
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="assets/css/login.css">
</head>
<body>
<div class="form-wrapper">
  
  <form action="" method="post">
    <h3>Login</h3>
	
    <div class="form-item">
		<input type="text" type="username" name="username" placeholder="Username" autofocus required></input>
    </div>
    
    <div class="form-item">
		<input type="password" name="password" placeholder="Password" required></input>
    </div>
    
    <div class="button-panel">
		<input type="submit" class="button" title="Log In" name="login" value="Login"></input>
    </div>
  </form>
  
</div>

</body>
</html>