// Get target div
const targetDiv = document.getElementById('content');

// Init a new FibMenu on targetDiv
// const targetFibMenu = fibMenu(targetDiv, {});

// Create event listen for fibmenu-btn
const fibMenubtn = document.getElementById('fibmenu-menubtn');
fibMenubtn.onclick = (e) => {
	if (fibMenubtn.classList.contains('is-active')) e.target.classList.remove('is-active');
	else e.target.classList.add('is-active');
}