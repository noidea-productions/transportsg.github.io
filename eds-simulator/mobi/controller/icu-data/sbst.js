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
                currentRoad: '$scrolls[]',
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
                currentRoad: '$scrolls[]',
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
                currentRoad: '$scrolls[]',
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
    "41": {
        renderType: "int-loopSvc",
        serviceNumber: "4",
        destination: {
            text: "TAMPINES INT-CHANGI NTH WAY",
            "font": "tall"
        },
        scrolls: [
            "TAMPINES AVE 7",
            "FLORA RD",
            "CHANGI NORTH WAY",
            "FLORA RD",
            "TAMPINES AVE 7"
        ]
    },
    "71": {
        renderType: "standardService",
        serviceNumber: "7",
        destination: {
            text: "CLEMENTI INT"
        },
        scrolls: [
            "CHANGI RD",
            "GUILLEMARD RD",
            "NORTH BRIDGE RD",
            "OCHARD BOULEVARD",
            "HOLLAND RD",
            "ULU PANDAN RD"
        ]
    },
    "72": {
        renderType: "standardService",
        serviceNumber: "7",
        destination: {
            text: "BEDOK INT"
        },
        scrolls: [
            "ULU PANDAN RD",
            "HOLLAND RD",
            "ORCHARD RD",
            "VICTORIA ST",
            "GUILLEMARD RD",
            "SIMS AVE EAST"
        ]
    },
    "108": {
        renderType: "expSvc",
        serviceNumber: "10e",
        text: "EXPRESS 10e"
    },
    "109": {
        renderType: "expSvc",
        serviceNumber: "10e",
        text: "EXPRESS 10e"
    },
    "111": {
        renderType: "int-loopSvc",
        serviceNumber: "11",
        destination: {
            text: "LOR 1 GEYLANG TER-RHU CROSS",
            "font": "tall"
        },
        scrolls: [
            "SIMS WAY",
            "STADIUM CRESCENT",
            "RHU CROSS",
            "STADIUM WALK",
            "SIMS WAY"
        ]
    },
    "148": {
        renderType: "expSvc",
        serviceNumber: "14e",
        text: "EXPRESS 14e"
    },
    "149": {
        renderType: "expSvc",
        serviceNumber: "14e",
        text: "EXPRESS 14e"
    },
    "221": {
        renderType: "standardService",
        serviceNumber: "22",
        destination: {
            text: "TAMPINES INT"
        },
        scrolls: [
            "ANG MO KIO AVE 8",
            "SERANGOON CENTRAL",
            "UPPER PAYA LEBAR RD",
            "UBI AVE 2",
            "BEDOK RESERVOIR RD",
            "TAMPINES AVE 4"
        ]
    },
    "222": {
        renderType: "standardService",
        serviceNumber: "22",
        destination: {
            text: "ANG MO KIO INT"
        },
        scrolls: [
            "TAMPINES AVE 4",
            "BEDOK RESERVOIR RD",
            "UBI AVE 2",
            "UPPER PAYA LEBAR RD",
            "SERANGOON CENTRAL",
            "ANG MO KIO AVE 8"
        ]
    },
    "302": {
        renderType: "standardService",
        serviceNumber: "30",
        destination: {
            text: "BEDOK INT"
        },
        scrolls: [
            "CORPORATION DR",
            "WEST COAST RD",
            "PASIR PANJANG RD",
            "TELOK BLANGAH RD",
            "KEPPEL RD",
            "OLD AIRPORT RD",
            "SIMS AVE EAST"
        ]
    },
    "471": {
        renderType: "int-loopSvc1",
        serviceNumber: "47",
        destination: {
            text: "CHANGI BIZ PK-AMBER RD",
            "font": "narrow"
        },
        scrolls: [
            "BEDOK SOUTH RD"
        ]
    },
    "501": {
        renderType: "standardService",
        serviceNumber: "50",
        destination: {
            text: "PUNGGOL INT"
        },
        scrolls: [
            "ANG MO KIO AVE 8",
            "ANG MO KIO AVE 5",
            "YIO CHU KANG RD",
            "SENGKANG WEST AVE",
            "SENGKANG EAST WAY",
            "PUNGGOL DR"
        ]
    },
    "502": {
        renderType: "standardService",
        serviceNumber: "50",
        destination: {
            text: "BISHAN INT"
        },
        scrolls: [
            "PUNGGOL DR",
            "SENGKANG EAST WAY",
            "SENGKANG WEST AVE",
            "YIO CHU KANG RD",
            "ANG MO KIO AVE 5",
            "ANG MO KIO AVE 8"
        ]
    },
    "531": {
        renderType: "standardService",
        serviceNumber: "53",
        destination: {
            text: "CHANGI AIRPORT"
        },
        scrolls: [
            "BISHAN RD",
            "SERANGOOON CENTRAL",
            "LORONG AH SOO",
            "HOUGANG AVE 1",
            "PASIR RIS DR 1"
        ]
    },
    "532": {
        renderType: "standardService",
        serviceNumber: "53",
        destination: {
            text: "BISHAN INT"
        },
        scrolls: [
            "PASIR RIS DR 1",
            "HOUGANG AVE 1",
            "LORONG AH SOO",
            "SERANGOOON CENTRAL",
            "BISHAN RD"
        ]
    },
    "534": {
        renderType: "int-loopSvc",
        serviceNumber: "53M",
        destination: {
            text: "HOUGANG AVE 1-S'GOON CTRL",
            "font": "tall"
        },
        scrolls: [
            "HOUGANG AVE 1",
            "LORONG AH SOO",
            "SERANGOOON CENTRAL",
            "LORONG AH SOO",
            "HOUGANG AVE 1"
        ]
    },
    "561": {
        renderType: "int-loopSvc",
        serviceNumber: "56",
        destination: {
            text: "BISHAN INT-MARINA CTR TER",
            "font": "tall"
        },
        scrolls: [
            "BISHAN ST 13",
            "LOR 6 TOA PAYOH",
            "THOMSON RD",
            "BUKIT TIMAH RD",
            "MIDDLE RD"
        ]
    },
    "591": {
        renderType: "standardService",
        serviceNumber: "59",
        destination: {
            text: "CHANGI VILLAGE TER"
        },
        scrolls: [
            "LOR 1 TOA PAYOH",
            "KAKI BUKIT AVE 1",
            "BEDOK RESERVOIR RD",
            "TAMPINES AVE 2",
            "LOYANG AVE"
        ]
    },
    "592": {
        renderType: "standardService",
        serviceNumber: "59",
        destination: {
            text: "BISHAN INT"
        },
        scrolls: [
            "LOYANG AVE",
            "TAMPINES AVE 2",
            "BEDOK RESERVOIR RD",
            "KAKI BUKIT AVE 1",
            "LOR 1 TOA PAYOH"
        ]
    },
    "641": {
        renderType: "standardService",
        serviceNumber: "64",
        destination: {
            text: "MEI LING ST"
        },
        scrolls: [
            "ALJUNIED RD",
            "BENDEMEER RD",
            "JALAN BESAR",
            "CLEMANCEAU AVE",
            "TIONG BAHRU RD",
            "STIRLING RD"
        ]
    },
    "642": {
        renderType: "standardService",
        serviceNumber: "64",
        destination: {
            text: "SIMS PLACE TER"
        },
        scrolls: [
            "ALEXANDRA RD",
            "TIONG BAHRU RD",
            "CLEMANCEAU AVE",
            "SELEGIE RD",
            "SERANGOON RD",
            "ALJUNIED RD"
        ]
    },
    "651": {
        renderType: "standardService",
        serviceNumber: "65",
        destination: {
            text: "HARBOURFRONT INT"
        },
        scrolls: [
            "BEDOK RESERVOIR RD",
            "UBI AVE 2",
            "MACPHERSON RD",
            "BENDEMEER RD",
            "JALAN BESAR",
            "ORCHARD BOULEVARD",
            "LOWER DELTA RD"
        ]
    },
    "652": {
        renderType: "standardService",
        serviceNumber: "65",
        destination: {
            text: "TAMPINES INT"
        },
        scrolls: [
            "LOWER DELTA RD",
            "ORCHARD RD",
            "SELEGIE RD",
            "SERANGOON RD",
            "MACPHERSON RD",
            "UBI AVE 2",
            "BEDOK RESERVOIR RD"
        ]
    },
    "711": {
        renderType: "int-loopSvc",
        serviceNumber: "71",
        destination: {
            text: "YCK INT-BISHAN ST 11",
            "font": "tall"
        },
        scrolls: [
            "ANG MO KIO AVE 4",
            "ANG MO KIO AVE 1",
            "BISHAN RD",
            "BRADDELL RD",
            "BISHAN RD",
            "ANG MO KIO AVE 1",
            "ANG MO KIO AVE 4"
        ]
    },
    "721": {
        renderType: "standardService",
        serviceNumber: "72",
        destination: {
            text: "TAMPINES INT"
        },
        scrolls: [
            "ANG MO KIO AVE 5",
            "HOUGANG AVE 9",
            "HOUGANG CENTRAL",
            "TAMPINES RD",
            "TAMPINES AVE 10",
            "TAMPINES AVE 9"
        ]
    },
    "722": {
        renderType: "standardService",
        serviceNumber: "72",
        destination: {
            text: "YIO CHU KANG INT"
        },
        scrolls: [
            "TAMPINES AVE 9",
            "TAMPINES AVE 10",
            "TAMPINES RD",
            "HOUGANG CENTRAL",
            "HOUGANG AVE 9",
            "ANG MO KIO AVE 5"
        ]
    },
    "761": {
        renderType: "standardService",
        serviceNumber: "76",
        destination: {
            text: "EUNOS INT"
        },
        scrolls: [
            "ANG MO KIO AVE 4",
            "ANG MO KIO AVE 3",
            "YIO CHU KANG RD",
            "UPPER PAYA LEBAR RD",
            "PAYA LEBAR RD"
        ]
    },
    "762": {
        renderType: "standardService",
        serviceNumber: "76",
        destination: {
            text: "YIO CHU KANG INT"
        },
        scrolls: [
            "PAYA LEBAR RD",
            "UPPER PAYA LEBAR RD",
            "YIO CHU KANG RD",
            "ANG MO KIO AVE 3",
            "ANG MO KIO AVE 4"
        ]
    },
    "811": {
        renderType: "int-loopSvc",
        serviceNumber: "81",
        destination: {
            text: "TAMPINES INT-S'GOON CTRL",
            "font": "tall"
        },
        scrolls: [
            "TAMPINES AVE 7",
            "PASIR RIS DR 1",
            "TAMPINES RD",
            "UPPER SERANGOON RD",
            "TAMPINES RD",
            "PASIR RIS DR 1",
            "TAMPINES AVE 7"
        ]
    },
    "881": {
        renderType: "standardService",
        serviceNumber: "88",
        destination: {
            text: "TOA PAYOH INT"
        },
        scrolls: [
            "PASIR RIS DR 3",
            "PUNGGOL RD",
            "HOUGANG AVE 8",
            "ANG MO KIO AVE 5",
            "ANG MO KIO AVE 3",
            "BISHAN ST 22",
            "LOR 4 TOA PAYOH"
        ]
    },
    "882": {
        renderType: "standardService",
        serviceNumber: "88",
        destination: {
            text: "PASIR RIS INT"
        },
        scrolls: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    "891": {
        renderType: "standardService",
        serviceNumber: "89",
        destination: {
            text: "CHANGI AIRFREIGHT CTR"
        },
        scrolls: [
            "HOUGANG AVE 10",
            "COMPASSVIEW RD",
            "PASIR RIS DR 1",
            "LOYANG AVE",
            "AIRLINE RD"
        ]
    },
    "898": {
        renderType: "expSvc",
        serviceNumber: "89e",
        text: "EXPRESS 89e"
    },
    "899": {
        renderType: "expSvc",
        serviceNumber: "89e",
        text: "EXPRESS 89e"
    },
    "911": {
        renderType: "int-loopSvc",
        serviceNumber: "91",
        destination: {
            text: "BUONA V TER-AYER RAJAH CRES",
            "font": "tall"
        },
        scrolls: [
            "COMMONWEALTH AVE",
            "NTH BUONA VISTA RD",
            "AYER RAJAH AVE",
            "AYER RAJAH CRES",
            "AYER RAJAH AVE",
            "NTH BUONA VISTA RD",
            "COMMONWEALTH AVE"
        ]
    },
    "991": {
        renderType: "standardService",
        serviceNumber: "99",
        destination: {
            text: "JOO KOON INT"
        },
        scrolls: [
            "JURONG EAST AVE 1",
            "JURONG WEST AVE 1",
            "JURONG WEST AVE 4",
            "JURONG WEST ST 91",
            "UPP JURONG RD"
        ]
    },
    "992": {
        renderType: "standardService",
        serviceNumber: "99",
        destination: {
            text: "CLEMENTI INT"
        },
        scrolls: [
            "UPP JURONG RD",
            "JURONG WEST ST 91",
            "JURONG WEST AVE 4",
            "JURONG WEST AVE 1",
            "JURONG EAST AVE 1"
        ]
    },
    "1011": {
        renderType: "int-loopSvc",
        serviceNumber: "101",
        destination: {
            text: "S'GOON INT-BUANGKOK LK",
            "font": "tall"
        },
        scrolls: [
            "UPPER SERANGOON RD",
            "HOUGANG CENTRAL",
            "HOUGANG AVE 8",
            "HOUGANG ST 51",
            "BUANGKOK LINK",
            "HOUGANG ST 51",
            "HOUGANG AVE 8",
            "HOUGANG CENTRAL",
            "UPPER SERANGOON RD"
        ]
    },
    "1021": {
        renderType: "int-loopSvc",
        serviceNumber: "102",
        destination: {
            text: "HOUGANG-SELETAR A'SPACE",
            "font": "tall"
        },
        scrolls: [
            "UPPER SERANGOON RD",
            "BUANGKOK DR",
            "COMPASSVALE DR",
            "SENGKANG EAST WAY",
            "SENGKANG WEST WAY",
            "SELETAR A'SPACE DR"
        ]
    },
    "1031": {
        renderType: "standardService",
        serviceNumber: "103",
        destination: {
            text: "YISHUN INT"
        },
        scrolls: [
            "YIO CHU KANG RD",
            "JLN KAYU",
            "SELETAR AEROSPACE DR",
            "WEST CAMP RD",
            "YISHUN CENTRAL"
        ]
    },
    "1032": {
        renderType: "standardService",
        serviceNumber: "103",
        destination: {
            text: "SERANGOON INT"
        },
        scrolls: [
            "YISHUN CENTRAL",
            "WEST CAMP RD",
            "SELETAR AEROSPACE DR",
            "JLN KAYU",
            "YIO CHU KANG RD"
        ]
    },
    "1071": {
        renderType: "standardService",
        serviceNumber: "107",
        destination: {
            text: "SHENTON WAY TER"
        },
        scrolls: [
            "HOUGANG AVE 10",
            "UPPER SERANGOON RD",
            "KALLANG BAHRU",
            "LAVENDER ST",
            "BEACH RD"
        ]
    },
    "1072": {
        renderType: "standardService",
        serviceNumber: "107",
        destination: {
            text: "HOUGANG CENTRAL INT"
        },
        scrolls: [
            "BEACH RD",
            "LAVENDER ST",
            "KALLANG BAHRU",
            "UPPER SERANGOON RD",
            "HOUGANG AVE 10"
        ]
    },
    "1091": {
        renderType: "standardService",
        serviceNumber: "109",
        destination: {
            text: "CHANGI VILLAGE TER"
        },
        scrolls: [
            "YIO CHU KANG RD",
            "HOUGANG AVE 9",
            "SENGKANG EAST RD",
            "PASIR RIS DR 1",
            "LOYANG AVE"
        ]
    },
    "1092": {
        renderType: "standardService",
        serviceNumber: "109",
        destination: {
            text: "SERANGOON INT"
        },
        scrolls: [
            "LOYANG AVE",
            "PASIR RIS DR 1",
            "SENGKANG EAST RD",
            "HOUGANG AVE 9",
            "YIO CHU KANG RD"
        ]
    },
    "1111": {
        renderType: "full",
        text: "OFF SERVICE"
    },
    "1112": {
        renderType: "int-loopSvc",
        serviceNumber: "111",
        destination: {
            text: "GHIM MOH TER-MARINA CTR",
            "font": "tall"
        },
        scrolls: [
            "COMMONWEALTH AVE",
            "TANGLIN RD",
            "ORCHARD RD",
            "BRAS BASAH RD",
            "STAMFORD RD",
            "OCHARD BOULEVARD",
            "TANGLIN RD",
            "COMMONWEALTH AVE"
        ]
    },
    "1161": {
        renderType: "int-loopSvc",
        serviceNumber: "116",
        destination: {
            text: "HOUGANG INT-S'GOON CTRL",
            "font": "tall"
        },
        scrolls: [
            "HOUGANG AVE 4"
        ]
    },
    "1201": {
        renderType: "int-loopSvc",
        serviceNumber: "120",
        destination: {
            text: "KG BAHRU TER-TK BLANGAH",
            "font": "tall"
        },
        scrolls: [
            "JALAN BUKIT MERAH",
            "TELOK BLANGAH HTS",
            "TELOK BLANGAH RD",
            "ALEXANDRA RD",
            "TIONG BAHRU RD"
        ]
    },
    "1211": {
        renderType: "int-loopSvc",
        serviceNumber: "121",
        destination: {
            text: "KG.BAHRU TER-TK.BLANGAH",
            "font": "tall"
        },
        scrolls: [
            "GANGES AVE",
            "TIONG BAHRU RD",
            "KIM TIAN RD",
            "LOWER DELTA RD",
            "TELOK BLANGAH RISE",
            "LOWER DELTA RD",
            "KIM TIAN RD",
            "TIONG BAHRU RD",
            "GANGES AVE"
        ]
    },
    "1221": {
        renderType: "int-loopSvc",
        serviceNumber: "122",
        destination: {
            text: "KG.BAHRU TER-C'WEALTH DR",
            "font": "tall"
        },
        scrolls: [
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    "1231": {
        renderType: "standardService",
        serviceNumber: "123",
        destination: {
            text: "SENTOSA"
        },
        scrolls: [
            "QUEENSWAY",
            "HOLLAND RD",
            "ORCHARD RD",
            "HAVELOCK RD",
            "TIONG BAHRU RD",
            "LOWER DELTA RD",
            "BUKIT PURMEI AVE"
        ]
    },
    "1232": {
        renderType: "standardService",
        serviceNumber: "123",
        destination: {
            text: "BUKIT MERAH INT"
        },
        scrolls: [
            "BUKIT PURMEI AVE",
            "LOWER DELTA RD",
            "TIONG BAHRU RD",
            "HAVELOCK RD",
            "ORCHARD BLVD",
            "HOLLAND RD",
            "QUEENSWAY"
        ]
    },
    "1233": {
        renderType: "int-loopSvc",
        serviceNumber: "123M",
        destination: {
            text: "HBF INT-TIONG BAHRU RD",
            "font": "tall"
        },
        scrolls: [
            "BUKIT PURMEI AVE",
            "LOWER DELTA RD",
            "TIONG BAHRU RD",
            "LOWER DELTA RD"
        ]
    },
    "1241": {
        renderType: "standardService",
        serviceNumber: "124",
        destination: {
            text: "HARBOURFRONT INT"
        },
        scrolls: [
            "TELOK BLANGAH HTS",
            "TELOK BLANGAH WAY",
            "EU TONG SEN ST",
            "ORCHARD TURN",
            "MOULMEIN RD"
        ]
    },
    "1242": {
        renderType: "standardService",
        serviceNumber: "124",
        destination: {
            text: "ST MICHAEL'S TER"
        },
        scrolls: [
            "NEW BRIDGE RD",
            "KAMPONG BAHRU RD",
            "TELOK BLANGAH HTS",
            "MOULMEIN RD",
            "ORCHARD RD"
        ]
    },
    "1271": {
        renderType: "int-loopSvc",
        serviceNumber: "127",
        destination: {
            text: "TAMP INT-TAMP IND AVE 5",
            "font": "tall"
        },
        scrolls: [
            "TAMPINES CONCOURSE",
            "TAMPINES AVE 9,10",
            "TAMPINES IND AVE 5",
            "TAMPINES RD"
        ]
    },
    "1291": {
        renderType: "standardService",
        serviceNumber: "129",
        destination: {
            text: "ST MICHAEL'S TER"
        },
        scrolls: [
            "TAMPINES AVE 1",
            "BRADDELL RD",
            "LOR 1 TOA PAYOH",
            "BALESTIER RD"
        ]
    },
    "1292": {
        renderType: "standardService",
        serviceNumber: "129",
        destination: {
            text: "TAMP CONCOURSE INT"
        },
        scrolls: [
            "BALESTIER RD",
            "LOR 1 TOA PAYOH",
            "BRADDELL RD",
            "TAMPINES AVE 1"
        ]
    },
    "1312": {
        renderType: "standardService",
        serviceNumber: "131",
        destination: {
            text: "ST MICHAEL'S TER"
        },
        scrolls: [
            "BUKIT PURMEI AVE",
            "TELOK BLANGAH RD",
            "CECIL ST",
            "STAMFORD RD",
            "THOMSON RD",
            "BALESTIER RD"
        ]
    },
    "1351": {
        renderType: "standardService",
        serviceNumber: "135",
        destination: {
            text: "SIGLAP RD"
        },
        scrolls: [
            "ANG MO KIO AVE 8",
            "SERANGOON AVE 2",
            "UPP ALJUNIED RD",
            "TANJONG KATONG RD",
            "MARINA PARADE RD"
        ]
    },
    "1352": {
        renderType: "standardService",
        serviceNumber: "135",
        destination: {
            text: "ANG MO KIO INT"
        },
        scrolls: [
            "MARINA PARADE RD",
            "TANJONG KATONG RD",
            "UPP ALJUNIED RD",
            "SERANGOON AVE 2",
            "ANG MO KIO AVE 8"
        ]
    },
    "1511": {
        renderType: "standardService",
        serviceNumber: "151",
        destination: {
            text: "KENT RIDGE TER"
        },
        scrolls: [
            "HOUGANG AVE 3",
            "MACPHERSON RD",
            "JALAN TOA PAYOH",
            "BUKIT TIMAH RD",
            "CLEMENTI RD",
            "KENT RIDGE CRES"
        ]
    },
    "1512": {
        renderType: "standardService",
        serviceNumber: "151",
        destination: {
            text: "HOUGANG CENTRAL INT"
        },
        scrolls: [
            "KENT RIDGE CRES",
            "CLEMENTI RD",
            "DUNEARN RD",
            "JALAN TOA PAYOH",
            "MACPHERSON RD",
            "HOUGANG AVE 3"
        ]
    },
    "1518": {
        renderType: "expSvc",
        serviceNumber: "151e",
        text: "EXPRESS 151e"
    },
    "1519": {
        renderType: "expSvc",
        serviceNumber: "151e",
        text: "EXPRESS 151e"
    },
    "1541": {
        renderType: "standardService",
        serviceNumber: "154",
        destination: {
            text: "EUNOS INT"
        },
        scrolls: [
            "YUAN CHING RD",
            "AYE",
            "COMMONWEALTH AVE WEST",
            "CLEMENTI RD",
            "DUNEARN RD",
            "JALAN TOA PAYOH",
            "PAYA LEBAR RD"
        ]
    },
    "1542": {
        renderType: "standardService",
        serviceNumber: "154",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "PAYA LEBAR RD",
            "JALAN TOA PAYOH",
            "BUKIT TIMAH RD",
            "CLEMENTI RD",
            "COMMONWEALTH AVE WEST",
            "AYE",
            "YUAN CHING RD"
        ]
    },
    "1562": {
        renderType: "standardService",
        serviceNumber: "156",
        destination: {
            text: "SENGKANG INT"
        },
        scrolls: [
            "ULU PANDAN RD",
            "SIXTH AVE",
            "DUNEARN RD",
            "THOMSON RD",
            "BISHAN RD",
            "YIO CHU KANG RD",
            "BUANGKOK GREEN",
            "SENGKANG EAST RD"
        ]
    },
    "1571": {
        renderType: "standardService",
        serviceNumber: "157",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "BRADDELL RD",
            "LORNIE RD",
            "BUKIT TIMAH RD",
            "JALAN JURONG KECHIL",
            "BUKIT BATOK EAST AVE 3",
            "JURONG EAST AVE 3",
            "JURONG WEST AVE 3"
        ]
    },
    "1572": {
        renderType: "standardService",
        serviceNumber: "157",
        destination: {
            text: "TOA PAYOH INT"
        },
        scrolls: [
            "JURONG WEST AVE 1",
            "JURONG EAST AVE 1",
            "BUKIT BATOK EAST AVE 3",
            "JALAN JURONG KECHIL",
            "DUNEARN RD",
            "LORNIE RD",
            "BRADDELL RD"
        ]
    },
    "1611": {
        renderType: "standardService",
        serviceNumber: "161",
        destination: {
            text: "WOODLANDS INT"
        },
        scrolls: [
            "HOUGANG AVE 8",
            "HOUGANG AVE 4",
            "SENGKANG EAST RD",
            "SENGKANG EAST WAY",
            "WOODLANDS AVE 2"
        ]
    },
    "1612": {
        renderType: "standardService",
        serviceNumber: "161",
        destination: {
            text: "HOUGANG INT"
        },
        scrolls: [
            "WOODLANDS AVE 2",
            "SENGKANG EAST WAY",
            "SENGKANG EAST RD",
            "HOUGANG AVE 4",
            "HOUGANG AVE 8"
        ]
    },
    "1621": {
        renderType: "standardService",
        serviceNumber: "162",
        destination: {
            text: "SHENTON WAY TER"
        },
        scrolls: [
            "ANG MO KIO AVE 8",
            "ANG MO KIO AVE 6",
            "BISHAN ST 22",
            "SIN MING AVE",
            "UPPER THOMSON RD",
            "THOMSON RD",
            "ORCHARD RD",
            "BRAS BASAH RD"
        ]
    },
    "1622": {
        renderType: "standardService",
        serviceNumber: "162",
        destination: {
            text: "YIO CHU KANG INT"
        },
        scrolls: [
            "STAMFORD RD",
            "ORCHARD TURN",
            "THOMSON RD",
            "UPPER THOMSON RD",
            "SIN MING AVE",
            "BISHAN ST 22",
            "ANG MO KIO AVE 6",
            "ANG MO KIO AVE 8"
        ]
    },
    "1623": {
        renderType: "int-loopSvc",
        serviceNumber: "162M",
        destination: {
            text: "YCK INT-MARINA CTR",
            "font": "tall"
        },
        scrolls: [
            "ANG MO KIO AVE 6",
            "BISHAN ST 22",
            "SIN MING AVE",
            "THOMSON RD",
            "ORCHARD RD",
            "TEMASEK AVE",
            "ORCHARD TURN",
            "THOMSON RD",
            "SIN MING AVE",
            "BISHAN ST 22",
            "ANG MO KIO AVE 6"
        ]
    },
    "1631": {
        renderType: "standardService",
        serviceNumber: "163",
        destination: {
            text: "TOA PAYOH INT"
        },
        scrolls: [
            "SENGKANG EAST AVE",
            "SENGKANG WEST AVE",
            "YIO CHU KANG RD",
            "UPPER THOMSON RD",
            "BRADDELL RD",
            "LOR 6 TOA PAYOH",
            "LOR 4 TOA PAYOH"
        ]
    },
    "1632": {
        renderType: "standardService",
        serviceNumber: "163",
        destination: {
            text: "SENGKANG INT"
        },
        scrolls: [
            "LOR 4 TOA PAYOH",
            "LOR 6 TOA PAYOH",
            "BRADDELL RD",
            "UPPER THOMSON RD",
            "YIO CHU KANG RD",
            "SENGKANG WEST AVE",
            "SENGKANG EAST AVE"
        ]
    },
    "1661": {
        renderType: "standardService",
        serviceNumber: "166",
        destination: {
            text: "CLEMENTI INT"
        },
        scrolls: [
            "ANG MO KIO AVE 3",
            "UPP THOMSON RD",
            "THOMSON RD",
            "NEW BRIDGE RD",
            "KAMPONG BAHRU RD",
            "TELOK BLANGAH RD",
            "ALEXANDRA RD",
            "C'WEALTH AVE WEST"
        ]
    },
    "1662": {
        renderType: "standardService",
        serviceNumber: "166",
        destination: {
            text: "ANG MO KIO INT"
        },
        scrolls: [
            "C'WEALTH AVE WEST",
            "ALEXANDRA RD",
            "TELOK BLANGAH RD",
            "KAMPONG BAHRU RD",
            "EU TONG SEN ST",
            "THOMSON RD",
            "UPP THOMSON RD",
            "ANG MO KIO AVE 3"
        ]
    },
    "1681": {
        renderType: "standardService",
        serviceNumber: "168",
        destination: {
            text: "WOODLANDS INT"
        },
        scrolls: [
            "BEDOK NORTH AVE 3",
            "TAMPINES AVE 4",
            "TAMPINES AVE 10",
            "JALAN KAYU",
            "WOODLANDS AVE 2"
        ]
    },
    "1682": {
        renderType: "standardService",
        serviceNumber: "168",
        destination: {
            text: "BEDOK INT"
        },
        scrolls: [
            "WOODLANDS AVE 2",
            "JALAN KAYU",
            "TAMPINES AVE 10",
            "TAMPINES AVE 4",
            "BEDOK NORTH AVE 3"
        ]
    },
    "1701": {
        renderType: "standardService",
        serviceNumber: "170",
        destination: {
            text: "LARKIN TER"
        },
        scrolls: [
            "BUKIT TIMAH RD",
            "UPPER BUKIT TIMAH RD",
            "WOODLANDS RD",
            "WOODLANDS CTR RD"
        ]
    },
    "1702": {
        renderType: "standardService",
        serviceNumber: "170",
        destination: {
            text: "QUEEN ST TER"
        },
        scrolls: [
            "WOODLANDS CTR RD",
            "WOODLANDS RD",
            "UPP BUKIT TIMAH RD",
            "DUNEARN RD"
        ]
    },
    // "1703": {
    //     renderType: "standardService",
    //     serviceNumber: "170A",
    //     destination: {
    //         text: "LARKIN TER"
    //     },
    //     scrolls: [
    //         ""
    //     ]
    // },
    "1704": {
        renderType: "standardService",
        serviceNumber: "170X",
        destination: {
            text: "JB SENTRAL"
        },
        scrolls: [
            "WOODLANDS RD",
            "WOODLANDS CROSSING",
            "JB SENTRAL"
        ]
    },
    "1705": {
        renderType: "standardService",
        serviceNumber: "170X",
        destination: {
            text: "KRANJI STN"
        },
        scrolls: [
            "WOODLANDS RD",
            "WOODLANDS CROSSING",
            "JB SENTRAL"
        ]
    },
    "1741": {
        renderType: "standardService",
        serviceNumber: "174",
        destination: {
            text: "KAMPONG BAHRU TER"
        },
        scrolls: [
            "JURONG ROAD",
            "BUKIT BATOK E. AVE 3&6",
            "JALAN JURONG KECHIL",
            "DUNEARN RD",
            "FARRER RD",
            "HOLLAND RD",
            "ORCHARD RD",
            "NORTH&SOUTH BRIDGE RD"
        ]
    },
    "1742": {
        renderType: "standardService",
        serviceNumber: "174",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "EU TONG SEN ST",
            "ORCHARD BOULEVARD",
            "HOLLAND RD",
            "FARRER RD",
            "BUKIT TIMAH RD",
            "JALAN JURONG KECHIL",
            "BUKIT BATOK E. AVE 6&3"
        ]
    },
    "1748": {
        renderType: "expSvc",
        serviceNumber: "174e",
        text: "EXPRESS 174"
    },
    "1749": {
        renderType: "expSvc",
        serviceNumber: "174e",
        text: "EXPRESS 174"
    },
    "1968": {
        renderType: "expSvc",
        serviceNumber: "196e",
        text: "EXPRESS 196"
    },
    "1969": {
        renderType: "expSvc",
        serviceNumber: "196e",
        text: "EXPRESS 196"
    },
    "2011": {
        renderType: "int-loopSvc",
        serviceNumber: "201",
        destination: {
            text: "KENT RIDGE - PANDAN GDNS",
            "font": "tall"
        },
        scrolls: [
            "WEST COAST RD",
            "C'WEALTH AVE WEST",
            "TEBAN GARDENS RD",
            "PANDAN GARDENS",
            "C'WEALTH AVE WEST",
            "WEST COAST RD"
        ]
    },
    "2222": {
        renderType: "image",
        text: "SBS TRANSIT",
        "image": "logo",
        "x": "centre"
    },
    "2401": {
        renderType: "standardService",
        serviceNumber: "240",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "JALAN AHMAD IBRAHIM",
            "KANG CHING RD",
            "YUAN CHING RD",
            "BOON LAY PLACE",
            "BOON LAY WAY"
        ]
    },
    "2411": {
        renderType: "standardService",
        serviceNumber: "241",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "JURONG WEST ST 63",
            "PIONEER RD NTH",
            "JURONG WEST ST 91"
        ]
    },
    "2421": {
        renderType: "standardService",
        serviceNumber: "242",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "JURONG WEST CENTRAL 1",
            "JALAN BOON LAY",
            "JURONG WEST AVE 4",
            "JURONG WEST ST 72",
            "JURONG WEST AVE 5",
            "JURONG WEST AVE 4",
            "JALAN BOON LAY"
        ]
    },
    "2431": {
        renderType: "standardService",
        serviceNumber: "243W",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "JURONG WEST ST 62",
            "JURONG WEST AVE 4",
            "JURONG WEST AVE 5",
            "JURONG WEST ST 81",
            "JURONG WEST ST 75",
            "JURONG WEST ST 64"
        ]
    },
    "2432": {
        renderType: "standardService",
        serviceNumber: "243G",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "JURONG WEST ST 64",
            "JURONG WEST ST 75",
            "JURONG WEST ST 81",
            "JURONG WEST AVE 5",
            "JURONG WEST AVE 4",
            "JURONG WEST ST 62"
        ]
    },
    "2471": {
        renderType: "int-loopSvc",
        serviceNumber: "247",
        destination: {
            text: "TUAS TER-TUAS BAY LINK",
            "font": "tall"
        },
        scrolls: [
            "TUAS AVE 7",
            "TUAS CRES",
            "TUAS STH AVE 5&4&7",
            "TUAS STH AVE 3&9&8",
            "TUAS LINK 4"
        ]
    },
    "2481": {
        renderType: "int-loopSvc",
        serviceNumber: "248",
        destination: {
            text: "TUAS TER-TUAS STH AVE 14",
            "font": "tall"
        },
        scrolls: [
            "PIONEER RD",
            "TUAS AVE 20",
            "TUAS STH AVE 5",
            "TUAS STH AVE 9",
            "TUAS STH AVE 10"
        ]
    },
    "2491": {
        renderType: "standardService",
        serviceNumber: "249",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "JALAN BOON LAY",
            "JURONG PIER RD",
            "TANJONG KLING RD",
            "SHIPYARD RD",
            "JALAN SAMULUN",
            "SHIPYARD RD",
            "TANJONG KLING RD",
            "JALAN BOON LAY"
        ]
    },
    "2511": {
        renderType: "int-loopSvc",
        serviceNumber: "251",
        destination: {
            text: "BOON LAY INT-SHIPYARD RD",
            "font": "tall"
        },
        scrolls: [
            "BOON LAY WAY",
            "PIONEER RD NTH",
            "SHIPYARD RD",
            "PIONEER RD NTH",
            "BOON LAY WAY"
        ]
    },
    "2521": {
        renderType: "standardService",
        serviceNumber: "252",
        destination: {
            text: "BOON LAY INT"
        },
        scrolls: [
            "ENTERPRISE RD",
            "INTERNATIONAL RD",
            "JOO KOON CIRCLE"
        ]
    },
    "2531": {
        renderType: "int-loopSvc",
        serviceNumber: "253",
        destination: {
            text: "JOO KOON INT-BENOI RD",
            "font": "tall"
        },
        scrolls: [
            "BENOI RD",
            "BENOI SECTOR",
            "PIONEER RD",
            "BENOI RD",
            "PIONEER RD"
        ]
    },
    "2541": {
        renderType: "int-loopSvc",
        serviceNumber: "254",
        destination: {
            text: "JOO KOON INT-TUAS AVE 11",
            "font": "tall"
        },
        scrolls: [
            "BENOI RD",
            "PIONEER RD",
            "TUAS RD",
            "TUAS BASIN LINK"
        ]
    },
    "2551": {
        renderType: "int-loopSvc",
        serviceNumber: "255",
        destination: {
            text: "JOO KOON INT-GUL CRES",
            "font": "tall"
        },
        scrolls: [
            "GUL CIRCLE",
            "GUL CRES",
            "GUL AVE"
        ]
    },
    "2561": {
        renderType: "int-loopSvc",
        serviceNumber: "256",
        destination: {
            text: "BOON LAY INT-JOO KOON",
            "font": "tall"
        },
        scrolls: [
            "JURONG WEST ST 62",
            "PIONEER RD NTH",
            "JALAN AHMAD IBRAHIM",
            "JOO KOON CIRCLE",
            "JALAN AHMARD IBRAHIM",
            "PIONEER RD NTH",
            "JURONG WEST ST 62"
        ]
    },
    "2571": {
        renderType: "int-loopSvc",
        serviceNumber: "257",
        destination: {
            text: "JOO KOON INT-PIONEER SEC 2",
            "font": "tall"
        },
        scrolls: [
            "BENOI RD",
            "GUL RD",
            "PIONEER SECTOR 2",
            "PIONEER SECTOR 1"
        ]
    },
    "2581": {
        renderType: "int-loopSvc",
        serviceNumber: "258",
        destination: {
            text: "JOO KOON INT-JUR W. ST 64",
            "font": "tall"
        },
        scrolls: [
            "PIONEER RD NTH",
            "JURONG W. ST 61&81&75",
            "JALAN AHMAD IBRAHIM"
        ]
    },
    "2611": {
        renderType: "standardService",
        serviceNumber: "261",
        destination: {
            text: "ANG MO KIO INT"
        },
        scrolls: [
            "ANG MO KIO AVE 3",
            "ANG MO KIO AVE 10",
            "ANG MO KIO IND PK 1",
            "ANG MO KIO AVE 10",
            "ANG MO KIO AVE 3"
        ]
    },
    "2721": {
        renderType: "standardService",
        serviceNumber: "272",
        destination: {
            text: "BUKIT MERAH INT"
        },
        scrolls: [
            "HENDERSON RD",
            "TELOK BLANGAH WAY",
            "TELOK BLANGAH RISE",
            "TELOK BLANGAH CRES",
            "HENDERSON RD"
        ]
    },
    "2731": {
        renderType: "standardService",
        serviceNumber: "273",
        destination: {
            text: "BUKIT MERAH INT"
        },
        scrolls: [
            "HENDERSON RD",
            "TELOK BLANGAH HTS",
            "TELOK BLANGAH ST 32",
            "TELOK BLANGAH DRIVE",
            "HENDERSON RD"
        ]
    },
    "2751": {
        renderType: "standardService",
        serviceNumber: "275",
        destination: {
            text: "BUKIT MERAH INT"
        },
        scrolls: [
            "JALAN BUKIT MERAH",
            "LOWER DELTA RD",
            "BUKIT PURMEI AVE",
            "LOWER DELTA RD",
            "JALAN BUKIT MERAH"
        ]
    },
    "2911": {
        renderType: "standardService",
        serviceNumber: "291",
        destination: {
            text: "TAMPINES ST 83&33"
        },
        scrolls: [
            'TAMPINES AVE 5',
            'TAMPINES ST 83',
            'TAMPINES ST 81',
            'TAMPINES ST 21',
            'TAMPINES ST 32',
            'TAMPINES ST 21'
        ]
    },
    "2921": {
        renderType: "standardService",
        serviceNumber: "292",
        destination: {
            text: "TAMPINES INT"
        },
        scrolls: [
            'TAMPINES AVE 5',
            'TAMPINES AVE 2',
            'TAMPINES ST 22',
            'TAMPINES AVE 2',
            'TAMPINES ST 11',
        ]
    },
    "2931": {
        renderType: "standardService",
        serviceNumber: "293",
        destination: {
            text: "TAMPINES ST 71&AVE 7"
        },
        scrolls: [
            'TAMPINES ST 45&42',
            'TAMPINES AVE 4&3',
            'TAMPINES AVE 8&9'
        ]
    },
    "3711": {
        renderType: "standardService",
        serviceNumber: "371",
        destination: {
            text: "SENGKANG INT"
        },
        scrolls: [
            'COMPASSVALE RD',
            'RIVERVALE DR',
            'RIVERVALE CRES',
            'COMPASSVALE ST'
        ]
    },
    "3741": {
        renderType: "standardService",
        serviceNumber: "374",
        destination: {
            text: "COMPASSVALE INT"
        },
        scrolls: [
            'SENGKANG EAST WAY',
            'ANCHORVALE CRES',
            'COMPASSVALE RD',
            'SENGKANG EAST WAY',
            'FERNVALE RD'
        ]
    },
    "3861": {
        renderType: "standardService",
        serviceNumber: "386",
        destination: {
            text: "PUNGGOL INT"
        },
        scrolls: [
            'PUNGGOL CENTRAL',
            'EDGEVALE PLAINS',
            'PUNGGOL EAST',
            'EDGEVALE PLAINS',
            'PUNGGOL CENTRAL'
        ]
    },
    "3333": {
        renderType: "full",
        text: "FREE SHUTTLE"
    },
    "4051": {
        renderType: "int-loopSvc",
        serviceNumber: "405",
        destination: {
            text: "BOON LAY INT-OLD CCK RD",
            "font": "tall"
        },
        scrolls: [
            "JURONG WEST CENTRAL 1",
            "JALAN BOON LAY",
            "JALAN BAHAR",
            "OLD CHOA CHU KANG RD",
            "JALAN BAHAR",
            "JALAN BOON LAY",
            "JURONG WEST CENTRAL 1"
        ]
    },
    "4052": {
        renderType: "int-loopSvc",
        serviceNumber: "405M",
        destination: {
            text: "BOON LAY INT-OLD CCK RD",
            "font": "tall"
        },
        scrolls: [
            "JURONG WEST CENTRAL 1",
            "JALAN BOON LAY",
            "JALAN BAHAR",
            "OLD CHOA CHU KANG RD",
            "JALAN BAHAR",
            "JALAN BOON LAY",
            "JURONG WEST CENTRAL 1"
        ]
    },
    "4444": {
        renderType: "full",
        text: "ON TEST"
    },
    "5021": {
        renderType: "expSvc",
        serviceNumber: "502",
        text: "EXPRESS 502"
    },
    "5061": {
        renderType: "expSvc",
        serviceNumber: "506",
        text: "EXPRESS 506"
    },
    "5131": {
        renderType: "expSvc",
        serviceNumber: "513",
        text: "EXPRESS 513"
    },
    "5555": {
        renderType: "full",
        text: "TRAINING BUS"
    },
    "7777": {
        renderType: "full",
        text: "FREE BRIDGING BUS"
    },
    "8001": {
        renderType: "int-loopSvc",
        serviceNumber: "800",
        destination: {
            text: "YISHUN INT-SEMBAWANG RD",
            "font": "tall"
        },
        scrolls: [
            "YISHUN AVE 7",
            "SEMBAWANG RD",
            "YISHUN ST 71",
            "YISHUN RING RD"
        ]
    },
    "8041": {
        renderType: "int-loopSvc",
        serviceNumber: "804",
        destination: {
            text: "YISHUN INT-YISHUN AVE 11",
            "font": "tall"
        },
        scrolls: [
            "YISHUN AVE 2",
            "YISHUN RING RD",
            "YISHUN ST 41",
            "YISHUN AVE 1",
            "YISHUN AVE 11",
            "YISHUN RING RD"
        ]
    },
    "8051": {
        renderType: "int-loopSvc",
        serviceNumber: "805",
        destination: {
            text: "YISHUN INT-YISHUN AVE 1",
            "font": "tall"
        },
        scrolls: [
            "YISHUN AVE 2",
            "YISHUN AVE 4",
            "YISHUN AVE 1",
            "YISHUN RING RD"
        ]
    },
    "8111": {
        renderType: "standardService",
        serviceNumber: "811",
        destination: {
            text: "YISHUN AVE 5 & 1"
        },
        scrolls: [
            "YISHUN AVE 9,6&7",
            "SEMBAWANG RD",
            "YISHUN AVE 5&2",
            "YISHUN RING RD",
            "YISHUN AVE 2"
        ]
    },
    "8161": {
        renderType: "standardService",
        serviceNumber: "CT28",
        destination: {
            text: "CLEMENTI AVE 4"
        },
        scrolls: [
            "EU TONG SEN ST",
            "C'WEALTH AVE WEST",
            "CLEMENTI AVE 4"
        ]
    },
    "8162": {
        renderType: "standardService",
        serviceNumber: "CT28",
        destination: {
            text: "KAMPONG BAHRU TER"
        },
        scrolls: [
            "CLEMENTI AVE 4",
            "C'WEALTH AVE WEST",
            "NEW BRIDGE RD"
        ]
    },
    "8518": {
        renderType: "expSvc",
        serviceNumber: "851e",
        text: "EXPRESS 851e"
    },
    "8519": {
        renderType: "expSvc",
        serviceNumber: "851e",
        text: "EXPRESS 851e"
    },
    "8601": {
        renderType: "standardService",
        serviceNumber: "860",
        destination: {
            text: "YIO CHU KANG INT"
        },
        scrolls: [
            "YISHUN RING RD",
            "YISHUN AVE 3",
            "SEMBAWANG RD",
            "UPPER THOMSON RD",
            "ANG MO KIO AVE 5"
        ]
    },
    "8602": {
        renderType: "standardService",
        serviceNumber: "860",
        destination: {
            text: "YISHUN INT"
        },
        scrolls: [
            "ANG MO KIO AVE 5",
            "UPPER THOMSON RD",
            "SEMBAWANG RD",
            "YISHUN AVE 3",
            "YISHUN RING RD"
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
