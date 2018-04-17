let controller, frontEDS;

window.addEventListener('load', () => {
    controller = document.getElementById('controller');
    frontEDS = document.getElementById('front')
});

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        propagateEvent(eventData);
    }
});

function propagateEvent(eventData) {
    frontEDS.contentWindow.postMessage(JSON.stringify(eventData), location.toString());
}
