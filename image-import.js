let png = require('pngjs'),
	fs = require('fs');

const PNG = png.PNG;

let fileName = process.argv[2];

fs.createReadStream(fileName).pipe(new PNG({filterType: 4})).on('parsed', function() {
	let image = [];
	for (var y = 0; y < this.height; y++) {
		image.push([]);
	}

	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			var idx = (this.width * y + x) << 2;
			image[y][x] = this.data[idx] === 255 ? 1 : 0;
		}
	}

	image.forEach(line => {
		console.log("[" + line.join(', ') + "],");
	});
});
