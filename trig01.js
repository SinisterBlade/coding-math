window.onload = function() {
	var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight

	context.translate(0, height / 2) // Set y = 0 to mid page
	context.scale(1, -1) // Reverse y co-ordinates position

	// sine wave
	for(var angle = 0; angle < 2 * Math.PI; angle += 0.01) {
		var x = angle * 200
		var y = Math.sin(angle) * 200
		context.fillStyle = 'blue'
		context.fillRect(x, y, 5, 5)
	}

	// cosine wave
	for(var angle = 0; angle < 2 * Math.PI; angle += 0.01) {
		var x = angle * 200
		var y = Math.cos(angle) * 200
		context.fillStyle = 'red'
		context.fillRect(x, y, 5, 5)
	}

	// tangent wave
	for(var angle = 0; angle < 2 * Math.PI; angle += 0.01) {
		var x = angle * 200
		var y = Math.tan(angle) * 200
		context.fillStyle = 'green'
		context.fillRect(x, y, 5, 5)
	}
}