let controller, frontEDS;

window.addEventListener('load', () => {
    controller = document.getElementById('controller');
    frontEDS = document.getElementById('front')
});

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        if (eventData.type === 'controller-preview') {
            controller.contentWindow.postMessage(event.data, location.toString());
            return;
        }
        propagateEvent(eventData);
    }
});

function propagateEvent(eventData) {
    frontEDS.contentWindow.postMessage(JSON.stringify(eventData), location.toString());
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/mobi-serviceworker.js', {
        scope: '/'
    }).then(reg => {
        console.log('success', reg)
    }).catch(err => {
        console.log('fail', err);
    });
}
