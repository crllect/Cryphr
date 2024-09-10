particlesJS('particles-js', {
	// Initializes particles.js with an ID 'particles-js' and configuration object
	particles: {
		// Configuration for particles
		number: {
			// Number of particles
			value: 16, // Number of particles
			density: {
				// Particle density configuration
				enable: true, // Enables particle density
				value_area: 1000 // Area density
			}
		},
		color: {
			// Particle color
			value: '#ffffff' // White color
		},
		shape: {
			// Particle shape
			type: 'triangle', // Shape type is triangle
			stroke: {
				// Stroke for the shape
				width: 0, // Stroke width is 0
				color: '#000000' // Stroke color is black
			},
			polygon: {
				// Polygon shape configuration
				nb_sides: 5 // Number of sides in the polygon
			}
		},
		opacity: {
			// Particle opacity
			value: 1, // Opacity value
			random: true, // Opacity is random
			anim: {
				// Animation for opacity
				enable: true, // Enables animation
				speed: 1, // Animation speed
				opacity_min: 0, // Minimum opacity
				sync: false // Whether animation is synchronized
			}
		},
		size: {
			// Particle size
			value: 4, // Size value
			random: true, // Size is random
			anim: {
				// Animation for size
				enable: true, // Enables animation
				speed: 4, // Animation speed
				size_min: 0.3, // Minimum size
				sync: false // Whether animation is synchronized
			}
		},
		line_linked: {
			// Line linked between particles
			enable: true, // Enables line linking
			distance: 250, // Distance for line linking
			color: '#ffffff', // Color of the line
			opacity: 0.4, // Opacity of the line
			width: 1 // Width of the line
		},
		move: {
			// Particle movement
			enable: true, // Enables particle movement
			speed: 2, // Movement speed
			direction: 'top', // Movement direction
			random: true, // Movement is random
			straight: false, // Straight movement
			out_mode: 'out', // Out of bounds behavior
			bounce: false, // Bouncing behavior
			attract: {
				// Attraction behavior
				enable: false, // Enables attraction
				rotateX: 600, // Rotation on the X-axis
				rotateY: 600 // Rotation on the Y-axis
			}
		}
	},
	interactivity: {
		// Interactivity settings
		detect_on: 'window', // Event detection area
		events: {
			// Events configuration
			onhover: {
				// Hover event
				enable: true, // Enables hover event
				mode: 'grab' // Hover mode is grab
			},
			onclick: {
				// Click event
				enable: false, // Enables click event
				mode: 'repulse' // Click mode is repulse
			},
			resize: true // Enables resizing for responsiveness
		},
		modes: {
			// Modes for interactivity
			grab: {
				// Grab mode
				distance: 400, // Grab distance
				line_linked: {
					// Line linked configuration for grab mode
					opacity: 1 // Opacity of the line
				}
			},
			bubble: {
				// Bubble mode
				distance: 250, // Bubble distance
				size: 0, // Bubble size
				duration: 2, // Bubble duration
				opacity: 0, // Bubble opacity
				speed: 3 // Bubble speed
			},
			repulse: {
				// Repulse mode
				distance: 400, // Repulse distance
				duration: 0.4 // Repulse duration
			},
			push: {
				// Push mode
				particles_nb: 4 // Number of particles to push
			},
			remove: {
				// Remove mode
				particles_nb: 2 // Number of particles to remove
			}
		}
	},
	retina_detect: true // Detects retina display for higher resolution
});
