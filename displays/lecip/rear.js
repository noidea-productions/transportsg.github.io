let width = 40, height = 20;

window.addEventListener('load', () => {
    let ledContainer = document.getElementById('led-container');
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let ledSegment = document.createElement('div');
            ledSegment.id = 'led-' + x + '-' + y;
            ledSegment.className = 'led-segment';

            let led = document.createElement('div');
            led.className = 'led';

            ledSegment.appendChild(led);

            ledContainer.appendChild(ledSegment);
        }
    }
});
