
// router

var Router=Backbone.Router.extend({
		routes:{
			// routes to info caption and mandalas in both styles
		'':'start',
		'info':'toInfo',
		'stage':'toGraph1',
		'forest':'toGraph2'
		
		},
		
		start: function(){			
			// at the beginning neither info caption nor graphics canvas are visible
			$('.invis').css('display','none');
			$('#graph').css('display','none');

		},
		
		toInfo: function(){
			// displays info caption on click
			$('.invis').fadeIn("slow");
		
		},
		toGraph1: function(){
			//initializes model with warm colors and hexagon when midnight fire style is chosen
				model.set('red','1');
				model.set('green','0.3');			
				model.set('blue','0.2');
				model.set('hedron','6');
				
			// sets hue range for random colors
				model.set('huemax','50');
				model.set('huemin','0');		
			
			// and displays the div with graphics to the user
				$('#graph').css('display','block');
				$('html,body').animate({scrollTop: $('#graph').offset().top},500);
		},
		toGraph2: function(){
			//for forest dawn cold colors are uploaded to the model when "forest dawn" link is clicked
				model.set('red','0.1');
				model.set('green','0.3');
				model.set('blue','1');
				model.set('hedron','8');
				
			// sets different hue range for random colors
				model.set('huemax','270');
				model.set('huemin','200');
				
			// and displays the div with graphics to the user
				$('#graph').css('display','block');
				$('html,body').animate({scrollTop: $('#graph').offset().top},500);			
		}
	
	
	});
	// instantiate
	var router=new Router;
	Backbone.history.start();
	
	
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////



	var Model = Backbone.Model.extend({
		defaults: {
			//empty. It is constructed by toGraph1 and toGraph2 functions
			}
	});
	//instance of the model
	var model = new Model;
	
	
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
	

	
	// when canvas is ready, resizes it so as to fit container-fluid on different screen sizes
	$('#graphic').ready(function(){

		//measures the size of container-fluid
			var wid=$('.container-fluid').width();
			var hei=$('.container-fluid').height();
		
		// resizes the canvas
			$('#graphic').attr('width',wid).attr('height',hei).attr('id','gresized');

		});


		
		
