$(document).ready(function(){
	
console.log(window.innerWidth);

/* 
	
	if (innerWidth >= mobileBreakpoint) {
		doDesktopStuff();
	} 
	
	if (innerWidth <= mobileBreakpoint) {
		doMobileStuff();
	}
	
*/

$('.MenuContainer').click(function(){
		$(this).toggleClass('change');
	});
	
$('.MenuContainer').click(function(){
		$('header').toggleClass('changeMenu');
	});	
	
$('.square-content-inner ~ button').click(function(){
		console.log();
		$(this).toggleClass('changeButton');
		$(this).parent().children().toggleClass('changeP')
	});		
	
	

$('#share button').on('click',function(){
  $(".alert-grey").fadeIn(200);
});

/*
$('.alert-ok').on('click',function(){
  $(".alert-grey").fadeOut(200);
});
*/

$('.close').on('click',function(){
  $(".alert-grey").fadeOut(200);
});

var rate = 5
var sharks = 0
var id = setInterval(function () {
 
  sharks = sharks + 1;
  console.log(sharks);
  
  var sharkString = String(sharks);
  
  if (sharkString.length === 1) {
	// We are in single digits // 
	
	$('#charSix h1').html(sharkString[0]);
  } 
  
  if (sharkString.length === 2) {
	// We are in double digits // 
	
	$('#charFive h1').html(sharkString[0]);
	$('#charSix h1').html(sharkString[1]);
  }
  
   if (sharkString.length === 3) {
	// 3 digits // 
	
	$('#charFour h1').html(sharkString[0]);
	$('#charFive h1').html(sharkString[1]);
	$('#charSix h1').html(sharkString[2]);
	
  }
  
  if (sharkString.length === 4) {
	// 4 digits // 
	
	$('#charThree h1').html(sharkString[0]);
	$('#charFour h1').html(sharkString[1]);
	$('#charFive h1').html(sharkString[2]);
	$('#charSix h1').html(sharkString[3]);
	
  }
  
  if (sharkString.length === 5) {
	// 5 digits // 
	
	$('#charTwo h1').html(sharkString[0]);
	$('#charThree h1').html(sharkString[1]);
	$('#charFour h1').html(sharkString[2]);
	$('#charFive h1').html(sharkString[3]);
	$('#charSix h1').html(sharkString[4]);
	
  }
  
  if (sharkString.length === 6) {
	// 6 digits // 
	
	$('#charOne h1').html(sharkString[0]);
	$('#charTwo h1').html(sharkString[1]);
	$('#charThree h1').html(sharkString[2]);
	$('#charFour h1').html(sharkString[3]);
	$('#charFive h1').html(sharkString[4]);
	$('#charSix h1').html(sharkString[5]);
	
  }

}, 1000 / rate)
	
	

	
});





//jQuery Methods go here...
	
/*
	.click() - Listener
	.hide()
	.show()
	.slideUp()
	.slideDown()
	.slideToggle()
	.children()
	.attribute()
*/