window.onload = function() {
	var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,

	centerX = width / 2,
	centerY = height / 2,
	xRadius = 200,
	yRadius = 400,
	xAngle  = 0,
	yAngle = 0,
	xspeed = 0.1,
	yspeed = 0.131,
	speed = 0.01,
	x, y

	render()

	function render() {
		context.clearRect(0, 0, width, height)
		x = centerX + xRadius * Math.cos(xAngle)
		y = centerY + yRadius * Math.sin(yAngle)
		context.beginPath()
		context.arc(x, y, 10, 0, Math.PI * 2, false)
		context.fill()

		xAngle += xspeed
		yAngle += yspeed
		requestAnimationFrame(render)
	}
}