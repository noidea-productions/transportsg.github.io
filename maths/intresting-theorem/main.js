let canvas, context;

function doResizing() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
}

function onMouseMoved(event) {
    let mouseX = event.clientX, mouseY = event.clientY;
}

let onLoad = () => {
    canvas = $('#canvas');
    context = canvas.getContext('2d');

    doResizing();

    canvas.addEventListener('mousemove', onMouseMoved);
};

if (document.readyState && document.readyState === 'complete')
    onLoad();
else
    window.addEventListener('load', onLoad);

window.addEventListener('resize', doResizing);

function $(query) {
    return document.querySelector(query);
}
