/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

// Disclaimer for readers: I tried my best to figure out how this worked.
// I don't know if I actually got it right, but I added some comments for future readers.

// This is the main function that creates the particle effect.
var pJS = function (tag_id, params) {
	var canvas_el = document.querySelector(
		'#' + tag_id + ' > .particles-js-canvas-el'
	);

	/* particles.js variables with default values */
	this.pJS = {
		canvas: {
			el: canvas_el, // Canvas element
			w: canvas_el.offsetWidth, // Canvas width
			h: canvas_el.offsetHeight // Canvas height
		},
		particles: {
			number: {
				value: 400, // Number of particles
				density: {
					enable: true, // Enable density-based particle count
					value_area: 800 // Area density value
				}
			},
			color: {
				value: '#fff' // Particle color
			},
			shape: {
				type: 'circle', // Particle shape
				stroke: {
					width: 0, // Stroke width
					color: '#ff0000' // Stroke color
				},
				polygon: {
					nb_sides: 5 // Number of sides for polygon shapes
				},
				image: {
					src: '', // Image source
					width: 100, // Image width
					height: 100 // Image height
				}
			},
			opacity: {
				value: 1, // Particle opacity
				random: false, // Randomize opacity
				anim: {
					enable: false, // Enable opacity animation
					speed: 2, // Animation speed
					opacity_min: 0, // Minimum opacity value
					sync: false // Synchronize animation
				}
			},
			size: {
				value: 20, // Particle size
				random: false, // Randomize size
				anim: {
					enable: false, // Enable size animation
					speed: 20, // Animation speed
					size_min: 0, // Minimum size value
					sync: false // Synchronize animation
				}
			},
			line_linked: {
				enable: true, // Enable line linking
				distance: 100, // Distance for line linking
				color: '#fff', // Line color
				opacity: 1, // Line opacity
				width: 1 // Line width
			},
			move: {
				enable: true, // Enable particle movement
				speed: 2, // Movement speed
				direction: 'none', // Movement direction
				random: false, // Randomize movement
				straight: false, // Straight movement
				out_mode: 'out', // Out-of-bounds behavior
				bounce: false, // Bounce off canvas edges
				attract: {
					enable: false, // Enable attraction between particles
					rotateX: 3000, // Attraction rotation on x-axis
					rotateY: 3000 // Attraction rotation on y-axis
				}
			},
			array: [] // Array to store particles
		},
		interactivity: {
			detect_on: 'canvas', // Event detection area
			events: {
				onhover: {
					enable: true, // Enable hover interaction
					mode: 'grab' // Hover interaction mode
				},
				onclick: {
					enable: true, // Enable click interaction
					mode: 'push' // Click interaction mode
				},
				resize: true // Enable resize event
			},
			modes: {
				grab: {
					distance: 100, // Distance for grab interaction
					line_linked: {
						opacity: 1 // Line opacity for grab interaction
					}
				},
				bubble: {
					distance: 200, // Distance for bubble interaction
					size: 80, // Bubble size
					duration: 0.4 // Bubble duration
				},
				repulse: {
					distance: 200, // Distance for repulse interaction
					duration: 0.4 // Repulse duration
				},
				push: {
					particles_nb: 4 // Number of particles to push on click
				},
				remove: {
					particles_nb: 2 // Number of particles to remove on click
				}
			},
			mouse: {} // Mouse interaction object
		},
		retina_detect: false, // Detect high-resolution displays
		fn: {
			interact: {}, // Interaction functions
			modes: {}, // Interaction mode functions
			vendors: {} // Vendor-specific functions
		},
		tmp: {} // Temporary variables
	};

	var pJS = this.pJS;

	/* params settings */
	if (params) {
		Object.deepExtend(pJS, params); // Extend default settings with user-defined parameters
	}

	pJS.tmp.obj = {
		size_value: pJS.particles.size.value,
		size_anim_speed: pJS.particles.size.anim.speed,
		move_speed: pJS.particles.move.speed,
		line_linked_distance: pJS.particles.line_linked.distance,
		line_linked_width: pJS.particles.line_linked.width,
		mode_grab_distance: pJS.interactivity.modes.grab.distance,
		mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
		mode_bubble_size: pJS.interactivity.modes.bubble.size,
		mode_repulse_distance: pJS.interactivity.modes.repulse.distance
	};

	pJS.fn.retinaInit = function () {
		// Adjust settings for high-resolution displays
		if (pJS.retina_detect && window.devicePixelRatio > 1) {
			pJS.canvas.pxratio = window.devicePixelRatio;
			pJS.tmp.retina = true;
		} else {
			pJS.canvas.pxratio = 1;
			pJS.tmp.retina = false;
		}

		pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
		pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

		pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
		pJS.particles.size.anim.speed =
			pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
		pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
		pJS.particles.line_linked.distance =
			pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
		pJS.interactivity.modes.grab.distance =
			pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
		pJS.interactivity.modes.bubble.distance =
			pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
		pJS.particles.line_linked.width =
			pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
		pJS.interactivity.modes.bubble.size =
			pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
		pJS.interactivity.modes.repulse.distance =
			pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
	};

	/* ---------- pJS functions - canvas ------------ */

	pJS.fn.canvasInit = function () {
		// Initialize the canvas context
		pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
	};

	pJS.fn.canvasSize = function () {
		// Set canvas dimensions
		pJS.canvas.el.width = pJS.canvas.w;
		pJS.canvas.el.height = pJS.canvas.h;

		// Handle resize event if enabled
		if (pJS && pJS.interactivity.events.resize) {
			window.addEventListener('resize', function () {
				pJS.canvas.w = pJS.canvas.el.offsetWidth;
				pJS.canvas.h = pJS.canvas.el.offsetHeight;

				// Adjust canvas dimensions for retina displays
				if (pJS.tmp.retina) {
					pJS.canvas.w *= pJS.canvas.pxratio;
					pJS.canvas.h *= pJS.canvas.pxratio;
				}

				pJS.canvas.el.width = pJS.canvas.w;
				pJS.canvas.el.height = pJS.canvas.h;

				// Repaint canvas if particle movement is disabled
				if (!pJS.particles.move.enable) {
					pJS.fn.particlesEmpty();
					pJS.fn.particlesCreate();
					pJS.fn.particlesDraw();
					pJS.fn.vendors.densityAutoParticles();
				}

				// Adjust particle density
				pJS.fn.vendors.densityAutoParticles();
			});
		}
	};

	pJS.fn.canvasPaint = function () {
		// Fill the canvas with a background color
		pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
	};

	pJS.fn.canvasClear = function () {
		// Clear the canvas
		pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
	};

	/* --------- pJS functions - particles ----------- */

	pJS.fn.particle = function (color, opacity, position) {
		// Create a new particle object
		/* size */
		this.radius =
			(pJS.particles.size.random ? Math.random() : 1) *
			pJS.particles.size.value;
		if (pJS.particles.size.anim.enable) {
			this.size_status = false; // Flag for size animation status
			this.vs = pJS.particles.size.anim.speed / 100;
			if (!pJS.particles.size.anim.sync) {
				this.vs = this.vs * Math.random();
			}
		}

		/* position */
		this.x = position ? position.x : Math.random() * pJS.canvas.w;
		this.y = position ? position.y : Math.random() * pJS.canvas.h;

		// Ensure particle stays within canvas bounds
		if (this.x > pJS.canvas.w - this.radius * 2)
			this.x = this.x - this.radius;
		else if (this.x < this.radius * 2) this.x = this.x + this.radius;
		if (this.y > pJS.canvas.h - this.radius * 2)
			this.y = this.y - this.radius;
		else if (this.y < this.radius * 2) this.y = this.y + this.radius;

		// Prevent particle overlap
		if (pJS.particles.move.bounce) {
			pJS.fn.vendors.checkOverlap(this, position);
		}

		/* color */
		this.color = {};
		if (typeof color.value == 'object') {
			// Handle color value as an array or object
			if (color.value instanceof Array) {
				var color_selected =
					color.value[
						Math.floor(
							Math.random() * pJS.particles.color.value.length
						)
					];
				this.color.rgb = hexToRgb(color_selected);
			} else {
				if (
					color.value.r != undefined &&
					color.value.g != undefined &&
					color.value.b != undefined
				) {
					this.color.rgb = {
						r: color.value.r,
						g: color.value.g,
						b: color.value.b
					};
				}
				if (
					color.value.h != undefined &&
					color.value.s != undefined &&
					color.value.l != undefined
				) {
					this.color.hsl = {
						h: color.value.h,
						s: color.value.s,
						l: color.value.l
					};
				}
			}
		} else if (color.value == 'random') {
			// Generate random RGB color
			this.color.rgb = {
				r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
				g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
				b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
			};
		} else if (typeof color.value == 'string') {
			this.color = color; // Store color as a string
			this.color.rgb = hexToRgb(this.color.value); // Convert hex to RGB
		}

		/* opacity */
		this.opacity =
			(pJS.particles.opacity.random ? Math.random() : 1) *
			pJS.particles.opacity.value;
		if (pJS.particles.opacity.anim.enable) {
			this.opacity_status = false; // Flag for opacity animation status
			this.vo = pJS.particles.opacity.anim.speed / 100;
			if (!pJS.particles.opacity.anim.sync) {
				this.vo = this.vo * Math.random();
			}
		}

		/* animation - velocity for speed */
		var velbase = {};
		switch (pJS.particles.move.direction) {
			// Set velocity based on movement direction
			case 'top':
				velbase = { x: 0, y: -1 };
				break;
			case 'top-right':
				velbase = { x: 0.5, y: -0.5 };
				break;
			case 'right':
				velbase = { x: 1, y: -0 };
				break;
			case 'bottom-right':
				velbase = { x: 0.5, y: 0.5 };
				break;
			case 'bottom':
				velbase = { x: 0, y: 1 };
				break;
			case 'bottom-left':
				velbase = { x: -0.5, y: 1 };
				break;
			case 'left':
				velbase = { x: -1, y: 0 };
				break;
			case 'top-left':
				velbase = { x: -0.5, y: -0.5 };
				break;
			default:
				velbase = { x: 0, y: 0 };
				break;
		}

		if (pJS.particles.move.straight) {
			// Straight movement
			this.vx = velbase.x;
			this.vy = velbase.y;
			if (pJS.particles.move.random) {
				this.vx = this.vx * Math.random();
				this.vy = this.vy * Math.random();
			}
		} else {
			// Random movement
			this.vx = velbase.x + Math.random() - 0.5;
			this.vy = velbase.y + Math.random() - 0.5;
		}

		this.vx_i = this.vx;
		this.vy_i = this.vy;

		/* if shape is image */

		var shape_type = pJS.particles.shape.type;
		if (typeof shape_type == 'object') {
			// Handle shape type as an array or object
			if (shape_type instanceof Array) {
				var shape_selected =
					shape_type[Math.floor(Math.random() * shape_type.length)];
				this.shape = shape_selected;
			}
		} else {
			this.shape = shape_type;
		}

		if (this.shape == 'image') {
			var sh = pJS.particles.shape;
			// Set up image properties
			this.img = {
				src: sh.image.src,
				ratio: sh.image.width / sh.image.height
			};
			if (!this.img.ratio) this.img.ratio = 1;
			if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
				pJS.fn.vendors.createSvgImg(this);
				if (pJS.tmp.pushing) {
					this.img.loaded = false;
				}
			}
		}
	};

	pJS.fn.particle.prototype.draw = function () {
		// Draw the particle on the canvas
		var p = this;

		// Determine radius and opacity based on interactions
		if (p.radius_bubble != undefined) {
			var radius = p.radius_bubble;
		} else {
			var radius = p.radius;
		}

		if (p.opacity_bubble != undefined) {
			var opacity = p.opacity_bubble;
		} else {
			var opacity = p.opacity;
		}

		// Set particle color
		if (p.color.rgb) {
			var color_value =
				'rgba(' +
				p.color.rgb.r +
				',' +
				p.color.rgb.g +
				',' +
				p.color.rgb.b +
				',' +
				opacity +
				')';
		} else {
			var color_value =
				'hsla(' +
				p.color.hsl.h +
				',' +
				p.color.hsl.s +
				'%,' +
				p.color.hsl.l +
				'%,' +
				opacity +
				')';
		}

		pJS.canvas.ctx.fillStyle = color_value;
		pJS.canvas.ctx.beginPath();

		// Draw the particle based on its shape
		switch (p.shape) {
			case 'circle':
				pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
				break;

			case 'edge':
				pJS.canvas.ctx.rect(
					p.x - radius,
					p.y - radius,
					radius * 2,
					radius * 2
				);
				break;

			case 'triangle':
				pJS.fn.vendors.drawShape(
					pJS.canvas.ctx,
					p.x - radius,
					p.y + radius / 1.66,
					radius * 2,
					3,
					2
				);
				break;

			case 'polygon':
				pJS.fn.vendors.drawShape(
					pJS.canvas.ctx,
					p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
					p.y - radius / (2.66 / 3.5), // startY
					(radius * 2.66) /
						(pJS.particles.shape.polygon.nb_sides / 3), // sideLength
					pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
					1 // sideCountDenominator
				);
				break;

			case 'star':
				pJS.fn.vendors.drawShape(
					pJS.canvas.ctx,
					p.x -
						(radius * 2) /
							(pJS.particles.shape.polygon.nb_sides / 4), // startX
					p.y - radius / ((2 * 2.66) / 3.5), // startY
					(radius * 2 * 2.66) /
						(pJS.particles.shape.polygon.nb_sides / 3), // sideLength
					pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
					2 // sideCountDenominator
				);
				break;

			case 'image':
				function draw() {
					// Draw the image particle
					pJS.canvas.ctx.drawImage(
						img_obj,
						p.x - radius,
						p.y - radius,
						radius * 2,
						(radius * 2) / p.img.ratio
					);
				}

				if (pJS.tmp.img_type == 'svg') {
					var img_obj = p.img.obj;
				} else {
					var img_obj = pJS.tmp.img_obj;
				}

				if (img_obj) {
					draw();
				}

				break;
		}

		pJS.canvas.ctx.closePath();

		// Draw stroke if enabled
		if (pJS.particles.shape.stroke.width > 0) {
			pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
			pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
			pJS.canvas.ctx.stroke();
		}

		pJS.canvas.ctx.fill();
	};

	pJS.fn.particlesCreate = function () {
		// Create particles
		for (var i = 0; i < pJS.particles.number.value; i++) {
			pJS.particles.array.push(
				new pJS.fn.particle(
					pJS.particles.color,
					pJS.particles.opacity.value
				)
			);
		}
	};

	pJS.fn.particlesUpdate = function () {
		// Update particle properties
		for (var i = 0; i < pJS.particles.array.length; i++) {
			/* the particle */
			var p = pJS.particles.array[i];

			/* move the particle */
			if (pJS.particles.move.enable) {
				var ms = pJS.particles.move.speed / 2;
				p.x += p.vx * ms;
				p.y += p.vy * ms;
			}

			/* change opacity status */
			if (pJS.particles.opacity.anim.enable) {
				// Update opacity based on animation settings
				if (p.opacity_status == true) {
					if (p.opacity >= pJS.particles.opacity.value)
						p.opacity_status = false;
					p.opacity += p.vo;
				} else {
					if (p.opacity <= pJS.particles.opacity.anim.opacity_min)
						p.opacity_status = true;
					p.opacity -= p.vo;
				}
				if (p.opacity < 0) p.opacity = 0;
			}

			/* change size */
			if (pJS.particles.size.anim.enable) {
				// Update size based on animation settings
				if (p.size_status == true) {
					if (p.radius >= pJS.particles.size.value)
						p.size_status = false;
					p.radius += p.vs;
				} else {
					if (p.radius <= pJS.particles.size.anim.size_min)
						p.size_status = true;
					p.radius -= p.vs;
				}
				if (p.radius < 0) p.radius = 0;
			}

			// Keep particle within canvas bounds
			if (pJS.particles.move.out_mode == 'bounce') {
				var new_pos = {
					x_left: p.radius,
					x_right: pJS.canvas.w,
					y_top: p.radius,
					y_bottom: pJS.canvas.h
				};
			} else {
				var new_pos = {
					x_left: -p.radius,
					x_right: pJS.canvas.w + p.radius,
					y_top: -p.radius,
					y_bottom: pJS.canvas.h + p.radius
				};
			}

			if (p.x - p.radius > pJS.canvas.w) {
				p.x = new_pos.x_left;
				p.y = Math.random() * pJS.canvas.h;
			} else if (p.x + p.radius < 0) {
				p.x = new_pos.x_right;
				p.y = Math.random() * pJS.canvas.h;
			}
			if (p.y - p.radius > pJS.canvas.h) {
				p.y = new_pos.y_top;
				p.x = Math.random() * pJS.canvas.w;
			} else if (p.y + p.radius < 0) {
				p.y = new_pos.y_bottom;
				p.x = Math.random() * pJS.canvas.w;
			}

			/* out of canvas modes */
			switch (pJS.particles.move.out_mode) {
				case 'bounce':
					// Bounce particles off canvas edges
					if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
					else if (p.x - p.radius < 0) p.vx = -p.vx;
					if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
					else if (p.y - p.radius < 0) p.vy = -p.vy;
					break;
			}

			// Handle interaction events
			if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
				pJS.fn.modes.grabParticle(p);
			}

			if (
				isInArray('bubble', pJS.interactivity.events.onhover.mode) ||
				isInArray('bubble', pJS.interactivity.events.onclick.mode)
			) {
				pJS.fn.modes.bubbleParticle(p);
			}

			if (
				isInArray('repulse', pJS.interactivity.events.onhover.mode) ||
				isInArray('repulse', pJS.interactivity.events.onclick.mode)
			) {
				pJS.fn.modes.repulseParticle(p);
			}

			// Handle interactions between particles
			if (
				pJS.particles.line_linked.enable ||
				pJS.particles.move.attract.enable
			) {
				for (var j = i + 1; j < pJS.particles.array.length; j++) {
					var p2 = pJS.particles.array[j];

					// Connect particles with lines
					if (pJS.particles.line_linked.enable) {
						pJS.fn.interact.linkParticles(p, p2);
					}

					// Apply attraction forces
					if (pJS.particles.move.attract.enable) {
						pJS.fn.interact.attractParticles(p, p2);
					}

					// Handle particle collisions
					if (pJS.particles.move.bounce) {
						pJS.fn.interact.bounceParticles(p, p2);
					}
				}
			}
		}
	};

	pJS.fn.particlesDraw = function () {
		// Draw all particles on the canvas
		/* clear canvas */
		pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

		/* update each particles param */
		pJS.fn.particlesUpdate();

		/* draw each particle */
		for (var i = 0; i < pJS.particles.array.length; i++) {
			var p = pJS.particles.array[i];
			p.draw();
		}
	};

	pJS.fn.particlesEmpty = function () {
		// Clear the particle array
		pJS.particles.array = [];
	};

	pJS.fn.particlesRefresh = function () {
		// Reset and restart particle animation
		/* init all */
		cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
		cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
		pJS.tmp.source_svg = undefined;
		pJS.tmp.img_obj = undefined;
		pJS.tmp.count_svg = 0;
		pJS.fn.particlesEmpty();
		pJS.fn.canvasClear();

		/* restart */
		pJS.fn.vendors.start();
	};

	/* ---------- pJS functions - particles interaction ------------ */

	pJS.fn.interact.linkParticles = function (p1, p2) {
		// Draw lines between connected particles
		var dx = p1.x - p2.x,
			dy = p1.y - p2.y,
			dist = Math.sqrt(dx * dx + dy * dy);

		/* draw a line between p1 and p2 if the distance between them is under the config distance */
		if (dist <= pJS.particles.line_linked.distance) {
			var opacity_line =
				pJS.particles.line_linked.opacity -
				dist /
					(1 / pJS.particles.line_linked.opacity) /
					pJS.particles.line_linked.distance;

			if (opacity_line > 0) {
				/* style */
				var color_line = pJS.particles.line_linked.color_rgb_line;
				pJS.canvas.ctx.strokeStyle =
					'rgba(' +
					color_line.r +
					',' +
					color_line.g +
					',' +
					color_line.b +
					',' +
					opacity_line +
					')';
				pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
				//pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

				/* path */
				pJS.canvas.ctx.beginPath();
				pJS.canvas.ctx.moveTo(p1.x, p1.y);
				pJS.canvas.ctx.lineTo(p2.x, p2.y);
				pJS.canvas.ctx.stroke();
				pJS.canvas.ctx.closePath();
			}
		}
	};

	pJS.fn.interact.attractParticles = function (p1, p2) {
		// Apply attraction forces between particles
		/* condensed particles */
		var dx = p1.x - p2.x,
			dy = p1.y - p2.y,
			dist = Math.sqrt(dx * dx + dy * dy);

		if (dist <= pJS.particles.line_linked.distance) {
			var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
				ay = dy / (pJS.particles.move.attract.rotateY * 1000);

			p1.vx -= ax;
			p1.vy -= ay;

			p2.vx += ax;
			p2.vy += ay;
		}
	};

	pJS.fn.interact.bounceParticles = function (p1, p2) {
		// Handle particle collisions
		var dx = p1.x - p2.x,
			dy = p1.y - p2.y,
			dist = Math.sqrt(dx * dx + dy * dy),
			dist_p = p1.radius + p2.radius;

		if (dist <= dist_p) {
			p1.vx = -p1.vx;
			p1.vy = -p1.vy;

			p2.vx = -p2.vx;
			p2.vy = -p2.vy;
		}
	};

	/* ---------- pJS functions - modes events ------------ */

	pJS.fn.modes.pushParticles = function (nb, pos) {
		// Push new particles to the array
		pJS.tmp.pushing = true;

		for (var i = 0; i < nb; i++) {
			pJS.particles.array.push(
				new pJS.fn.particle(
					pJS.particles.color,
					pJS.particles.opacity.value,
					{
						x: pos ? pos.pos_x : Math.random() * pJS.canvas.w,
						y: pos ? pos.pos_y : Math.random() * pJS.canvas.h
					}
				)
			);
			if (i == nb - 1) {
				if (!pJS.particles.move.enable) {
					pJS.fn.particlesDraw();
				}
				pJS.tmp.pushing = false;
			}
		}
	};

	pJS.fn.modes.removeParticles = function (nb) {
		// Remove particles from the array
		pJS.particles.array.splice(0, nb);
		if (!pJS.particles.move.enable) {
			pJS.fn.particlesDraw();
		}
	};

	pJS.fn.modes.bubbleParticle = function (p) {
		// Handle bubble interaction
		/* on hover event */
		if (
			pJS.interactivity.events.onhover.enable &&
			isInArray('bubble', pJS.interactivity.events.onhover.mode)
		) {
			var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
				dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
				dist_mouse = Math.sqrt(
					dx_mouse * dx_mouse + dy_mouse * dy_mouse
				),
				ratio =
					1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

			function init() {
				// Reset bubble effects
				p.opacity_bubble = p.opacity;
				p.radius_bubble = p.radius;
			}

			/* mousemove - check ratio */
			if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
				// If ratio is positive (within the bubble distance) and the interactivity status is 'mousemove'
				if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {
					/* size */
					// Adjust particle size if the bubble size is different from the default particle size
					if (
						pJS.interactivity.modes.bubble.size !=
						pJS.particles.size.value
					) {
						// If bubble size is larger than default size
						if (
							pJS.interactivity.modes.bubble.size >
							pJS.particles.size.value
						) {
							// Calculate the new bubble radius based on the ratio
							var size =
								p.radius +
								pJS.interactivity.modes.bubble.size * ratio;
							// Only apply the new radius if it's non-negative
							if (size >= 0) {
								p.radius_bubble = size;
							}
						} else {
							// If bubble size is smaller than default size
							var dif =
									p.radius -
									pJS.interactivity.modes.bubble.size,
								size = p.radius - dif * ratio;
							// Apply the new radius if it's positive, otherwise set it to 0
							if (size > 0) {
								p.radius_bubble = size;
							} else {
								p.radius_bubble = 0;
							}
						}
					}

					/* opacity */
					// Adjust particle opacity if the bubble opacity is different from the default particle opacity
					if (
						pJS.interactivity.modes.bubble.opacity !=
						pJS.particles.opacity.value
					) {
						// If bubble opacity is larger than default opacity
						if (
							pJS.interactivity.modes.bubble.opacity >
							pJS.particles.opacity.value
						) {
							// Calculate the new bubble opacity based on the ratio
							var opacity =
								pJS.interactivity.modes.bubble.opacity * ratio;
							// Apply the new opacity if it's greater than the current particle opacity and less than or equal to the bubble opacity
							if (
								opacity > p.opacity &&
								opacity <=
									pJS.interactivity.modes.bubble.opacity
							) {
								p.opacity_bubble = opacity;
							}
						} else {
							// If bubble opacity is smaller than default opacity
							var opacity =
								p.opacity -
								(pJS.particles.opacity.value -
									pJS.interactivity.modes.bubble.opacity) *
									ratio;
							// Apply the new opacity if it's less than the current particle opacity and greater than or equal to the bubble opacity
							if (
								opacity < p.opacity &&
								opacity >=
									pJS.interactivity.modes.bubble.opacity
							) {
								p.opacity_bubble = opacity;
							}
						}
					}
				}
			} else {
				// Reset the particle properties to their initial values
				init();
			}

			/* mouseleave */
			// Reset the particle properties to their initial values if the mouse leaves the canvas
			if (pJS.interactivity.status == 'mouseleave') {
				init();
			}
		} else if (
			/* on click event */
			// If click events are enabled and the bubble mode is selected
			pJS.interactivity.events.onclick.enable &&
			isInArray('bubble', pJS.interactivity.events.onclick.mode)
		) {
			// Check if the bubble click flag is active
			if (pJS.tmp.bubble_clicking) {
				// Calculate the distance between the particle and the click position
				var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
					dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
					dist_mouse = Math.sqrt(
						dx_mouse * dx_mouse + dy_mouse * dy_mouse
					),
					// Calculate the time elapsed since the click
					time_spent =
						(new Date().getTime() -
							pJS.interactivity.mouse.click_time) /
						1000;

				// Set the bubble duration end flag if the time spent is greater than the bubble duration
				if (time_spent > pJS.interactivity.modes.bubble.duration) {
					pJS.tmp.bubble_duration_end = true;
				}

				// Deactivate the bubble click flag if the time spent is greater than twice the bubble duration
				if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
					pJS.tmp.bubble_clicking = false;
					pJS.tmp.bubble_duration_end = false;
				}
			}

			// Helper function to process bubble effects on particle properties
			function process(
				bubble_param,
				particles_param,
				p_obj_bubble,
				p_obj,
				id
			) {
				// If the bubble parameter is different from the default particle parameter
				if (bubble_param != particles_param) {
					// If the bubble duration hasn't ended
					if (!pJS.tmp.bubble_duration_end) {
						// If the particle is within the bubble distance
						if (
							dist_mouse <=
							pJS.interactivity.modes.bubble.distance
						) {
							// Use the bubble object if available, otherwise use the particle object
							if (p_obj_bubble != undefined)
								var obj = p_obj_bubble;
							else var obj = p_obj;
							// If the current object value is different from the bubble parameter
							if (obj != bubble_param) {
								// Interpolate the value based on the time spent
								var value =
									p_obj -
									(time_spent * (p_obj - bubble_param)) /
										pJS.interactivity.modes.bubble.duration;
								// Apply the new value to the corresponding particle property
								if (id == 'size') p.radius_bubble = value;
								if (id == 'opacity') p.opacity_bubble = value;
							}
						} else {
							// Reset the bubble property if the particle is outside the bubble distance
							if (id == 'size') p.radius_bubble = undefined;
							if (id == 'opacity') p.opacity_bubble = undefined;
						}
					} else {
						// If the bubble duration has ended
						if (p_obj_bubble != undefined) {
							// Interpolate the value based on the time spent and calculate the difference between the bubble parameter and the current value
							var value_tmp =
									p_obj -
									(time_spent * (p_obj - bubble_param)) /
										pJS.interactivity.modes.bubble.duration,
								dif = bubble_param - value_tmp;
							// Calculate the final value
							value = bubble_param + dif;
							// Apply the new value to the corresponding particle property
							if (id == 'size') p.radius_bubble = value;
							if (id == 'opacity') p.opacity_bubble = value;
						}
					}
				}
			}

			// If the bubble click flag is active, process the bubble effects
			if (pJS.tmp.bubble_clicking) {
				/* size */
				// Process the bubble size effect
				process(
					pJS.interactivity.modes.bubble.size,
					pJS.particles.size.value,
					p.radius_bubble,
					p.radius,
					'size'
				);
				/* opacity */
				// Process the bubble opacity effect
				process(
					pJS.interactivity.modes.bubble.opacity,
					pJS.particles.opacity.value,
					p.opacity_bubble,
					p.opacity,
					'opacity'
				);
			}
		}
	};

	pJS.fn.modes.repulseParticle = function (p) {
		// If hover events are enabled and the repulse mode is selected and the mouse is moving
		if (
			pJS.interactivity.events.onhover.enable &&
			isInArray('repulse', pJS.interactivity.events.onhover.mode) &&
			pJS.interactivity.status == 'mousemove'
		) {
			// Calculate the distance between the particle and the mouse position
			var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
				dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
				dist_mouse = Math.sqrt(
					dx_mouse * dx_mouse + dy_mouse * dy_mouse
				);

			// Calculate the normalized vector pointing from the particle to the mouse
			var normVec = {
					x: dx_mouse / dist_mouse,
					y: dy_mouse / dist_mouse
				},
				// Get the repulse distance
				repulseRadius = pJS.interactivity.modes.repulse.distance,
				// Define a velocity value
				velocity = 100,
				// Calculate the repulse factor based on the distance and repulse radius
				repulseFactor = clamp(
					(1 / repulseRadius) *
						(-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) *
						repulseRadius *
						velocity,
					0,
					50
				);

			// Calculate the new particle position based on the repulse factor and normalized vector
			var pos = {
				x: p.x + normVec.x * repulseFactor,
				y: p.y + normVec.y * repulseFactor
			};

			// Apply the new position based on the particle out-of-bounds mode
			if (pJS.particles.move.out_mode == 'bounce') {
				// If the new position is within the canvas bounds, update the particle position
				if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w)
					p.x = pos.x;
				if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h)
					p.y = pos.y;
			} else {
				// Directly apply the new position
				p.x = pos.x;
				p.y = pos.y;
			}
		} else if (
			// If click events are enabled and the repulse mode is selected
			pJS.interactivity.events.onclick.enable &&
			isInArray('repulse', pJS.interactivity.events.onclick.mode)
		) {
			// Check if the repulse animation is finished
			if (!pJS.tmp.repulse_finish) {
				// Increment the repulse count
				pJS.tmp.repulse_count++;
				// Set the repulse finished flag when all particles have been repulsed
				if (pJS.tmp.repulse_count == pJS.particles.array.length) {
					pJS.tmp.repulse_finish = true;
				}
			}

			// If the repulse click flag is active
			if (pJS.tmp.repulse_clicking) {
				// Calculate the repulse radius
				var repulseRadius = Math.pow(
					pJS.interactivity.modes.repulse.distance / 6,
					3
				);

				// Calculate the distance between the particle and the click position
				var dx = pJS.interactivity.mouse.click_pos_x - p.x,
					dy = pJS.interactivity.mouse.click_pos_y - p.y,
					d = dx * dx + dy * dy;

				// Calculate the repulse force
				var force = (-repulseRadius / d) * 1;

				// Helper function to apply the repulse force to the particle
				function process() {
					// Calculate the angle between the particle and the click position
					var f = Math.atan2(dy, dx);
					// Update the particle velocity based on the force and angle
					p.vx = force * Math.cos(f);
					p.vy = force * Math.sin(f);

					// Apply the new velocity based on the particle out-of-bounds mode
					if (pJS.particles.move.out_mode == 'bounce') {
						// Calculate the new particle position based on the current velocity
						var pos = {
							x: p.x + p.vx,
							y: p.y + p.vy
						};
						// Reverse the velocity if the particle hits the canvas boundaries
						if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
						else if (pos.x - p.radius < 0) p.vx = -p.vx;
						if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
						else if (pos.y - p.radius < 0) p.vy = -p.vy;
					}
				}

				// Apply the repulse force if the distance is within the repulse radius
				if (d <= repulseRadius) {
					process();
				}

				// // Alternative approach for repulse animation
				// // if(!pJS.tmp.repulse_finish){
				// //   if(d <= repulseRadius){
				// //     process();
				// //   }
				// // }else{
				// //   process();
				// // }
			} else {
				// Reset the particle velocity if the repulse click flag is inactive
				if (pJS.tmp.repulse_clicking == false) {
					p.vx = p.vx_i;
					p.vy = p.vy_i;
				}
			}
		}
	};

	pJS.fn.modes.grabParticle = function (p) {
		// If hover events are enabled and the mouse is moving
		if (
			pJS.interactivity.events.onhover.enable &&
			pJS.interactivity.status == 'mousemove'
		) {
			// Calculate the distance between the particle and the mouse position
			var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
				dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
				dist_mouse = Math.sqrt(
					dx_mouse * dx_mouse + dy_mouse * dy_mouse
				);

			/* draw a line between the cursor and the particle if the distance between them is under the config distance */
			// Draw a line if the particle is within the grab distance
			if (dist_mouse <= pJS.interactivity.modes.grab.distance) {
				// Calculate the line opacity based on the distance
				var opacity_line =
					pJS.interactivity.modes.grab.line_linked.opacity -
					dist_mouse /
						(1 / pJS.interactivity.modes.grab.line_linked.opacity) /
						pJS.interactivity.modes.grab.distance;

				// Draw the line if the opacity is positive
				if (opacity_line > 0) {
					/* style */
					// Get the line color in RGB format
					var color_line = pJS.particles.line_linked.color_rgb_line;
					// Set the line style
					pJS.canvas.ctx.strokeStyle =
						'rgba(' +
						color_line.r +
						',' +
						color_line.g +
						',' +
						color_line.b +
						',' +
						opacity_line +
						')';
					pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
					//pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

					/* path */
					// Draw the line path
					pJS.canvas.ctx.beginPath();
					pJS.canvas.ctx.moveTo(p.x, p.y);
					pJS.canvas.ctx.lineTo(
						pJS.interactivity.mouse.pos_x,
						pJS.interactivity.mouse.pos_y
					);
					pJS.canvas.ctx.stroke();
					pJS.canvas.ctx.closePath();
				}
			}
		}
	};

	/* ---------- pJS functions - vendors ------------ */

	pJS.fn.vendors.eventsListeners = function () {
		/* events target element */
		// Set the target element for events based on the configuration
		if (pJS.interactivity.detect_on == 'window') {
			pJS.interactivity.el = window;
		} else {
			pJS.interactivity.el = pJS.canvas.el;
		}

		/* detect mouse pos - on hover / click event */
		// Add mousemove and mouseleave event listeners if hover or click events are enabled
		if (
			pJS.interactivity.events.onhover.enable ||
			pJS.interactivity.events.onclick.enable
		) {
			/* el on mousemove */
			// Capture mouse movement events
			pJS.interactivity.el.addEventListener('mousemove', function (e) {
				// Get the mouse position based on the target element
				if (pJS.interactivity.el == window) {
					var pos_x = e.clientX,
						pos_y = e.clientY;
				} else {
					var pos_x = e.offsetX || e.clientX,
						pos_y = e.offsetY || e.clientY;
				}

				// Update the mouse position in the pJS object
				pJS.interactivity.mouse.pos_x = pos_x;
				pJS.interactivity.mouse.pos_y = pos_y;

				// Apply retina scaling if enabled
				if (pJS.tmp.retina) {
					pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
					pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
				}

				// Update the interactivity status to 'mousemove'
				pJS.interactivity.status = 'mousemove';
			});

			/* el on onmouseleave */
			// Capture mouse leave events
			pJS.interactivity.el.addEventListener('mouseleave', function (e) {
				// Reset the mouse position and set the interactivity status to 'mouseleave'
				pJS.interactivity.mouse.pos_x = null;
				pJS.interactivity.mouse.pos_y = null;
				pJS.interactivity.status = 'mouseleave';
			});
		}

		/* on click event */
		// Add click event listener if click events are enabled
		if (pJS.interactivity.events.onclick.enable) {
			pJS.interactivity.el.addEventListener('click', function () {
				// Store the click position and time
				pJS.interactivity.mouse.click_pos_x =
					pJS.interactivity.mouse.pos_x;
				pJS.interactivity.mouse.click_pos_y =
					pJS.interactivity.mouse.pos_y;
				pJS.interactivity.mouse.click_time = new Date().getTime();

				// Process click events based on the selected mode
				if (pJS.interactivity.events.onclick.enable) {
					switch (pJS.interactivity.events.onclick.mode) {
						case 'push':
							// If particle movement is enabled, push new particles at the click position
							if (pJS.particles.move.enable) {
								pJS.fn.modes.pushParticles(
									pJS.interactivity.modes.push.particles_nb,
									pJS.interactivity.mouse
								);
							} else {
								// If particle movement is disabled, push new particles according to the configuration
								if (
									pJS.interactivity.modes.push.particles_nb ==
									1
								) {
									pJS.fn.modes.pushParticles(
										pJS.interactivity.modes.push
											.particles_nb,
										pJS.interactivity.mouse
									);
								} else if (
									pJS.interactivity.modes.push.particles_nb >
									1
								) {
									pJS.fn.modes.pushParticles(
										pJS.interactivity.modes.push
											.particles_nb
									);
								}
							}
							break;

						case 'remove':
							// Remove particles based on the configured number
							pJS.fn.modes.removeParticles(
								pJS.interactivity.modes.remove.particles_nb
							);
							break;

						case 'bubble':
							// Activate the bubble click flag
							pJS.tmp.bubble_clicking = true;
							break;

						case 'repulse':
							// Activate the repulse click flag and reset the repulse counters
							pJS.tmp.repulse_clicking = true;
							pJS.tmp.repulse_count = 0;
							pJS.tmp.repulse_finish = false;
							// Deactivate the repulse click flag after the configured duration
							setTimeout(function () {
								pJS.tmp.repulse_clicking = false;
							}, pJS.interactivity.modes.repulse.duration * 1000);
							break;
					}
				}
			});
		}
	};

	pJS.fn.vendors.densityAutoParticles = function () {
		// If the particle density feature is enabled
		if (pJS.particles.number.density.enable) {
			/* calc area */
			// Calculate the canvas area
			var area = (pJS.canvas.el.width * pJS.canvas.el.height) / 1000;
			// Apply retina scaling to the area if enabled
			if (pJS.tmp.retina) {
				area = area / (pJS.canvas.pxratio * 2);
			}

			/* calc number of particles based on density area */
			// Calculate the number of particles based on the area and density configuration
			var nb_particles =
				(area * pJS.particles.number.value) /
				pJS.particles.number.density.value_area;

			/* add or remove X particles */
			// Adjust the particle count based on the calculated number
			var missing_particles = pJS.particles.array.length - nb_particles;
			// Add particles if there's a deficit
			if (missing_particles < 0)
				pJS.fn.modes.pushParticles(Math.abs(missing_particles));
			// Remove particles if there's an excess
			else pJS.fn.modes.removeParticles(missing_particles);
		}
	};

	pJS.fn.vendors.checkOverlap = function (p1, position) {
		// Check if a new particle overlaps with existing particles
		for (var i = 0; i < pJS.particles.array.length; i++) {
			var p2 = pJS.particles.array[i];

			// Calculate the distance between the particles
			var dx = p1.x - p2.x,
				dy = p1.y - p2.y,
				dist = Math.sqrt(dx * dx + dy * dy);

			// If the particles overlap, reposition the new particle
			if (dist <= p1.radius + p2.radius) {
				p1.x = position ? position.x : Math.random() * pJS.canvas.w;
				p1.y = position ? position.y : Math.random() * pJS.canvas.h;
				pJS.fn.vendors.checkOverlap(p1);
			}
		}
	};

	pJS.fn.vendors.createSvgImg = function (p) {
		// Create an SVG image for a particle with the specified color
		/* set color to svg element */
		// Get the SVG XML and extract the hex color codes
		var svgXml = pJS.tmp.source_svg,
			rgbHex = /#([0-9A-F]{3,6})/gi,
			coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
				// Replace the color codes with the particle's color
				if (p.color.rgb) {
					var color_value =
						'rgba(' +
						p.color.rgb.r +
						',' +
						p.color.rgb.g +
						',' +
						p.color.rgb.b +
						',' +
						p.opacity +
						')';
				} else {
					var color_value =
						'hsla(' +
						p.color.hsl.h +
						',' +
						p.color.hsl.s +
						'%,' +
						p.color.hsl.l +
						'%,' +
						p.opacity +
						')';
				}
				return color_value;
			});

		/* prepare to create img with colored svg */
		// Create a blob object from the colored SVG XML
		var svg = new Blob([coloredSvgXml], {
				type: 'image/svg+xml;charset=utf-8'
			}),
			DOMURL = window.URL || window.webkitURL || window,
			url = DOMURL.createObjectURL(svg);

		/* create particle img obj */
		// Create an image object and load the SVG image
		var img = new Image();
		img.addEventListener('load', function () {
			// Set the image object in the particle and mark it as loaded
			p.img.obj = img;
			p.img.loaded = true;
			// Revoke the object URL for the SVG blob
			DOMURL.revokeObjectURL(url);
			// Increment the SVG image count
			pJS.tmp.count_svg++;
		});
		img.src = url;
	};

	pJS.fn.vendors.destroypJS = function () {
		// Destroy the particle.js instance, including the canvas
		cancelAnimationFrame(pJS.fn.drawAnimFrame);
		canvas_el.remove();
		pJSDom = null;
	};

	pJS.fn.vendors.drawShape = function (
		c,
		startX,
		startY,
		sideLength,
		sideCountNumerator,
		sideCountDenominator
	) {
		// Draw a polygon shape on the canvas
		// By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
		var sideCount = sideCountNumerator * sideCountDenominator;
		var decimalSides = sideCountNumerator / sideCountDenominator;
		var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
		var interiorAngle = Math.PI - (Math.PI * interiorAngleDegrees) / 180; // convert to radians
		c.save();
		c.beginPath();
		c.translate(startX, startY);
		c.moveTo(0, 0);
		for (var i = 0; i < sideCount; i++) {
			c.lineTo(sideLength, 0);
			c.translate(sideLength, 0);
			c.rotate(interiorAngle);
		}
		//c.stroke();
		c.fill();
		c.restore();
	};

	pJS.fn.vendors.exportImg = function () {
		// Export the canvas as a PNG image
		window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
	};

	pJS.fn.vendors.loadImg = function (type) {
		// Load the image for particle shapes
		pJS.tmp.img_error = undefined;

		// If an image source is provided
		if (pJS.particles.shape.image.src != '') {
			// Load the image based on the type (SVG or other)
			if (type == 'svg') {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', pJS.particles.shape.image.src);
				xhr.onreadystatechange = function (data) {
					if (xhr.readyState == 4) {
						// If the request is successful, store the SVG XML
						if (xhr.status == 200) {
							pJS.tmp.source_svg = data.currentTarget.response;
							pJS.fn.vendors.checkBeforeDraw();
						} else {
							// Handle error if the image is not found
							console.log('Error pJS - Image not found');
							pJS.tmp.img_error = true;
						}
					}
				};
				xhr.send();
			} else {
				var img = new Image();
				img.addEventListener('load', function () {
					// Store the loaded image and proceed with drawing
					pJS.tmp.img_obj = img;
					pJS.fn.vendors.checkBeforeDraw();
				});
				img.src = pJS.particles.shape.image.src;
			}
		} else {
			// Handle error if no image source is provided
			console.log('Error pJS - No image.src');
			pJS.tmp.img_error = true;
		}
	};

	pJS.fn.vendors.draw = function () {
		// Draw the particles on the canvas
		// Handle drawing based on particle shape
		if (pJS.particles.shape.type == 'image') {
			// Draw SVG images
			if (pJS.tmp.img_type == 'svg') {
				// Start drawing when all SVG images are loaded
				if (pJS.tmp.count_svg >= pJS.particles.number.value) {
					pJS.fn.particlesDraw();
					// Stop animation if particle movement is disabled
					if (!pJS.particles.move.enable)
						cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
					// Continue animation if particle movement is enabled
					else
						pJS.fn.drawAnimFrame = requestAnimFrame(
							pJS.fn.vendors.draw
						);
				} else {
					// Continue waiting for images to load
					//console.log('still loading...');
					if (!pJS.tmp.img_error)
						pJS.fn.drawAnimFrame = requestAnimFrame(
							pJS.fn.vendors.draw
						);
				}
			} else {
				// Draw other image types
				if (pJS.tmp.img_obj != undefined) {
					pJS.fn.particlesDraw();
					// Stop animation if particle movement is disabled
					if (!pJS.particles.move.enable)
						cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
					// Continue animation if particle movement is enabled
					else
						pJS.fn.drawAnimFrame = requestAnimFrame(
							pJS.fn.vendors.draw
						);
				} else {
					// Continue waiting for images to load
					if (!pJS.tmp.img_error)
						pJS.fn.drawAnimFrame = requestAnimFrame(
							pJS.fn.vendors.draw
						);
				}
			}
		} else {
			// Draw particles with non-image shapes
			pJS.fn.particlesDraw();
			// Stop animation if particle movement is disabled
			if (!pJS.particles.move.enable)
				cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
			// Continue animation if particle movement is enabled
			else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
		}
	};

	pJS.fn.vendors.checkBeforeDraw = function () {
		// Check if all necessary resources are loaded before drawing
		// if shape is image
		if (pJS.particles.shape.type == 'image') {
			// If SVG image is used, wait for the XML to load
			if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
				pJS.tmp.checkAnimFrame = requestAnimFrame(check);
			} else {
				//console.log('images loaded! cancel check');
				// Cancel the check animation frame
				cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
				// If there are no errors, initialize and start drawing
				if (!pJS.tmp.img_error) {
					pJS.fn.vendors.init();
					pJS.fn.vendors.draw();
				}
			}
		} else {
			// Initialize and start drawing for non-image shapes
			pJS.fn.vendors.init();
			pJS.fn.vendors.draw();
		}
	};

	pJS.fn.vendors.init = function () {
		// Initialize the particle system, including canvas setup, particle creation, etc.
		/* init canvas + particles */
		pJS.fn.retinaInit();
		pJS.fn.canvasInit();
		pJS.fn.canvasSize();
		pJS.fn.canvasPaint();
		pJS.fn.particlesCreate();
		pJS.fn.vendors.densityAutoParticles();

		/* particles.line_linked - convert hex colors to rgb */
		// Convert the line color from hex to RGB format
		pJS.particles.line_linked.color_rgb_line = hexToRgb(
			pJS.particles.line_linked.color
		);
	};

	pJS.fn.vendors.start = function () {
		// Start the particle.js animation
		// If the particle shape is an image, load the image first
		if (isInArray('image', pJS.particles.shape.type)) {
			// Determine the image type based on the file extension
			pJS.tmp.img_type = pJS.particles.shape.image.src.substr(
				pJS.particles.shape.image.src.length - 3
			);
			pJS.fn.vendors.loadImg(pJS.tmp.img_type);
		} else {
			// Proceed with initialization and drawing if the shape is not an image
			pJS.fn.vendors.checkBeforeDraw();
		}
	};

	/* ---------- pJS - start ------------ */

	// Add event listeners
	pJS.fn.vendors.eventsListeners();

	// Start the animation
	pJS.fn.vendors.start();
};

