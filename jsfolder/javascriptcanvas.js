/* © 2009 ROBO Design
 * http://www.robodesign.ro
 */

// Keep everything in anonymous function, called on window load.

var stage, label, shape, oldX, oldY, size, color, mousestart;
		
		function init() {
			stage = new createjs.Stage("imageView");
			stage.enableDOMEvents(true);
			label = new createjs.Text("finger paint", "24px Arial");
			label.x = label.y = 10;
			
			shape = new createjs.Shape();
			stage.addChild(shape, label);
			
			// set up our defaults:
			color = "#0FF";
			size = 10;
			
			// add handler for stage mouse events:
			stage.on("stagemousedown", function(event) {
			     mousestart = true;
                    stage.update();
            })                
			
            stage.on("stagemousemove",function(evt) {
				if (oldX && mousestart == true) {
					shape.graphics.beginStroke(color)
								  .setStrokeStyle(size, "round")
								  .moveTo(oldX, oldY)
								  .lineTo(evt.stageX, evt.stageY);
					stage.update();
				}
				oldX = evt.stageX;
				oldY = evt.stageY;
			 })
            stage.update();
            
			stage.on("stagemouseup", function(event) {
				mousestart = false;
                stage.update();
			})
			 
			
		    
		}






//if (window.addEventListener) {
//window.addEventListener('load', function () {
//  var canvas, context;
//
//  // Initialization sequence.
//  function init () {
//    // Find the canvas element.
//    canvas = document.getElementById('imageView');
//    if (!canvas) {
//      alert('Error: I cannot find the canvas element!');
//      return;
//    }
//
//    if (!canvas.getContext) {
//      alert('Error: no canvas.getContext!');
//      return;
//    }
//
//    // Get the 2D canvas context.
//    context = canvas.getContext('2d');
//    if (!context) {
//      alert('Error: failed to getContext!');
//      return;
//    }
//
//    // Attach the mousemove event handler.
//    canvas.addEventListener('mousemove', ev_mousemove, false);
//  }
//
//  // The mousemove event handler.
//  var started = false;
//  function ev_mousemove (ev) {
//    var x, y;
//
//    // Get the mouse position relative to the canvas element.
//    if (ev.layerX || ev.layerX == 0) { // Firefox
//      x = ev.layerX;
//      y = ev.layerY;
//    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
//      x = ev.offsetX;
//      y = ev.offsetY;
//    }
//
//    // The event handler works like a drawing pencil which tracks the mouse 
//    // movements. We start drawing a path made up of lines.
//    if (!started) {
//      context.beginPath();
//      context.moveTo(x, y);
//      started = true;
//    } else {
//      context.lineTo(x, y);
//      context.stroke();
//    }
//  }
//
//  init();
//}, false); }

// vim:set spell spl=en fo=wan1croql tw=80 ts=2 sw=2 sts=2 sta et ai cin fenc=utf-8 ff=unix: