let currentSvc = '174';
let currentState = 'off';
let svcBeingInputted = [];

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
        if (svcBeingInputted.length > 4)
            svcBeingInputted.shift();
        svcBeingInputted.push(number);
        renderText('Input Route No.', '           ' + padTo4Digit(svcBeingInputted));
    }
}

function runMainFirmware() {
    renderText('Route No: ' + currentSvc + ' 1 ', '> NEW BRIDGE RD');
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
}

window.addEventListener('load', main);
