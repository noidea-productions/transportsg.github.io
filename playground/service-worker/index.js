if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/playground/service-worker/worker.js', {
        scope: '/playground/service-worker/'
    }).then(reg => {
        console.log('success', reg)
    }).catch(err => {
        console.log('fail', err);
    });

}
