let width = 40, height = 20;

window.addEventListener('load', () => {
    let ledContainer = document.getElementById('led-container');
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let ledSegment = document.createElement('div');
            ledSegment.id = 'led-' + x + '-' + y;
            ledSegment.className = 'led-segment';

            let led = document.createElement('div');
            led.className = 'led led-off';

            ledSegment.appendChild(led);

            ledContainer.appendChild(ledSegment);
        }
    }

    let delayTime = 50;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < 40; x++) {
            setTimeout(() => {
                setLEDState(x, y, true);
                setTimeout(() => {setLEDState(x, y, false)}, delayTime)
            }, (((x * height) + y)) * delayTime);
        }
    }
});

function setLEDState(x, y, state) {
    let led = document.querySelector('#led-' + x + '-' + y + ' > div.led');

    var state = 'led-' + (state ? 'on' : 'off');
    led.className = 'led ' + state;
}
