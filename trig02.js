window.onload = function() {
	var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight

	var centerY = height * 0.5
	var centerX = width * 0.5
	var offset = height * 0.4
	var baseRadius = 100
	var offsetRadius = 50
	var baseAlpha = 0.5
	var offsetAlpha = 0.5
	var speed = 0.1 // rate at which angle will change
	var angle = 0

	render()

	function render() {
		var y = centerY + Math.sin(angle) * offset
		var radius = baseRadius + Math.sin(angle) * offsetRadius // radius will go from 50 to 150; (100 - 50 to 100 + 50)
		var alpha = baseAlpha + Math.sin(angle) * offsetAlpha // alpha will go from 0 to 1; (0.5 - 0.5 to 0.5 + 0.5)
		context.clearRect(0, 0, width, height)
		context.fillStyle = 'rgba(0, 0, 0, '+ alpha +')'
		context.beginPath()
		context.arc(centerX, y, radius, 0, Math.PI * 2, false)
		context.fill()

		angle += speed

		requestAnimationFrame(render)
	}
}