console.log('hi');
// Initialize and Returns FibMenu Instance
function fibMenu(target, options) {
	// Check if target is jQuery object and return FibMenu Instance
	try {
		if (target instanceof jQuery) return new FibMenu(target[0], options);
	} catch (e) {
		// Don't error and exit out of function yet if not jQuery Object
	}

	// Check if target if Native DOM element and return FibMenu Instance
	try {
		if (target instanceof HTMLCollection) return new FibMenu(target[0], options);
		else if (target instanceof Element) return new FibMenu(target, options);
		else throw TypeError('Target must be a HTMLCollection or Element');
	}
	catch (e) { throw e; }
}

/*-----------------\ 
| HELPER FUNCTIONS |
\-----------------*/

class FibMenu {
	constructor(target, options = {}) {
		// Properties
		this.target = target

		// Initialize
		this.init();
	}

	init() {
		// Spread properties into variables
		const {
			target
		} = this

		// Create div.fibMenu
		const fibDiv = document.createElement('div');
		let { style, classList } = fibDiv;
		classList.add('fibmenu');
		style.display = 'grid';
		style.width = '100%';
		style.height = '100%';
		style.gridTemplateRows = 'repeat(8, 1fr)';
		style.gridTemplateColumns = 'repeat(8, 12.5vh) auto';
		this.fibDiv = fibDiv

		// Create div.fibmenu-hamburger
		const hamburgerDiv = document.createElement('div');
		{ style, classList } = hamburgerDiv;
		classList.add('fibmenu-hamburger');
		style.width = '50%'
		style.height = '50%'


		target.appendChild(fibDiv);
	}
}