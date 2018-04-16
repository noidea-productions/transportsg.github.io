let destScreenScroll = 0;

let previewPresets = {
    fullSized: (data) => {
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

function paintDestScreen() {
    let allCodes = Object.keys(EDSData).sort((a, b) => a - b);

    let startCode = Math.max(0, destScreenScroll - destScreenScroll % 3);

    function createDestRow(code, dest, selected) {
        return `<div class='dest-table-item'><span>${code}</span><span></span><span>${dest}</span></div>`;
    }

    function createPreview(data) {
        if (data.renderType === 'fullSized') return data.text;
        if (data.renderType === 'standardService') return data.destination.text + ' ' + data.serviceNumber;
    }

    let html = '';
    for (let i = startCode; i < startCode + 3; i++) {
        let destData = EDSData[allCodes[i]];
        if (!destData) continue;

        html += createDestRow(allCodes[i], createPreview(destData));
    }

    document.getElementById('dest-table').innerHTML = html;

    document.getElementsByClassName('dest-table-item')[destScreenScroll % 3].className = 'dest-table-item selected-row';
}

function setScreen(screen) {
    let allStates = ['home', 'dest'];
    function hideScreens() {
        allStates.forEach(e => document.getElementById('screen-' + e).style = 'display: none');
    }

    hideScreens();

    document.getElementById('screen-' + screen).style.display = ''
    window[screen + 'ScreenInit']();
}

window.addEventListener('message', (event) => {
    let eventData = JSON.parse(event.data);

    if (eventData.mode === 'updateCode') {
        handleCodeUpdate(eventData.code, eventData.data);
        return;
    }

    if (eventData.mode === 'selectService') {
        setScreen('dest');
        return;
    }

    if (eventData.mode === 'homePage') {
        setScreen('home');
        return;
    }

    if (eventData.mode === 'pressUp') {
        destScreenScroll--;

        if (destScreenScroll < 0) destScreenScroll = 0;

        paintDestScreen();
        return;
    } else if (eventData.mode === 'pressDown') {
        destScreenScroll++;

        if (destScreenScroll >= Object.keys(EDSData).length) {
            destScreenScroll = Object.keys(EDSData).length - 1;
        }

        paintDestScreen();
        return;
    }

    if (eventData.mode === 'enterPressed') {
        let allCodes = Object.keys(EDSData).sort((a, b) => a - b);
        let currentCode = allCodes[destScreenScroll];

        handleCodeUpdate(currentCode, EDSData[currentCode]);
        setScreen('home');
        return;
    }
});

function handleCodeUpdate(code, data) {
    setPreview('info', [0, code, 0]);
    setPreview(data.renderType, data)
}

window.addEventListener('load', () => {
    setScreen('home');
});
