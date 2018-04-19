let inner = null;
let state = 'home';

window.addEventListener('load', () => {
    inner = document.getElementById('controller-iframe').contentWindow;
    document.getElementById('button-f1').addEventListener('click', onF1Pressed);
    document.getElementById('button-no').addEventListener('click', onCrossPressed);
    document.getElementById('button-yes').addEventListener('click', onYesPressed);
    document.getElementById('button-up').addEventListener('click', onUpPressed);
    document.getElementById('button-down').addEventListener('click', onDownPressed);

    inner.postMessage(JSON.stringify({
        mode: 'home'
    }), location.toString());
});

function setCode(code) {
    if (code in EDSData) {
        inner.postMessage(JSON.stringify({
            mode: 'updateCode',
            code: code,
            data: EDSData[code]
        }), location.toString());
    }
}

function onF1Pressed() {
    if (state === 'home') {
        state = 'selectService';
        inner.postMessage(JSON.stringify({
            mode: 'selectService'
        }), inner.location.toString());
    }
}

function onCrossPressed() {
    state = 'home';
    inner.postMessage(JSON.stringify({
        mode: 'homePage'
    }), inner.location.toString());
}

function onYesPressed() {
    if (state === 'selectService') {
        state = 'home';
        inner.postMessage(JSON.stringify({
            mode: 'enterPressed'
        }), inner.location.toString());
    }
}

function onUpPressed() {
    if (state === 'selectService') {
        inner.postMessage(JSON.stringify({
            mode: 'pressUp'
        }), inner.location.toString());
    }
}

function onDownPressed() {
    if (state === 'selectService') {
        inner.postMessage(JSON.stringify({
            mode: 'pressDown'
        }), inner.location.toString());
    }
}

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        parent.postMessage(event.data, parent.location.toString());
    }
});
