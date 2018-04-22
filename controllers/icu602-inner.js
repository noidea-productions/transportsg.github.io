let choiceScreenScrolls = {
    dest: 0,
    extra: 0
}

let currentScreen = '';

let currentDest = 0;
let currentExtra = 0;

let EDSTemplateSet = {};
let EDSDataSet = {};
let EDSTemplates = {};
let EDSData = {};
let EDSImages = {};
let EDSExtraMessageSet = {};
let EDSExtraMessage = {};

let previewPresets = {
    full: (data) => {
        let textContainer = document.getElementById('full-sized');
        textContainer.textContent = data.text;
    },
    info: (data) => {
        let nodes = document.getElementById('output-info').children;
        let linePrefixes = ['Line : ', 'Dest : ', 'Extr : '];

        if (data.length !== 3) return;
        data.forEach((e, i) => {
            nodes[i].textContent = linePrefixes[i] + e;
        });
    },
    standardService: (data) => {
        let textContainer = document.getElementById('full-sized');
        textContainer.textContent = data.serviceNumber;
    }
};

function setPreview(type, data) {
    if (previewPresets[type]) previewPresets[type](data);
}

function homeScreenInit() {
    document.getElementById('function-label-row').innerHTML = '<div><span>Dest</span></div><div><span>Extra</span></div>';
}

function destScreenInit() {
    document.getElementById('function-label-row').innerHTML = '<div><span>Sort</span></div>';

    paintDestScreen();
}

function extraScreenInit() {
    document.getElementById('function-label-row').innerHTML = '<div><span>Sort</span></div>';

    paintExtraScreen();
}

function paintChoiceScreen(screenName, dataSource, previewFunction) {
    let allCodes = Object.keys(dataSource).sort((a, b) => a - b);

    let startCode = Math.max(0, choiceScreenScrolls[screenName] - choiceScreenScrolls[screenName] % 3);

    function createDestRow(code, dest, selected) {
        return `<div class='${screenName}-table-item'><span>${code}</span><span></span><span>${dest}</span></div>`;
    }

    let html = '';
    for (let i = startCode; i < startCode + 3; i++) {
        let destData = dataSource[allCodes[i]];
        if (!destData) continue;

        html += createDestRow(allCodes[i], previewFunction(destData));
    }

    document.getElementById('table-'+ screenName).innerHTML = html;

    document.getElementsByClassName(screenName + '-table-item')[choiceScreenScrolls[screenName] % 3].className = screenName + '-table-item selected-row';
}

function paintDestScreen() {
    paintChoiceScreen('dest', EDSData, function createPreview(data) {
        if (data.renderType === 'full') return data.text;
        if (data.renderType === 'standardService') return data.destination.text + ' ' + data.serviceNumber;
    });
}


function paintExtraScreen() {
    paintChoiceScreen('extra', EDSExtraMessage, function createPreview(data) {
        return data.text;
    });
}

function setScreen(screen) {
    let allStates = ['home', 'dest', 'extra'];
    function hideScreens() {
        allStates.forEach(e => document.getElementById('screen-' + e).style = 'display: none');
    }

    currentScreen = screen;

    hideScreens();

    document.getElementById('screen-' + screen).style.display = ''
    window[screen + 'ScreenInit']();
}

function updateOperator(operator) {
    EDSTemplates = EDSTemplateSet[operator];
    EDSData = EDSDataSet[operator];
    EDSExtraMessage = EDSExtraMessageSet[operator];

    choiceScreenScrolls.dest = choiceScreenScrolls.extra = 0;
    setScreen('home');
}

window.addEventListener('message', (event) => {
    let eventData = JSON.parse(event.data);

    if (eventData.mode === 'setOperator') {
        updateOperator(eventData.operator);
        return;
    }

    if (eventData.mode === 'updateCode') {
        handleCodeUpdate(eventData.code, eventData.data);
        return;
    }

    if (eventData.mode === 'selectService') {
        setScreen('dest');
        return;
    }

    if (eventData.mode === 'selectExtra') {
        setScreen('extra');
        return;
    }

    if (eventData.mode === 'homePage') {
        setScreen('home');
        return;
    }

    if (eventData.mode === 'pressUp') {
        choiceScreenScrolls[currentScreen]--;

        if (choiceScreenScrolls[currentScreen] < 0) choiceScreenScrolls[currentScreen] = 0;

        paintDestScreen();
        paintExtraScreen();

        return;
    } else if (eventData.mode === 'pressDown') {
        let dataSource = {
            dest: EDSData,
            extra: EDSExtraMessage
        }
        choiceScreenScrolls[currentScreen]++;

        if (choiceScreenScrolls[currentScreen] >= Object.keys(dataSource[currentScreen]).length) {
            choiceScreenScrolls[currentScreen] = Object.keys(dataSource[currentScreen]).length - 1;
        }

        if (currentScreen === 'dest')
            paintDestScreen();
        else if (currentScreen === 'extra')
            paintExtraScreen();
        return;
    }

    if (eventData.mode === 'enterPressed') {
        let dataSource = {
            dest: EDSData,
            extra: EDSExtraMessage
        }
        let allCodes = Object.keys(dataSource[currentScreen]).sort((a, b) => a - b);
        let currentCode = allCodes[choiceScreenScrolls[currentScreen]];

        if (currentScreen === 'dest') {
            let data = dataSource[currentScreen][currentCode];

            handleCodeUpdate(currentCode);
            setPreview(data.renderType, data);
        } else if (currentScreen === 'extra') {
            handleExtraUpdate(currentCode);
        }

        setScreen('home');
        setPreview('info', [0, currentDest, currentExtra]);
        return;
    }
});

function handleExtraUpdate(code) {
    parent.postMessage(JSON.stringify({
        mode: 'extraUpdated',
        code: code
    }), parent.location.toString());
}

function handleCodeUpdate(code) {
    parent.postMessage(JSON.stringify({
        mode: 'codeUpdated',
        code: code
    }), parent.location.toString());
}

window.addEventListener('load', () => {
    setScreen('home');
    updateOperator('SMRT');
});
