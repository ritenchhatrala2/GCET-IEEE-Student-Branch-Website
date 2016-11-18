window.addEvent('domready', function(){

	// *************** SCROLLING NAVIGATION
	
	var scroll = new Fx.Scroll(window, {duration: 1000, wait: false, transition: Fx.Transitions.quadInOut});
	
	$$('.gotohome').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('start'); });
	$$('.gotowork').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('work'); });
	$$('.gotoabout').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('about'); });
	$$('.gotocontact').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('contact'); });
	$$('.gotoprint').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('print'); });
	$$('.gotoskills').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('skills'); });
	
	// *************** SHOW CASE
	
	// *************** PRINT DESIGN
	
	var mySlide1 = new Fx.Slide('showcase-psrfall', {duration: 400, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide2 = new Fx.Slide('showcase-psrspring', {duration: 500, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide7 = new Fx.Slide('showcase-ipi', {duration: 600, wait: false, transition: Fx.Transitions.quadInOut});
	   
	//initially hide everything
	//mySlide1.hide();
	mySlide2.hide();
	mySlide7.hide();
	
	$('phirhofall').addEvent('click', function(e){
		e = new Event(e);
		mySlide1.toggle();
		mySlide2.slideOut();
		mySlide7.slideOut();
		e.stop();
	});
	
	$('phirhospring').addEvent('click', function(e){
		e = new Event(e);
		mySlide1.slideOut();
		mySlide2.toggle();
		mySlide7.slideOut();
		e.stop();
	});
	
	$('ipi2009').addEvent('click', function(e){
		e = new Event(e);
		mySlide1.slideOut();
		mySlide2.slideOut();
		mySlide7.toggle();
		e.stop();
	});
	
	
	// *************** WEBSITE DESIGN
	
	var mySlide3 = new Fx.Slide('showcase1', {duration: 400, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide4 = new Fx.Slide('showcase2', {duration: 500, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide5 = new Fx.Slide('showcase3', {duration: 450, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide6 = new Fx.Slide('showcase4', {duration: 550, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide8 = new Fx.Slide('showcase5', {duration: 550, wait: false, transition: Fx.Transitions.quadInOut});
	   
	//initially hide everything
	//mySlide3.hide();
	mySlide4.hide();
	mySlide5.hide();
	mySlide6.hide();
	mySlide8.hide();
	
	$('portfolio-item-1').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideIn();
		mySlide4.slideOut();
		mySlide5.slideOut();
		mySlide6.slideOut();
		mySlide8.slideOut();
		e.stop();
	});
	
	$('portfolio-item-2').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideOut();
		mySlide4.slideIn();
		mySlide5.slideOut();
		mySlide6.slideOut();
		mySlide8.slideOut();
		e.stop();
	});
	
	$('portfolio-item-3').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideOut();
		mySlide4.slideOut();
		mySlide5.slideIn();
		mySlide6.slideOut();
		mySlide8.slideOut();
		e.stop();
	});
	
	$('portfolio-item-4').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideOut();
		mySlide4.slideOut();
		mySlide5.slideOut();
		mySlide6.slideIn();
		mySlide8.slideOut();
		e.stop();
	});
	
	$('portfolio-item-5').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideOut();
		mySlide4.slideOut();
		mySlide5.slideOut();
		mySlide6.slideOut();
		mySlide8.slideIn();
		e.stop();
	});
	
	$$('.close-print').each(function(el){
		el.addEvent('click', function(event) {
			event = new Event(event).stop();
			mySlide1.slideOut();
			mySlide2.slideOut();
			mySlide7.slideOut();
			mySlide9.slideOut();
		});
	});
	
	$$('.close-web').each(function(el){
		el.addEvent('click', function(event) {
			event = new Event(event).stop();
			mySlide3.slideOut();
			mySlide4.slideOut();
			mySlide5.slideOut();
			mySlide6.slideOut();
			mySlide8.slideOut();
		});
	});
	
	$$('.close-wtj').each(function(el){
		el.addEvent('click', function(event) {
			event = new Event(event).stop();
			mySlide10.slideOut();
			mySlide11.slideOut();
			mySlide12.slideOut();
			mySlide13.slideOut();
			
		});
	});
	//about
	var mySlide10 = new Fx.Slide('wtj_1', {duration: 400, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide11 = new Fx.Slide('wtj_2', {duration: 500, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide12 = new Fx.Slide('wtj_3', {duration: 600, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide13 = new Fx.Slide('wtj_4', {duration: 550, wait: false, transition: Fx.Transitions.quadInOut});
	   
	//initially hide everything
	mySlide10.hide();
	//mySlide11.hide();
	mySlide12.hide();
	mySlide13.hide();
	
	$('wtj_11').addEvent('click', function(e){
		e = new Event(e);
		mySlide10.toggle();
		mySlide11.slideOut();
		mySlide12.slideOut();
		mySlide13.slideOut();
		e.stop();
	});
	
	$('wtj_22').addEvent('click', function(e){
		e = new Event(e);
		mySlide10.slideOut();
		mySlide11.toggle();
		mySlide12.slideOut();
		mySlide13.slideOut();
		e.stop();
	});
	
	$('wtj_33').addEvent('click', function(e){
		e = new Event(e);
		mySlide10.slideOut();
		mySlide11.slideOut();
		mySlide12.toggle();
		mySlide13.slideOut();
		e.stop();
	});
	
	$('wtj_44').addEvent('click', function(e){
		e = new Event(e);
		mySlide10.slideOut();
		mySlide11.slideOut();
		mySlide12.slideOut();
		mySlide13.toggle();
		e.stop();
	});
	
	//about11111.....
	
	var mySlide20 = new Fx.Slide('ab_1', {duration: 400, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide21 = new Fx.Slide('ab_2', {duration: 500, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide22 = new Fx.Slide('ab_3', {duration: 600, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide23 = new Fx.Slide('ab_4', {duration: 550, wait: false, transition: Fx.Transitions.quadInOut});
	   
	//initially hide everything
	mySlide20.hide();
	//mySlide21.hide();
	mySlide22.hide();
	mySlide23.hide();
	
	$('ab_11').addEvent('click', function(e){
		e = new Event(e);
		mySlide20.toggle();
		mySlide21.slideOut();
		mySlide22.slideOut();
		mySlide23.slideOut();
		e.stop();
	});
	
	$('ab_22').addEvent('click', function(e){
		e = new Event(e);
		mySlide20.slideOut();
		mySlide21.toggle();
		mySlide22.slideOut();
		mySlide23.slideOut();
		e.stop();
	});
	
	$('ab_33').addEvent('click', function(e){
		e = new Event(e);
		mySlide20.slideOut();
		mySlide21.slideOut();
		mySlide22.toggle();
		mySlide23.slideOut();
		e.stop();
	});
	
	$('ab_44').addEvent('click', function(e){
		e = new Event(e);
		mySlide20.slideOut();
		mySlide21.slideOut();
		mySlide22.slideOut();
		mySlide23.toggle();
		e.stop();
	});


}); 	
