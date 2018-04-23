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
    ],
    ffwSvc: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 2,
            align: 'right'
        },
        {
            variables: {
            },
            font: 'thick',
            format: '',
            spaceWidth: 1,
            align: 'left',
            images: [
                {
                    name: 'ffw',
                    x: 0
                }
            ]
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
    1072: {
        renderType: 'standardService',
        serviceNumber: '107',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG CTRL INT',
            font: 'thin'
        },
        scrolls: [
            {
                "text": "BEACH RD",
                "font": "narrow"
            },
            {
                "text": "LAVENDER ST",
                "font": "narrow"
            },
            {
                "text": "KALLANG BAHRU",
                "font": "narrow"
            },
            {
                "text": "UPPER SERANGOON RD",
                "font": "narrow"
            },
            {
               "text": "HOUGANG AVE 10",
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
    1743: {
        renderType: 'ffwSvc',
        serviceNumber: '174e',
        serviceFont: 'full',
        text: 'FAST FORWARD 174'
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
                "text": "SEMBAWANG RD",
                'font': 'narrow'
            },
            {
                "text": "YISHUN ST 71",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
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
            },
            {
                "text": "YISHUN RING RD",
                'font': 'narrow'
            },
            {
                "text": "YISHUN ST 41",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 1",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 11",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
                'font': 'narrow'
            }
        ]
    },
    8051: {
        renderType: 'int-loopSvc',
        serviceNumber: '805',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT-YISHUN AVE 1',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "YISHUN AVE 2",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 4",
                'font': 'narrow'
            },
            {
                "text": "YISHUN AVE 1",
                'font': 'narrow'
            },
            {
                "text": "YISHUN RING RD",
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
                "text": "YISHUN AVE 9,6,7",
                "font": "narrow"
            },
            {
                "text": "SEMBAWANG RD",
                "font": "narrow"
            },
            {
                "text": "YISHUN AVE 5,2",
                "font": "narrow"
            },
            {
                "text": "YISHUN RING RD",
                "font": "narrow"
            },
            {
                "text": "YISHUN AVE 2",
                "font": "narrow"
            }
        ]
    },
    2471: {
        renderType: 'int-loopSvc',
        serviceNumber: '247',
        serviceFont: 'full',
        destination: {
            text: 'TUAS TER-TUAS BAY LINK',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "TUAS AVE 7",
                "font": "narrow"
            },
            {
                "text": "TUAS CRES",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 5&4&7",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 3&9&8",
                "font": "narrow"
            },
            {
                "text": "TUAS LINK 4",
                "font": "narrow"
            }
        ]
    },
    2481: {
        renderType: 'int-loopSvc',
        serviceNumber: '248',
        serviceFont: 'full',
        destination: {
            text: 'TUAS TER-TUAS STH AVE 14',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "PIONEER RD",
                "font": "narrow"
            },
            {
                "text": "TUAS AVE 20",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 5",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 9",
                "font": "narrow"
            },
            {
                "text": "TUAS STH AVE 10",
                "font": "narrow"
            }
        ]
    },
    2581: {
        renderType: 'int-loopSvc',
        serviceNumber: '258',
        serviceFont: 'full',
        destination: {
            text: 'JOO KOON INT-JUR W. ST 64',
            font: 'tall'
        },
        scrolls: [
            {
                "text": "PIONEER RD NTH",
                "font": "narrow"
            },
            {
                "text": "JURONG W. ST 61&81&75",
                "font": "narrow"
            },
            {
                "text": "JALAN AHMAD IBRAHIM",
                "font": "narrow"
            }
        ]
    },
    2222: {
        renderType: 'logo',
        text: 'SBS TRANSIT'
    }
}

EDSImageSet['SBST'] = {
    ffw: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ]
}
