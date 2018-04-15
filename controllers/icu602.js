let inner = null;

window.onload = () => {
    inner = document.getElementById('controller-iframe').contentWindow;
}

function setCode(code) {
    if (code in EDSData) {
        inner.postMessage(JSON.stringify({
            mode: 'updateCode',
            code: code,
            data: EDSData[code]
        }), location.toString());
    }
}
