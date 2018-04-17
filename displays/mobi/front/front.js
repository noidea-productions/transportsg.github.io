let width = 144, height = 16;
let ledCache = [];

function generateLEDCssCode() {
    let pixelSize = Math.ceil(window.innerWidth * 0.005);

    let cssData =
`
    .led {
        width: ${pixelSize}px;
        height: ${pixelSize}px;
    }

    #led-container {
        width: ${width * Math.ceil(window.innerWidth * 0.0055)}px;
        grid-template-columns: repeat(${width}, ${Math.ceil(window.innerWidth * 0.0055)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.001)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.0055)}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

window.addEventListener('resize', () => {
    generateLEDCssCode();
})

window.addEventListener('load', () => {
    generateLEDCssCode();
    for (let x = 0; x < width; x++) {
        ledCache.push([]);
        for (let y = 0; y < height; y++) {
            ledCache[x].push([]);
        }
    }

    let ledContainer = document.getElementById('led-container');
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let ledSegment = document.createElement('div');
            ledSegment.id = 'led-' + x + '-' + y;
            ledSegment.className = 'led-segment';

            let led = document.createElement('div');
            led.className = 'led led-off';

            ledSegment.appendChild(led);

            ledCache[x][y] = led;

            ledContainer.appendChild(ledSegment);
        }
    }
});
