window.onload = function() {
	var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	arrowX = width / 2,
	arrowY = height / 2,
	distanceX = 0,
	distanceY = 0,
	angle  = 0,
	circleAngle = 0,
	radius = 400,
	speed = 0.01

	render();

	function render() {
		context.clearRect(0, 0, width, height)
		arrowX = width/2 + radius * Math.cos(circleAngle)
		arrowY = height/2 + radius * Math.sin(circleAngle)
		circleAngle += speed

		context.save()
		context.translate(arrowX, arrowY)
		context.rotate(angle)

		context.beginPath()
		context.moveTo(20, 0)
		context.lineTo(-20, 0)
		context.moveTo(20, 0)
		context.lineTo(10, 10)
		context.moveTo(20, 0)
		context.lineTo(10, -10)
		context.stroke()

		context.restore()
		requestAnimationFrame(render)
	}

	document.addEventListener('mousemove', function(event) {
		distanceX = event.clientX - arrowX
		distanceY = event.clientY - arrowY

		angle = Math.atan2(distanceY, distanceX)
	})


}