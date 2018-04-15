let previewPresets = {
    fullSized: (data) => {
        let textContainer = document.getElementById('full-sized');
        textContainer.textContent = data.text;
    },
    info: (data) => {
        let nodes = document.getElementById('output-info').children;
        let linePrefixes = ['Line : ', 'Dest : ', 'Extr : '];

        if (data.length !== 3) return;
        data.forEach((e, i) => {
            nodes[i].textContent = linePrefixes[i] + e;
        });
    }
};

function setPreview(type, data) {
    if (previewPresets[type]) previewPresets[type](data);
}

window.addEventListener('message', (event) => {
    let eventData = JSON.parse(event.data);

    if (eventData.mode === 'updateCode') {
        handleCodeUpdate(eventData.code, eventData.data);
    }
});

function handleCodeUpdate(code, data) {
    setPreview('info', [0, code, 0]);
    setPreview(data.renderType, data)
}
