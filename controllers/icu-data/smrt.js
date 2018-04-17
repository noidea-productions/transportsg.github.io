let EDSTemplates = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber>',
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font'
            },
            font: '$scrolls[]font',
            active: '$scrolls[]showDest{true}',
            format: ['<destination,destinationFont> via', '<currentRoad,currentRoadFont>'],
            align: 'centre'
        },
        { // Render DEST [SVC]
            variables: {
                fullDestination: '$scrolls[]text'
            },
            font: '$scrolls[]font',
            active: '$!scrolls[]showDest{true}',
            format: {
                '$scrolls[]text(array?)': ['<fullDestination[0]>', '<fullDestination[1]>'], // Render multiline dest
                '$!scrolls[]text(array?)': ['<fullDestination>'] // Render singleline dest
            },
            align: 'centre'
        }
    ]
}

let EDSData = {
    1: {
        renderType: 'full',
        text: 'CHARTERED'
    },
    2: {
        renderType: 'full',
        text: 'ANG MO KIO DEPOT'
    },
    3: {
        renderType: 'full',
        text: 'KRANJI DEPOT'
    },
    4: {
        renderType: 'full',
        text: 'SMRT BUSES'
    },
    5: {
        renderType: 'full',
        text: 'OFF SERVICE'
    },
    6: {
        renderType: 'full',
        text: 'WOODLANDS DEPOT'
    },
    7: {
        renderType: 'full',
        text: 'OFF SERVICE'
    },
    8: {
        renderType: 'full',
        text: 'OFF SERVICE'
    },
    9: {
        renderType: 'full',
        text: 'ON DRIVING TEST'
    },
    10: {
        renderType: 'full',
        text: 'FERRY SERVICE'
    },
    11: {
        renderType: 'full',
        text: 'MRT SHUTTLE'
    },
    13: {
        renderType: 'full',
        text: 'TRAINING BUS'
    },
    14: {
        renderType: 'full',
        text: '???'
    },
    16: {
        renderType: 'full',
        text: 'PULAU TEKONG'
    },
    18: {
        renderType: 'full',
        text: 'LRT SHUTTLE A'
    },
    19: {
        renderType: 'full',
        text: 'LRT SHUTTLE B'
    },
    469: {
        renderType: 'standardService',
        serviceNumber: '172',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['BOON LAY', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG DRIVE',
                font: 'thick'
            },
            {
                text: 'CHOA CHU KANG AVE 1, 3',
                font: 'thick'
            },
            {
                text: 'CHOA CHU KANG RD',
                font: 'thick'
            },
            {
                text: 'BRICKLAND RD',
                font: 'thick'
            },
            {
                text: 'JALAN BEHAR',
                font: 'thick'
            }
        ]
    },
    475: {
        renderType: 'standardService',
        serviceNumber: '188',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'HARBOURFRONT',
                font: 'big',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thick'
            },
            {
                text: 'B. B WEST AVE 4, 2',
                font: 'thick'
            },
            {
                text: 'TOH GUAN ROAD',
                font: 'thick'
            },
            {
                text: 'BOON LAY WAY',
                font: 'thick'
            },
            {
                text: 'AYE, CLEMENTI RD',
                font: 'thick'
            } //Missing data oh noeses!!
        ]
    },
    497: {
        renderType: 'standardService',
        serviceNumber: '61',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT BATOK',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT BATOK', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'UBI AVE 2',
                font: 'thick'
            },
            {
                text: 'MACPHERSON RD',
                font: 'thick'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thick'
            },
            {
                text: 'NORTH BRIDGE RD',
                font: 'thick'
            },//missing data
            {
                text: 'CLEMENTI RD',
                font: 'thick'
            }

        ]
    },
    611: {
        renderType: 'standardService',
        serviceNumber: '176',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BUKIT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thick'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thick'
            },
            {
                text: 'BT BATOK CTR/ MRT',
                font: 'thick'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thick'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thick'
            }
        ]
    },
    529: {
        renderType: 'standardService',
        serviceNumber: '985',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1', '/KALLANG MRT'],
                font: 'thick'
            }
        ]
    },
    1901: {
        renderType: 'standardService',
        serviceNumber: '190',
        serviceFont: 'full',
        destination: {
            text: 'KAMPONG BAHRU TER',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['KAMPONG BAHRU', 'TERMINAL'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BT PANJANG RD',
                font: 'thick'
            },
            {
                text: '??',
                font: 'thick'
            },
            {
                text: '??',
                font: 'thick'
            },
            {
                text: 'STEVENS RD',
                font: 'thick'
            },
            {
                text: 'ORCHARD RD',
                font: 'thick'
            },
            {
                text: 'HILL STREET',
                font: 'thick'
            },
            {
                text: 'CHINATOWN',
                font: 'thick'
            }
        ]
    }
}
