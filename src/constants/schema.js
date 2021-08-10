const schema = {
    sections: [
    {
        title: 'General',
        type: 'simple',
        sectionId: 1,
        controls: [
            {
                id: 1,
                label: 'Case management',
                value: true,
            },
            {
                id: 2,
                label: 'Map timeline',
                value: true,
            },
            {
                id: 3,
                label: 'Views & briefings',
                value: true,
            },
            {
                id: 4,
                label: 'Notifications',
                value: true,
            },
            {
                id: 5,
                label: 'Mass communications',
                value: true,
            },
            {
                id: 6,
                label: 'Traffic cameras',
                value: true,
            },
        ]
    },
    {
        title: 'Settings',
        type: 'compound',
        group: true,
        sectionId: 2,
        controls: [
            {
                id: 7,
                label: 'Audit log',
                value: true,
            },
            {
                id: 8,
                label: 'Users',
                value: false,
                indicator: true,
                children: [
                    {
                        id: 9,
                        label: 'Users add',
                        value: true,
                        condensed: true,
                    },
                    {
                        id: 10,
                        label: 'User delete',
                        value: false,
                        condensed: true,
                    },
                    {
                        id: 11,
                        label: 'Users edit',
                        value: true,
                        condensed: true,
                    },
                    {
                        id: 12,
                        label: 'Max users',
                        value: false,
                        dropdown: {
                            type: 'number',
                            options: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                            value: 10,
                        },
                        condensed: true,
                    },
                    {
                        id: 13,
                        label: 'User delete',
                        value: false,
                        condensed: true,
                    },
                ]
            }
        ]
    },
    {
        title: 'Alerts',
        group: true,
        type: 'compound',
        sectionId: 3,
        controls: [
            {
                id: 14,
                label: 'Alert manager',
                value: true,
                condensed: true,
            },
            {
                id: 15,
                label: 'Alert rules',
                value: true,
                dropdown: {
                    type: 'number',
                    options: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                    value: 10,
                },
                condensed: true,
            },
        ]
    },
]};

export default schema;