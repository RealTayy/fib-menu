// Get target div
const targetDiv = document.getElementById('content');

// Init a new FibMenu on targetDiv
const targetFibMenu = fibMenu(targetDiv, {});

// Create event listen for fibmenu-btn
const fibMenubtn = document.getElementById('fibmenu-menubtn');
// fibMenubtn.onclick = (e) => {
// 	if (fibMenubtn.classList.contains('is-active')) e.target.classList.remove('is-active');
// 	else e.target.classList.add('is-active');
// }

const timeline = anime.timeline({
	easing: 'easeInCirc',
	duration: 200
})

timeline
	.add({
		targets: '.fibmenu-box-8',
		translateX: ['0%', '-100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-7',
		translateY: ['0%', '100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-6',
		translateX: ['0%', '-100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-5',
		translateY: ['0%', '100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-4',
		translateX: ['0%', '-100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-3',
		translateY: ['0%', '100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-2',
		translateX: ['0%', '-100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-1',
		translateY: ['0%', '100%'],
		opacity: 0
	})
	.add({
		targets: '.fibmenu-box-0',
		translateX: ['0%', '-100%'],
		opacity: 0
	})

timeline.play({});
timeline.finished.then(() => {
	timeline.reverse();
})