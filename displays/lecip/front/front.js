let width = 160, height = 20;

let currentSvc = '', currentDirection = 1, currentDest = '', currentLoopPoint = '', currentRouteType, isUsingSmallFont;
let currentScrollPos = 0;
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

function determineFont(dest, svc, routeType) {
    if (routeType === 'TOWNLINK') {
        return 'frontSmall';
        // if (svc.startsWith('8') && svc.length === 3) { // Yishun svc
        //     return 'frontSmall';
        // } else return 'frontSmall';
    }
    if (routeType === 'FEEDER') {
        if (svc.startsWith('8') && svc.length === 3) { // Yishun svc
            return 'frontSmallDest';
        } else return 'frontFat';
    }
    if (routeType === 'INDUSTRIAL') {
        if (dest.startsWith('JOO KOON')) {
            return 'frontSmall';
        } else return 'frontFat'
    }
    if (dest.length > 16 || (svc.startsWith('8') && svc.length === 3)) {
        return 'frontSmall';
    }
    return 'frontFat';
}

function showDest(dest) {
    let chars = [...dest.toString()];

    let yOff = 0;

    let font = determineFont(dest, currentSvc, currentRouteType);

    isUsingSmallFont = false;

    if (font === 'frontSmall') yOff = 1;
    else if (font === 'frontSmallDest') yOff = 3, isUsingSmallFont = true;

    // if (dest.length > 15) {
    //     font = 'frontSmall'
    //     yOff = 1;
    // }
    //
    // if (dest.length > 22 && dest.includes('-')) {
    //     isUsingSmallFont = true;
    //     font = 'frontSmallDest';
    //     yOff = 3;
    // } else {
    //     isUsingSmallFont = false;
    // }

    console.log(font)

    let totalWidth = getTextWidth(chars, font, 1);

    let xPos = 1;

    clearRect(0, 0, totalWidth, 10 + yOff);

    chars.forEach((char, i) => {
        let spacing = 1;

        if (char === '-' || chars[i + 1] === '-') spacing = 0;

        xPos += showChar(char, font, xPos, yOff) + 1;
    });
}

function showSvcInfo(line) {
    let chars = [...line.toString()];

    let font = isUsingSmallFont ? 'frontSmallDest' : 'frontSmall';

    let totalWidth = getTextWidth(chars, font, 1);

    let xPos = 1;

    clearRect(0, 12, totalWidth - 1, height);

    chars.forEach(char => {
        xPos += showChar(char, font, xPos, 12) + 1;
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

    state = state ^ ledsInverted;

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

let lastState = '', lastEvent = {};

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);
    if (event.origin === location.origin) {
        switch (eventData.type) {
            case 'svc-update':
                lastState = 'handleSvcUpdate';
                lastEvent = eventData;
                handleSvcUpdate(eventData);
                break;
            case 'special-code':
                lastState = 'handleSpecialCode';
                lastEvent = eventData;
                handleSpecialCode(eventData);
                break;
            case 'led-invert':
                ledsInverted = eventData.state;

                window[lastState](lastEvent, 1);
                break;
        }
    }
});

function doEDSScroll() {
    clearLEDs();

    if (currentSvc.endsWith('e')) {
        showImage('fastForward');
        showSvc(currentSvc);
    } else if (currentRouteType === 'EXPRESS') {
        showImage('express');
        showSvc(currentSvc);
    } else if (currentDest === 'CITY DIRECT') {
        writeText(currentDest, 'fat', 1);
        showSvc(currentSvc);
    } else if (currentDest === 'PREMIUM') {
        writeText(currentDest, 'fat', 2);
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

function shortenRoadName(roadName) {
    return roadName.replace('Jurong', 'Jur').replace('West ', 'W.').replace('East ', 'E.');
}

let edsScrollInterval = 0;

function handleSpecialCode(event) {
    let code = event.code;
    clearInterval(edsScrollInterval);

    switch (code) {
        case '1':
            for (let x = 0; x < width; x++)
                for (let y = 0; y < height; y++)
                    setLEDState(x, y, true);
            break;
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
        case '7777':
            writeTextCentered('FREE SHUTTLE', 'fat', 2);
            break;
        case '9999':
            writeTextCentered('VER. 14SEP14-DD', 'frontVersion', 1);
            break;
    }
}

function determineDest(dest, svc, routeType, loopPoint) {
    if (routeType === 'TRUNK' && loopPoint) {
        if (dest === '> LOR 1 GEYLANG TER')
            dest = '> GEYLANG'
        return dest.slice(2) + '-' + loopPoint;
    }
    if (routeType === 'FEEDER' || routeType === 'TRUNK') {
        return dest;
    }
    if (routeType === 'INDUSTRIAL') {
        if (svc.startsWith('25') && svc.length === 3) {
            return dest.slice(2) + '-' + loopPoint;
        } else if (svc.startsWith('24') && svc.length === 3) {
            return dest;
        }
    }
    if (routeType === 'TOWNLINK') {
        if (svc.startsWith('8') && svc.length === 3) { // Yishun svc
            return '> ' + loopPoint;
        } else {
            return dest.slice(2) + '-' + loopPoint;
        }
    }
}

function handleSvcUpdate(event, preventReset) {
    let svc = event.svc,
        dest = event.dest,
        direction = event.direction,
        loopPoint = event.loopPoint,
        routeType = event.routeType;

    console.log('front: change to', svc, dest);
    clearLEDs();

    currentSvc = svc;
    currentDirection = 1 + direction;
    currentLoopPoint = loopPoint;
    currentRouteType = routeType;

    currentDest = determineDest(dest, svc, routeType, loopPoint).toUpperCase();

    console.log(currentDest);

    if (!preventReset)
        currentScrollPos = 0;
    else
        currentScrollPos--;

    if (!preventReset) {
        clearInterval(edsScrollInterval);
        edsScrollInterval = setInterval(doEDSScroll, 2500);
    }

    doEDSScroll();
}
