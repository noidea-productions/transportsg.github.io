EDSTemplateSet['SBST'] = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: 'full',
            format: '<serviceNumber,,0>',
            spaceWidth: 1,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                narrow: 'narrow',
                destination: '$destination.text',
                thin2: 'thin2',
                arrow: '> ',
            },
            font: '$scrolls[]font',
            format: ['<currentRoad,narrow,9>','<arrow,thin2,0><destination,thin2,0>'],
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
            font: 'full',
            format: '<serviceNumber,,0>',
            spaceWidth: 1,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                narrow: 'narrow',
                destination: '$destination.text',
                destinationFont: '$destination.font',
            },
            font: '$scrolls[]font',
            format: ['<currentRoad,narrow,9>','<destination,destinationFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'left'
        }
    ],
    'int-loopSvc1': [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: 'full',
            format: '<serviceNumber,,0>',
            spaceWidth: 1,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                narrow: 'narrow',
                destination: '$destination.text',
                destinationFont: '$destination.font',
            },
            font: '$scrolls[]font',
            format: ['<currentRoad,narrow,9>','<destination,destinationFont,1>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'left'
        }
    ],
    expSvc: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: 'full',
            format: '<serviceNumber,,0>',
            spaceWidth: 1,
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
                    name: 'express',
                    x: 0
                }
            ]
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
    ]
}

