let width = 40, height = 20;

window.addEventListener('load', () => {
    let ledContainer = document.getElementById('led-container');
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let ledSegment = document.createElement('div');
            ledSegment.id = 'led-' + x + '-' + y;
            ledSegment.className = 'led-segment';

            let led = document.createElement('div');
            led.className = 'led led-off';

            ledSegment.appendChild(led);

            ledContainer.appendChild(ledSegment);
        }
    }

    for (let xOff = 0; xOff > -100; xOff--) {
        setTimeout(() => {
            clearLEDs();
            let x = 0;
            for (let i = 0; i < 10; i++) {
                showChar(i, 'medium', x + xOff);
                if (i == 1) x += 7;
                else x += 11;
            }
        }, -xOff * 50);
    }

});

function setLEDState(x, y, state) {
    let led = document.querySelector('#led-' + x + '-' + y + ' > div.led');
    if (!led) return;

    var state = 'led-' + (state ? 'on' : 'off');
    led.className = 'led ' + state;
}

function showChar(char, type, dx) {
    if (!(type in charSet)) return;
    if (!(char in charSet[type])) return;

    let charData = charSet[type][char];

    let charWidth = charData[0].length;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < charWidth; x++) {
            setLEDState(x + dx, y, charData[y][x]);
        }
    }
    return charWidth;
}

function clearLEDs() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            setLEDState(x, y, false);
        }
    }
}
