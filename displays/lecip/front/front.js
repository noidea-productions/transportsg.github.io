let width = 160, height = 20;

let currentSvc = '', currentDirection = 1, currentDest = '';
let currentScrollPos = 0;
let ledCache = [];

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

    setTimeout(bootupSequence, 1500);
});

function bootupSequence() {
    for (let x = 0; x < width; x++) {
        setTimeout(() => {
            setColumn(x, true);
        }, x * 5);
    }
    setTimeout(() => {
        for (let x = 0; x < width; x++) {
            setTimeout(() => {
                setColumn(x, false);
            }, x * 5);
        }
    }, 1000);
}

function getTextWidth(chars, font, spaceWidth) {
    return chars.map(char => charSet[font][char][0].length + spaceWidth).reduce((a, b) => a + b, 0) - spaceWidth;
}

function writeTextCentered(text, font, spaceWidth) {
    font = font || 'fat';
    spaceWidth = spaceWidth || 3;

    let chars = [...text];
    let totalWidth = getTextWidth(chars, font, spaceWidth);
    let totalHeight = charSet[font][chars[0]].length;

    let xPos = Math.floor(width / 2 - totalWidth / 2);
    let yPos = Math.floor(height / 2 - totalHeight / 2);

    writeText(text, font, spaceWidth, xPos, yPos);
}

function writeText(text, font, spaceWidth, xPos, yPos) {
    clearLEDs();
    let chars = [...text];

    font = font || 'fat';
    spaceWidth = spaceWidth || 3;
    xPos = xPos || 0;
    yPos = yPos || 0;

    chars.forEach(char => {
        xPos += showChar(char, font, xPos, yPos) + spaceWidth;
    });
}



function showSvc(svcNumber) {
    if (svcNumber.endsWith('e')) svcNumber = '  ' + svcNumber;

    let chars = [...svcNumber.toString()];

    let totalWidth = getTextWidth(chars, 'fat', 2);

    let xPos = width - totalWidth - 1;

    clearRect(xPos, 0, width, height);

    chars.forEach(char => {
        xPos += showChar(char, 'fat', xPos) + 2;
    });
}

function showDest(dest) {
    let chars = [...dest.toString()];

    let yOff = 0;

    let font = 'frontFat';
    if (dest.length > 15 || !dest.startsWith('> ')) {
        font = 'frontSmall'
        yOff = 1;
    }

    let totalWidth = getTextWidth(chars, font, 1);

    let xPos = 1;

    clearRect(0, 0, totalWidth, 10 + yOff);

    chars.forEach(char => {
        xPos += showChar(char, font, xPos, yOff) + 1;
    });
}

function showSvcInfo(line) {
    let chars = [...line.toString()];

    let totalWidth = getTextWidth(chars, 'frontSmall', 1);

    let xPos = 1;

    clearRect(0, 12, totalWidth - 1, height);

    chars.forEach(char => {
        xPos += showChar(char, 'frontSmall', xPos, 12) + 1;
    });
}

function setColumn(x, state) {
    for (let y = 0; y < height; y++) {
        setLEDState(x, y, state);
    }
}

function setLEDState(x, y, state) {
    if (!ledCache[x]) return;
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

function showImage(name) {
    let imageData = charSet.images[name];

    if (!imageData) return;

    for (let x = 0; x < imageData.length; x++) {
        for (let y = 0; y < imageData[0].length; y++) {
            setLEDState(x, y, imageData[x][y]);
        }
    }

}

function clearLEDs() {
    clearRect(0, 0, width, height);
}

function clearRect(sx, sy, ex, ey) {
    for (let y = sy; y < ey; y++) {
        for (let x = sx; x < ex; x++) {
            setLEDState(x, height - y - 1, false);
        }
    }
}

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);
    if (event.origin === location.origin) {
        switch (eventData.type) {
            case 'svc-update':
                handleSvcUpdate(eventData.svc, eventData.dest, eventData.direction);
                break;
            case 'special-code':
                handleSpecialCode(eventData.code);
                break;
        }
    }
});

function doEDSScroll() {
    clearLEDs();

    if (currentSvc.endsWith('e')) {
        if (currentScrollPos === -168) {
            currentScrollPos = 118;
        }

        writeText('FAST FORWARD', 'fat', 3, currentScrollPos--);
        showSvc(currentSvc);
    } else {
        showSvc(currentSvc);
        showDest(currentDest);

        var data = EDSData[currentSvc];
        if (!data) return;

        if ((currentScrollPos + 1) >= data[currentDirection].length) {
            currentScrollPos = 0;
        }

        showSvcInfo(data[currentDirection][currentScrollPos++].toUpperCase());
    }
}

let edsScrollInterval = 0;

function handleSpecialCode(code) {
    clearInterval(edsScrollInterval);
    
    switch (code) {
        case '1111':
            writeTextCentered('OFF SERVICE');
            break;
        case '2222':
            showImage('sbst-front');
            break;
        case '4444':
            writeTextCentered('ON TEST');
            break;
        case '5555':
            writeTextCentered('TRAINING BUS');
            break;
        case '9999':
            writeTextCentered('VER. 14SEP14-DD', 'frontVersion', 1);
            break;
        }
}

function handleSvcUpdate(svc, dest, direction) {
    console.log('front: change to', svc, dest);
    clearLEDs();

    clearInterval(edsScrollInterval);

    currentSvc = svc;
    currentDirection = 1 + direction;
    currentDest = dest;

    currentScrollPos = 0;

    edsScrollInterval = setInterval(doEDSScroll, svc.endsWith('e') ? 50 : 2500);

    doEDSScroll();
}
