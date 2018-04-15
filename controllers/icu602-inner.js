let destScreenScroll = 0;
let destScreenScreenPos = 0;

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

    destScreenScroll = destScreenScreenPos = 0;
    paintDestScreen();
}

function paintDestScreen() {
    let allCodes = Object.keys(EDSData).sort((a, b) => a - b);

    let startCode = destScreenScroll - destScreenScreenPos;

    function createDestRow(code, dest) {
        return `<div class='dest-table-item'><span>${code}</span><span></span><span>${dest}</span></div>`;
    }

    function createPreview(data) {
        if (data.renderType === 'fullSized') return data.text;
        if (data.renderType === 'standardService') return data.destination.text + ' ' + data.serviceNumber;
    }

    let html = '';
    for (let i = startCode; i < startCode + 3; i++) {
        let destData = EDSData[allCodes[i]];
        html += createDestRow(allCodes[i], createPreview(destData));
    }

    document.getElementById('dest-table').innerHTML = html;

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
    }
});

function handleCodeUpdate(code, data) {
    setPreview('info', [0, code, 0]);
    setPreview(data.renderType, data)
}

window.addEventListener('load', () => {
    setScreen('dest');
});
