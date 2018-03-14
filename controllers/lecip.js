function renderText(line1, line2) {
    document.getElementById('output-line1').textContent = line1;
    document.getElementById('output-line2').textContent = line2;
}

function performStartup() {
    var textSets = [
        ['IPL', 'USB Initializing'],
        ['IPL: D99610', 'APL: D90913'],
        ['SBS Transit', 'LED Destination']
    ];

    textSets.forEach((lines, index) => {
        setTimeout(() => {
            renderText(lines[0], lines[1]);
        }, index * 2000);
    });
}

function main() {
    setTimeout(() => {
        performStartup();
    }, 1500);
}

main();
