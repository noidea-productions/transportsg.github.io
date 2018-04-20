EDSTemplateSet['TTSG'] = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber',
                serviceFont: 'tts-svc'
            },
            font: 'tts-svc',
            format: '<serviceNumber,serviceFont,0>',
            spaceWidth: 2,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font',
            },
            font: '$scrolls[]font',
            format: ['<destination,destinationFont,7>', '<currentRoad,currentRoadFont,0>'],
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ]
}

EDSDataSet['TTSG'] = {
    771: {
        renderType: 'standardService',
        serviceNumber: '77',
        destination: {
            text: 'BUKIT BATOK',
            font: 'fat'
        },
        scrolls: [
            {
                "text": "STAMFORD RD",
                "font": "narrow"
            },
            {
                "text": "ORCHARD BOULEVARD",
                "font": "narrow"
            },
            {
                "text": "HOLLAND RD / VILLAGE",
                "font": "narrow"
            },
            {
                "text": "SIXTH AVE",
                "font": "narrow"
            },
            {
               "text": "TOH TUCK RD",
               "font": "narrow"
            }
        ]
    },
    1731: {
        renderType: 'standardService',
        serviceNumber: '173',
        destination: {
            text: 'CLEMENTI',
            font: 'fat'
        },
        scrolls: [
            {
                text: 'HILLVIEW AVE',
                font: 'narrow'
            }
        ]
    },
    1891: {
        renderType: 'standardService',
        serviceNumber: '189',
        destination: {
            text: 'CLEMENTI AVE 1',
            font: 'fat'
        },
        scrolls: [
            {
                text: 'BT BATOK EAST AVE 6',
                font: 'narrow'
            }
        ]
    }
}