EDSDataSet['SBST'] = {
    41: {
        renderType: 'int-loopSvc',
        serviceNumber: '4',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES INT-CHANGI NTH WAY',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'TAMPINES AVE 7'
            },
            {
                'text': 'FLORA RD'
            },
            {
                'text': 'CHANGI NORTH WAY'
            },
            {
                'text': 'FLORA RD'
            },
            {
                'text': 'TAMPINES AVE 7'
            }
        ]
    },
    71: {
        renderType: 'standardService',
        serviceNumber: '7',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'CHANGI RD'
            },
            {
                'text': 'GUILLEMARD RD'
            },
            {
                'text': 'NORTH BRIDGE RD'
            },
            {
                'text': 'OCHARD BOULEVARD'
            },
            {
                'text': 'HOLLAND RD'
            },
            {
                'text': 'ULU PANDAN RD'
            },
        ]
    },
    72: {
        renderType: 'standardService',
        serviceNumber: '7',
        serviceFont: 'full',
        destination: {
            text: 'BEDOK INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ULU PANDAN RD'
            },
            {
                'text': 'HOLLAND RD'
            },
            {
                'text': 'ORCHARD RD'
            },
            {
                'text': 'VICTORIA ST'
            },
            {
                'text': 'GUILLEMARD RD'
            },
            {
                'text': 'SIMS AVE EAST'
            },
        ]
    },
    108: {
        renderType: 'expSvc',
        serviceNumber: '10e',
        serviceFont: 'full',
        text: 'EXPRESS 10e'
    },
    109: {
        renderType: 'expSvc',
        serviceNumber: '10e',
        serviceFont: 'full',
        text: 'EXPRESS 10e'
    },
    111: {
        renderType: 'int-loopSvc',
        serviceNumber: '11',
        serviceFont: 'full',
        destination: {
            text: 'LOR 1 GEYLANG TER-RHU CROSS',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'SIMS WAY'
            },
            {
                'text': 'STADIUM CRESCENT'
            },
            {
                'text': 'RHU CROSS'
            },
            {
                'text': 'STADIUM WALK'
            },
            {
                'text': 'SIMS WAY'
            }
        ]
    },
    148: {
        renderType: 'expSvc',
        serviceNumber: '14e',
        serviceFont: 'full',
        text: 'EXPRESS 14e'
    },
    149: {
        renderType: 'expSvc',
        serviceNumber: '14e',
        serviceFont: 'full',
        text: 'EXPRESS 14e'
    },
    221: {
        renderType: 'standardService',
        serviceNumber: '22',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 8'
            },
            {
                'text': 'SERANGOON CENTRAL'
            },
            {
                'text': 'UPPER PAYA LEBAR RD'
            },
            {
                'text': 'UBI AVE 2'
            },
            {
                'text': 'BEDOK RESERVOIR RD'
            },
            {
                'text': 'TAMPINES AVE 4'
            },
        ]
    },
    222: {
        renderType: 'standardService',
        serviceNumber: '22',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'TAMPINES AVE 4'
            },
            {
                'text': 'BEDOK RESERVOIR RD'
            },
            {
                'text': 'UBI AVE 2'
            },
            {
                'text': 'UPPER PAYA LEBAR RD'
            },
            {
                'text': 'SERANGOON CENTRAL'
            },
            {
                'text': 'ANG MO KIO AVE 8'
            },
        ]
    },
    302: {
        renderType: 'standardService',
        serviceNumber: '30',
        serviceFont: 'full',
        destination: {
            text: 'BEDOK INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'CORPORATION DR'
            },
            {
                'text': 'WEST COAST RD'
            },
            {
                'text': 'PASIR PANJANG RD'
            },
            {
                'text': 'TELOK BLANGAH RD'
            },
            {
                'text': 'KEPPEL RD'
            },
            {
                'text': 'OLD AIRPORT RD'
            },
            {
                'text': 'SIMS AVE EAST'
            },
        ]
    },
    471: { //incomplete
        renderType: 'int-loopSvc1',
        serviceNumber: '47',
        serviceFont: 'full',
        destination: {
            text: 'CHANGI BIZ PK-AMBER RD',
            font: 'narrow'
        },
        scrolls: [
            {
                'text': 'BEDOK SOUTH RD'
            },
        ]
    },
    501: {
        renderType: 'standardService',
        serviceNumber: '50',
        serviceFont: 'full',
        destination: {
            text: 'PUNGGOL INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 8'
            },
            {
                'text': 'ANG MO KIO AVE 5'
            },
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'SENGKANG WEST AVE'
            },
            {
                'text': 'SENGKANG EAST WAY'
            },
            {
                'text': 'PUNGGOL DR'
            }
        ]
    },
    502: {
        renderType: 'standardService',
        serviceNumber: '50',
        serviceFont: 'full',
        destination: {
            text: 'BISHAN INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'PUNGGOL DR'
            },
            {
                'text': 'SENGKANG EAST WAY'
            },
            {
                'text': 'SENGKANG WEST AVE'
            },
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'ANG MO KIO AVE 5'
            },
            {
                'text': 'ANG MO KIO AVE 8'
            }
        ]
    },
    531: {
        renderType: 'standardService',
        serviceNumber: '53',
        serviceFont: 'full',
        destination: {
            text: 'CHANGI AIRPORT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'BISHAN RD'
            },
            {
                'text': 'SERANGOOON CENTRAL'
            },
            {
                'text': 'LORONG AH SOO'
            },
            {
                'text': 'HOUGANG AVE 1'
            },
            {
                'text': 'PASIR RIS DR 1'
            }
        ]
    },
    532: {
        renderType: 'standardService',
        serviceNumber: '53',
        serviceFont: 'full',
        destination: {
            text: 'BISHAN INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'HOUGANG AVE 1'
            },
            {
                'text': 'LORONG AH SOO'
            },
            {
                'text': 'SERANGOOON CENTRAL'
            },
            {
                'text': 'BISHAN RD'
            }
        ]
    },
    534: {
        renderType: 'int-loopSvc',
        serviceNumber: '53M',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG AVE 1-S'GOON CTRL',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'HOUGANG AVE 1'
            },
            {
                'text': 'LORONG AH SOO'
            },
            {
                'text': 'SERANGOOON CENTRAL'
            },
            {
                'text': 'LORONG AH SOO'
            },
            {
                'text': 'HOUGANG AVE 1'
            }
        ]
    },
    561: {
        renderType: 'int-loopSvc',
        serviceNumber: '56',
        serviceFont: 'full',
        destination: {
            text: 'BISHAN INT-MARINA CTR TER',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'BISHAN ST 13'
            },
            {
                'text': 'LOR 6 TOA PAYOH'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'BUKIT TIMAH RD'
            },
            {
                'text': 'MIDDLE RD'
            }
        ]
    },
    591: {
        renderType: 'standardService',
        serviceNumber: '59',
        serviceFont: 'full',
        destination: {
            text: 'CHANGI VILLAGE TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'LOR 1 TOA PAYOH'
            },
            {
                'text': 'KAKI BUKIT AVE 1'
            },
            {
                'text': 'BEDOK RESERVOIR RD'
            },
            {
                'text': 'TAMPINES AVE 2'
            },
            {
                'text': 'LOYANG AVE'
            },
        ]
    },
    592: {
        renderType: 'standardService',
        serviceNumber: '59',
        serviceFont: 'full',
        destination: {
            text: 'BISHAN INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'LOYANG AVE'
            },
            {
                'text': 'TAMPINES AVE 2'
            },
            {
                'text': 'BEDOK RESERVOIR RD'
            },
            {
                'text': 'KAKI BUKIT AVE 1'
            },
            {
                'text': 'LOR 1 TOA PAYOH'
            },
        ]
    },
    641: {
        renderType: 'standardService',
        serviceNumber: '64',
        serviceFont: 'full',
        destination: {
            text: 'MEI LING ST',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ALJUNIED RD'
            },
            {
                'text': 'BENDEMEER RD'
            },
            {
                'text': 'JALAN BESAR'
            },
            {
                'text': 'CLEMANCEAU AVE'
            },
            {
                'text': 'TIONG BAHRU RD'
            },
            {
                'text': 'STIRLING RD'
            },
        ]
    },
    642: {
        renderType: 'standardService',
        serviceNumber: '64',
        serviceFont: 'full',
        destination: {
            text: 'SIMS PLACE TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ALEXANDRA RD'
            },
            {
                'text': 'TIONG BAHRU RD'
            },
            {
                'text': 'CLEMANCEAU AVE'
            },
            {
                'text': 'SELEGIE RD'
            },
            {
                'text': 'SERANGOON RD'
            },
            {
                'text': 'ALJUNIED RD'
            },
        ]
    },
    651: {
        renderType: 'standardService',
        serviceNumber: '65',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'BEDOK RESERVOIR RD'
            },
            {
                'text': 'UBI AVE 2'
            },
            {
                'text': 'MACPHERSON RD'
            },
            {
                'text': 'BENDEMEER RD'
            },
            {
                'text': 'JALAN BESAR'
            },
            {
                'text': 'ORCHARD BOULEVARD'
            },
            {
                'text': 'LOWER DELTA RD'
            }
        ]
    },
    652: {
        renderType: 'standardService',
        serviceNumber: '65',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'LOWER DELTA RD'
            },
            {
                'text': 'ORCHARD RD'
            },
            {
                'text': 'SELEGIE RD'
            },
            {
                'text': 'SERANGOON RD'
            },
            {
                'text': 'MACPHERSON RD'
            },
            {
                'text': 'UBI AVE 2'
            },
            {
                'text': 'BEDOK RESERVOIR RD'
            },
        ]
    },
    711: {
        renderType: 'int-loopSvc',
        serviceNumber: '71',
        serviceFont: 'full',
        destination: {
            text: 'YCK INT-BISHAN ST 11'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 4'
            },
            {
                'text': 'ANG MO KIO AVE 1'
            },
            {
                'text': 'BISHAN RD'
            },
            {
                'text': 'BRADDELL RD'
            },
            {
                'text': 'BISHAN RD'
            },
            {
                'text': 'ANG MO KIO AVE 1'
            },
            {
                'text': 'ANG MO KIO AVE 4'
            }
        ]
    },
    721: {
        renderType: 'standardService',
        serviceNumber: '72',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 5'
            },
            {
                'text': 'HOUGANG AVE 9'
            },
            {
                'text': 'HOUGANG CENTRAL'
            },
            {
                'text': 'TAMPINES RD'
            },
            {
                'text': 'TAMPINES AVE 10'
            },
            {
                'text': 'TAMPINES AVE 9'
            },
        ]
    },
    722: {
        renderType: 'standardService',
        serviceNumber: '72',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'TAMPINES AVE 9'
            },
            {
                'text': 'TAMPINES AVE 10'
            },
            {
                'text': 'TAMPINES RD'
            },
            {
                'text': 'HOUGANG CENTRAL'
            },
            {
                'text': 'HOUGANG AVE 9'
            },
            {
                'text': 'ANG MO KIO AVE 5'
            },
        ]
    },
    761: {
        renderType: 'standardService',
        serviceNumber: '76',
        serviceFont: 'full',
        destination: {
            text: 'EUNOS INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 4'
            },
            {
                'text': 'ANG MO KIO AVE 3'
            },
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'UPPER PAYA LEBAR RD'
            },
            {
                'text': 'PAYA LEBAR RD'
            }
        ]
    },
    762: {
        renderType: 'standardService',
        serviceNumber: '76',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'PAYA LEBAR RD'
            },
            {
                'text': 'UPPER PAYA LEBAR RD'
            },
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'ANG MO KIO AVE 3'
            },
            {
                'text': 'ANG MO KIO AVE 4'
            }
        ]
    },
    811: {
        renderType: 'int-loopSvc',
        serviceNumber: '81',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES INT-S'GOON CTRL',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'TAMPINES AVE 7'
            },
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'TAMPINES RD'
            },
            {
                'text': 'UPPER SERANGOON RD'
            },
            {
                'text': 'TAMPINES RD'
            },
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'TAMPINES AVE 7'
            }
        ]
    },
    811: {
        renderType: 'int-loopSvc',
        serviceNumber: '81',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES INT-S'GOON CTRL',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'TAMPINES AVE 7'
            },
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'TAMPINES RD'
            },
            {
                'text': 'UPPER SERANGOON RD'
            },
            {
                'text': 'TAMPINES RD'
            },
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'TAMPINES AVE 7'
            }
        ]
    },
    891: {
        renderType: 'standardService',
        serviceNumber: '89',
        serviceFont: 'full',
        destination: {
            text: 'CHANGI AIRFREIGHT CTR',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'HOUGANG AVE 10'
            },
            {
                'text': 'COMPASSVIEW RD'
            },
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'LOYANG AVE'
            },
            {
                'text': 'AIRLINE RD'
            }
        ]
    },
    881: {
        renderType: 'standardService',
        serviceNumber: '88',
        serviceFont: 'full',
        destination: {
            text: 'TOA PAYOH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'PASIR RIS DR 3'
            },
            {
                'text': 'PUNGGOL RD'
            },
            {
                'text': 'HOUGANG AVE 8'
            },
            {
                'text': 'ANG MO KIO AVE 5'
            },
            {
                'text': 'ANG MO KIO AVE 3'
            },
            {
                'text': 'BISHAN ST 22'
            },
            {
                'text': 'LOR 4 TOA PAYOH'
            },
        ]
    },
    882: {
        renderType: 'standardService',
        serviceNumber: '88',
        serviceFont: 'full',
        destination: {
            text: 'PASIR RIS INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
        ]
    },
    898: {
        renderType: 'expSvc',
        serviceNumber: '89e',
        serviceFont: 'full',
        text: 'EXPRESS 89e'
    },
    899: {
        renderType: 'expSvc',
        serviceNumber: '89e',
        serviceFont: 'full',
        text: 'EXPRESS 89e'
    },
    911: {
        renderType: 'int-loopSvc',
        serviceNumber: '91',
        serviceFont: 'full',
        destination: {
            text: 'BUONA V TER-AYER RAJAH CRES',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'C'WEALTH AVE'
            },
            {
                'text': 'NTH BUONA VISTA RD'
            },
            {
                'text': 'AYER RAJAH AVE'
            },
            {
                'text': 'AYER RAJAH CRES'
            },
            {
                'text': 'AYER RAJAH AVE'
            },
            {
                'text': 'NTH BUONA VISTA RD'
            },
            {
                'text': 'C'WEALTH AVE'
            }
        ]
    },
    991: {
        renderType: 'standardService',
        serviceNumber: '99',
        serviceFont: 'full',
        destination: {
            text: 'JOO KOON INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'JURONG EAST AVE 1'
            },
            {
                'text': 'JURONG WEST AVE 1'
            },
            {
                'text': 'JURONG WEST AVE 4'
            },
            {
                'text': 'JURONG WEST ST 91'
            },
            {
                'text': 'UPP JURONG RD'
            }
        ]
    },
    992: {
        renderType: 'standardService',
        serviceNumber: '99',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'UPP JURONG RD'
            },
            {
                'text': 'JURONG WEST ST 91'
            },
            {
                'text': 'JURONG WEST AVE 4'
            },
            {
                'text': 'JURONG WEST AVE 1'
            },
            {
                'text': 'JURONG EAST AVE 1'
            }
        ]
    },
    1011: {
        renderType: 'int-loopSvc',
        serviceNumber: '101',
        serviceFont: 'full',
        destination: {
            text: 'S'GOON INT-BUANGKOK LK',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'UPPER SERANGOON RD'
            },
            {
                'text': 'HOUGANG CENTRAL'
            },
            {
                'text': 'HOUGANG AVE 8'
            },
            {
                'text': 'HOUGANG ST 51'
            },
            {
                'text': 'BUANGKOK LINK'
            },
            {
                'text': 'HOUGANG ST 51'
            },
            {
                'text': 'HOUGANG AVE 8'
            },
            {
                'text': 'HOUGANG CENTRAL'
            },
            {
                'text': 'UPPER SERANGOON RD'
            }
        ]
    },
    1021: {
        renderType: 'int-loopSvc',
        serviceNumber: '102',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG-SELETAR A\'SPACE',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'UPPER SERANGOON RD'
            },
            {
                'text': 'BUANGKOK DR'
            },
            {
                'text': 'COMPASSVALE DR'
            },
            {
                'text': 'SENGKANG EAST WAY'
            },
            {
                'text': 'SENGKANG WEST WAY'
            },
            {
                'text': 'SELETAR A\'SPACE DR'
            },
        ]
    },
    1031: {
        renderType: 'standardService',
        serviceNumber: '103',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'JLN KAYU'
            },
            {
                'text': 'SELETAR AEROSPACE DR'
            },
            {
                'text': 'WEST CAMP RD'
            },
            {
                'text': 'YISHUN CENTRAL'
            }
        ]
    },
    1032: {
        renderType: 'standardService',
        serviceNumber: '103',
        serviceFont: 'full',
        destination: {
            text: 'SERANGOON INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'YISHUN CENTRAL'
            },
            {
                'text': 'WEST CAMP RD'
            },
            {
                'text': 'SELETAR AEROSPACE DR'
            },
            {
                'text': 'JLN KAYU'
            },
            {
                'text': 'YIO CHU KANG RD'
            }
        ]
    },
    1071: {
        renderType: 'standardService',
        serviceNumber: '107',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'HOUGANG AVE 10'
            },
            {
                'text': 'UPPER SERANGOON RD'
            },
            {
                'text': 'KALLANG BAHRU'
            },
            {
                'text': 'LAVENDER ST'
            },
            {
                'text': 'BEACH RD'
            }
        ]
    },
    1072: {
        renderType: 'standardService',
        serviceNumber: '107',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG CENTRAL INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'BEACH RD'
            },
            {
                'text': 'LAVENDER ST'
            },
            {
                'text': 'KALLANG BAHRU'
            },
            {
                'text': 'UPPER SERANGOON RD'
            },
            {
                'text': 'HOUGANG AVE 10'
            }
        ]
    },
    1091: {
        renderType: 'standardService',
        serviceNumber: '109',
        serviceFont: 'full',
        destination: {
            text: 'CHANGI VILLAGE TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'HOUGANG AVE 9'
            },
            {
                'text': 'SENGKANG EAST RD'
            },
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'LOYANG AVE'
            }
        ]
    },
    1092: {
        renderType: 'standardService',
        serviceNumber: '109',
        serviceFont: 'full',
        destination: {
            text: 'SERANGOON INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'LOYANG AVE'
            },
            {
                'text': 'PASIR RIS DR 1'
            },
            {
                'text': 'SENGKANG EAST RD'
            },
            {
                'text': 'HOUGANG AVE 9'
            },
            {
                'text': 'YIO CHU KANG RD'
            }
        ]
    },
    1111: {
        renderType: 'full',
        text: 'OFF SERVICE'
    },
    1112: {
        renderType: 'int-loopSvc',
        serviceNumber: '111',
        serviceFont: 'full',
        destination: {
            text: 'GHIM MOH TER-MARINE CTR',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'COMMONWEALTH AVE'
            },
            {
                'text': 'TANGLIN RD'
            },
            {
                'text': 'ORCHARD RD'
            },
            {
                'text': 'BRAS BASAH RD'
            },
            {
                'text': 'STAMFORD RD'
            },
            {
                'text': 'OCHARD BOULEVARD'
            },
            {
                'text': 'TANGLIN RD'
            },
            {
                'text': 'COMMONWEALTH AVE'
            },
        ]
    },
    1161: {
        renderType: 'int-loopSvc',
        serviceNumber: '116',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG INT-S\'GOON CTRL',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'HOUGANG AVE 4'
            },
        ]
    },
    1201: {
        renderType: 'int-loopSvc',
        serviceNumber: '120',
        serviceFont: 'full',
        destination: {
            text: 'KG BAHRU TER-TK BLANGAH',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'JALAN BUKIT MERAH'
            },
            {
                'text': 'TELOK BLANGAH HTS'
            },
            {
                'text': 'TELOK BLANGAH RD'
            },
            {
                'text': 'ALEXANDRA RD'
            },
            {
                'text': 'TIONG BAHRU RD'
            }
        ]
    },
    1211: {
        renderType: 'int-loopSvc',
        serviceNumber: '121',
        serviceFont: 'full',
        destination: {
            text: 'KG.BAHRU TER-TK.BLANGAH',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'GANGES AVE'
            },
            {
                'text': 'TIONG BAHRU RD'
            },
            {
                'text': 'KIM TIAN RD'
            },
            {
                'text': 'LOWER DELTA RD'
            },
            {
                'text': 'TELOK BLANGAH RISE'
            },
            {
                'text': 'LOWER DELTA RD'
            },
            {
                'text': 'KIM TIAN RD'
            },
            {
                'text': 'TIONG BAHRU RD'
            },
            {
                'text': 'GANGES AVE'
            },
        ]
    },
    1221: {
        renderType: 'int-loopSvc',
        serviceNumber: '122',
        serviceFont: 'full',
        destination: {
            text: 'KG.BAHRU TER-C\'WEALTH DR',
            font: 'tall'
        },
        scrolls: [
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            },
            {
                'text': ''
            }
        ]
    },
    1231: {
        renderType: 'standardService',
        serviceNumber: '123',
        serviceFont: 'full',
        destination: {
            text: 'SENTOSA',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'QUEENSWAY'
            },
            {
                'text': 'HOLLAND RD'
            },
            {
                'text': 'ORCHARD RD'
            },
            {
                'text': 'HAVELOCK RD'
            },
            {
                'text': 'TIONG BAHRU RD'
            },
            {
                'text': 'LOWER DELTA RD'
            },
            {
                'text': 'BUKIT PURMEI AVE'
            }
        ]
    },
    1232: {
        renderType: 'standardService',
        serviceNumber: '123',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'BUKIT PURMEI AVE'
            },
            {
                'text': 'LOWER DELTA RD'
            },
            {
                'text': 'TIONG BAHRU RD'
            },
            {
                'text': 'HAVELOCK RD'
            },
            {
                'text': 'ORCHARD BLVD'
            },
            {
                'text': 'HOLLAND RD'
            },
            {
                'text': 'QUEENSWAY'
            }
        ]
    },
    1233: {
        renderType: 'int-loopSvc',
        serviceNumber: '123M',
        serviceFont: 'full',
        destination: {
            text: 'HBF INT-TIONG BAHRU RD',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'BUKIT PURMEI AVE'
            },
            {
                'text': 'LOWER DELTA RD'
            },
            {
                'text': 'TIONG BAHRU RD'
            },
            {
                'text': 'LOWER DELTA RD'
            }
        ]
    },
    1241: {
        renderType: 'standardService',
        serviceNumber: '124',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'TELOK BLANGAH HTS'
            },
            {
                'text': 'TELOK BLANGAH WAY'
            },
            {
                'text': 'EU TONG SEN ST'
            },
            {
                'text': 'ORCHARD TURN'
            },
            {
                'text': 'MOULMEIN RD'
            }
        ]
    },
    1242: {
        renderType: 'standardService',
        serviceNumber: '124',
        serviceFont: 'full',
        destination: {
            text: 'ST MICHAEL'S TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'NEW BRIDGE RD'
            },
            {
                'text': 'KAMPONG BAHRU RD'
            },
            {
                'text': 'TELOK BLANGAH HTS'
            },
            {
                'text': 'MOULMEIN RD'
            },
            {
                'text': 'ORCHARD RD'
            }
        ]
    },
    1271: {
        renderType: 'int-loopSvc',
        serviceNumber: '127',
        serviceFont: 'full',
        destination: {
            text: 'TAMP INT-TAMP IND AVE 5',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'TAMPINES CONCOURSE'
            },
            {
                'text': 'TAMPINES AVE 9,10'
            },
            {
                'text': 'TAMPINES IND AVE 5'
            },
            {
                'text': 'TAMPINES RD'
            }
        ]
    },
    1291: {
        renderType: 'standardService',
        serviceNumber: '129',
        serviceFont: 'full',
        destination: {
            text: 'ST MICHAEL'S TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'TAMPINES AVE 1'
            },
            {
                'text': 'BRADDELL RD'
            },
            {
                'text': 'LOR 1 TOA PAYOH'
            },
            {
                'text': 'BALESTIER RD'
            }
        ]
    },
    1292: {
        renderType: 'standardService',
        serviceNumber: '129',
        serviceFont: 'full',
        destination: {
            text: 'TAMP CONCOURSE INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'BALESTIER RD'
            },
            {
                'text': 'LOR 1 TOA PAYOH'
            },
            {
                'text': 'BRADDELL RD'
            },
            {
                'text': 'TAMPINES AVE 1'
            }
        ]
    },
    1351: {
        renderType: 'standardService',
        serviceNumber: '135',
        serviceFont: 'full',
        destination: {
            text: 'SIGLAP RD',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 8'
            },
            {
                'text': 'SERANGOON AVE 2'
            },
            {
                'text': 'UPP ALJUNIED RD'
            },
            {
                'text': 'TANJONG KATONG RD'
            },
            {
                'text': 'MARINE PARADE RD'
            }
        ]
    },
    1352: {
        renderType: 'standardService',
        serviceNumber: '135',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'MARINE PARADE RD'
            },
            {
                'text': 'TANJONG KATONG RD'
            },
            {
                'text': 'UPP ALJUNIED RD'
            },
            {
                'text': 'SERANGOON AVE 2'
            },
            {
                'text': 'ANG MO KIO AVE 8'
            }
        ]
    },
    1511: {
        renderType: 'standardService',
        serviceNumber: '151',
        serviceFont: 'full',
        destination: {
            text: 'KENT RIDGE TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'HOUGANG AVE 3'
            },
            {
                'text': 'MACPHERSON RD'
            },
            {
                'text': 'JALAN TOA PAYOH'
            },
            {
                'text': 'BUKIT TIMAH RD'
            },
            {
                'text': 'CLEMENTI RD'
            },
            {
                'text': 'KENT RIDGE CRES'
            }
        ]
    },
    1512: {
        renderType: 'standardService',
        serviceNumber: '151',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG CENTRAL INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'KENT RIDGE CRES'
            },
            {
                'text': 'CLEMENTI RD'
            },
            {
                'text': 'DUNEARN RD'
            },
            {
                'text': 'JALAN TOA PAYOH'
            },
            {
                'text': 'MACPHERSON RD'
            },
            {
                'text': 'HOUGANG AVE 3'
            }
        ]
    },
    1518: {
        renderType: 'expSvc',
        serviceNumber: '151e',
        serviceFont: 'full',
        text: 'EXPRESS 151e'
    },
    1519: {
        renderType: 'expSvc',
        serviceNumber: '151e',
        serviceFont: 'full',
        text: 'EXPRESS 151e'
    },
    1541: {
        renderType: 'standardService',
        serviceNumber: '154',
        serviceFont: 'full',
        destination: {
            text: 'EUNOS INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'YUAN CHING RD'
            },
            {
                'text': 'AYE'
            },
            {
                'text': 'COMMONWEALTH AVE WEST'
            },
            {
                'text': 'CLEMENTI RD'
            },
            {
                'text': 'DUNEARN RD'
            },
            {
                'text': 'JALAN TOA PAYOH'
            },
            {
                'text': 'PAYA LEBAR RD'
            },
        ]
    },
    1542: {
        renderType: 'standardService',
        serviceNumber: '154',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'PAYA LEBAR RD'
            },
            {
                'text': 'JALAN TOA PAYOH'
            },
            {
                'text': 'BUKIT TIMAH RD'
            },
            {
                'text': 'CLEMENTI RD'
            },
            {
                'text': 'COMMONWEALTH AVE WEST'
            },
            {
                'text': 'AYE'
            },
            {
                'text': 'YUAN CHING RD'
            },
        ]
    },
    1562: {
        renderType: 'standardService',
        serviceNumber: '156',
        serviceFont: 'full',
        destination: {
            text: 'SENGKANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ULU PANDAN RD'
            },
            {
                'text': 'SIXTH AVE'
            },
            {
                'text': 'DUNEARN RD'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'BISHAN RD'
            },
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'BUANGKOK GREEN'
            },
            {
                'text': 'SENGKANG EAST RD'
            },
        ]
    },
    1571: {
        renderType: 'standardService',
        serviceNumber: '157',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'BRADDELL RD'
            },
            {
                'text': 'LORNIE RD'
            },
            {
                'text': 'BUKIT TIMAH RD'
            },
            {
                'text': 'JALAN JURONG KECHIL'
            },
            {
                'text': 'BUKIT BATOK EAST AVE 3'
            },
            {
                'text': 'JURONG EAST AVE 3'
            },
            {
                'text': 'JURONG WEST AVE 3'
            }
        ]
    },
    1572: {
        renderType: 'standardService',
        serviceNumber: '157',
        serviceFont: 'full',
        destination: {
            text: 'TOA PAYOH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'JURONG WEST AVE 1'
            },
            {
                'text': 'JURONG EAST AVE 1'
            },
            {
                'text': 'BUKIT BATOK EAST AVE 3'
            },
            {
                'text': 'JALAN JURONG KECHIL'
            },
            {
                'text': 'DUNEARN RD'
            },
            {
                'text': 'LORNIE RD'
            },
            {
                'text': 'BRADDELL RD'
            }
        ]
    },
    1611: {
        renderType: 'standardService',
        serviceNumber: '161',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'HOUGANG AVE 8'
            },
            {
                'text': 'HOUGANG AVE 4'
            },
            {
                'text': 'SENGKANG EAST RD'
            },
            {
                'text': 'SENGKANG EAST WAY'
            },
            {
                'text': 'WOODLANDS AVE 2'
            },
        ]
    },
    1612: {
        renderType: 'standardService',
        serviceNumber: '161',
        serviceFont: 'full',
        destination: {
            text: 'HOUGANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'WOODLANDS AVE 2'
            },
            {
                'text': 'SENGKANG EAST WAY'
            },
            {
                'text': 'SENGKANG EAST RD'
            },
            {
                'text': 'HOUGANG AVE 4'
            },
            {
                'text': 'HOUGANG AVE 8'
            },
        ]
    },
    1621: {
        renderType: 'standardService',
        serviceNumber: '162',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 6'
            },
            {
                'text': 'ANG MO KIO AVE 8'
            },
            {
                'text': 'BISHAN ST 22'
            },
            {
                'text': 'SIN MING AVE'
            },
            {
                'text': 'UPPER THOMSON RD'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'ORCHARD RD'
            },
            {
                'text': 'BRAS BASAH RD'
            }
        ]
      },
      1622: {
        renderType: 'standardService',
        serviceNumber: '162',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'STAMFORD RD'
            },
            {
                'text': 'ORCHARD TURN'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'UPPER THOMSON RD'
            },
            {
                'text': 'SIN MING AVE'
            },
            {
                'text': 'BISHAN ST 22'
            },
            {
                'text': 'ANG MO KIO AVE 8'
            },

            {
                'text': 'ANG MO KIO AVE 6'
            }
        ]
    },
    1623: {
        renderType: 'int-loopSvc',
        serviceNumber: '162M',
        serviceFont: 'full',
        destination: {
            text: 'YCK INT-MARINA CTR'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 6'
            },
            {
                'text': 'BISHAN ST 22'
            },
            {
                'text': 'SIN MING AVE'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'ORCHARD RD'
            },
            {
                'text': 'TEMASEK AVE'
            },
            {
                'text': 'ORCHARD TURN'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'SIN MING AVE'
            },
            {
                'text': 'BISHAN ST 22'
            },
            {
                'text': 'ANG MO KIO AVE 6'
            }
        ]
    },
    1631: {
        renderType: 'standardService',
        serviceNumber: '163',
        serviceFont: 'full',
        destination: {
            text: 'TOA PAYOH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'SENGKANG EAST AVE'
            },
            {
                'text': 'SENGKANG WEST AVE'
            },
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'UPPER THOMSON RD'
            },
            {
                'text': 'BRADDELL RD'
            },
            {
                'text': 'LOR 6 TOA PAYOH'
            },
            {
                'text': 'LOR 4 TOA PAYOH'
            },
        ]
    },
    1632: {
        renderType: 'standardService',
        serviceNumber: '163',
        serviceFont: 'full',
        destination: {
            text: 'SENGKANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'LOR 4 TOA PAYOH'
            },
            {
                'text': 'LOR 6 TOA PAYOH'
            },
            {
                'text': 'BRADDELL RD'
            },
            {
                'text': 'UPPER THOMSON RD'
            },
            {
                'text': 'YIO CHU KANG RD'
            },
            {
                'text': 'SENGKANG WEST AVE'
            },
            {
                'text': 'SENGKANG EAST AVE'
            },
        ]
    },
    1661: {
        renderType: 'standardService',
        serviceNumber: '166',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 3'
            },
            {
                'text': 'UPP THOMSON RD'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'NEW BRIDGE RD'
            },
            {
                'text': 'KAMPONG BAHRU RD'
            },
            {
                'text': 'TELOK BLANGAH RD'
            },
            {
                'text': 'ALEXANDRA RD'
            },
            {
                'text': 'C'WEALTH AVE WEST'
            }
        ]
    },
    1662: {
        renderType: 'standardService',
        serviceNumber: '166',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'C'WEALTH AVE WEST'
            },
            {
                'text': 'ALEXANDRA RD'
            },
            {
                'text': 'TELOK BLANGAH RD'
            },
            {
                'text': 'KAMPONG BAHRU RD'
            },
            {
                'text': 'EU TONG SEN ST'
            },
            {
                'text': 'THOMSON RD'
            },
            {
                'text': 'UPP THOMSON RD'
            },
            {
                'text': 'ANG MO KIO AVE 3'
            }
        ]
    },
    1681: {
        renderType: 'standardService',
        serviceNumber: '168',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'BEDOK NORTH AVE 3'
            },
            {
                'text': 'TAMPINES AVE 4'
            },
            {
                'text': 'TAMPINES AVE 10'
            },
            {
                'text': 'JALAN KAYU'
            },
            {
                'text': 'WOODLANDS AVE 2'
            },
        ]
    },
    1682: {
        renderType: 'standardService',
        serviceNumber: '168',
        serviceFont: 'full',
        destination: {
            text: 'BEDOK INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'WOODLANDS AVE 2'
            },
            {
                'text': 'JALAN KAYU'
            },
            {
                'text': 'TAMPINES AVE 10'
            },
            {
                'text': 'TAMPINES AVE 4'
            },
            {
                'text': 'BEDOK NORTH AVE 3'
            },
        ]
    },
    1741: {
        renderType: 'standardService',
        serviceNumber: '174',
        serviceFont: 'full',
        destination: {
            text: 'KAMPONG BAHRU TER',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG ROAD'
            },
            {
                'text': 'BT BATOK EAST AVE 3&6'
            },
            {
                'text': 'JALAN JURONG KECHIL'
            },
            {
                'text': 'DUNEARN RD'
            },
            {
                'text': 'FARRER RD'
            },
            {
                'text': 'HOLLAND RD'
            },
            {
                'text': 'ORCHARD RD'
            },
            {
                'text': 'NORTH&SOUTH BRIDGE RD'
            }
        ]
    },
    1742: {
        renderType: 'standardService',
        serviceNumber: '174',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'EU TONG SEN ST'
            },
            {
                'text': 'ORCHARD BOULEVARD'
            },
            {
                'text': 'HOLLAND RD'
            },
            {
                'text': 'FARRER RD'
            },
            {
                'text': 'BUKIT TIMAH RD'
            },
            {
                'text': 'JALAN JURONG KECHIL'
            },
            {
                'text': 'BT BATOK EAST AVE 6&3'
            }
        ]
    },
    1748: {
        renderType: 'expSvc',
        serviceNumber: '174e',
        serviceFont: 'full',
        text: 'EXPRESS 174'
    },
    1749: {
        renderType: 'expSvc',
        serviceNumber: '174e',
        serviceFont: 'full',
        text: 'EXPRESS 174'
    },
    1968: {
        renderType: 'expSvc',
        serviceNumber: '196e',
        serviceFont: 'full',
        text: 'EXPRESS 196'
    },
    1969: {
        renderType: 'expSvc',
        serviceNumber: '196e',
        serviceFont: 'full',
        text: 'EXPRESS 196'
    },
    2011: {
        renderType: 'int-loopSvc',
        serviceNumber: '201',
        serviceFont: 'full',
        destination: {
            text: 'KENT RIDGE - PANDAN GDNS',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'WEST COAST RD'
            },
            {
                'text': 'C'WEALTH AVE WEST'
            },
            {
                'text': 'TEBAN GARDENS RD'
            },
            {
                'text': 'PANDAN GARDENS'
            },
            {
                'text': 'C'WEALTH AVE WEST'
            },
            {
                'text': 'WEST COAST RD'
            }
        ]
    },
    2222: {
        renderType: 'image',
        text: 'SBS TRANSIT',
        image: 'logo',
        x: 'centre'
    },
    2401: { //likely incomplete go check!
        renderType: 'standardService',
        serviceNumber: '240',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JALAN AHMAD IBRAHIM'
            },
            {
                text: 'KANG CHING RD'
            },
            {
                text: 'YUAN CHING RD'
            },
            {
                text: 'BOON LAY PLACE'
            },
            {
                text: 'BOON LAY WAY'
            },
        ]
    },
    2411: {
        renderType: 'standardService',
        serviceNumber: '241',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG WEST ST 63'
            },
            {
                text: 'PIONEER RD NTH'
            },
            {
                text: 'JURONG WEST ST 91'
            },
        ]
    },
    2421: {
        renderType: 'standardService',
        serviceNumber: '242',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG WEST CENTRAL 1'
            },
            {
                text: 'JALAN BOON LAY'
            },
            {
                text: 'JURONG WEST AVE 4'
            },
            {
                text: 'JURONG WEST ST 72'
            },
            {
                text: 'JURONG WEST AVE 5'
            },
            {
                text: 'JURONG WEST AVE 4'
            },
            {
                text: 'JALAN BOON LAY'
            }
        ]
    },
    2431: {
        renderType: 'standardService',
        serviceNumber: '243W',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG WEST ST 62'
            },
            {
                text: 'JURONG WEST AVE 4'
            },
            {
                text: 'JURONG WEST AVE 5'
            },
            {
                text: 'JURONG WEST ST 81'
            },
            {
                text: 'JURONG WEST ST 75'
            },
            {
                text: 'JURONG WEST 64'
            },
        ]
    },
    2432: {
        renderType: 'standardService',
        serviceNumber: '243G',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JURONG WEST ST 64'
            },
            {
                text: 'JURONG WEST ST 75'
            },
            {
                text: 'JURONG WEST ST 81'
            },
            {
                text: 'JURONG WEST AVE 5'
            },
            {
                text: 'JURONG WEST AVE 4'
            },
            {
                text: 'JURONG WEST ST 62'
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
                'text': 'TUAS AVE 7'
            },
            {
                'text': 'TUAS CRES'
            },
            {
                'text': 'TUAS STH AVE 5&4&7'
            },
            {
                'text': 'TUAS STH AVE 3&9&8'
            },
            {
                'text': 'TUAS LINK 4'
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
                'text': 'PIONEER RD'
            },
            {
                'text': 'TUAS AVE 20'
            },
            {
                'text': 'TUAS STH AVE 5'
            },
            {
                'text': 'TUAS STH AVE 9'
            },
            {
                'text': 'TUAS STH AVE 10'
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
                'text': 'PIONEER RD NTH'
            },
            {
                'text': 'JURONG W. ST 61&81&75'
            },
            {
                'text': 'JALAN AHMAD IBRAHIM'
            }
        ]
    },
    2611: {
        renderType: 'standardService',
        serviceNumber: '261',
        serviceFont: 'full',
        destination: {
            text: 'ANG MO KIO INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'ANG MO KIO AVE 3'
            },
            {
                text: 'ANG MO KIO AVE 10'
            },
            {
                text: 'ANG MO KIO IND PK 1'
            },
            {
                text: 'ANG MO KIO AVE 10'
            },
            {
                text: 'ANG MO KIO AVE 3'
            }
        ]
    },
    2721: {
        renderType: 'standardService',
        serviceNumber: '272',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'HENDERSON RD'
            },
            {
                text: 'TELOK BLANGAH WAY'
            },
            {
                text: 'TELOK BLANGAH RISE'
            },
            {
                text: 'TELOK BLANGAH CRES'
            },
            {
                text: 'HENDERSON RD'
            },
        ]
    },
    2731: {
        renderType: 'standardService',
        serviceNumber: '273',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'HENDERSON RD'
            },
            {
                text: 'TELOK BLANGAH HTS'
            },
            {
                text: 'TELOK BLANGAH ST32'
            },
            {
                text: 'TELOK BLANGAH DRIVE'
            },
            {
                text: 'HENDERSON RD'
            },
        ]
    },
    2751: {
        renderType: 'standardService',
        serviceNumber: '275',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH INT',
            font: 'thin2'
        },
        scrolls: [
            {
                text: 'JALAN BUKIT MERAH'
            },
            {
                text: 'LOWER DELTA RD'
            },
            {
                text: 'BUKIT PURMEI AVE'
            },
            {
                text: 'LOWER DELTA RD'
            },
            {
                text: 'JALAN BUKIT MERAH'
            }
        ]
    },
    3333: {
        renderType: 'full',
        text: 'FREE SHUTTLE'
    },
    4051: {
        renderType: 'int-loopSvc',
        serviceNumber: '405',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT-OLD CCK RD',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'JURONG WEST CENTRAL 1'
            },
            {
                'text': 'JLN BOON LAY'
            },
            {
                'text': 'JALAN BAHAR'
            },
            {
                'text': 'OLD CHOA CHU KANG RD'
            },
            {
                'text': 'JALAN BAHAR'
            },
            {
                'text': 'JLN BOON LAY'
            },
            {
                'text': 'JURONG WEST CENTRAL 1'
            }
        ]
    },
    4052: {
        renderType: 'int-loopSvc',
        serviceNumber: '405M',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY INT-OLD CCK RD',
            font: 'tall'
        },
        scrolls: [
            {
                'text': 'JURONG WEST CENTRAL 1'
            },
            {
                'text': 'JLN BOON LAY'
            },
            {
                'text': 'JALAN BAHAR'
            },
            {
                'text': 'OLD CHOA CHU KANG RD'
            },
            {
                'text': 'JALAN BAHAR'
            },
            {
                'text': 'JLN BOON LAY'
            },
            {
                'text': 'JURONG WEST CENTRAL 1'
            }
        ]
    },
    4444: {
        renderType: 'full',
        text: 'ON TEST'
    },
    5021: {
        renderType: 'expSvc',
        serviceNumber: '502',
        serviceFont: 'full',
        text: 'EXPRESS 502'
    },
    5061: {
        renderType: 'expSvc',
        serviceNumber: '506',
        serviceFont: 'full',
        text: 'EXPRESS 506'
    },
    5131: {
        renderType: 'expSvc',
        serviceNumber: '513',
        serviceFont: 'full',
        text: 'EXPRESS 513'
    },
    5555: {
        renderType: 'full',
        text: 'TRAINING BUS'
    },
    7777: {
        renderType: 'full',
        text: 'FREE BRIDGING BUS'
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
                'text': 'YISHUN AVE 7',
                'font': 'narrow'
            },
            {
                'text': 'SEMBAWANG RD',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN ST 71',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN RING RD',
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
                'text': 'YISHUN AVE 2',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN RING RD',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN ST 41',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN AVE 1',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN AVE 11',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN RING RD',
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
                'text': 'YISHUN AVE 2',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN AVE 4',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN AVE 1',
                'font': 'narrow'
            },
            {
                'text': 'YISHUN RING RD',
                'font': 'narrow'
            }
        ]
    },
    8111: {
        renderType: 'standardService',
        serviceNumber: '811',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN AVE 5 & 1',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'YISHUN AVE 9,6&7',
                'font': 'tall'
            },
            {
                'text': 'SEMBAWANG RD'
            },
            {
                'text': 'YISHUN AVE 5&2'
            },
            {
                'text': 'YISHUN RING RD'
            },
            {
                'text': 'YISHUN AVE 2'
            }
        ]
    },
    8161: {
        renderType: 'standardService',
        serviceNumber: 'CT28',
        serviceFont: 'full',
        destination: {
            text: 'CLEMENTI AVE 4',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'EU TONG SEN ST'
            },
            {
                'text': 'C'WEALTH AVE WEST'
            },
            {
                'text': 'CLEMENTI AVE 4'
            }
        ]
    },
    8162: {
        renderType: 'standardService',
        serviceNumber: 'CT28',
        serviceFont: 'full',
        destination: {
            text: 'KAMPONG BAHRU TER',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'CLEMENTI AVE 4'
            },
            {
                'text': 'C'WEALTH AVE WEST'
            },
            {
                'text': 'NEW BRIDGE RD'
            }
        ]
    },
    8519: {
        renderType: 'expSvc',
        serviceNumber: '851e',
        serviceFont: 'full',
        text: 'EXPRESS 851e'
    },
    8518: {
        renderType: 'expSvc',
        serviceNumber: '851e',
        serviceFont: 'full',
        text: 'EXPRESS 851e'
    },
    8601: {
        renderType: 'standardService',
        serviceNumber: '860',
        serviceFont: 'full',
        destination: {
            text: 'YIO CHU KANG INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'YISHUN RING RD'
            },
            {
                'text': 'YISHUN AVE 3'
            },
            {
                'text': 'SEMBAWANG RD'
            },
            {
                'text': 'UPPER THOMSON RD'
            },
            {
                'text': 'ANG MO KIO AVE 5'
            }
        ]
    },

    8602: {
        renderType: 'standardService',
        serviceNumber: '860',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thin2'
        },
        scrolls: [
            {
                'text': 'ANG MO KIO AVE 5'
            },
            {
                'text': 'UPPER THOMSON RD'
            },
            {
                'text': 'SEMBAWANG RD'
            },
            {
                'text': 'YISHUN AVE 3'
            },
            {
                'text': 'YISHUN RING RD'
            }
        ]
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
    ],
    express: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
