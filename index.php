<?php
   include('session.php');
?>
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>

        <!-- CSS -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,700">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/form-elements.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/media-queries.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

        <!-- Favicon and touch icons -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
		<script src="https://www.gstatic.com/charts/loader.js"></script>
    </head>

    <body>
		
		<!-- Top menu -->
		<nav class="navbar navbar-inverse" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="top-navbar-1">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<span class="li-text"><a href = "index.html">Dashboard</a></span>
						</li>
						<li>
							<span class="li-text"><a href = "logout.php">Sign Out</a></span>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-left"> <!--search bar -->
						<li id="search">
        					<form action="" method="get">
            					<input type="text" name="search_text" id="search_text" placeholder="Search"/>
            					<button name="search_button" value="Submit" id="search_button"><i class="fa fa-search"></i></button>
        					</form>
    					</li>
					</ul>
				</div>
			</div>
		</nav>
        
	
		<!-- Multi Step Form -->
		<div class="msf-container">
	        <div class="container">
	        	
	            <div class="row">
	                <div class="col-sm-12 msf-form">
	                    
	                    <form role="form" action="" method="post" class="form-inline" id="step-form">
	                    	
	                    	<fieldset>
								<p>(1/12)</p>
								<h4>Bio Page <span class="step"></span></h4>
	            				<div class="form-group">
				                    <label for="name">Name:</label><br>
				                    <input type="text" name="name" class="name form-control" id="name">
				                </div>
								<br>
								<div class="form-group">
				                    <label for="name">Fools Number:</label><br>
				                    <input type="text" name="Fool" class="Fool form-control" id="fool">
				                </div>
								<br>
				                <div class="form-group">
				                    <label for="last-name">Pig Number:</label><br>
				                    <input type="text" name="Pig" class="Pig form-control" id="pig">
				                </div>
								<br>
								<div class="form-group">
				                    <label for="last-name">Girafee:</label><br>
				                    <input type="text" name="Girafee" class="Girafee form-control" id="girafee">
				                </div>
								<br>
				               <div class="selects-1">
									<p>Are you cute:</p>
					                <select class="form-control" name="select-1" id="cute">
					                	<option value="1">Yes</option>
					                	<option value="2">No</option>
					                </select>
								</div>
								<br>
				                <div class="selects-1">
									<p>Are you Strong:</p>
					                <select class="form-control" name="select-1" id="strong">
					                	<option value="1">Yes</option>
					                	<option value="2">No</option>
					                </select>
								</div>
	            				<br>
				                <div class="selects-1">
									<p>New question:</p>
					                <select class="form-control" name="select-1" id="new-quest">
					                	<option value="1">Yes</option>
					                	<option value="2">No</option>
					                </select>
								</div><!--new Question -->
	            				<br>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
	            			
	            			<fieldset>
								<p>(2/12)</p>
	            				<h4>Aturo Roman <span class="step"></span></h4>
	            				<div class="form-group">
									<p>Kindly tick what you like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a1" id="a1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a2" id="a2"><span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a3" id="a3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a4" id="a4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a5" id="a5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a6" id="a6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a7" id="a7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a8" id="a8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a9" id="a9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a10" id="a10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a11" id="a11"> <span id="arrange">Option 11</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a12" id="a12"><span id="arrange">Option 12</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-1" value="a13" id="a13"> <span id="arrange">Option 13</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
	            			
	            			<fieldset>
								<p>(3/12)</p>
	            				<h4>Moscow <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b1" id="b1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b2" id="b2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b3" id="b3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b4" id="b4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b5" id="b5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b6" id="b6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b7" id="b7"><span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b8" id="b8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b9" id="b9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-2" value="b10" id="b10"><span id="arrange">Option 10</span>
									</label>
									<br>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
	                    	
	                    	<fieldset>
								<p>(4/12)</p>
	            				<h4>Raquel <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c1" id="c1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c2" id="c2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c3" id="c3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c4" id="c4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c5" id="c5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c6" id="c6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c7" id="c7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c8" id="c8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c9" id="c9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c10" id="c10"><span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c11" id="c11"> <span id="arrange">Option 11</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-3" value="c12" id="c12"> <span id="arrange">Option 12</span>
					                </label><!--new 1c checkbox -->
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
							
							<fieldset>
								<p>(5/12)</p>
	            				<h4>Alicia <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you don't like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d1" id="d1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d2" id="d2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d3" id="d3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d4" id="d4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d5" id="d5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d6" id="d6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d7" id="d7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d8" id="d8"><span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d9" id="d9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d10" id="d10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d11" id="d11"><span id="arrange">Option 11</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-4" value="d12" id="d12"> <span id="arrange">Option 12</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
							
							<fieldset>
								<p>(6/12)</p>
	            				<h4>Nairobi <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you don't like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e1" id="e1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e2" id="e2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e3" id="e3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e4" id="e4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e5" id="e5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e6" id="e6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e7" id="e7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e8" id="e8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e9" id="e9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e10" id="e10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e11" id="e11"><span id="arrange">Option 11</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-5" value="e12" id="e12"> <span id="arrange">Option 12</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
							
							<fieldset>
								<p>(7/12)</p>
	            				<h4>Professor <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you don't like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f1" id="f1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f2" id="f2"><span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f3"  id="f3"><span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f4" id="f4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f5" id="f5"><span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f6" id="f6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f7" id="f7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f8" id="f8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f9" id="f9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f10" id="f10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f11" id="f11"><span id="arrange">Option 11</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-6" value="f12" id="f12"><span id="arrange">Option 12</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
	            			
							<fieldset>
								<p>(8/12)</p>
	            				<h4>Sydney <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you don't like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g1" id="g1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g2" id="g2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g3" id="g3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g4" id="g4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g5" id="g5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g6" id="g6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g7" id="g7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g8" id="g8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g9" id="g9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g10" id="g10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g11" id="g11"> <span id="arrange">Option 11</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-7" value="g12" id="g12"> <span id="arrange">Option 12</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
							
							<fieldset>
								<p>(9/12)</p>
	            				<h4>Denver <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you don't like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h1" id="h1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h2" id="h2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h3" id="h3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h4" id="h4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h5" id="h5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h6" id="h6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h7" id="h7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h8" id="h8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h9" id="h9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h10" id="h10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-8" value="h11" id="h11"> <span id="arrange">Option 11</span>
									</label>
									<br>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
							
							<fieldset>
								<p>(10/12)</p>
	            				<h4>Tokyo<span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you don't like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i1" id="i1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i2" id="i2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i3" id="i3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i4" id="i4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i5" id="i5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i6" id="i6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i7" id="i7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i8" id="i8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i9" id="i9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-9" value="i10" id="i10"> <span id="arrange">Option 10</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
							
							<fieldset>
								<p>(11/12)</p>
	            				<h4>Helsinski <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you really like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j1" id="j1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j2" id="j2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j3" id="j3"> <span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j4" id="j4"> <span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j5" id="j5"><span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j6" id="j6"> <span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j7" id="j7"> <span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j8" id="j8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j9" id="j9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j10" id="j10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j11" id="j11"> <span id="arrange">Option 11</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-10" value="j12" id="j12"> <span id="arrange">Option 12</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn btn-next">Next <i class="fa fa-angle-right"></i></button>
	            			</fieldset>
							
							<fieldset>
								<p>(12/12)</p>
	            				<h4>Berlin <span class="step"></span></h4>
	            				<div class="form-group">
				                    <p>Kindly tick what you like</p>
				                </div>
								<br>
				                <div class="checkboxes-1">
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k1" id="k1"> <span id="arrange">Option 1</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k2" id="k2"> <span id="arrange">Option 2</span>
					                </label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k3" id="k3"><span id="arrange">Option 3</span>
									</label>
									<br>
					                <label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k4" id="k4"><span id="arrange">Option 4</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k5" id="k5"> <span id="arrange">Option 5</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k6" id="k6"><span id="arrange">Option 6</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k7" id="k7"><span id="arrange">Option 7</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k8" id="k8"> <span id="arrange">Option 8</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k9" id="k9"> <span id="arrange">Option 9</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k10" id="k10"> <span id="arrange">Option 10</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k11" id="k11"> <span id="arrange">Option 11</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k12" id="k12"> <span id="arrange">Option 12</span>
					                </label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k13" id="k13"> <span id="arrange">Option 13</span>
									</label>
									<br>
									<label class="checkbox-inline">
					                	<input type="checkbox" name="checkboxes-11" value="k14" id="k14"><span id="arrange">Option 14</span>
					                </label>
								</div>
	            				<br>
	            				<button type="button" class="btn btn-previous"><i class="fa fa-angle-left"></i> Previous</button>
	            				<button type="button" class="btn" id="reset">Reset</button>
	            				<button type="submit" class="btn" id="submit">Submit</button>
							</fieldset>
							<div id="myModal" class="modal">

								<!-- Modal content -->
								<div class="modal-content" style='width: 1500px; height: 800px;'>
								  <p id="modal-close">&times;<p>
								  <h3 id="modal-h3">Check</h3>
								  <div style="color:red; padding-right: 350px; float:right; padding-bottom:20px;">
									  <h3 id="recom" style="padding-bottom:20px;">Recommended</h3> <!--graph recommendation -->
									<p id="conText">Text A Show</p> <!--graph text -->
								  </div>
									<div style=" float:left;">
										<div id='chart_div' style='width: 900px; height: 500px;'></div>							  
								  		<button type="button" class="btn" id="continue">Continue <i class="fa fa-angle-right"></i></button> <!--graph continue button -->
									</div>
								</div>
							  
							</div>
	                    </form>
	                    <div id="myModal2" class="modal">

								<!-- Modal content -->
								<div class="modal-content" style='width: 700px; height: 500px;'>
								  <p id="modal-close">&times;<p>
								  <h3 id="modal-h3">Search Result</h3>
								  <div id="results"></div>
								</div>
							  
							</div>
	                </div>
	            </div>
			</div>
		</div>
		
		

		<!-- Javascript -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
        <script src="assets/js/jquery-1.11.1.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
		<script src="assets/js/jquery.backstretch.min.js"></script>
		<script src="assets/js/scripts.js"></script>
		<script src="assets/js/search.js"></script>
        
        <!--[if lt IE 10]>
            <script src="assets/js/placeholder.js"></script>
        <![endif]-->

    </body>

</html>
