let controller, rearEDS, frontEDS;

window.addEventListener('load', () => {
    controller = document.getElementById('controller');
    rearEDS = document.getElementById('rear');
    frontEDS = document.getElementById('front')
});
window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        switch (eventData.type) {
            case 'svc-update':
                onSvcUpdated(eventData.svc, eventData.dest);
                break;
            default:
                break;
        }
    }
});

function onSvcUpdated(newSvc, newDest) {
    console.log('load svc ', newSvc);
    rearEDS.contentWindow.postMessage(JSON.stringify({
        type: 'svc-update',
        svc: newSvc
    }), location.toString());
    
    frontEDS.contentWindow.postMessage(JSON.stringify({
        type: 'svc-update',
        svc: newSvc,
        dest: newDest
    }), location.toString());
}
