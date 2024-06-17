particlesJS('particles-js', { // Initialize particles.js on the element with id 'particles-js'
	particles: { // Particle configuration
		number: { // Particle count and density
			value: 16, // Number of particles to generate
			density: {
				enable: true, // Enable density based particle generation
				value_area: 1000 // Area density of particles
			}
		},
		color: { // Particle color
			value: '#ffffff' // Set the particle color to white
		},
		shape: { // Particle shape
			type: 'triangle', // Set particle shape to triangle
			stroke: { // Stroke settings
				width: 0, // Disable stroke width
				color: '#000000' // Set stroke color to black (unused due to width being 0)
			},
			polygon: { // Polygon shape configuration
				nb_sides: 5 // Set number of sides for the polygon shape
			}
		},
		opacity: { // Particle opacity
			value: 1, // Set initial opacity to 1 (fully opaque)
			random: true, // Enable random opacity for individual particles
			anim: { // Opacity animation settings
				enable: true, // Enable opacity animation
				speed: 1, // Animation speed
				opacity_min: 0, // Minimum opacity value for animation
				sync: false // Disable synchronized animation for all particles
			}
		},
		size: { // Particle size
			value: 4, // Set initial particle size
			random: true, // Enable random size for individual particles
			anim: { // Size animation settings
				enable: true, // Enable size animation
				speed: 4, // Animation speed
				size_min: 0.3, // Minimum size value for animation
				sync: false // Disable synchronized animation for all particles
			}
		},
		line_linked: { // Line connecting particles
			enable: true, // Enable line connection between particles
			distance: 250, // Maximum distance for connection
			color: '#ffffff', // Line color
			opacity: 0.4, // Line opacity
			width: 1 // Line width
		},
		move: { // Particle movement settings
			enable: true, // Enable particle movement
			speed: 2, // Particle speed
			direction: 'top', // Set movement direction to top
			random: true, // Enable random movement direction
			straight: false, // Disable straight movement
			out_mode: 'out', // Particle behavior when hitting the canvas boundary (exit)
			bounce: false, // Disable bouncing behavior
			attract: { // Attraction settings
				enable: false, // Disable attraction
				rotateX: 600, // Attraction rotation on the x-axis
				rotateY: 600 // Attraction rotation on the y-axis
			}
		}
	},
	interactivity: { // Interactive behavior settings
		detect_on: 'window', // Detect interactions on the entire window
		events: { // Interaction events
			onhover: { // On mouse hover events
				enable: true, // Enable hover events
				mode: 'grab' // Set hover mode to "grab" (particles attract towards the mouse)
			},
			onclick: { // On mouse click events
				enable: false, // Disable click events
				mode: 'repulse' // Set click mode to "repulse" (particles move away from the mouse)
			},
			resize: true // Enable particle resizing on window resize
		},
		modes: { // Interaction modes
			grab: { // Grab mode settings
				distance: 400, // Grab distance
				line_linked: { // Line connected between mouse and particles
					opacity: 1 // Set line opacity to 1 (fully opaque)
				}
			},
			bubble: { // Bubble mode settings (not used)
				distance: 250, // Bubble distance
				size: 0, // Bubble size
				duration: 2, // Bubble duration
				opacity: 0, // Bubble opacity
				speed: 3 // Bubble speed
			},
			repulse: { // Repulse mode settings
				distance: 400, // Repulse distance
				duration: 0.4 // Repulse duration
			},
			push: { // Push mode settings (not used)
				particles_nb: 4 // Number of particles to push
			},
			remove: { // Remove mode settings (not used)
				particles_nb: 2 // Number of particles to remove
			}
		}
	},
	retina_detect: true // Enable retina detection for high-resolution displays
});