/* ---------- global functions - vendors ------------ */

// Deep extend object properties
Object.deepExtend = function (destination, source) {
	for (var property in source) {
		if (
			source[property] &&
			source[property].constructor &&
			source[property].constructor === Object
		) {
			destination[property] = destination[property] || {};
			arguments.callee(destination[property], source[property]);
		} else {
			destination[property] = source[property];
		}
	}
	return destination;
};

window.requestAnimFrame = (function () {
	// This function sets up the animation frame request based on browser compatibility.
	// It falls back to setTimeout if the browser doesn't support requestAnimationFrame.
	return (
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60); // 60fps
		}
	);
})();

window.cancelRequestAnimFrame = (function () {
	// This function sets up the animation frame cancellation based on browser compatibility.
	// It falls back to clearTimeout if the browser doesn't support cancelAnimationFrame.
	return (
		window.cancelAnimationFrame ||
		window.webkitCancelRequestAnimationFrame ||
		window.mozCancelRequestAnimationFrame ||
		window.oCancelRequestAnimationFrame ||
		window.msCancelRequestAnimationFrame ||
		clearTimeout
	);
})();

function hexToRgb(hex) {
	// This function converts a hex color string to an RGB object.
	// It handles both shorthand (e.g. "#03F") and full hex codes (e.g. "#0033FF").
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			}
		: null;
}

