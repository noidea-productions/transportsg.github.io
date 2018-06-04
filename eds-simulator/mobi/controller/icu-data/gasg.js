EDSTemplateSet['GASG'] = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber',
                serviceFont: 'gas-svc'
            },
            font: 'tts-svc',
            format: '<serviceNumber,serviceFont,0>',
            spaceWidth: 3,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font',
                via: ' via'
            },
            font: '$scrolls[]font',
            active: '$!scrolls[]extraMsg{false}',
            format: ['<destination,destinationFont,9><via,destinationFont,9>', '<currentRoad,currentRoadFont,0>'],
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ]
}

EDSDataSet['GASG'] = {
    21: {
        renderType: 'standardService',
        serviceNumber: '2',
        destination: {
            text: 'CHANGI VILLAGE',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'SIMS AVE',
                font: 'tall'
            }
        ]
    },
    121: {
        renderType: 'standardService',
        serviceNumber: '12',
        destination: {
            text: 'PASIR RIS',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BEDOK SOUTH RD',
                font: 'tall'
            }
        ]
    },
    123: {
        renderType: 'standardService',
        serviceNumber: '12e',
        destination: {
            text: 'PASIR RIS',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'ECP (EXPRESS)',
                font: 'tall'
            }
        ]
    }
}
