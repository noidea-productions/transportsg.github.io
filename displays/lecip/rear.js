let width = 40, height = 20;

let ledCache = {};

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

            ledCache[x + '-' + y] = led;

            ledContainer.appendChild(ledSegment);
        }
    }

    function oneRound() {
        for (let xOff = 0; xOff > -140; xOff--) {
            setTimeout(() => {
                let x = 40;
                for (let i = 0; i < 10; i++) {
                    let size = (i === 1) ? 7 : 11;
                    clearRect(x + xOff, 0, x + xOff + size, height);
                    showChar(i, 'medium', x + xOff);

                    x += size;
                }
            }, -xOff * 50);
        }
    }

    oneRound();
    setInterval(() => {
        oneRound();
    }, 5300);

});

function setLEDState(x, y, state) {
    let led = ledCache[x + '-' + y];

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
    clearRect(0, 0, width, height);
}

function clearRect(sx, sy, ex, ey) {
    for (let y = sy; y < ey; y++) {
        for (let x = sx; x < ex; x++) {
            setLEDState(x, y, false);
        }
    }
}
