const schemaMock = {
        "1": {
        "id": 1,
            "label": "Case management",
            "value": true
    },
        "2": {
        "id": 2,
            "label": "Map timeline",
            "value": true
    },
        "3": {
        "id": 3,
            "label": "Views & briefings",
            "value": true
    },
        "4": {
        "id": 4,
            "label": "Notifications",
            "value": true
    },
        "5": {
        "id": 5,
            "label": "Mass communications",
            "value": true
    },
        "6": {
        "id": 6,
            "label": "Traffic cameras",
            "value": true
    },
        "7": {
        "id": 7,
            "label": "Audit log",
            "value": true
    },
        "8": {
        "id": 8,
            "label": "Users",
            "value": false,
            "indicator": true,
            "children": [
            {
                "id": 9,
                "label": "Users add",
                "value": true,
                "condensed": true
            },
            {
                "id": 10,
                "label": "User delete",
                "value": false,
                "condensed": true
            },
            {
                "id": 11,
                "label": "Users edit",
                "value": true,
                "condensed": true
            },
            {
                "id": 12,
                "label": "Max users",
                "value": false,
                "dropdown": {
                    "type": "number",
                    "options": [
                        10,
                        20,
                        30,
                        40,
                        50,
                        60,
                        70,
                        80,
                        90,
                        100
                    ],
                    "value": 10
                },
                "condensed": true
            },
            {
                "id": 13,
                "label": "User delete",
                "value": false,
                "condensed": true
            }
        ]
    },
        "9": {
        "id": 9,
            "label": "Users add",
            "value": true,
            "condensed": true
    },
        "10": {
        "id": 10,
            "label": "User delete",
            "value": false,
            "condensed": true
    },
        "11": {
        "id": 11,
            "label": "Users edit",
            "value": true,
            "condensed": true
    },
        "12": {
        "id": 12,
            "label": "Max users",
            "value": false,
            "dropdown": {
            "type": "number",
                "options": [
                10,
                20,
                30,
                40,
                50,
                60,
                70,
                80,
                90,
                100
            ],
                "value": 10
        },
        "condensed": true
    },
        "13": {
        "id": 13,
            "label": "User delete",
            "value": false,
            "condensed": true
    },
        "14": {
        "id": 14,
            "label": "Alert manager",
            "value": true,
            "condensed": true
    },
        "15": {
        "id": 15,
            "label": "Alert rules",
            "value": true,
            "dropdown": {
            "type": "number",
                "options": [
                10,
                20,
                30,
                40,
                50,
                60,
                70,
                80,
                90,
                100
            ],
                "value": 10
        },
        "condensed": true
    }
};

export default schemaMock;