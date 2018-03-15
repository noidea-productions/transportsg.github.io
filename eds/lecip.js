let controller, rearEDS;

window.addEventListener('load', () => {
    controller = document.getElementById('controller');
    rearEDS = document.getElementById('rear');
});
window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        switch (eventData.type) {
            case 'svc-update':
                onSvcUpdated(eventData.svc);
                break;
            default:
                break;
        }
    }
});

function onSvcUpdated(newSvc) {
    console.log('load svc ', newSvc);
    rearEDS.contentWindow.postMessage(JSON.stringify({
        type: 'svc-update',
        svc: newSvc
    }), location.toString());
}
