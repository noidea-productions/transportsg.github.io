let EDSTemplates = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 2,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font',
                arrow: '> ',
            },
            font: '$scrolls[]font',
            format: ['<currentRoad,currentRoadFont,9>','<arrow,destinationFont,0><destination,destinationFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'left'
        }
    ]
}

let EDSData = {
    1741: {
        renderType: 'standardService',
        serviceNumber: '174',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin'
        },
        scrolls: [
            {
                "text": "EU TONG SEN ST",
                "font": "narrow"
            },
            {
                "text": "ORCHARD BLVD",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD",
                "font": "narrow"
            },
            {
                "text": "FARRER RD",
                "font": "narrow"
            },
            {
                "text": "BUKIT TIMAH RD",
                "font": "narrow"
            },
            {
                "text": "JLN JURONG KECHIL",
                "font": "narrow"
            },
            {
                "text": "BT BATOK E. AVE 6, 3",
                "font": "narrow"
            }
        ]
    },
    1742: {
        renderType: 'standardService',
        serviceNumber: '174',
        serviceFont: 'full',
        destination: {
            text: 'KAMPONG BAHRU TER',
            font: 'thin'
        },
        scrolls: [
            {
                "text": "BT BATOK E. AVE 6, 3",
                "font": "narrow"
            },
            {
                "text": "JLN JURONG KECHIL",
                "font": "narrow"
            },
            {
                "text": "DUNEARN RD",
                "font": "narrow"
            },
            {
                "text": "FARRER RD",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD RD",
                "font": "narrow"
            },
            {
                "text": "NTH, STH BRIDGE RD",
                "font": "narrow"
            },
            {
                "text": "NTH BRIDGE RD",
                "font": "narrow"
            }
        ]
    }
}
