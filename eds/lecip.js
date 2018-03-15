let controller = document.getElementById('controller');
let rearEDS = document.getElementById('rear');

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
    rear.contentWindow.postMessage(JSON.stringify({
        type: 'svc-update',
        svc: newSvc
    }), location.toString());
}
