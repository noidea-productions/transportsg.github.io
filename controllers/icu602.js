let inner = null;
let state = 'home';

window.addEventListener('load', () => {
    inner = document.getElementById('controller-iframe').contentWindow;
    document.getElementById('button-f1').addEventListener('click', onF1Pressed);

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
            mode: 'selectService',
            code: code,
            data: EDSData[code]
        }), location.toString());
    }
}
