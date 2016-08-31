


// define user interface functions

	
	function onMouseUp(event) {
		// draw big mandala with m==100 layers on click in one point
		if (event.downPoint == event.point){drawMandala(event.point,100);}
	};

	
		//draw a line of small mandalas with m==3 layers on drag
	function onMouseDrag(event) {drawMandala(event.point,3);}
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// mandala drawing function
	function drawMandala(Point,amountOfLayers){

	// draw a mandala layer  'amountOfLayers' times
			for (i=0; i<amountOfLayers; i++){
				//load from model and calculate color, 
				//number of angles and radius of the mandala's layer to be displayed
						var r=model.get('red') * Math.random();
						var g=model.get('green') * Math.random();
						var b=model.get('blue') * Math.random();
				// generate a color for the layer from data
						var color= new Color(r,g,b);		
				// load number of angles		
						var numberOfAngles = model.get('hedron');						
				// calculate radius which controls interlayer distance in all mandalas, constant for all of them in the project
						var radius = 3 * i;
						
					// create a new instance of RegularPolygon with previously calculated
					// parameters
						var newMandaLayer= new Path.RegularPolygon({
									center: Point, 
									sides: numberOfAngles,
									radius: radius
									});
					// and set its stroke color and width
						newMandaLayer.strokeColor = color;
						newMandaLayer.strokeWidth = 3;
					// color fades when further from mandala center
					// calculate opacity for this layer
						newMandaLayer.opacity = 0.6 * (1-i/amountOfLayers);
				}
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// animation code on each frame - mandala animations
	
	function onFrame(event){
		// mandalas are rotated and each layer  has a random color
		// 
		
		// roto is a parameter of rotation speed
		var roto = 0.2;
		// take all layers of all mandalas in an array
		var allMandalaLayers = project.activeLayer.children;
		
		// for each mandala layer do this code
			for (j=0; j < allMandalaLayers.length; j++){
				
			// calculate rotation parameters which make te rotation look good
			
			// rotoweighted means the further from mandala center, the higher rotation speed
			// whirl makes mandala rotation direction reverse not far from center 
				var rotoweighted = roto*j;
				var whirl = 1+roto-rotoweighted;
				
			// rotate one of layers by 'whirl' degrees
				allMandalaLayers[j].rotate(whirl);		
				
				
			// now randomized color for the layer
				// take color hue range from the model
				var humax = model.get('huemax');
				var humin = model.get('huemin');
				
				//and calculate a new color for the layer
				allMandalaLayers[j].strokeColor.hue = humin+(humax-humin) * Math.random();
			
			}
	
	
	
	
	}
	