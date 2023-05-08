<?php include('tophead.php'); ?>
	
<title>Kubki z nadrukiem | Dombart</title>

<?php include('head.php'); ?>
<style>
input {width: 100%; height: 40px; margin-top: 10px; margin-bottom: 10px;}
@media (min-width: 1200px) and (min-height: 400px) {footer#footer {z-index: 999;}.sell {position:fixed; z-index: 3; display: block; width:33%; margin-bottom: 300px; background: #fff; padding-bottom: 20px;}}
tr td {height: 4em; vertical-align: middle;}
</style>
</head>

<body>
	
<?php include_once("analyticstracking.php") ?>
	
	
	<?php include('top.php'); ?>

	<header id="head" class="secondary"></header>

	<!-- container -->
	<div class="container">
		
		<ol class="breadcrumb">
			<li><a href="index.php">Strona Główna</a></li>
			<li><a href="index.php#przypinki">Oferta</a></li>
			<li class="active">Kubki</li>
		</ol>

		<div class="row">
			
			<!-- Sidebar -->
			<aside class="col-md-4 sidebar sidebar-left">
				
				
				
	<!-- Images used to open the lightbox -->
	
	
<div id=”content-desktop”>

<img src="assets/images/kubek_13.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow" alt="przykładowe zamówienie kubków" title="przykładowe zamówienie kubków" align="right" width="331px" class="prez" style="width:100%;max-width:300px">
	
<img src="assets/images/kubek_14.jpg" onclick="openModal();currentSlide(2)" class="hover-shadow" alt="przykładowe zamówienie kubków" title="przykładowe zamówienie kubków" align="right" width="331px" class="prez" style="width:100%;max-width:300px">
	
<img src="assets/images/kubek_15.jpg" onclick="openModal();currentSlide(3)" class="hover-shadow" alt="przykładowe zamówienie kubków" title="przykładowe zamówienie kubków" align="right" width="331px" class="prez" style="width:100%;max-width:300px">
		
<img src="assets/images/kubek_16.jpg" onclick="openModal();currentSlide(4)" class="hover-shadow" alt="przykładowe zamówienie kubków" title="przykładowe zamówienie kubków" align="right" width="331px" class="prez" style="width:100%;max-width:300px">
	
</div>
  



				
			

			</aside>
			<!-- /Sidebar -->
			<!-- Article main content -->
			<article class="col-md-8 maincontent">
				<header class="page-header">
					<h1 class="page-title">Kubki z własnym nadrukiem</h1>
				</header>
				
				
				
				<img src="assets/images/kubek_19.png" onclick="openModal();currentSlide(5)" class="hover-shadow" alt="Kubki z Twoim nadrukiem" title="Kubki z Twoim nadrukiem" align="right" width="331px" class="prez" style="width:100%;max-width:300px"/>
				
				<blockquote>Sprawdzony gadżet na każdą okazję.</blockquote>
				
				
				
				<p>Lorem ipsum</p>
				
				
				
				

				<h2>Cennik</h2>
				
				<table class="table table-hover">
				<thead>
					<tr>
						<th>ilość</th>
						<th>kubki z nadrukiem</th>
						
						<th></th>
					</tr>	
				</thead>
				<tbody>
					<tr>
						<td>1-20 szt.</td>
						<td>11,99 zł/szt</td>

								
					</tr>
					<tr>
						<td>21-50 szt.</td>
						<td>9,99 zł/szt</td>

							
					</tr>
					<tr>
						<td>51-100 szt.</td>
						<td>8,99 zł/szt</td>

								
					</tr>
					<tr>
						<td>od 101szt.</td>
						<td>do negocjacji</td>

								
					</tr>
					
				</tbody>
				</table>
				
				
				<p>Wszystkie podane ceny są kwotami brutto.</p>
				
				<img src="assets/images/kubek_12.png" onclick="openModal();currentSlide(6)" class="hover-shadow" alt="Kubki z nadrukiem od Dombart" title="Kubki z nadrukiem od Dombart" align="left" width="331px" class="prez" style="width:100%;max-width:300px"/>
				
				
				<p><strong>Czas realizacji uzależniony jest od wielkości zamówienia i złożoności projektu. Jest on ustalany indywidualnie przy każdym zamówieniu.</strong> </p>
				
				
				<p>&nbsp;</p>

				
				
				
				
				
				
			</article>
			<!-- /Article -->

		</div>
	</div>	<!-- /container -->
	
	
	
	
<!-- The Modal/Lightbox -->
<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 6</div>
      <img src="assets/images/kubek_13s.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 6</div>
      <img src="assets/images/kubek_14s.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 6</div>
      <img src="assets/images/kubek_15s.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">4 / 6</div>
      <img src="assets/images/kubek_16s.jpg" style="width:100%">
    </div>
    
    <div class="mySlides">
      <div class="numbertext">5 / 6</div>
      <img src="assets/images/kubek_19s.JPG" style="width:100%">
    </div>
    
    <div class="mySlides">
      <div class="numbertext">6 / 6</div>
      <img src="assets/images/kubek_12s.JPG" style="width:100%">
    </div>

    <!-- Next/previous controls -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <!-- Caption text -->
    <div class="caption-container">
      <p id="caption"></p>
    </div>
  </div>
</div>			
				
				
				
				
				<!-- Trigger the Modal -->


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- The Close Button -->
  <span class="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>
	

	<footer id="footer" class="top-space">

		<?php include('bottom.php'); ?>


</body>
</html>