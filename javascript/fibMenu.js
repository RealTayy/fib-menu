/*----------------------------------------\
| Initialize and Returns FibMenu Instance |
\----------------------------------------*/
const fibMenu = (target, options) => {
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
/*_________________________
\ Dom Element Generators */
// Creates parent container of the fibMenu
fibMenu.generateFibMenuParent = () => {
	// div.fibmenu
	const fibParent = document.createElement('div');
	fibParent.classList.add('fibmenu');
	return fibParent;
}
// Creates menu button box
fibMenu.generateFibMenubtn = () => {
	// div.fibmenu-menubtn
	const fibMenubtn = document.createElement('div');
	fibMenubtn.classList.add('fibmenu-menubtn');

	// div.fibmenu-menubtn-closed
	const fibMenubtnClosed = document.createElement('div');
	fibMenubtnClosed.classList.add('fibmenu-menubtn-closed');
	fibMenubtn.appendChild(fibMenubtnClosed);

	// div.fibmenu-hamburger-top
	const fibMenuHamburgerTop = document.createElement('div');
	fibMenuHamburgerTop.classList.add('fibmenu-hamburger-top');
	fibMenubtnClosed.appendChild(fibMenuHamburgerTop);

	// div.fibmenu-hamburger-mid
	const fibMenuHamburgerMid = document.createElement('div');
	fibMenuHamburgerMid.classList.add('fibmenu-hamburger-mid');
	fibMenubtnClosed.appendChild(fibMenuHamburgerMid);

	// div.fibmenu-hamburger-bot
	const fibMenuHamburgerBot = document.createElement('div');
	fibMenuHamburgerBot.classList.add('fibmenu-hamburger-bot');
	fibMenubtnClosed.appendChild(fibMenuHamburgerBot);

	// div.fibmenu-menubtn-open
	const fibMenubtnOpen = document.createElement('div');
	fibMenubtnOpen.classList.add('fibmenu-menubtn-open');
	fibMenubtn.appendChild(fibMenubtnOpen);

	// div.fibmenu-x-one
	const fibMenuXOne = document.createElement('div');
	fibMenuXOne.classList.add('fibmenu-x-one');
	fibMenubtnOpen.appendChild(fibMenuXOne);

	// div.fibmenu-x-two
	const fibMenuXTwo = document.createElement('div');
	fibMenuXTwo.classList.add('fibmenu-x-two');
	fibMenubtnOpen.appendChild(fibMenuXTwo);


	return fibMenubtn;
}
// Creates parent container of the fibMenu
fibMenu.generateFibBox = (box) => {
	// div.fibmenu-box-{x}
	const fibBox = document.createElement('div');
	const evenOdd = box % 2 === 0 ? 'even' : 'odd';
	fibBox.classList.add('fibmenu-box', `fibmenu-box-${box}`, evenOdd);
	return fibBox;
}
/*_________________________
| Dom Element Generators */


/*-----------------------\ 
| FIBMENU CLASS FUNCTION |
\-----------------------*/
class FibMenu {
	constructor(target, options = {}) {
		// Properties
		this.target = target;
		this.fibParent;
		this.fibMenubtn;
		this.fibBoxes = [];
		// DOM Properties

		// Initialize
		this.init();
	}

	init() {
		// Spread properties into variables
		const {
			target
		} = this;

		// Spread helper functions into variables
		const {
			generateFibMenuParent,
			generateFibMenubtn,
			generateFibBox
		} = fibMenu;

		// Create and append div.fibMenu
		const fibParent = this.fibParent = generateFibMenuParent();
		target.appendChild(fibParent);

		// Create and append div.fibmenu-menubtn
		const fibMenubtn = this.fibMenubtn = generateFibMenubtn();
		fibParent.appendChild(fibMenubtn);

		// Create and append boxes
		let box = 0;
		while (box < 9) {
			const fibBox = this.fibBoxes[box] = generateFibBox(box);
			fibParent.appendChild(fibBox);
			box++;
		}


	}
}