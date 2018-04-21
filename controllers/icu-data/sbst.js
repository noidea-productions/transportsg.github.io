EDSTemplateSet['SBST'] = {
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
    ],
    'int-loopSvc': [
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
            },
            font: '$scrolls[]font',
            format: ['<currentRoad,currentRoadFont,9>','<destination,destinationFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'left'
        }
    ]
}

EDSDataSet['SBST'] = {
    1071: {
        renderType: 'standardService',
        serviceNumber: '107',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY TER',
            font: 'thin'
        },
        scrolls: [
            {
                "text": "HOUGANG AVE 10",
                "font": "narrow"
            },
            {
                "text": "UPPER SERANGOON RD",
                "font": "narrow"
            },
            {
                "text": "KALLANG BAHRU",
                "font": "narrow"
            },
            {
                "text": "LAVENDER ST",
                "font": "narrow"
            },
            {
               "text": "BEACH RD",
               "font": "narrow"
            }
        ]
    },
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
                "text": "ORCHARD BOULEVARD",
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
                "text": "JALAN JURONG KECHIL",
                "font": "narrow"
            },
            {
                "text": "BT BATOK EAST AVE 6&3",
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
                text: 'JURONG ROAD',
                font: 'narrow'
            },
            {
                "text": "BT BATOK EAST AVE 3&6",
                "font": "narrow"
            },
            {
                "text": "JALAN JURONG KECHIL",
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
                "text": "NORTH&SOUTH BRIDGE RD",
                "font": "narrow"
            }
        ]
    },
    8001: {
        renderType: 'int-loopSvc',
        serviceNumber: '800',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT-SEMBAWANG RD',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 7",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
                'font': 'narrow'
            },
            {
                "text": "SEMBAWANG RD",
                'font': 'narrow'
            }
        ]
    },
    8041: {
        renderType: 'int-loopSvc',
        serviceNumber: '804',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT-YISHUN AVE 11',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 2",
                'font': 'narrow'
            }
        ]
    },
    8061: {
        renderType: 'standardService',
        serviceNumber: '860',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin'
        },
        scrolls: [
            {
                "text": "UPPER THOMSON RD",
                "font": "narrow"
            },
            {
                "text": "ANG MO KIO AVE 5",
                "font": "narrow"
            },
            {
                "text": "YISHUN RING RD",
                "font": "narrow"
            },
            {
                "text": "YISHUN AVE 3",
                "font": "narrow"
            }// Boo missing data
        ]
    },
    8111: {
        renderType: 'standardService',
        serviceNumber: '811',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN AVE 5 & 1',
            font: 'thin'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 1",
                "font": "narrow"
            }
        ]
    },
}
