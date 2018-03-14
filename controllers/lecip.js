let currentSvc = '174';
let currentDest = '> NEW BRIDGE RD';
let currentState = 'off';
let svcBeingInputted = [0,0,0,0];

let dests = {
    174: '> NEW BRIDGE RD',
    157: '> TOA PAYOH',
    1111: 'OFF SERVICE',
    2222: 'SBS TRANSIT',
    4444: 'ON TEST',
    5555: 'TRAINING BUS',
    7777: 'FREE SHUTTLE',
    9999: ''

};

function renderText(line1, line2) {
    if (!!line1)
        document.getElementById('output-line1').textContent = line1;
    if (!!line2)
        document.getElementById('output-line2').textContent = line2;
}

function padTo4Digit(svcArray) {
    return Array(4).fill(0).concat(svcArray).slice(-4).join('');
}

function registerKeyPress(number) {
    if (currentState === 'home') {
        svcBeingInputted.push(number);
        currentState = 'inputSvc';
        renderText('Input Route No.', '           ' + padTo4Digit(svcBeingInputted));
    } else if (currentState === 'inputSvc') {
        if (svcBeingInputted.length === 4)
            svcBeingInputted.shift();
        svcBeingInputted.push(number);
        renderText('Input Route No.', '           ' + padTo4Digit(svcBeingInputted));
    }
}

function onEntPressed() {
    if (currentState === 'inputSvc') {
        currentSvc = svcBeingInputted.join('').slice(-4);
        currentSvc = currentSvc.slice(currentSvc.lastIndexOf('0') + 1);

        svcBeingInputted = [0,0,0,0];

        if (dests[currentSvc]) currentDest = dests[currentSvc];
        else currentDest = '             E11';
        currentState = 'home';
    }
}

function onClrPressed() {
    if (currentState === 'inputSvc') {
        svcBeingInputted = [0,0,0,0];
        registerKeyPress(0);
    }
}

function paintHome() {
    renderText('Route No: ' + currentSvc + ' 1 ', currentDest);
}

function runMainFirmware() {
    setInterval(() => {
        if (currentState === 'home')
            paintHome();
    }, 20);
}

function performStartup() {
    var textSets = [
        ['IPL', 'USB Initializing'],
        ['IPL: D99610', 'APL: D90913'],
        ['SBS Transit', 'LED Destination']
    ];

    textSets.forEach((lines, index) => {
        setTimeout(() => {
            renderText(lines[0], lines[1]);
        }, index * 2000);
    });

    setTimeout(() => {
        currentState = 'home';
        runMainFirmware();
    }, (textSets.length + 1) * 1000);
}

function main() {
    console.log('lecip controller started')
    setTimeout(() => {
        performStartup();
    }, 1500);

    for (let keynum = 0; keynum < 10; keynum++) {
        let element = document.getElementById('keypad-' + keynum);
        element.addEventListener('click', () => {
            registerKeyPress(keynum);
        });
    }

    document.getElementById('keypad-ent').addEventListener('click', onEntPressed);
    document.getElementById('keypad-clr').addEventListener('click', onClrPressed);
}

window.addEventListener('load', main);
