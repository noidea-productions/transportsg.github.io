let currentSvc = '174';
let currentDest = '> NEW BRIDGE RD';
let currentDir = false;

let currentState = 'off';
let svcBeingInputted = [0,0,0,0];

let dests = {
    174: ['> NEW BRIDGE RD', '> BOON LAY'],
    157: ['>BOON LAY', '> TOA PAYOH'],
    1111: ['OFF SERVICE'],
    2222: ['SBS TRANSIT'],
    4444: ['ON TEST'],
    5555: ['TRAINING BUS'],
    7777: ['FREE SHUTTLE'],
    9999: ['VER. NO']

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

function padTo4DigitSpace(svcArray) {
    return Array(4).fill(' ').concat(svcArray).slice(-4).join('');
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
        if (!currentSvc) currentSvc = '0';

        svcBeingInputted = [0,0,0,0];

        currentDir = 0;
        if (dests[currentSvc]) {
            currentDest = dests[currentSvc][0];
        }
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

function onF4Pressed() {
    if (currentState === 'home') {
        if (dests[currentSvc].length === 2) {
            currentDir = !currentDir;
            currentDest = dests[currentSvc][Number(currentDir)];
        }
    }
}

function paintHome() {
    renderText('Route No:' + padTo4DigitSpace([...currentSvc]) + ' ' + (Number(currentDir) + 1) + ' ', currentDest);
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
    }, (textSets.length) * 2000);
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
    document.getElementById('keypad-f4').addEventListener('click', onF4Pressed);
}

window.addEventListener('load', main);
