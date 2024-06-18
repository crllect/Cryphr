particlesJS('particles-js', {
	// Initialize particles.js on the element with the id 'particles-js'
	particles: {
		// Configuration options for particles
		number: {
			// Settings for particle count and density
			value: 128, // The initial number of particles
			density: {
				// Settings for particle density
				enable: true, // Enables density-based particle creation
				value_area: 1000 // The area in pixels where the density is calculated
			}
		},
		color: {
			// Settings for particle color
			value: '#ffffff' // The color of the particles
		},
		shape: {
			// Settings for particle shape
			type: 'circle', // The default shape of the particles (can be 'circle', 'edge', 'triangle', 'polygon', 'star', 'image')
			stroke: {
				// Settings for particle stroke (border)
				width: 0, // The width of the stroke
				color: '#000000' // The color of the stroke
			},
			polygon: {
				// Settings for polygon-shaped particles
				nb_sides: 5 // The number of sides for the polygon
			}
		},
		opacity: {
			// Settings for particle opacity
			value: 1, // The default opacity of the particles (1 is fully opaque)
			random: true, // Whether to randomly assign opacity values
			anim: {
				// Settings for particle opacity animation
				enable: true, // Enables opacity animation
				speed: 1, // The speed of the opacity animation
				opacity_min: 0, // The minimum opacity value for the animation
				sync: false // Whether the animation is synchronized across all particles
			}
		},
		size: {
			// Settings for particle size
			value: 4, // The default size of the particles in pixels
			random: true, // Whether to randomly assign size values
			anim: {
				// Settings for particle size animation
				enable: false, // Enables size animation
				speed: 4, // The speed of the size animation
				size_min: 0.3, // The minimum size value for the animation
				sync: false // Whether the animation is synchronized across all particles
			}
		},
		line_linked: {
			// Settings for particle line linking
			enable: false, // Enables particle line linking
			distance: 150, // The maximum distance for line linking
			color: '#ffffff', // The color of the lines
			opacity: 0.4, // The opacity of the lines
			width: 1 // The width of the lines
		},
		move: {
			// Settings for particle movement
			enable: true, // Enables particle movement
			speed: 2, // The speed of particle movement
			direction: 'left', // The default direction of particle movement (can be 'none', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left')
			random: true, // Whether to randomly assign movement directions
			straight: true, // Whether particle movement is straight or follows a path
			out_mode: 'out', // What happens when particles reach the bounds of the canvas (can be 'out', 'bounce', 'bounce-horizontal', 'bounce-vertical', 'none', 'destroy')
			bounce: false, // Enables bouncing behavior for particles
			attract: {
				// Settings for particle attraction
				enable: false, // Enables particle attraction
				rotateX: 600, // The rotation angle for the attraction in X direction
				rotateY: 600 // The rotation angle for the attraction in Y direction
			}
		}
	},
	interactivity: {
		// Settings for user interaction
		detect_on: 'window', // The element to detect events on (can be 'canvas', 'window')
		events: {
			// Settings for interaction events
			onhover: {
				// Settings for hover interaction
				enable: true, // Enables hover interaction
				mode: 'bubble' // The interaction mode when hovering (can be 'grab', 'bubble', 'repulse', 'push', 'remove')
			},
			onclick: {
				// Settings for click interaction
				enable: false, // Enables click interaction
				mode: 'repulse' // The interaction mode when clicking (can be 'grab', 'bubble', 'repulse', 'push', 'remove')
			},
			resize: true // Enables resizing behavior
		},
		modes: {
			// Settings for different interaction modes
			grab: {
				// Settings for 'grab' mode
				distance: 400, // The maximum distance for grabbing particles
				line_linked: {
					// Settings for line linking in 'grab' mode
					opacity: 1 // The opacity of the line links
				}
			},
			bubble: {
				// Settings for 'bubble' mode
				distance: 250, // The maximum distance for bubble effect
				size: 0, // The size of the bubble
				duration: 2, // The duration of the bubble effect
				opacity: 0, // The opacity of the bubble
				speed: 3 // The speed of the bubble effect
			},
			repulse: {
				// Settings for 'repulse' mode
				distance: 400, // The maximum distance for repelling particles
				duration: 0.4 // The duration of the repelling effect
			},
			push: {
				// Settings for 'push' mode
				particles_nb: 4 // The number of particles to add when pushing
			},
			remove: {
				// Settings for 'remove' mode
				particles_nb: 2 // The number of particles to remove when removing
			}
		}
	},
	retina_detect: true // Enables retina detection for higher resolution displays
});
