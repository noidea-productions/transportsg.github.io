let width = 160, height = 20;

let ledCache = [];

function setCache(x, y, led) {
    ledCache[x][y] = led;
}

window.addEventListener('load', () => {
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

            setCache(x, y, led);

            ledContainer.appendChild(ledSegment);
        }
    }

    setTimeout(bootupSequence, 1500);
});

function bootupSequence() {
    for (let x = 0; x < width; x++) {
        setTimeout(() => {
            setColumn(x, true);
        }, x * 10);
    }
}

function setColumn(x, state) {
    for (let y = 0; y < height; y++) {
        setLEDState(x, y, state);
    }
}

function setLEDState(x, y, state) {
    let led = ledCache[x][y];

    if (!led) return;

    var state = 'led-' + (state ? 'on' : 'off');
    led.className = 'led ' + state;
}

function showChar(char, type, dx, dy) {
    if (!(type in charSet)) return;
    if (!(char in charSet[type])) return;

    let charData = charSet[type][char];

    let charWidth = charData[0].length;
    let charHeight = charData.length;

    for (let y = 0; y < charHeight; y++) {
        for (let x = 0; x < charWidth; x++) {
            setLEDState(x + dx, y - (dy || 0) + (height - charHeight), charData[y][x]);
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

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);
    if (event.origin === location.origin) {
        switch (eventData.type) {
            case 'svc-update':
                handleSvcUpdate(eventData.svc);
                break;
        }
    }
});

function handleSvcUpdate(svc) {
    console.log('front: change to ' + svc)

    clearLEDs();

    var numbers = [...svc.toString()];

    var curX = 3;

    let font = '';

    if (numbers.filter(e => e !== 'e').length < 4) font = 'medium'
    else font = 'thin';

    numbers.forEach(number => {
        curX += showChar(number, font, curX) + 1;
    });
}
