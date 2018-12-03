EDSTemplateSet['SMRT'] = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 2,
            align: 'right-width(1)'
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
            active: '$scrolls[]showDest{true}',
            format: ['<destination,destinationFont,9><via,destinationFont,9>', '<currentRoad,currentRoadFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'centre-width[0]'
        },
        { // Render DEST [SVC]
            variables: {
                fullDestination: '$scrolls[]text'
            },
            font: '$scrolls[]font',
            active: '$!scrolls[]showDest{true}',
            format: {
                '$scrolls[]text(array?)': ['<fullDestination[0],,9>', '<fullDestination[1],,0>'], // Render multiline dest
                '$!scrolls[]text(array?)': ['<fullDestination,,1>'] // Render singleline dest
            },
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ],
    '190-variant': [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
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
            active: '$scrolls[]showDest{true}',
            format: ['<destination,destinationFont,9><via,destinationFont,9>', '<currentRoad,currentRoadFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'centre-width[0]'
        },
        { // Render DEST [SVC]
            variables: {
                fullDestination: '$scrolls[]text'
            },
            font: '$scrolls[]font',
            active: '$!scrolls[]showDest{true}',
            format: {
                '$scrolls[]text(array?)': ['<fullDestination[0],,9>', '<fullDestination[1],,0>'], // Render multiline dest
                '$!scrolls[]text(array?)': ['<fullDestination,,1>'] // Render singleline dest
            },
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ],
    full: [
        {
            variables: {
                text: '$text'
            },
            font: 'full',
            format: '<text,,0>',
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    big: [
        {
            variables: {
                text: '$text'
            },
            font: 'big',
            format: '<text,,1>',
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    efat: [
        {
            variables: {
                text: '$text'
            },
            font: 'efat',
            format: '<text,,1>',
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    image: [
        {
            variables: {
                text: ''
            },
            font: 'thick',
            format: '<text,,>',
            spaceWidth: 0,
            align: 'centre',
            images: [
                {
                    name: '$image',
                    x: '$x'
                }
            ]
        }
    ],
    swt: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 2,
            align: 'right-width(1)'
        },
        { // Render ENDS AT via DEST
            variables: {
                destination: '$destination.text',
                destFont: '$destination.font',
                endsAt: 'ENDS AT',
                endsAtExtra: '$destination.road{""}'
            },
            font: '$font',
            format: ['<endsAt,font,9><endsAtExtra,font,9>', '<destination,destFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ],
    e2i: [
        {
            variables: {
                text: '$scrolls[]text'
            },
            font: '$scrolls[]font',
            format: {
                '$scrolls[]text(array?)': ['<text[0],$scrolls[]font[0],9>', '<text[1],$scrolls[]font[1],0>'],
                '$!scrolls[]text(array?)': ['<text,,1>']
            },
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    twoline: [
        {
            variables: {
                top: '$top',
                bottom: '$bottom',
                topFont: '$topFont',
                bottomFont: '$bottomFont'
            },
            font: '$font',
            format: ['<top,topFont,9>', '<bottom,bottomFont,0>'],
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    centre: [
        {
            variables: {
                text: '$text',
                spacing: '$spacing',
            },
            font: '$font',
            format: '<text,,spacing>',
            spaceWidth: 1,
            align: 'centre'
        }
    ]
}

EDSDataSet['SMRT'] = {
    1: {
        renderType: 'full',
        text: 'CHARTERED'
    },
    2: {
        renderType: 'big',
        text: 'ANG MO KIO DEPOT'
    },
    3: {
        renderType: 'big',
        text: 'KRANJI DEPOT'
    },
    4: {
        renderType: 'big',
        text: 'SMRT BUSES'
    },
    5: {
        renderType: 'big',
        text: 'OFF SERVICE'
    },
    6: {
        renderType: 'big',
        text: 'WOODLANDS DEPOT'
    },
    7: {
        renderType: 'big',
        text: 'OFF SERVICE'
    },
    8: {
        renderType: 'big',
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
        renderType: 'big',
        text: 'MoBi 0123456789'
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
    21: {
        renderType: "full",
        text: "WT 1"
    },
    22: {
        renderType: "full",
        text: "WT 2"
    },
    23: {
        renderType: "full",
        text: "WT 3"
    },
    24: {
        renderType: "full",
        text: "WT 4"
    },
    25: {
        renderType: "full",
        text: "WT 5"
    },
    26: {
        renderType: "full",
        text: "WT 6"
    },
    27: {
        renderType: "full",
        text: "WT 7"
    },
    28: {
        renderType: "full",
        text: "WT 8"
    },
    29: {
        renderType: "full",
        text: "WT 9"
    },
    30: {
        renderType: "full",
        text: "WT 10"
    },
    31: {
        renderType: "full",
        text: "WT 11"
    },
    32: {
        renderType: "full",
        text: "WT 12"
    },
    33: {
        renderType: "full",
        text: "WT 13"
    },
    34: {
        renderType: "full",
        text: "WT 14"
    },
    35: {
        renderType: "full",
        text: "WT 15"
    },
    36: {
        renderType: "full",
        text: "WT 16"
    },
    37: {
        renderType: "full",
        text: "WT 17"
    },
    38: {
        renderType: "full",
        text: "WT 18"
    },
    39: {
        renderType: "full",
        text: "WT 19"
    },
    40: {
        renderType: "full",
        text: "WT 20"
    },
    41: {
        renderType: "full",
        text: "WT 21"
    },
    42: {
        renderType: 'full',
        text: 'LRT A'
    },
    43: {
        renderType: 'full',
        text: 'LRT B'
    },
    44: {
        renderType: "full",
        text: "WT 22"
    },
    45: {
        renderType: "full",
        text: "WT 23"
    },
    46: {
        renderType: 'standardService',
        serviceNumber: 'NR6',
        serviceFont: 'full',
        destination: {
            text: 'RWS',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['RESORTS WORLD', 'SENTOSA'],
                font: 'thick',
                showDest: false
            },
        ]
    },
    47: {
        renderType: 'standardService',
        serviceNumber: 'NR1',
        serviceFont: 'full',
        destination: {
            text: 'RWS',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['RESORTS WORLD', 'SENTOSA'],
                font: 'thick',
                showDest: false
            },
        ]
    },
    48: {
        renderType: 'standardService',
        serviceNumber: 'NR1',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'YISHUN',
                font: 'big',
                showDest: false
            },
        ]
    },
    49: {
        renderType: 'standardService',
        serviceNumber: 'NR6',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['HARBOUR FRONT', 'INTERCHANGE'],
                font: 'thick',
                showDest: false
            },
        ]
    },
    50: {
        renderType: 'standardService',
        serviceNumber: 'NR1',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['HARBOUR FRONT', 'INTERCHANGE'],
                font: 'thick',
                showDest: false
            },
        ]
    },
    51: {
        renderType: 'standardService',
        serviceNumber: 'NR1',
        serviceFont: 'full',
        destination: {
            text: 'SUNTEC CITY',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'SUNTEC CITY',
                font: 'big',
                showDest: false
            },
        ]
    },
    52: {
        renderType: 'standardService',
        serviceNumber: 'NR1',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INTERCHANGE'],
                font: 'thick',
                showDest: false
            },
        ]
    },
    53: {
        renderType: 'standardService',
        serviceNumber: 'NR2',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'MARINA CENTRE',
                font: 'big',
                showDest: false
            },
        ]
    },
    54: {
        renderType: 'standardService',
        serviceNumber: 'NR2',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'SEMBAWANG',
                font: 'efat',
                showDest: false
            },
        ]
    },
    55: {
        renderType: 'standardService',
        serviceNumber: 'NR3',
        serviceFont: 'full',
        destination: {
            text: 'BOAT QUAY',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BOAT QUAY',
                font: 'efat',
                showDest: false
            },
        ]
    },
    56: {
        renderType: 'standardService',
        serviceNumber: 'NR3',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'CHOA CHU KANG',
                font: 'big',
                showDest: false
            },
        ]
    },
    57: {
        renderType: 'standardService',
        serviceNumber: 'NR5',
        serviceFont: 'full',
        destination: {
            text: 'JURONG WEST',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'JURONG WEST',
                font: 'big',
                showDest: false
            },
        ]
    },
    58: {
        renderType: 'standardService',
        serviceNumber: 'NR5',
        serviceFont: 'full',
        destination: {
            text: 'WHAMPOA',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'WHAMPOA',
                font: 'efat',
                showDest: false
            },
        ]
    },
    59: {
        renderType: 'standardService',
        serviceNumber: 'NR6',
        serviceFont: 'full',
        destination: {
            text: 'SENGKANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'SENGKANG',
                font: 'efat',
                showDest: false
            },
        ]
    },
    60: {
        renderType: 'standardService',
        serviceNumber: 'NR6',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'MARINA CENTRE',
                font: 'big',
                showDest: false
            },
        ]
    },
    61: {
        renderType: 'standardService',
        serviceNumber: 'NR7',
        serviceFont: 'full',
        destination: {
            text: 'PASIR RIS',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'PASIR RIS',
                font: 'efat',
                showDest: false
            },
        ]
    },
    62: {
        renderType: 'standardService',
        serviceNumber: 'NR7',
        serviceFont: 'full',
        destination: {
            text: 'MAIRNA CENTRE',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'MARINA CENTRE',
                font: 'big',
                showDest: false
            },
        ]
    },
    66: {
        renderType: 'efat',
        text: 'BULIM  DEPOT'
    },
    67: {
        renderType: "full",
        text: "WT 24"
    },
    68: {
        renderType: "full",
        text: "WT 25"
    },
    69: {
        renderType: "full",
        text: "WT 26"
    },
    70: {
        renderType: "full",
        text: "WT 27"
    },
    72: {
        renderType: "efat",
        text: "HAPPY MAY DAY"
    },
    75: {
        renderType: 'standardService',
        serviceNumber: 'NR5',
        serviceFont: 'full',
        destination: {
            text: 'JURONG WEST',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'JURONG WEST',
                font: 'big',
                showDest: false
            },
        ]
    },
    76: {
        renderType: 'standardService',
        serviceNumber: 'NR5',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'MARINA CENTRE',
                font: 'big',
                showDest: false
            },
        ]
    },
    77: {
        renderType: 'standardService',
        serviceNumber: 'NR8',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT BATOK',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BUKIT BATOK',
                font: 'big',
                showDest: false
            },
        ]
    },
    78: {
        renderType: 'standardService',
        serviceNumber: 'NR8',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'MARINA CENTRE',
                font: 'big',
                showDest: false
            },
        ]
    },
    81: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA    -   TAMPINES'
    },
    82: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  SENGKANG'
    },
    83: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA    -     ANG MO KIO'
    },
    84: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  WOODLANDS'
    },
    85: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  BOON LAY'
    },
    86: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  YISHUN'
    },
    89: {
        renderType: 'twoline',
        text: 'DOWNTOWN EAST - PASIR RIS',
        font: 'tall',
        top: 'DOWNTOWN EAST   -  PASIR RIS',
        bottom: 'CARPARKS C, D, E, F',
    },
    91: {
        renderType: 'twoline',
        text: 'BEDOK MRT TO & FROM; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'BEDOK MRT TO & FROM',
        bottom: 'GIANT, IKEA & COURTS'
    },
    92: {
        renderType: 'twoline',
        text: 'TAMPINES MRT TO & FROM; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'TAMPINES MRT TO & FROM',
        bottom: 'GIANT, IKEA & COURTS'
    },
    98: {
        renderType: 'twoline',
        text: 'SENGKANG & PUNGGOL -; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'SENGKANG & PUNGGOL -',
        bottom: 'GIANT, IKEA & COURTS'
    },
    99: {
        renderType: 'twoline',
        text: 'PASIR RIS TO & FROM; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'PASIR RIS TO & FROM',
        bottom: 'GIANT, IKEA & COURTS'
    },
    101: {
        renderType: 'twoline',
        text: 'FREE CHINATOWN SHUTTLE SERVICE',
        font: 'thick',
        top: 'FREE CHINATOWN',
        bottom: 'SHUTTLE SERVICE'
    },
    103: {
        renderType: 'e2i',
        serviceFont: 'fat',
        text: 'e2i & SMRT;BUS CARNIVAL AND CAREER FAIR',
        scrolls: [
            {
                text: 'WELCOME',
                font: 'big'
            },
            {
                text: 'JOURNEY WITH US',
                font: 'big'
            },
            {
              text: ['e2i & SMRT', 'BUS CARNIVAL AND CAREER FAIR'],
              font: ['thick', 'tall'],
            }
        ]
    },
    104: {
        renderType: 'e2i',
        serviceFont: 'fat',
        text: 'SMRT BUS CARNIVAL;AND CAREER FAIR',
        scrolls: [
            {
                text: 'WELCOME',
                font: 'big'
            },
            {
                text: 'JOURNEY WITH US',
                font: 'big'
            },
            {
              text: ['SMRT BUS CARNIVAL', 'AND CAREER FAIR'],
              font: 'thick'
            }
        ]
    },
    106: {
        renderType: 'efat',
        text: 'NGEE ANN POLY'
    },
    113: {
        renderType: 'big',
        text: 'AIRSHOW SHUTTLE'
    },
    114: {
        renderType: 'twoline',
        text: 'JOO KOON - BUKIT GOMBAK PARALLEL BUS SERVICE',
        top: 'JOO KOON - BUKIT GOMBAK',
        bottom: 'PARALLEL BUS SERVICE',
        font: 'thin'
    },
    115: {
        renderType: 'twoline',
        text: 'BUKIT GOMBAK - JOO KOON PARALLEL BUS SERVICE',
        top: 'BUKIT GOMBAK - JOO KOON',
        bottom: 'PARALLEL BUS SERVICE',
        font: 'thin'
    },
    117: {
        renderType: 'image',
        text: 'SMRT',
        image: 'logo',
        x: 'centre'
    },
    118: {
        renderType: 'big',
        text: 'SMRT FLY OUR FLAG'
    },
    119: {
        renderType: 'efat',
        text: 'SMRT'
    },
    141: {
        renderType: 'twoline',
        text: 'FREE SMRT CHINATOWN SHUTTLE SERVICE',
        font: 'thick',
        top: 'FREE SMRT CHINATOWN',
        bottom: 'SHUTTLE BUS SERVICE'
    },
    142: {
        renderType: 'centre',
        text: 'THANK YOU EXSA WINNERS',
        font: 'thin',
        spacing: 4
    },
    150: {
        renderType: 'big',
        text: 'FREE SHUTTLE'
    },
    151: {
        renderType: 'big',
        text: 'FREE BRIDGING BUS'
    },
    152: {
        renderType: 'big',
        text: 'LRT BRIDGING A'
    },
    153: {
        renderType: 'big',
        text: 'LRT BRIDGING B'
    },
    155: {
        renderType: 'big',
        text: 'FREE SHUTTLE BUS'
    },
    199: {
        renderType: 'efat',
        text: 'ON TEST'
    },
    200: {
        renderType: 'standardService',
        serviceNumber: '804',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 1, 11',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thick'
            },
        ]
    },
    203: {
        renderType: 'standardService',
        serviceNumber: '800',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 3',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 9',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 2, 7',
                font: 'thick'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thick'
            },
            {
                text: 'YISHUN ST 71',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 9',
                font: 'thick'
            },
        ]
    },
    204: {
        renderType: 'standardService',
        serviceNumber: '806',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 11',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 6',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
        ]
    },
    206: {
        renderType: 'standardService',
        serviceNumber: '811',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 9, 6, 7',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG RD ',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 5, 2, 7',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 6, 9, 2',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
            {
                text: 'YISHUN ST 81',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 1',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 4',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thin'
            },
        ]
    },
    207: {
        renderType: 'swt',
        serviceNumber: '811E',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT/MRT',
        },
        font: 'thick'
    },
    208: {
        renderType: 'standardService',
        serviceNumber: '812',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN CENTRAL',
                font: 'thick'
            },
            {
                text: 'YISHUN ST 61',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 4',
                font: 'thick'
            },
        ]
    },
    209: {
        renderType: 'swt',
        serviceNumber: '812E',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT / MRT',
        },
        font: 'thin'
    },
    210: {
        renderType: 'standardService',
        serviceNumber: '900',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVENUE 7',
                font: 'thick'
            },
            {
                text: 'WDL AVENUE 4',
                font: 'thick'
            },
            {
                text: 'WDL DRIVE 14',
                font: 'thick'
            },
            {
                text: 'WDL AVENUE 4 ',
                font: 'thick'
            },
            {
                text: 'WDL AVENUE 7 ',
                font: 'thick'
            },
        ]
    },
    213: {
        renderType: 'swt',
        serviceNumber: '911E',
        serviceFont: 'full',
        destination: {
            text: 'WDL INT / MRT',
        },
        font: 'thin'
    },
    215: {
        renderType: 'swt',
        serviceNumber: '912E',
        serviceFont: 'full',
        destination: {
            text: 'WDL INT / MRT',
        },
        font: 'thin'
    },
    217: {
        renderType: 'swt',
        serviceNumber: '913E',
        serviceFont: 'full',
        destination: {
            text: 'WDL INT / MRT',
        },
        font: 'thin'
    },
    218: {
        renderType: 'standardService',
        serviceNumber: '300',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 2',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 3',
                font: 'thin'
            },
        ]
    },
    219: {
        renderType: 'standardService',
        serviceNumber: '302',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG ST 52',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG CRES',
                font: 'thin'
            },
        ]
    },
    221: {
        renderType: 'swt',
        serviceNumber: '307E',
        serviceFont: 'full',
        destination: {
            text: 'C.C.K INT/MRT/LRT',
        },
        font: 'thin'
    },
    222: {
        renderType: 'standardService',
        serviceNumber: '307',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG CENTRAL',
                font: 'tall'
            },
            {
                text: 'TECK WHYE LANE',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG CENTRAL',
                font: 'tall'
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'tall'
            },
            {
                text: 'CHOA CHU KANG NORTH 5',
                font: 'tall'
            },
            {
                text: 'CHOA CHU KANG NORTH 6',
                font: 'tall'
            },
            {
                text: 'YEW TEE MRT',
                font: 'thick'
            },
            {
                text: 'CHOA CHU KANG ST 62',
                font: 'tall'
            },
        ]
    },
    224: {
        renderType: 'swt',
        serviceNumber: '811',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN ITE',
        },
        font: 'thick'
    },
    225: {
        renderType: 'standardService',
        serviceNumber: '901',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 2,1',
                font: 'thin'
            },
            {
                text: 'WOODLANDS DRIVE 16',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 6',
                font: 'thin'
            },
        ]
    },
    229: {
        renderType: 'swt',
        serviceNumber: '67A',
        serviceFont: 'full',
        destination: {
            text: 'HWA CHONG JC',
        },
        font: 'thick'
    },
    230: {
        renderType: 'swt',
        serviceNumber: '67W',
        serviceFont: 'full',
        destination: {
            text: ' LITTLE INDIA'
        },
        font: 'thick'
    },
    231: {
        renderType: 'swt',
        serviceNumber: '77A',
        serviceFont: 'full',
        destination: {
            road: ' TOH TUCK ROAD',
            text: 'BUKIT BATOK SEC SCH',
        },
        font: 'tall'
    },
    232: {
        renderType: 'swt',
        serviceNumber: '169A',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT/MRT'
        },
        font: 'thick'
    },
    233: {
        renderType: 'swt',
        serviceNumber: '965A',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT / MRT',
            font: 'thin'
        },
        font: 'thick'
    },
    234: {
        renderType: 'swt',
        serviceNumber: '858A',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN MRT'
        },
        font: 'thick'
    },
    235: {
        renderType: 'swt',
        serviceNumber: '964A',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS LINK',
            font: 'thin'
        },
        font: 'thick'
    },
    236: {
        renderType: 'swt',
        serviceNumber: '106A',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI MRT'
        },
        font: 'thick'
    },
    237: {
        renderType: 'swt',
        serviceNumber: '173A',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI INT'
        },
        font: 'thick'
    },
    238: {
        renderType: 'swt',
        serviceNumber: '173K',
        serviceFont: 'full',
        destination: {
            text: 'CANADIAN INT\'L SCHOOL'
        },
        font: 'tall'
    },
    239: {
        renderType: 'swt',
        serviceNumber: '189A',
        serviceFont: 'full',
        destination: {
            text: 'BT BATOK ST 23'
        },
        font: 'thick'
    },
    242: {
        renderType: 'swt',
        serviceNumber: '962A',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG DRIVE',
            font: 'thin'
        },
        font: 'thick'
    },
    244: {
        renderType: 'swt',
        serviceNumber: '67C',
        serviceFont: 'full',
        destination: {
            road: 'GEYLANG ROAD',
            text: '(BEFORE CITY PLAZA)'
        },
        font: 'tall'
    },
    246: {
        renderType: 'swt',
        serviceNumber: '985A',
        serviceFont: 'full',
        destination: {
            text: 'JLN JURONG KECHIL',
            font: 'thin'
        },
        font: 'thick'
    },
    247: {
        renderType: 'standardService',
        serviceNumber: '900A',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVENUE 7',
                font: 'thin'
            },
            {
                text: 'WDL AVENUE 4',
                font: 'thin'
            },
            {
                text: 'WDL DRIVE 14',
                font: 'thin'
            },
            {
                text: 'S\'PORE SPORTS SCH',
                font: 'thin'
            },
            {
                text: 'INNOVA JC',
                font: 'thick'
            },
            {
                text: 'WDL AVENUE 4',
                font: 'thin'
            },
            {
                text: 'WDL AVENUE 7',
                font: 'thin'
            }
        ]
    },
    248: {
        renderType: 'swt',
        serviceNumber: '189A',
        serviceFont: 'full',
        destination: {
            text: 'MIDVEW BUILDING'
        },
        font: 'thick'
    },
    249: {
        renderType: 'standardService',
        serviceNumber: '858A',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['ENDS AT', 'YISHUN MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVENUE 4',
                font: 'thin'
            },
            {
                text: 'WDL AVENUE 9',
                font: 'thin'
            },
            {
                text: 'GAMBAS AVE',
                font: 'thin'
            },
            {
                text: 'WDL AVENUE 7',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG WAY',
                font: 'thin'
            },
            {
                text: 'CAMBERRA RD',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thin'
            },
            {
                text: 'WDL AVENUE 5,2',
                font: 'thin'
            }
        ]
    },
    250: {
        renderType: 'swt',
        serviceNumber: '188A',
        serviceFont: 'full',
        destination: {
            text: 'ITE COLLEGE WEST'
        },
        font: 'thin'
    },
    251: {
        renderType: 'standardService',
        serviceNumber: '106A',
        serviceFont: 'full',
        destination: {
            text: 'CENTRAL BOULEVARD - BAYFRONT AVE (LOOP)',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CENTRAL', 'BOULEVARD'],
                font: 'thick',
                showDest: false
            },
            {
                text: ['BAYFRONT AVE', '(LOOP)'],
                font: 'thick',
                showDest: false
            }
        ]
    },
    252: {
        renderType: 'standardService',
        serviceNumber: '903',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 2',
                font: 'thin'
            },
            {
                text: 'MARSILING RD, DR',
                font: 'thin'
            },
            {
                text: 'WDL CENTRE RD',
                font: 'thin'
            },
            {
                text: 'WDL TRAIN CHECKPOINT',
                font: 'tall'
            },
            {
                text: 'ADMIRALTY RD',
                font: 'thin'
            },
            {
                text: 'MARSILING DR, RD',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 2',
                font: 'thin'
            },
        ]
    },
    253: {
        renderType: 'standardService',
        serviceNumber: '911',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 7',
                font: 'thin'
            },
            {
                text: 'WOODLANDS ST 83',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 2',
                font: 'thin'
            },
            {
                text: 'WOODLANDS ST 13',
                font: 'thin'
            },
            {
                text: 'WDL TRAIN CHECKPOINT',
                font: 'thin'
            },
            {
                text: 'WOODLANDS ST 13',
                font: 'thin'
            },
        ]
    },
    254: {
        renderType: 'standardService',
        serviceNumber: '912',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 5,2,1',
                font: 'thin'
            },
            {
                text: 'WOODLANDS ST 41',
                font: 'thin'
            },
            {
                text: 'WDL TRAIN CHECKPOINT',
                font: 'thin'
            },
            {
                text: 'WOODLANDS ST 41',
                font: 'thin'
            },
            {
                text: 'WOODLANDS DR 50',
                font: 'thin'
            },
            {
                text: 'WOODLANDS RING RD',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY MRT',
                font: 'thin'
            },
        ]
    },
    255: {
        renderType: 'standardService',
        serviceNumber: '913',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 7,6',
                font: 'thin'
            },
            {
                text: 'WOODLANDS DR 61',
                font: 'thin'
            },
            {
                text: 'WOODLANDS CIRCLE',
                font: 'thin'
            },
            {
                text: 'MARSILING RISE',
                font: 'thin'
            },
            {
                text: 'MARSILING RD',
                font: 'thin'
            },
            {
                text: 'WDL TRAIN CHECKPOINT',
                font: 'thin'
            },
        ]
    },
    256: {
        renderType: 'standardService',
        serviceNumber: 'BPS1',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SEGAR RD',
                font: 'thick'
            },
            {
                text: 'BT PANJANG RING RD',
                font: 'thin'
            },
            {
                text: 'SENJA RD',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG LOOP',
                font: 'thin'
            },
        ]
    },
    257: {
        renderType: 'swt',
        serviceNumber: '177A',
        serviceFont: 'full',
        destination: {
            text: 'JELUBU ROAD'
        },
        font: 'thick'
    },
    258: {
        renderType: 'swt',
        serviceNumber: '180A',
        serviceFont: 'full',
        destination: {
            text: 'BT PANJANG ROAD'
        },
        font: 'thin'
    },
    259: {
        renderType: 'standardService',
        serviceNumber: '904',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVENUE 7, 6',
                font: 'thin'
            },
            {
                text: 'WDL DRIVE 62, 73',
                font: 'thin'
            },
            {
                text: 'WDL CRESENT (LOOP)',
                font: 'tall'
            },
            {
                text: 'WDL DRIVE 73, 62',
                font: 'thin'
            },
            {
                text: 'WDL AVENUE 6, 7',
                font: 'thin'
            },
        ]
    },
    260: {
        renderType: 'swt',
        serviceNumber: '178A',
        serviceFont: 'full',
        destination: {
            text: 'KRANJI MRT'
        },
        font: 'thick'
    },
    261: {
        renderType: 'swt',
        serviceNumber: '969A',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT/MRT',
            font: 'thin'
        },
        font: 'thick'
    },
    263: {
        renderType: 'swt',
        serviceNumber: '962B',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG DR'
        },
        font: 'thick'
    },
    264: {
        renderType: 'swt',
        serviceNumber: '75A',
        serviceFont: 'full',
        destination: {
            text: 'OPP SIM HQ'
        },
        font: 'thick'
    },
    265: {
        renderType: 'swt',
        serviceNumber: '857A',
        serviceFont: 'full',
        destination: {
            text: 'OPP SUNRISE GDNS'
        },
        font: 'thin'
    },
    266: {
        renderType: 'swt',
        serviceNumber: '811A',
        serviceFont: 'full',
        destination: {
            road: ' YISHUN',
            text: 'AVE 5, BLK 145'
        },
        font: 'thick'
    },
    267: {
        renderType: 'swt',
        serviceNumber: '972A',
        serviceFont: 'full',
        destination: {
            text: 'DHOBY GHAUT MRT',
            font: 'thin'
        },
        font: 'thick'
    },
    268: {
        renderType: 'standardService',
        serviceNumber: '803',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN CTRL',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 9',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
            {
                text: 'YISHUN ST 31',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 6,9',
                font: 'thin'
            },
            {
                text: 'YISHUN CTRL',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thin'
            },
        ]
    },
    269: {
        renderType: 'swt',
        serviceNumber: '975A',
        serviceFont: 'full',
        destination: {
            text: 'LOR RUSUK'
        },
        font: 'thick'
    },
    270: {
        renderType: 'standardService',
        serviceNumber: '859B',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SEMBAWANG', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SEMBAWANG CRES',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY LINK',
                font: 'thin'
            },
            {
                text: 'CAMBERRA ROAD',
                font: 'thin',
            },
        ]
    },
    271: {
        renderType: 'swt',
        serviceNumber: '882A',
        serviceFont: 'full',
        destination: {
            text: 'MONTREAL LINK'
        },
        font: 'thick'
    },
    272: {
        renderType: 'swt',
        serviceNumber: '302A',
        serviceFont: 'full',
        destination: {
            text: 'OPP YEW TEE MRT',
            font: 'thin'
        },
        font: 'thick'
    },
    277: {
        renderType: 'standardService',
        serviceNumber: '803',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 9',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
            {
                text: 'YISHUN ST 31',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 6,9',
                font: 'thin'
            }
        ]
    },
    278: {
        renderType: 'standardService',
        serviceNumber: '812',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN CENTRAL',
                font: 'thin'
            },
            {
                text: 'YISHUN ST 61',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 4',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
            {
                text: 'KHATIB MRT, AVE 3',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
        ]
    },
    279: {
        renderType: 'standardService',
        serviceNumber: '301',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'C C K WAY',
                font: 'thick'
            },
            {
                text: 'C.C.K AVE 2,3',
                font: 'thin'
            },
            {
                text: 'C.C.K AVE 5,6',
                font: 'thin'
            },
            {
                text: 'C.C.K AVENUE 1',
                font: 'thin'
            },
        ]
    },
    280: {
        renderType: 'standardService',
        serviceNumber: '983',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'C C K AVENUE 4',
                font: 'thick'
            },
            {
                text: 'C.C.K AVE 5 (LOOP)',
                font: 'thick'
            },
        ]
    },
    281: {
        renderType: 'swt',
        serviceNumber: '860A',
        serviceFont: 'full',
        destination: {
            text: 'KHATIB MRT'
        },
        font: 'thick'
    },
    282: {
        renderType: 'standardService',
        serviceNumber: 'BPS1',
        serviceFont: 'full',
        destination: {
            text: 'SEGAR RD',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['ENDS SEGAR RD', 'BEF BLK 484'],
                font: 'thin',
                showDest: false
            },
            {
                text: 'C.C.K AVE 4',
                font: 'thin'
            },
            {
                text: 'SENJA RD',
                font: 'thin'
            },
            {
                text: 'BT PANJANG RING RD',
                font: 'thin'
            },
        ]
    },
    283: {
        renderType: 'standardService',
        serviceNumber: '920',
        serviceFont: 'full',
        destination: {
            text: 'BT PANJANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'PETIR / JELUBU RD',
                font: 'thin'
            },
            {
                text: 'SENJAR RD / LINK',
                font: 'thin'
            },
            {
                text: 'JELAPANG RD',
                font: 'thin'
            },
            {
                text: 'SAUJANA RD',
                font: 'thin'
            },
            {
                text: 'FAJAR ROAD',
                font: 'thin'
            },
            {
                text: 'BT PANJANG RING RD',
                font: 'thin'
            },
            {
                text: 'BANGKIT RD (LOOP)',
                font: 'thin'
            },
        ]
    },
    284: {
        renderType: 'standardService',
        serviceNumber: '922',
        serviceFont: 'full',
        destination: {
            text: 'BT PANJANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'PETIR / JELUBU RD',
                font: 'thin'
            },
            {
                text: 'JELAPANG ROAD',
                font: 'thin'
            },
            {
                text: 'SEGAR / FAJAR RD ',
                font: 'thin'
            },
            {
                text: 'BT PANAJANG RING RD',
                font: 'thin'
            },
            {
                text: 'BANGKIT RD (LOOP)',
                font: 'thin'
            },
        ]
    },
    285: {
        renderType: 'standardService',
        serviceNumber: '301',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'C. C. K WAY',
                font: 'thick'
            },
            {
                text: 'C. C. K  AVE 2,3',
                font: 'thin'
            },
            {
                text: 'C. C. K  AVENUE 5',
                font: 'thin'
            },
            {
                text: 'KEAT HONG CLOSE (LOOP)',
                font: 'tall'
            },
            {
                text: 'C. C. K  AVE 6,1',
                font: 'thin'
            },
        ]
    },
    286: {
        renderType: 'standardService',
        serviceNumber: '805',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thick'
            },
            {
                text: 'YISHUN CTRL',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 4,1',
                font: 'thin'
            },
            {
                text: 'YISHUN ST 41',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
        ]
    },
    287: {
        renderType: 'swt',
        serviceNumber: '858B',
        serviceFont: 'full',
        destination: {
            text: 'AFT SELETAR CAMP',
        },
        font: 'thin'
    },
    288: {
        renderType: 'standardService',
        serviceNumber: '308',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'C. C. K. AVENUE 4',
                font: 'thin'
            },
            {
                text: 'C. C. K.  DRIVE',
                font: 'thin'
            },
            {
                text: 'C. C. K. AVE 1, 7',
                font: 'thin'
            },
            {
                text: 'C. C. K.  GROVE',
                font: 'thin'
            },
            {
                text: 'KEAT HONG LINK (LOOP)',
                font: 'tall'
            },
        ]
    },
    289: {
        renderType: 'swt',
        serviceNumber: '975B',
        serviceFont: 'full',
        destination: {
            text: 'LIM CHU KANG LANE 3'
        },
        font: 'tall'
    },
    290: {
        renderType: 'swt',
        serviceNumber: '962C',
        serviceFont: 'full',
        destination: {
            road: ' BLK 680',
            text: 'WOODLANDS AVE 6'
        },
        font: 'thin'
    },
    291: {
        renderType: 'standardService',
        serviceNumber: '912M',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thin',
                showDest: false
            },
            {
                text: 'WLD AVE 1,2,5',
                font: 'thin'
            },
            {
                text: 'WDL ST 41 (LOOP)',
                font: 'thin'
            },
        ]
    },
    292: {
        renderType: 'swt',
        serviceNumber: '307A',
        serviceFont: 'full',
        destination: {
            text: 'OPP C. C. K. MRT'
        },
        font: 'thin'
    },
    293: {
        renderType: 'standardService',
        serviceNumber: '883',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SEMBAWANG', 'INTERCHANGE'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SEMBAWANG DR',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG WAY',
                font: 'thin'
            },
            {
                text: 'CANBERRA LINK',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thin'
            },
            {
                text: 'CANBERRA ST',
                font: 'thin'
            },
            {
                text: 'CANBERRA WAY',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thin'
            },
            {
                text: 'YISHUN CTRL 2 (LOOP)',
                font: 'thin'
            },
        ]
    },
    294: {
        renderType: 'standardService',
        serviceNumber: '912A',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVE 2,5',
                font: 'thin'
            },
            {
                text: 'WOODLANDS DR 50',
                font: 'thin'
            },
            {
                text: 'WOODLANDS RING RD',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY MRT',
                font: 'thin'
            },
            {
                text: 'WDL AVE 7 (LOOP)',
                font: 'thin'
            },
        ]
    },
    295: {
        renderType: 'standardService',
        serviceNumber: '912B',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVE 5,2,1',
                font: 'thin'
            },
            {
                text: 'WDL STREET 41',
                font: 'thin'
            },
            {
                text: 'WDL TRAIN CHECKPOINT',
                font: 'tall'
            },
            {
                text: 'WDL CTR RD (LOOP)',
                font: 'thin'
            },
        ]
    },
    296: {
        renderType: 'standardService',
        serviceNumber: '903M',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVENUE 2',
                font: 'thin'
            },
            {
                text: 'MARSILING RD',
                font: 'thin'
            },
            {
                text: 'MARSILING LANE',
                font: 'thin'
            },
            {
                text: 'MARSILING DR (LOOP)',
                font: 'tall'
            },
        ]
    },
    297: {
        renderType: 'standardService',
        serviceNumber: '973',
        serviceFont: 'full',
        destination: {
            text: 'BT PANJANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'BT PANJANG ROAD',
                font: 'thin'
            },
            {
                text: 'PENDING / PETIR RD',
                font: 'thin'
            },
            {
                text: 'DAIRY FARM ROAD',
                font: 'thin'
            },
            {
                text: 'HILLVIEW RD / AVE',
                font: 'thin'
            },
            {
                text: 'HUME AVE (LOOP)',
                font: 'thin'
            },
        ]
    },
    373: {
        renderType: 'twoline',
        text: 'SHUTTLE 10 ANG MO KIO - WOODLANDS',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 10',
        bottom: 'ANG MO KIO - WOODLANDS'
    },
    374: {
        renderType: 'twoline',
        text: 'SHUTTLE 10 WOODLANDS - ANG MO KIO',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 10',
        bottom: 'WOODLANDS - ANG MO KIO'
    },
    375: {
        renderType: 'twoline',
        text: 'EXPRESS 17 WOODLANDS-BUKIT PANJANG',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'EXPRESS 17',
        bottom: 'WOODLANDS-BUKIT PANJANG'
    },
    376: {
        renderType: 'twoline',
        text: 'EXPRESS 17 BUKIT PANJANG-WOODLANDS',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'EXPRESS 17',
        bottom: 'BUKIT PANJANG-WOODLANDS'
    },
    377: {
        renderType: 'twoline',
        text: 'SHUTTLE 9 YISHUN - NEWTON',
        topFont: 'thick',
        bottomFont: 'thick',
        top: 'SHUTTLE 9',
        bottom: 'YISHUN - NEWTON'
    },
    378: {
        renderType: 'twoline',
        text: 'SHUTTLE 9 NEWTON - YISHUN',
        topFont: 'thick',
        bottomFont: 'thick',
        top: 'SHUTTLE 9',
        bottom: 'NEWTON - YISHUN'
    },
    379: {
        renderType: 'twoline',
        text: 'EXPRESS 15 CLEMENTI - BEAUTY WORLD',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'EXPRESS 15',
        bottom: 'CLEMENTI - BEAUTY WORLD'
    },
    380: {
        renderType: 'twoline',
        text: 'EXPRESS 15 BEAUTY WORLD - CLEMENTI',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'EXPRESS 15',
        bottom: 'BEAUTY WORLD - CLEMENTI'
    },
    381: {
        renderType: 'twoline',
        text: 'SHUTTLE 2 JOO KOON - JURONG EAST',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 2',
        bottom: 'JOO KOON - JURONG EAST'
    },
    382: {
        renderType: 'twoline',
        text: 'SHUTTLE 2 JURONG EAST - JOO KOON',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 2',
        bottom: 'JURONG EAST - JOO KOON'
    },
    383: {
        renderType: 'twoline',
        text: 'SHUTTLE 4 CHOA CHU KANG - JURONG EAST',
        topFont: 'thick',
        bottomFont: 'tall',
        top: 'SHUTTLE 4',
        bottom: 'CHOA CHU KANG - JURONG EAST'
    },
    384: {
        renderType: 'twoline',
        text: 'SHUTTLE 4 JURONG EAST - CHOA CHU KANG',
        topFont: 'thick',
        bottomFont: 'tall',
        top: 'SHUTTLE 4',
        bottom: 'JURONG EAST - CHOA CHU KANG'
    },
    385: {
        renderType: 'twoline',
        text: 'SHUTTLE 7 PAYA LEBAR - PASIR RIS',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 7',
        bottom: 'PAYA LEBAR - PASIR RIS'
    },
    386: {
        renderType: 'twoline',
        text: 'SHUTTLE 7 PASIR RIS - PAYA LEBAR',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 7',
        bottom: 'PASIR RIS - PAYA LEBAR'
    },
    387: {
        renderType: 'twoline',
        text: 'SHUTTLE 8 TANAH MERAH - CHANGI AIRPORT',
        topFont: 'thick',
        bottomFont: 'tall',
        top: 'SHUTTLE 8',
        bottom: 'TANAH MERAH - CHANGI AIRPORT'
    },
    388: {
        renderType: 'twoline',
        text: 'SHUTTLE 8 CHANGI AIRPORT - TANAH MERAH',
        topFont: 'thick',
        bottomFont: 'tall',
        top: 'SHUTTLE 8',
        bottom: 'CHANGI AIRPORT - TANAH MERAH'
    },
    389: {
        renderType: 'twoline',
        text: 'SHUTTLE 11 ALJUNIED - MACPHERSON',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 11',
        bottom: 'ALJUNIED - MACPHERSON'
    },
    390: {
        renderType: 'twoline',
        text: 'SHUTTLE 11 MACPHERSON - ALJUNIED',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 11',
        bottom: 'MACPHERSON - ALJUNIED'
    },
    391: {
        renderType: 'twoline',
        text: 'EXPRESS 12 CHANGI AIRPORT T3 - BUGIS',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'EXPRESS 12',
        bottom: 'CHANGI AIRPORT T3 - BUGIS'
    },
    392: {
        renderType: 'twoline',
        text: 'EXPRESS 12 BUGIS - CHANGI AIRPORT T3',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'EXPRESS 12',
        bottom: 'BUGIS - CHANGI AIRPORT T3'
    },
    393: {
        renderType: 'twoline',
        text: 'SHUTTLE 2 JOO KOON - BUONA VISTA',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 2',
        bottom: 'JOO KOON - BUONA VISTA'
    },
    394: {
        renderType: 'twoline',
        text: 'SHUTTLE 2 BUONA VISTA - JOO KOON',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'SHUTTLE 2',
        bottom: 'BUONA VISTA - JOO KOON'
    },
    395: {
        renderType: 'twoline',
        text: 'SHUTTLE 3 JOO KOON - TUAS LINK',
        topFont: 'thick',
        bottomFont: 'thick',
        top: 'SHUTTLE 3',
        bottom: 'JOO KOON - TUAS LINK'
    },
    396: {
        renderType: 'twoline',
        text: 'SHUTTLE 3 TUAS LINK - JOO KOON',
        topFont: 'thick',
        bottomFont: 'thick',
        top: 'SHUTTLE 3',
        bottom: 'TUAS LINK - JOO KOON'
    },
    397: {
        renderType: 'twoline',
        text: 'SHUTTLE 1 BUONA VISTA - RAFFLES PLACE',
        topFont: 'thick',
        bottomFont: 'tall',
        top: 'SHUTTLE 1',
        bottom: 'BUONA VISTA - RAFFLES PLACE'
    },
    398: {
        renderType: 'twoline',
        text: 'SHUTTLE 1 RAFFLES PLACE - BUONA VISTA',
        topFont: 'thick',
        bottomFont: 'tall',
        top: 'SHUTTLE 1',
        bottom: 'RAFFLES PLACE - BUONA VISTA'
    },
    402: {
        renderType: 'standardService',
        serviceNumber: '75',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'MARINA CENTRE',
                font: 'big',
                showDest: false
            },
            {
                text: 'UPP BT TIMAH RD',
                font: 'thick'
            },
            {
                text: 'CLEMENTI RD',
                font: 'thick'
            },
            {
                text: 'HOLLAND ROAD',
                font: 'thick'
            },
            {
                text: 'GREAT WORLD CITY',
                font: 'thick'
            },
            {
                text: 'ROBINSON RD',
                font: 'thick'
            },
            {
                text: 'EMPRESS PLACE',
                font: 'thick'
            },
        ]
    },
    406: {
        renderType: 'standardService',
        serviceNumber: '169',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['ANG MO KIO', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVENUE 9,8',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY ROAD EAST',
                font: 'thin'
            },
            {
                text: 'YISHUN MRT,AVE 2',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thin'
            },
            {
                text: 'UPP THOMSON AVE',
                font: 'thin'
            },
            {
                text: 'ANG MO KIO AVE 3',
                font: 'thin'
            },
        ]
    },
    407: {
        renderType: 'standardService',
        serviceNumber: '169',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'ANG MO KIO AVE 3',
                font: 'thin'
            },
            {
                text: 'UPP THOMSON RD',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 3,2',
                font: 'thin'
            },
            {
                text: 'YISHUN MRT',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY RD EAST',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 8, 9',
                font: 'thin'
            },
        ]
    },
    408: {
        renderType: 'standardService',
        serviceNumber: '171',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'MARINA CENTRE',
                font: 'big',
                showDest: false
            },
            {
                text: 'SEMBAWANG ROAD',
                font: 'thick'
            },
            {
                text: 'MANDAI ROAD',
                font: 'thick'
            },
            {
                text: 'BT PANJANG ROAD',
                font: 'thick'
            },
            {
                text: 'UPP BT TIMAH RD',
                font: 'thick'
            },
            {
                text: 'DUNEARN ROAD',
                font: 'thick'
            },
            {
                text: 'ORCHARD ROAD',
                font: 'thick'
            },
        ]
    },
    409: {
        renderType: 'standardService',
        serviceNumber: '171',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SCOTTS ROAD',
                font: 'thick'
            },
            {
                text: 'BUKIT TIMAH ROAD',
                font: 'thick'
            },
            {
                text: 'BT PANJANG ROAD',
                font: 'thick'
            },
            {
                text: 'MANDAI ROAD',
                font: 'thick'
            },
            {
                text: 'SEMBAWANG ROAD',
                font: 'thick'
            },
        ]
    },
    410: {
        renderType: 'standardService',
        serviceNumber: '176',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BUKIT MERAH',
                font: 'big',
                showDest: false
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thick'
            },
            {
                text: 'BT BATOK CTR / MRT',
                font: 'thin'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thin'
            },
            {
                text: 'WEST COAST HIGHWAY',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            }
        ]
    },
    413: {
        renderType: 'standardService',
        serviceNumber: '177',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT BATOK',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['BUKIT BATOK', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'UPP BUKIT TIMAH ROAD',
                font: 'thin'
            },
            {
                text: 'GOMBAK DRIVE',
                font: 'thick'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thick'
            },
            {
                text: 'BT BATOK EAST AVE 4',
                font: 'thin'
            },
            {
                text: 'BT BATOK EAST AVE 3',
                font: 'thin'
            },
        ]
    },
    416: {
        renderType: 'standardService',
        serviceNumber: '167',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BUKIT MERAH',
                font: 'big',
                showDest: false
            },
            {
                text: 'THOMSON ROAD',
                font: 'thick'
            },
            {
                text: 'SCOTTS ROAD',
                font: 'thick'
            },
            {
                text: 'ORCHARD ROAD',
                font: 'thick'
            },
            {
                text: 'SHENTON WAY',
                font: 'thick'
            },
            {
                text: 'JLN BUKIT MERAH',
                font: 'thick'
            },
        ]
    },
    417: {
        renderType: 'standardService',
        serviceNumber: '167',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['SEMBAWANG', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CANTOMENT RD',
                font: 'thick'
            },
            {
                text: 'CECIL STREET',
                font: 'thick'
            },
            {
                text: 'ORHCARD TURN',
                font: 'thick'
            },
            {
                text: 'SCOTTS ROAD',
                font: 'thick'
            },
            {
                text: 'THOMSON ROAD',
                font: 'thick'
            },
        ]
    },
    418: {
        renderType: 'standardService',
        serviceNumber: '180',
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
                text: 'BT PANJANG RD',
                font: 'thick'
            },
            {
                text: 'CHOA CHU KANG RD',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK RD',
                font: 'thick'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thin'
            },
            {
                text: 'BOON LAY WAY',
                font: 'thick'
            },
        ]
    },
    420: {
        renderType: 'standardService',
        serviceNumber: '184',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'CLEMENTI MRT',
                font: 'big',
                showDest: false
            },
            {
                text: 'BT PANJANG RD',
                font: 'thick'
            },
            {
                text: 'CASHEW ROAD',
                font: 'thick'
            },
            {
                text: 'UPP BT TIMAH RD',
                font: 'thick'
            },
            {
                text: 'JLN ANAK BUKIT',
                font: 'thick'
            },
            {
                text: 'CLEMENTI ROAD',
                font: 'thick'
            },
        ]
    },
    422: {
        renderType: 'standardService',
        serviceNumber: '187',
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
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK WEST',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK CTR,MRT',
                font: 'thin'
            },
            {
                text: 'JURONG EAST',
                font: 'thick'
            },
            {
                text: 'BOON LAY WAY',
                font: 'thick'
            }
        ]
    },
    423: {
        renderType: 'standardService',
        serviceNumber: '187',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BOON LAY WAY',
                font: 'thick'
            },
            {
                text: 'JURONG EAST',
                font: 'thick'
            },
            {
                text: 'BUKIT BATOK CTR,MRT',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK WEST',
                font: 'thick'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            }
        ]
    },
    424: {
        renderType: 'standardService',
        serviceNumber: '859',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SEMBAWANG', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 5',
                font: 'thick'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thick'
            },
            {
                text: 'SEMBAWANG CRES',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY LINK',
                font: 'thick'
            },
            {
                text: 'CANBERRA RD',
                font: 'thick'
            },
        ]
    },
    425: {
        renderType: 'standardService',
        serviceNumber: '859',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CANBERRA ROAD',
                font: 'thick'
            },
            {
                text: 'ADMIRALTY LINK',
                font: 'thick'
            },
            {
                text: 'SEMBAWANG CRES',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 5',
                font: 'thick'
            },
        ]
    },
    428: {
        renderType: 'standardService',
        serviceNumber: '825',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['YIO CHU KANG', 'MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'LENTOR LOOP',
                font: 'thick'
            },
        ]
    },
    429: {
        renderType: 'standardService',
        serviceNumber: '851',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'BUKIT MERAH INT',
                font: 'big',
                showDest: false
            },
            {
                text: 'ANG MO KIO AVE 6',
                font: 'thin'
            },
            {
                text: 'MARYMOUNT RD',
                font: 'thick'
            },
            {
                text: 'THOMSON RD',
                font: 'thick'
            },
            {
                text: 'SUNGEI ROAD',
                font: 'thick'
            },
            {
                text: 'NEW BRIDGE RD',
                font: 'thick'
            },
            {
                text: 'TIONG BAHRU RD',
                font: 'thick'
            },
        ]
    },
    430: {
        renderType: 'standardService',
        serviceNumber: '851',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN ',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TIONG BAHRU RD',
                font: 'thin'
            },
            {
                text: 'EU TONG SEN ST',
                font: 'thin'
            },
            {
                text: 'ROCHOR RD',
                font: 'thick'
            },
            {
                text: 'THOMSON RD',
                font: 'thick'
            },
            {
                text: 'MARYMOUNT RD',
                font: 'thick'
            },
            {
                text: 'ANG MO KIO AVE 6',
                font: 'thin'
            },
        ]
    },
    431: {
        renderType: 'standardService',
        serviceNumber: '852',
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
                text: 'YISHUN AVE 2',
                font: 'thick'
            },
            {
                text: 'LENTOR AVE',
                font: 'thick'
            },
            {
                text: 'AND MO KIO AVE 6',
                font: 'thin'
            },
            {
                text: 'LORNIE RD',
                font: 'thick'
            },
            {
                text: 'BUKIT TIMAH RD',
                font: 'thick'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK E. AVE 6',
                font: 'thin'
            },
        ]
    },
    432: {
        renderType: 'standardService',
        serviceNumber: '852',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN ',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'JLN ANAK BUKIT',
                font: 'thick'
            },
            {
                text: 'DUNEARN ROAD',
                font: 'thick'
            },
            {
                text: 'LORNIE ROAD',
                font: 'thick'
            },
            {
                text: 'MARYMOUNT RD',
                font: 'thick'
            },
            {
                text: 'ANG MO KIO AVE 6',
                font: 'thin'
            },
        ]
    },
    433: {
        renderType: 'standardService',
        serviceNumber: '853',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1/', 'KALLANG MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'ANG MO KIO AVE 6',
                font: 'thin'
            },
            {
                text: 'ANG MO KIO AVE 1',
                font: 'thin'
            },
            {
                text: 'UPP SERANGOON RD',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
        ]
    },
    434: {
        renderType: 'standardService',
        serviceNumber: '853',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN ',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'UPPER SERANGOON RD',
                font: 'thin'
            },
            {
                text: 'ANG MO KIO AVE 1',
                font: 'thin'
            },
            {
                text: 'ANG MO KIO AVE 6',
                font: 'thin'
            },
        ]
    },
    435: {
        renderType: 'standardService',
        serviceNumber: '853',
        serviceFont: 'full',
        destination: {
            text: 'UPP EAST COAST RD',
            font: 'tall'
        },
        scrolls: [
            {
                text: ['UPPER', 'EAST COAST RD'],
                font: 'thin',
                showDest: false
            },
            {
                text: 'ANG MO KIO AVE 6',
                font: 'thin'
            },
            {
                text: 'UPP SERANGOON RD',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'TANJONG KATONG',
                font: 'thin'
            },
            {
                text: 'MARINE PARADE RD',
                font: 'thin'
            },
        ]
    },
    436: {
        renderType: 'standardService',
        serviceNumber: '853',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN ',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TANJONG KATONG',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'UPP SERANGOON RD',
                font: 'thin'
            },
            {
                text: 'ANG MO KIO AVE 6',
                font: 'thin'
            },
        ]
    },
    437: {
        renderType: 'standardService',
        serviceNumber: '854',
        serviceFont: 'full',
        destination: {
            text: 'BEDOK ',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['BEDOK', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YIO CHU KANG RD',
                font: 'thin'
            },
            {
                text: 'HOUGANG AVE 2',
                font: 'thick'
            },
            {
                text: 'HOUGANG AVE 3',
                font: 'thick'
            },
            {
                text: 'JLN EUNOS, MRT',
                font: 'thick'
            },
        ]
    },
    438: {
        renderType: 'standardService',
        serviceNumber: '854',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN ',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'JLN EUNOS, MRT',
                font: 'thick'
            },
            {
                text: 'HOUGANG AVE 3',
                font: 'thick'
            },
            {
                text: 'HOUGANG AVE 2',
                font: 'thick'
            },
            {
                text: 'YIO CHU KANG RD',
                font: 'thin'
            },
        ]
    },
    440: {
        renderType: 'standardService',
        serviceNumber: '855',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'HARBOURFRONT',
                font: 'big',
                showDest: false
            },
            {
                text: 'YIO CHU KANG RD',
                font: 'thin'
            },
            {
                text: 'UPP THOMSON RD',
                font: 'thin'
            },
            {
                text: 'FARRER ROAD',
                font: 'thick'
            },
            {
                text: 'JLN BUKIT MERAH',
                font: 'thin'
            },
            {
                text: 'LOWER DELTA RD',
                font: 'thin'
            },
        ]
    },
    441: {
        renderType: 'standardService',
        serviceNumber: '855',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'big',
                showDest: false
            },
            {
                text: 'LOWER DELTA RD',
                font: 'thin'
            },
            {
                text: 'JLN BUKIT MERAH',
                font: 'thin'
            },
            {
                text: 'FARRER ROAD',
                font: 'thin'
            },
            {
                text: 'UPP THOMSON ROAD',
                font: 'thin'
            },
            {
                text: 'YIO CHU KANG RD',
                font: 'thin'
            }
        ]
    },
    444: {
        renderType: 'standardService',
        serviceNumber: '980',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1/', 'KALLANG MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thin'
            },
            {
                text: 'THOMSON RD',
                font: 'thin'
            },
            {
                text: 'BENCOOLEN ST',
                font: 'thin'
            },
            {
                text: 'MIDDLE ROAD',
                font: 'thin'
            },
            {
                text: 'BEACH ROAD',
                font: 'thin'
            },
        ]
    },
    445: {
        renderType: 'standardService',
        serviceNumber: '980',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['SEMBAWANG', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BEACH ROAD',
                font: 'thick'
            },
            {
                text: 'VICTORIA ST',
                font: 'thick'
            },
            {
                text: 'ROCHOR RD',
                font: 'thick'
            },
            {
                text: 'THOMSON RD',
                font: 'thick'
            },
        ]
    },
    451: {
        renderType: 'standardService',
        serviceNumber: '925',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'KRANJI ROAD, WAY',
                font: 'thin'
            },
            {
                text: 'SUNGEI KADUT ST 1',
                font: 'thin'
            },
            {
                text: 'WOODLANDS ROAD',
                font: 'thin'
            },
            {
                text: 'KRANJI EXP WAY',
                font: 'thin'
            },
        ]
    },
    452: {
        renderType: 'standardService',
        serviceNumber: '925',
        serviceFont: 'full',
        destination: {
            text: 'SUNGEI BULOH',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SUNGEI BULOH', 'NATURE PARK'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'KRANJI RD, LOOP',
                font: 'thin'
            },
            {
                text: 'KRANJI WAY',
                font: 'thin'
            },
            {
                text: 'NEW TEO LANE',
                font: 'thin'
            },
        ]
    },
    453: {
        renderType: 'standardService',
        serviceNumber: '925',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'KRANJI EXP WAY',
                font: 'thin'
            },
            {
                text: 'WOODLANDS RD',
                font: 'thin'
            },
            {
                text: 'SUNGEI KANDUT ST 1',
                font: 'thin'
            },
            {
                text: 'KRANJI WAY, RD',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
        ]
    },
    454: {
        renderType: 'standardService',
        serviceNumber: '925',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'KRANJI WAY, LOOP',
                font: 'thin'
            },
            {
                text: 'KRANJI ROAD',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
        ]
    },
    455: {
        renderType: 'standardService',
        serviceNumber: '926',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'MANDAI LAKE RD',
                font: 'thin'
            },
            {
                text: 'MANDAI ROAD',
                font: 'thin'
            },
            {
                text: 'WDL CENTRE',
                font: 'thin'
            },
        ]
    },
    456: {
        renderType: 'standardService',
        serviceNumber: '926',
        serviceFont: 'full',
        destination: {
            text: 'SINGAPORE ZOO',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SINGAPORE', 'ZOOLOGICAL GDN'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS CENTRE',
                font: 'thin'
            },
            {
                text: 'MANDAI ROAD',
                font: 'thin'
            },
            {
                text: 'MANDAI LAKE RD',
                font: 'thin'
            },
        ]
    },
    457: {
        renderType: 'standardService',
        serviceNumber: '925',
        serviceFont: 'full',
        destination: {
            text: 'LIM CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'LIM CHU KANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'KRANJI, LOOP',
                font: 'thin'
            },
            {
                text: 'SUNGEI BULOH',
                font: 'thin'
            },
            {
                text: 'NEO TIEW ROAD',
                font: 'thin'
            },
        ]
    },
    458: {
        renderType: 'standardService',
        serviceNumber: '960',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['MARINA', 'CENTRE'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS RD',
                font: 'thin'
            },
            {
                text: 'BT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'BKE / PIE',
                font: 'thin'
            },
            {
                text: 'WHITLEY RD',
                font: 'thin'
            },
            {
                text: 'BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'VICTORIA ST',
                font: 'thin'
            },
            {
                text: 'BRAS BASAH RD',
                font: 'thin'
            },
        ]
    },
    459: {
        renderType: 'standardService',
        serviceNumber: '960',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'VICTORIA ST',
                font: 'thin'
            },
            {
                text: 'ROCHOR RD',
                font: 'thin'
            },
            {
                text: 'BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'WHITLEY RD',
                font: 'thin'
            },
            {
                text: 'PIE / BKE',
                font: 'thin'
            },
            {
                text: 'BT PANJANG RD/LRT',
                font: 'thin'
            },
            {
                text: 'WOODLANDS RD',
                font: 'thin'
            },
        ]
    },
    460: {
        renderType: 'standardService',
        serviceNumber: '961',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1/', 'KALLANG MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'UPP BT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'QUEENSWAY',
                font: 'thin'
            },
            {
                text: 'JLN BUKIT MERAH',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            },
            {
                text: 'BEACH ROAD',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
        ]
    },
    461: {
        renderType: 'standardService',
        serviceNumber: '961',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'BEACH ROAD',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            },
            {
                text: 'JLN BUKIT MERAH',
                font: 'thin'
            },
            {
                text: 'QUEENSWAY',
                font: 'thin'
            },
            {
                text: 'UPP BT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
        ]
    },
    462: {
        renderType: 'standardService',
        serviceNumber: '964',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 7,6',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 9',
                font: 'thin'
            },
            {
                text: 'WOODLANDS LOOP',
                font: 'thin'
            },
            {
                text: 'WOODLANDS LINK',
                font: 'thin'
            },
        ]
    },
    466: {
        renderType: 'standardService',
        serviceNumber: '67',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['TAMPINES', ' INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'UPP BT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'DUNEARN ROAD',
                font: 'thin'
            },
            {
                text: 'SERANGOON ROAD',
                font: 'thin'
            },
            {
                text: 'SIMS AVENUE',
                font: 'thin'
            },
            {
                text: 'NEW UPP CHANGI RD',
                font: 'thin'
            },
            {
                text: 'BEDOK NORTH AVE 3',
                font: 'thin'
            },
        ]
    },
    467: {
        renderType: 'standardService',
        serviceNumber: '67',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', ' INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BEDOK NORTH AVE 3',
                font: 'thin'
            },
            {
                text: 'NEW UPP CHANGI RD',
                font: 'thin'
            },
            {
                text: 'GEYLANG ROAD',
                font: 'thin'
            },
            {
                text: 'JALAN BESAR',
                font: 'thin'
            },
            {
                text: 'BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
        ]
    },
    469: {
        renderType: 'standardService',
        serviceNumber: '172',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY ',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BOON LAY', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG DRIVE',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 1,3',
                font: 'thin'
            },
            {
                text: 'BRICKLAND ROAD',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG RD',
                font: 'thin'
            },
            {
                text: 'JALAN BEHAR',
                font: 'thin'
            }
        ]
    },
    470: {
        renderType: 'standardService',
        serviceNumber: '172',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'JLN BOON LAY',
                font: 'thin'
            },
            {
                text: 'JALAN BEHAR',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG RD',
                font: 'thin'
            },
            {
                text: 'BRICKLAND RD',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 3,1',
                font: 'thin'
            }
        ]
    },
    475: {
        renderType: 'standardService',
        serviceNumber: '188',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'HARBOURFRONT',
                font: 'big',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thin'
            },
            {
                text: 'B.B. WEST AVE 4, 2',
                font: 'thin'
            },
            {
                text: 'B.B. WEST AVE 3, 6',
                font: 'thin'
            },
            {
                text: 'TOH GUAN ROAD',
                font: 'thin'
            },
            {
                text: 'BOON LAY WAY',
                font: 'thin'
            },
            {
                text: 'AYE, CLEMENTI RD',
                font: 'thin'
            },
            {
                text: 'PASIR PANJANG RD',
                font: 'thin'
            },
            {
                text: 'HAW PAR VILLA',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            }
        ]
    },
    476: {
        renderType: 'standardService',
        serviceNumber: '188',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'HAW PAR VILLA',
                font: 'thin'
            },
            {
                text: 'PASIR PANJANG RD',
                font: 'thin'
            },
            {
                text: 'CLEMENTI RD, AYE',
                font: 'thin'
            },
            {
                text: 'BOON LAY WAY',
                font: 'thin'
            },
            {
                text: 'TOH GUAN ROAD',
                font: 'thin'
            },
            {
                text: 'B.B. WAST AVE 6,3',
                font: 'thin'
            },
            {
                text: 'B.B. WAST AVE 2,4',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thin'
            },
        ]
    },
    477: {
        renderType: 'standardService',
        serviceNumber: '190',
        serviceFont: 'full',
        destination: {
            text: 'NEW BRIDGE ROAD',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['NEW BRIDGE', 'ROAD'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'STEVENS ROAD',
                font: 'thin'
            },
            {
                text: 'ORCHARD ROAD',
                font: 'thin'
            },
            {
                text: 'HILL STREET',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            },
        ]
    },
    478: {
        renderType: 'standardService',
        serviceNumber: '188',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'HILL STREET',
                font: 'thin'
            },
            {
                text: 'SOMERSET ROAD',
                font: 'thin'
            },
            {
                text: 'SCOTTS ROAD',
                font: 'thin'
            },
            {
                text: 'STEVENS ROAD',
                font: 'thin'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
        ]
    },
    479: {
        renderType: 'swt',
        serviceNumber: '190A',
        serviceFont: 'full',
        destination: {
            text: 'DHOBY GHAUT MRT',
            font: 'thin'
        },
        font: 'thick'
    },
    480: {
        renderType: 'standardService',
        serviceNumber: '981',
        serviceFont: 'full',
        destination: {
            text: 'SENOKO IND EST',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SENOKO', 'INDUSTRIAL EST'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CANBERRA ROAD',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY RD WEST',
                font: 'thin'
            },
            {
                text: 'SENOKO ROAD',
                font: 'thin'
            },
            {
                text: 'SEMOKO LOOP',
                font: 'thin'
            },
        ]
    },
    481: {
        renderType: 'standardService',
        serviceNumber: '981',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG MRT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SEMBAWANG', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SENOKO ROAD',
                font: 'thin'
            },
            {
                text: 'SENOKO LOOP',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY RD WEST',
                font: 'thin'
            },
            {
                text: 'CANBERRA ROAD',
                font: 'thin'
            },
        ]
    },
    492: {
        renderType: 'standardService',
        serviceNumber: '700A',
        serviceFont: 'full',
        destination: {
            text: 'SUNTEC',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'SUNTEC',
                font: 'big',
                showDest: false
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'DUNEARN RD',
                font: 'thin'
            },
            {
                text: 'SCOTTS RD',
                font: 'thin'
            },
            {
                text: 'ORCHARD RD',
                font: 'thin'
            },
        ]
    },
    494: {
        renderType: 'standardService',
        serviceNumber: '927',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'MANDAI ROAD',
                font: 'thin'
            },
            {
                text: 'WOODLANDS RD',
                font: 'thin'
            },
            {
                text: 'KJE,CHOA CHU KANG DR',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'thin'
            },
        ]
    },
    495: {
        renderType: 'standardService',
        serviceNumber: '927',
        serviceFont: 'full',
        destination: {
            text: 'SINGAPORE ZOO',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SINGAPORE', 'ZOOLOGICAL GDN'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG DR,KJE',
                font: 'thin'
            },
            {
                text: 'WOODLANDS RD',
                font: 'thin'
            },
            {
                text: 'MANDAI RD',
                font: 'thin'
            }
        ]
    },
    496: {
        renderType: 'standardService',
        serviceNumber: '61',
        serviceFont: 'full',
        destination: {
            text: 'EUNOS',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['EUNOS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CLEMENTI RD',
                font: 'thin'
            },
            {
                text: 'HOLLAND RD,AVE',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            },
            {
                text: 'VICTORIA ST',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'MACPHERSON RD',
                font: 'thin'
            },
            {
                text: 'UBI AVE 2',
                font: 'thin'
            }
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
                font: 'thin'
            },
            {
                text: 'MACPHERSON RD',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'NORTH BRIDGE RD',
                font: 'thin'
            },
            {
                text: 'SOUTH BRIDGE RD',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'HOLLAND RD',
                font: 'thin'
            },
            {
                text: 'CLEMENTI RD',
                font: 'thin'
            }

        ]
    },
    498: {
        renderType: 'standardService',
        serviceNumber: '77',
        serviceFont: 'full',
        destination: {
            text: 'MARINA CENTRE',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['MARINA', 'CENTRE'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'DUNEARN RD',
                font: 'thin'
            },
            {
                text: 'SIXTH AVENUE',
                font: 'thin'
            },
            {
                text: 'HOLLAND RD',
                font: 'thin'
            },
            {
                text: 'ORCHARD RD',
                font: 'thin'
            },
            {
                text: 'RAFFLES CITY',
                font: 'thin'
            },
        ]
    },
    499: {
        renderType: 'standardService',
        serviceNumber: '77',
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
                text: 'PENANG RD',
                font: 'thin'
            },
            {
                text: 'ORCHARD BOULEVARD',
                font: 'thin'
            },
            {
                text: 'HOLLAND RD',
                font: 'thin'
            },
            {
                text: 'SIXTH AVENUE',
                font: 'thin'
            },
            {
                text: 'BUKIT TIMAH RD',
                font: 'thin'
            }
        ]
    },
    504: {
        renderType: 'standardService',
        serviceNumber: '189',
        serviceFont: 'full',
        destination: {
            text: 'KENT RIDGE TER',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['KENT RIDGE', 'TERMINAL'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'B. B. EAST AVE 6',
                font: 'thin'
            },
            {
                text: 'CLEMENTI AVE 6',
                font: 'thin'
            },
            {
                text: 'CLEMENTI MRT',
                font: 'thin'
            },
            {
                text: 'WEST COAST RD',
                font: 'thin'
            },
        ]
    },
    505: {
        renderType: 'standardService',
        serviceNumber: '189',
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
                text: 'WEST COAST RD',
                font: 'thin'
            },
            {
                text: 'CLEMENTI MRT',
                font: 'thin'
            },
            {
                text: 'CLEMENTI AVE 6',
                font: 'thin'
            },
            {
                text: 'B. B. EAST AVE 6',
                font: 'thin'
            },
        ]
    },
    508: {
        renderType: 'standardService',
        serviceNumber: '921',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT PANJANG', 'INT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BUKIT PANAJNG RD',
                font: 'thin'
            },
            {
                text: 'PENDING RD',
                font: 'thin'
            },
            {
                text: 'PETIR RD (LOOP)',
                font: 'thin'
            },
        ]
    },
    510: {
        renderType: 'standardService',
        serviceNumber: '857',
        serviceFont: 'full',
        destination: {
            text: 'SUNTEC CITY',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SUNTEC', 'CITY'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YIO CHU KANG RD,CTE',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'BENDEMEER RD',
                font: 'thin'
            },
            {
                text: 'JALAN BESAR',
                font: 'thin'
            },
            {
                text: 'BENCOOLEN ST',
                font: 'thin'
            },
        ]
    },
    511: {
        renderType: 'standardService',
        serviceNumber: '857',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'STAMFORD RD',
                font: 'thin'
            },
            {
                text: 'SELEGIE RD',
                font: 'thin'
            },
            {
                text: 'SERANGOON RD',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'CTE,YIO CHU KANG RD',
                font: 'thin'
            },
        ]
    },
    512: {
        renderType: 'standardService',
        serviceNumber: '970',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SHENTON', 'WAY'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'HILLVIEW RD, AVE',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'DUNEARN RD',
                font: 'thin'
            },
            {
                text: 'SIXTH AVENUE',
                font: 'thin'
            },
            {
                text: 'COMMONWEALTH AVE',
                font: 'thin'
            },
            {
                text: 'KIM SENG ROAD',
                font: 'thin'
            },
            {
                text: 'EU TONG SEN ST',
                font: 'thin'
            }
        ]
    },
    513: {
        renderType: 'standardService',
        serviceNumber: '970',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT', 'PANJANG'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'NEW BRIDGE RD',
                font: 'thin'
            },
            {
                text: 'ZION RD',
                font: 'thick'
            },
            {
                text: 'COMMONWEALTH AVE',
                font: 'thin'
            },
            {
                text: 'SIXTH AVENUE',
                font: 'thin'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'JLN JUORNG KECHIl',
                font: 'thin'
            },
            {
                text: 'HILLVIEW RD, AVE',
                font: 'thin'
            },
        ]
    },
    515: {
        renderType: 'standardService',
        serviceNumber: '969',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['TAMPINES', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 7',
                font: 'thin'
            },
            {
                text: 'GAMBAS AVENUE',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 5,2',
                font: 'thin'
            },
            {
                text: 'SLE / TPE',
                font: 'thin'
            },
            {
                text: 'TAMPINES AVE 7',
                font: 'thin'
            },
        ]
    },
    516: {
        renderType: 'standardService',
        serviceNumber: '969',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TAMPINES AVE 7',
                font: 'thin'
            },
            {
                text: 'TPE / SLE',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 2,5',
                font: 'thin'
            },
            {
                text: 'GAMBAS AVENUE',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 7',
                font: 'thin'
            },
        ]
    },
    519: {
        renderType: 'standardService',
        serviceNumber: '962',
        serviceFont: 'full',
        destination: {
            text: 'SEMBAWANG DR',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SEMBAWANG', 'DRIVE'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 5,6,7',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG WAY',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG CRES',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG DRIVE',
                font: 'thin'
            },
        ]
    },
    520: {
        renderType: 'standardService',
        serviceNumber: '962',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SEMBAWANG DR',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG CRES',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG WAY',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 7,6,5',
                font: 'thin'
            },
        ]
    },
    521: {
        renderType: 'standardService',
        serviceNumber: '963',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'HARBOURFRONT',
                font: 'big',
                showDest: false
            },
            {
                text: 'MASRILING MRT',
                font: 'thick'
            },
            {
                text: 'BUKIT PANAJNG RD',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thin'
            },
            {
                text: 'B.B EAST AVE 2,4',
                font: 'thin'
            },
            {
                text: 'B.B EAST AVE 3',
                font: 'thin'
            },
            {
                text: 'CLEMENTI AVE 6',
                font: 'thin'
            },
            {
                text: 'A Y E',
                font: 'thick'
            },
            {
                text: 'NUH  , SISIR',
                font: 'thin'
            },
            {
                text: 'ALEXANDRA RD',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
        ]
    },
    522: {
        renderType: 'standardService',
        serviceNumber: '963',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'ALEXANDRA RD',
                font: 'thin'
            },
            {
                text: 'SISIR , NUH',
                font: 'thick'
            },
            {
                text: 'A Y E',
                font: 'thick'
            },
            {
                text: 'CLEMENTI AVE 6',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 3,4',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 2',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thin'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'MASRILING MRT',
                font: 'thin'
            }
        ]
    },
    523: {
        renderType: 'standardService',
        serviceNumber: '965',
        serviceFont: 'full',
        destination: {
            text: 'SENGKANG INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'SENGKANG INT',
                font: 'big',
                showDest: false
            },
            {
                text: 'ADMIRALTY MRT',
                font: 'thin'
            },
            {
                text: 'GAMBAS AVENUE',
                font: 'thin'
            },
            {
                text: 'YISHUN MRT, AVE 2',
                font: 'thin'
            },
            {
                text: 'SLE / TPE',
                font: 'thin'
            },
            {
                text: 'COMPASSVIEW ST, RD',
                font: 'thin'
            },
        ]
    },
    524: {
        renderType: 'standardService',
        serviceNumber: '965',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'COMPASSVIEW RD, ST',
                font: 'thin'
            },
            {
                text: 'TPE / SLE',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 2, MRT',
                font: 'thin'
            },
            {
                text: 'GAMBAS AVENUE',
                font: 'thin'
            },
            {
                text: 'ADMIRALTY MRT',
                font: 'thin'
            },
        ]
    },
    525: {
        renderType: 'standardService',
        serviceNumber: '941',
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
                text: 'B. B WEST AVE 3, 6',
                font: 'thin'
            },
            {
                text: 'B. B WEST ST 11',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 3',
                font: 'thin'
            },
        ]
    },
    527: {
        renderType: 'standardService',
        serviceNumber: '947',
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
                text: 'B. B WEST AVE 2, 4',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 7',
                font: 'thin'
            },
            {
                text: 'BT BATOK ROAD',
                font: 'thin'
            },
        ]
    },
    528: {
        renderType: 'standardService',
        serviceNumber: '985',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SERANGOON ROAD',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 2',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 2, 4',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 7',
                font: 'thin'
            },
            {
                text: 'TECK WHYE AVE',
                font: 'thin'
            }
        ]
    },
    529: {
        renderType: 'standardService',
        serviceNumber: '985',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1/', 'KALLANG MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TECK WHYE AVE',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 7,4',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 2',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 2',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'BENDEMEER ROAD',
                font: 'thin'
            },
        ]
    },
    538: {
        renderType: 'standardService',
        serviceNumber: '963E',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'HARBOURFRONT',
                font: 'big',
                showDest: false
            },
            {
                text: 'MASRILING MRT',
                font: 'thin'
            },
            {
                text: 'BT PANAJNG RD',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVE',
                font: 'thin'
            },
            {
                text: 'B.B EAST AVE 4',
                font: 'thin'
            },
            {
                text: 'B.B EAST AVE 3',
                font: 'thin'
            },
            {
                text: 'A Y E',
                font: 'thick'
            },
            {
                text: 'NUH ,SISIR',
                font: 'thin'
            },
            {
                text: 'ALEXANDRA RD',
                font: 'thin'
            },
        ]
    },
    539: {
        renderType: 'standardService',
        serviceNumber: '173',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CLEMENTI', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'HILLVIEW AVE',
                font: 'thin'
            },
            {
                text: 'HUME AVENUE',
                font: 'thin'
            },
            {
                text: 'UPP BT ITMAH RD',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'TOH TUCK RD, RISE',
                font: 'thin'
            },
            {
                text: 'C\'WEALTH AVE WEST',
                font: 'thin'
            },
        ]
    },
    540: {
        renderType: 'standardService',
        serviceNumber: '173',
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
                text: 'C\'WEALTH AVE WEST',
                font: 'thin'
            },
            {
                text: 'TOH TUCK RD, RISE',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'UPP BT TIMAH ROAD',
                font: 'thin'
            },
            {
                text: 'HUME AVENUE',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thin'
            },
        ]
    },
    542: {
        renderType: 'standardService',
        serviceNumber: '902',
        serviceFont: 'full',
        destination: {
            text: 'REPUBLIC POLY',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['REPUBLIC', 'POLYTECHNIC'],
                font: 'thick',
                showDest: false
            },
        ]
    },
    495: {
        renderType: 'standardService',
        serviceNumber: '700',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'SHENTON WAY',
                font: 'big',
                showDest: false
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'PETIR ROAD',
                font: 'thin'
            },
            {
                text: 'DUNEARN RD',
                font: 'thin'
            },
            {
                text: 'SCOTTS ROAD',
                font: 'thin'
            },
            {
                text: 'ORCHARD ROAD',
                font: 'thin'
            },
            {
                text: 'COLLYER QUAY',
                font: 'thin'
            },
        ]
    },
    547: {
        renderType: 'standardService',
        serviceNumber: '985W',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1/', 'KALLANG MRT'],
                font: 'thin',
                showDest: false
            },
            {
                text: 'TECK WHYE AVE',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK RD',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 7,4',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 2',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 2',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'BENDEMEER RD',
                font: 'thin'
            },
        ]
    },
    548: {
        renderType: 'standardService',
        serviceNumber: '985W',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thin',
                showDest: false
            },
            {
                text: 'SERANGOON RD',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 2',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 2, 4',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 7',
                font: 'thin'
            },
            {
                text: 'BT BATOK ROAD',
                font: 'thin'
            },
            {
                text: 'TECK WHYE AVE',
                font: 'thin'
            }
        ]
    },
    549: {
        renderType: 'standardService',
        serviceNumber: '945',
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
                text: 'B.B EAST AVE 5',
                font: 'thin'
            },
            {
                text: 'LITTLE GUILIN',
                font: 'thin'
            },
            {
                text: 'BT GOMBAK MRT',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 7,4',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK ST 33',
                font: 'thin'
            },
            {
                text: 'BT BATOK INT / MRT',
                font: 'thin'
            },
        ]
    },
    550: {
        renderType: 'standardService',
        serviceNumber: '966',
        serviceFont: 'full',
        destination: {
            text: 'MARINE PARADE',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['MARINE', 'PARADE'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'PENDING / PETIR RD',
                font: 'thin'
            },
            {
                text: 'PIE (PETIR RD)',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'JLN KOLAM AYER',
                font: 'thin'
            },
            {
                text: 'EUNOS MRT',
                font: 'thin'
            },
            {
                text: 'STILL RD',
                font: 'thin'
            },
        ]
    },
    586: {
        renderType: 'standardService',
        serviceNumber: '188R',
        serviceFont: 'full',
        destination: {
            text: 'R W S',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['RESORTS WORLD', 'SENTOSA'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH ROAD',
                font: 'thin'
            },
        ]
    },
    591: {
        renderType: 'standardService',
        serviceNumber: '178',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BOON LAY', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS CENTRE RD',
                font: 'thin'
            },
            {
                text: 'UPP BT TIMAH',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK',
                font: 'thin'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thin'
            },
            {
                text: 'CORPORATION RD',
                font: 'thin'
            },
        ]
    },
    611: {
        renderType: 'standardService',
        serviceNumber: '176',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'BUKIT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thin'
            },
            {
                text: 'BT BATOK CTR/ MRT',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thick'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            }
        ]
    },
    614: {
        renderType: 'standardService',
        serviceNumber: '184',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'BUKIT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'CLEMENTI ROAD',
                font: 'thick'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'CASHEW ROAD',
                font: 'thick'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            }
        ]
    },
    619: {
        renderType: 'standardService',
        serviceNumber: '970',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT', 'PANJANG'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'NEW BRIDGE RD',
                font: 'thin'
            },
            {
                text: 'ZION RD',
                font: 'thin'
            }
        ]
    },
    654: {
        renderType: 'standardService',
        serviceNumber: '983',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INTERCHANGE'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'C.C.K AVE 4 ,5',
                font: 'thin'
            },
            {
                text: 'C.C.K AVE 6 ,1',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG RD',
                font: 'thin'
            },
            {
                text: 'PETIR ROAD',
                font: 'thin'
            },
            {
                text: 'JELUBU RD (LOOP)',
                font: 'thin'
            }
        ]
    },
    1901: {
        renderType: '190-variant',
        serviceNumber: '190',
        serviceFont: 'full',
        destination: {
            text: 'KAMPONG BAHRU TER',
            font: 'tall'
        },
        scrolls: [
            {
                text: ['KAMPONG BAHRU', 'TERMINAL'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'STEVENS ROAD',
                font: 'thin'
            },
            {
                text: 'ORCHARD ROAD',
                font: 'thin'
            },
            {
                text: 'HILL STREET',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            }
        ]
    },
    1902: {
        renderType: '190-variant',
        serviceNumber: '190',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'HILL STREET',
                font: 'thin'
            },
            {
                text: 'SOMERSET ROAD',
                font: 'thin'
            },
            {
                text: 'SCOTTS ROAD',
                font: 'thin'
            },
            {
                text: 'STEVENS ROAD',
                font: 'thin'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            }
        ]
    }
}

EDSExtraMessageSet['SMRT'] = {
    1: {
        text: ['MERRY CHRISTMAS', 'HAPPY NEW YEAR'],
        font: 'thick',
        align: 'centre',
        yPos: [9, 0]
    },
    2: {
        text: 'GONG XI FA CAI',
        font: 'full',
        align: 'centre',
        yPos: 0
    },
    3: {
        text: 'SELAMAT HARI RAYA',
        font: 'big',
        align: 'centre',
        yPos: 1
    },
    4: {
        text: ['HAPPY', 'DEEPAVALI'],
        font: 'thick',
        align: 'centre',
        yPos: [9, 0]
    },
    5: {
        text: ['EZ READER OUT OF ORDER', 'PLEASE PAY CASH'],
        font: 'thin',
        align: 'centre',
        yPos: [9, 0]
    },
    6: {
        text: 'LAST BUS',
        font: 'full',
        align: 'centre',
        yPos: 0
    }
}

EDSImageSet['SMRT'] = {
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
