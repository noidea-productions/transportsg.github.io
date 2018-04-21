let inner = null;
let state = 'home';

window.addEventListener('load', () => {
    inner = document.getElementById('controller-iframe').contentWindow;
    document.getElementById('button-f1').addEventListener('click', onF1Pressed);
    document.getElementById('button-f2').addEventListener('click', onF2Pressed);
    document.getElementById('button-no').addEventListener('click', onCrossPressed);
    document.getElementById('button-yes').addEventListener('click', onYesPressed);
    document.getElementById('button-up').addEventListener('click', onUpPressed);
    document.getElementById('button-down').addEventListener('click', onDownPressed);
    document.getElementById('operator-selector').addEventListener('change', onOperatorChanged);

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

function onF2Pressed() {
    if (state === 'home') {
        state = 'selectExtra';
        inner.postMessage(JSON.stringify({
            mode: 'selectExtra'
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
    if (state !== 'home') {
        state = 'home';
        inner.postMessage(JSON.stringify({
            mode: 'enterPressed'
        }), inner.location.toString());
    }
}

function onUpPressed() {
    if (state !== 'home') {
        inner.postMessage(JSON.stringify({
            mode: 'pressUp'
        }), inner.location.toString());
    }
}

function onDownPressed() {
    if (state !== 'home') {
        inner.postMessage(JSON.stringify({
            mode: 'pressDown'
        }), inner.location.toString());
    }
}

function onOperatorChanged(e) {
    let currentOperator = document.querySelectorAll('#operator-selector > option')
    [document.getElementById('operator-selector').selectedIndex].textContent;
    inner.postMessage(JSON.stringify({
        mode: 'setOperator',
        operator: currentOperator
    }), inner.location.toString());

    parent.postMessage(JSON.stringify({
        mode: 'setOperator',
        operator: currentOperator
    }), parent.location.toString());

    state = 'home';
}

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        parent.postMessage(event.data, parent.location.toString());
    }
});
