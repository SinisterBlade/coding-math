// Number of objects to be shown in a circle
window.onload = function() {
	var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,

	centerX = width / 2,
	centerY = height / 2,
	radius = 200,
	angle = 0,
	numObjects = 10,
	slice = 2 * Math.PI / numObjects,
	x, y

	for (let i = 0; i < numObjects; i++) {
		angle = i * slice
		x = centerX + radius * Math.cos(angle)
		y = centerY + radius * Math.sin(angle)
		context.beginPath()
		context.arc(x, y, 10, 0, Math.PI * 2, false)
		context.fill()
	}
	
}