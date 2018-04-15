let screen = [];

function drawHomeScreen(context, width, height) {
    context.fillStyle = '#000000';

    let boxWidth = width / 6, boxSpacing = width / 40;
    let boxHeight = height / 3.5

    context.fillRect(boxWidth * 0 + boxSpacing * 1, height - boxHeight, width / 6, boxHeight);
    context.fillRect(boxWidth * 1 + boxSpacing * 2, height - boxHeight, width / 6, boxHeight);

    context.font = height * 0.2 + 'px Verdana';
    context.fillStyle = '#3b9cd2';
    context.fillText('Dest', boxSpacing + (boxWidth / 2 - context.measureText('Dest').width / 2),
                             height - boxHeight + (boxHeight / 2 + height * 0.07));
     context.fillText('Extra', boxSpacing * 2 + boxWidth + (boxWidth / 2 - context.measureText('Extra').width / 2),
                              height - boxHeight + (boxHeight / 2 + height * 0.07));
}

function createScreen() {
    let canvas = document.getElementById('screen-canvas');
    let context = canvas.getContext('2d');

    function setCanvasHeight() {
        let width = innerWidth * 0.493,
            height = innerWidth * 0.115;

        canvas.width = width, canvas.height = height;

        context.fillStyle = '#3b9cd2';
        context.fillRect(0,0,width,height);

        drawHomeScreen(context, width, height);
    }

    setCanvasHeight();
    window.addEventListener('resize', setCanvasHeight);
}

window.onload = createScreen;