function clamp(number, min, max) {
	// This function clamps a number between a minimum and maximum value.
	return Math.min(Math.max(number, min), max);
}

function isInArray(value, array) {
	// This function checks if a value exists within an array.
	return array.indexOf(value) > -1;
}

/* ---------- particles.js functions - start ------------ */

window.pJSDom = []; // Array to store particle instances

window.particlesJS = function (tag_id, params) {
	// This function initializes a particle system within a specified HTML element.
	// It handles both string and object parameter inputs.
	// The tag_id is used to identify the HTML element, and params contains the configuration for the particle system.

	// If tag_id is not a string, it's assumed to be the params object.
	if (typeof tag_id != 'string') {
		params = tag_id;
		tag_id = 'particles-js'; // Default id if no tag_id is provided.
	}

	// If no tag_id is provided, use the default id.
	if (!tag_id) {
		tag_id = 'particles-js';
	}

	// Get the HTML element with the specified id.
	var pJS_tag = document.getElementById(tag_id),
		pJS_canvas_class = 'particles-js-canvas-el', // CSS class for the canvas element.
		exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

	// Remove any existing canvas elements within the target HTML element.
	if (exist_canvas.length) {
		while (exist_canvas.length > 0) {
			pJS_tag.removeChild(exist_canvas[0]);
		}
	}

	// Create a new canvas element.
	var canvas_el = document.createElement('canvas');
	canvas_el.className = pJS_canvas_class;

	// Set the canvas element's size to 100% of its container.
	canvas_el.style.width = '100%';
	canvas_el.style.height = '100%';

	// Append the canvas element to the target HTML element.
	var canvas = document.getElementById(tag_id).appendChild(canvas_el);

	// If the canvas element was successfully appended, create a new pJS instance.
	if (canvas != null) {
		pJSDom.push(new pJS(tag_id, params)); // Add the instance to the pJSDom array.
	}
};

window.particlesJS.load = function (tag_id, path_config_json, callback) {
	// This function loads a JSON configuration file for a particle system.
	// It uses an XMLHttpRequest to fetch the JSON data from the specified URL.
	// The tag_id is used to identify the HTML element, and path_config_json is the URL of the JSON file.
	// A callback function can be provided to execute after the configuration has been loaded.

	// Create an XMLHttpRequest object.
	var xhr = new XMLHttpRequest();
	xhr.open('GET', path_config_json); // Open a GET request to the specified URL.

	// Set the onreadystatechange handler.
	xhr.onreadystatechange = function (data) {
		if (xhr.readyState == 4) {
			// If the request is complete and successful:
			if (xhr.status == 200) {
				var params = JSON.parse(data.currentTarget.response); // Parse the JSON data.
				window.particlesJS(tag_id, params); // Initialize the particle system using the loaded parameters.
				if (callback) callback(); // Execute the callback function if provided.
			} else {
				// If there's an error loading the JSON file:
				console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
				console.log('Error pJS - File config not found');
			}
		}
	};
	xhr.send(); // Send the request.
};
