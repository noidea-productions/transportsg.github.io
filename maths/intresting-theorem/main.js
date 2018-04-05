let canvas, context;

let quadPoints = [];
let isMouseDown = false, movingPoint = -1;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static randomPoint(lowX, lowY, highX, highY) {
        let xRange = highX - lowX,
            yRange = highY - lowY;

        let x = lowX + Math.random() * xRange,
            y = lowY + Math.random() * yRange;

        return new Point(x, y);
    }
}

function doResizing() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
}

function onMouseMoved(event) {
    let absDiff = (a, b) => Math.abs(a - b);
    let mouseX = event.clientX, mouseY = event.clientY;

    quadPoints.forEach((point, i, a) => {
        if ((absDiff(point.x, mouseX) < 10 && absDiff(point.y, mouseY) < 10) && (movingPoint === -1 || movingPoint === i) || (+new Date() - point.lastMoveTime) < 500) {
            if (isMouseDown) {
                isMovingPoint = i;

                point.x = mouseX;
                point.y = mouseY;

                point.lastMoveTime = +new Date();

                quadPoints = sortPoints(quadPoints);
            } else isMovingPoint = -1;
        }
    })
}

function getCentrePoint(points) {
    let centreX = centreY = 0;

    points.forEach(point => {
        centreX += point.x;
        centreY += point.y;
    });

    centreX /= points.length;
    centreY /= points.length;

    return new Point(centreX, centreY);
}

function sortPoints(points) {
    let centre = getCentrePoint(points);

    context.fillRect(centre.x - 1, centre.y - 1, 3, 3);

    return points.sort((point, prev) => {
        if (point.x - centre.x >= 0 && prev.x - centre.x <= 0)
            return -1;
        if (point.x - centre.x < 0 && prev.x - centre.x > 0)
            return 1;
        if (point.x == centre.x && prev.x == centre.x) {
            if (point.y - centre.y >= 0 || prev.y - centre.y >= 0)
                return point.y - prev.y;
            return prev.y - point.y;
        }

        return (point.x - centre.x) * (prev.y - centre.y) - (prev.x - centre.x) * (point.y - centre.y);
    });
}

function initData() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    for (let p = 0; p < 4; p++)
        quadPoints.push(Point.randomPoint(0, 0, width, height));

    quadPoints.map(point => {
        point.lastMoveTime = 0;
        return point;
    })

    quadPoints = sortPoints(quadPoints);
}

function getMidpoint(point1, point2) {
    return new Point((point1.x + point2.x) / 2, (point1.y + point2.y) / 2);
}

function getMidpoints(_) {
    let points = _.slice(0);
    points.push(points[0]);

    return sortPoints(points.map((point, i, a) => {
        if (i === a.length - 1) return;

        let nextPoint = a[i + 1];
        return getMidpoint(point, nextPoint);
    }).slice(0, -1));
}

function paintPoints(points, colour) {
    context.strokeStyle = colour;

    context.beginPath();
    let prevX = points[0].x, prevY = points[0].y;

    points.forEach(point => {
        context.moveTo(prevX, prevY);
        context.lineTo(point.x, point.y);

        prevX = point.x;
        prevY = point.y;
    });

    context.lineTo(points[0].x, points[0].y)

    context.stroke();
}

function calculateGradient(point1, point2) {
    return (point2.y - point1.y) / (point2.x - point1.x);
}

function strokeGradients(midpoints) {
    let Mcd = calculateGradient(midpoints[2], midpoints[3]);
    let Mba = calculateGradient(midpoints[1], midpoints[0]);

    context.strokeStyle = context.fillStyle = 'black';
    context.font = '20px roboto';

    context.fillText('Gradient of CD: ' + Mcd, 10, 25);
    context.fillText('Gradient of BA: ' + Mcd, 10, 55);
}

function paintCanvas() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    let midpoints = getMidpoints(quadPoints);

    paintPoints(quadPoints, 'black');
    paintPoints(midpoints, 'red');

    context.strokeStyle = context.fillStyle = 'blue';
    context.font = '30px roboto';

    midpoints.forEach((midpoint, i) => {
        let textX = midpoint.x - 10,
            textY = midpoint.y - 7;

        context.fillText(String.fromCharCode(65 + i), textX, textY);
    });

    strokeGradients(midpoints);

    requestAnimationFrame(paintCanvas);
}

let onLoad = () => {
    canvas = $('#canvas');
    context = canvas.getContext('2d');

    doResizing();

    initData();

    canvas.addEventListener('mousemove', onMouseMoved);
    canvas.addEventListener('mousedown', () => isMouseDown = true);
    canvas.addEventListener('mouseup', () => isMouseDown = false);

    paintCanvas();
};

if (document.readyState && document.readyState === 'complete')
    onLoad();
else
    window.addEventListener('load', onLoad);

window.addEventListener('resize', doResizing);

function $(query) {
    return document.querySelector(query);
}
