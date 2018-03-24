let width = 40, height = 20;

let ledCache = [];

let ledsInverted = false;

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

            ledCache[x][y] = led;

            ledContainer.appendChild(ledSegment);
        }
    }

    setTimeout(showBootupText, 1500);
});

function showBootupText() {
    showChar(0, 'tiny', 1, 13);
    showChar(1, 'tiny', 9, 13);
    showChar(0, 'tiny', 15, 13);
    showChar(1, 'tiny', 23, 13);
    showChar(0, 'tiny', 29, 13);

    showChar(5, 'tiny', 1, 5);
    showChar('.', 'tiny', 9, 5);
    showChar(0, 'tiny', 15, 5);
    showChar(0, 'tiny', 22, 5);
    showChar('R', 'tiny', 29, 5);

    setTimeout(() => {
        clearLEDs();
    }, 1250);
}

function setLEDState(x, y, state) {
    if (!ledCache[x]) return;
    let led = ledCache[x][y];

    if (!led) return;

    state = state ^ ledsInverted;

    var state = 'led-' + (state ? 'on' : 'off');
    led.className = 'led ' + state;
}


function getTextWidth(chars, font, spaceWidth) {
    return chars.map(char => charSet[font][char][0].length + spaceWidth).reduce((a, b) => a + b, 0) - spaceWidth;
}

function writeText(text, font, spaceWidth, xPos, yPos) {
    let chars = [...text];

    font = font || 'fat';
    spaceWidth = spaceWidth || 3;
    xPos = xPos || 0;
    yPos = yPos || 0;

    chars.forEach(char => {
        xPos += showChar(char, font, xPos, yPos) + spaceWidth;
    });
}


function showSmallText(line, yPos) {
    let chars = [...line];

    let totalWidth = getTextWidth(chars, 'rearText', 1);

    let xPos = Math.floor(32 / 2 - totalWidth / 2);

    writeText(line, 'rearText', 1, xPos, yPos);

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

let lastState = '', lastEvent = {};

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);
    if (event.origin === location.origin) {
        switch (eventData.type) {
            case 'special-code':
                lastState = 'handleSpecialCode';
                lastEvent = eventData;
                handleSpecialCode(eventData);
                break;
            case 'svc-update':
                lastState = 'handleSvcUpdate';
                lastEvent = eventData;
                handleSvcUpdate(eventData);
                break;
            case 'led-invert':
                ledsInverted = eventData.state;

                window[lastState](lastEvent);
                break;
        }
    }
});

function handleSpecialCode(event) {
    let code = event.code;
    switch (code) {
        case '1':
            for (let x = 0; x < width; x++)
                for (let y = 0; y < height; y++)
                    setLEDState(x, y, true);
            break;
        case '1111':
            clearLEDs();
            showSmallText('OFF', 11);
            showSmallText('SERVICE', 3);
            break;
        case '2222':
            clearLEDs();
            showSmallText('SBS', 11);
            showSmallText('TRANSIT', 3);
            break;
        case '4444':
            clearLEDs();
            showSmallText('ON', 11);
            showSmallText('TEST', 3);
            break;
        case '5555':
            clearLEDs();
            showSmallText('TRAINING', 11);
            showSmallText('BUS', 3);
            break;
        case '7777':
            clearLEDs();
            showSmallText('FREE', 11);
            showSmallText('SHUTTLE', 3);
            break;
        case '9999':
            clearLEDs();
            break;
    }
}

function handleSvcUpdate(event) {
    let svc = event.svc;

    console.log('rear: change to ' + svc)

    clearLEDs();

    var numbers = [...svc.toString()];

    var curX = 3;

    let font = '';

    let length = numbers.length;
    if (length < 3) font = 'fat';
    else if (length === 3) font = 'medium';
    else font = 'thin';

    numbers.forEach(number => {
        curX += showChar(number, font, curX) + 1;
    });
}
