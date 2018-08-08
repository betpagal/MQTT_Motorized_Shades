[
    {
        "id": "fca96f45.977e9",
        "type": "alexa-local",
        "z": "771e30ce.ce646",
        "devicename": "Couch Shade",
        "inputtrigger": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "ad6a1e51.4820c"
            ]
        ]
    },
    {
        "id": "4b123492.2c80bc",
        "type": "function",
        "z": "771e30ce.ce646",
        "name": "Set Payload",
        "func": "msg.payload = { data: {'entity_id': 'input_number.couch_shade','value': \nmsg.bri } };\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 200,
        "wires": [
            [
                "2185acfc.6292e4"
            ]
        ]
    },
    {
        "id": "13179573.43883b",
        "type": "range",
        "z": "771e30ce.ce646",
        "minin": "0",
        "maxin": "100",
        "minout": "0",
        "maxout": "13",
        "action": "scale",
        "round": true,
        "property": "bri",
        "name": "",
        "x": 470,
        "y": 200,
        "wires": [
            [
                "4b123492.2c80bc"
            ]
        ]
    },
    {
        "id": "ad6a1e51.4820c",
        "type": "switch",
        "z": "771e30ce.ce646",
        "name": "on/off",
        "property": "on_off_command",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 310,
        "y": 140,
        "wires": [
            [
                "57c015ba.cb27ac"
            ],
            [
                "13179573.43883b"
            ]
        ]
    },
    {
        "id": "2185acfc.6292e4",
        "type": "api-call-service",
        "z": "771e30ce.ce646",
        "name": "Set Couch Shade",
        "server": "1e776005.3ee9b",
        "service_domain": "input_number",
        "service": "set_value",
        "data": "{}",
        "x": 890,
        "y": 200,
        "wires": []
    },
    {
        "id": "57c015ba.cb27ac",
        "type": "function",
        "z": "771e30ce.ce646",
        "name": "Set Payload",
        "func": "if (msg.payload == \"on\")\n{\nmsg.payload = { data: {\"entity_id\": \"input_number.couch_shade\",\"value\": \n'13' } };\n}\nif (msg.payload == \"off\")\n{\nmsg.payload = { data: {\"entity_id\": \"input_number.couch_shade\",\"value\": \n\"0\" } };\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 80,
        "wires": [
            [
                "51f55f3c.f75f4"
            ]
        ]
    },
    {
        "id": "51f55f3c.f75f4",
        "type": "api-call-service",
        "z": "771e30ce.ce646",
        "name": "Set Couch Shade",
        "server": "1e776005.3ee9b",
        "service_domain": "input_number",
        "service": "set_value",
        "data": "{}",
        "x": 750,
        "y": 80,
        "wires": []
    },
    {
        "id": "1e776005.3ee9b",
        "type": "server",
        "z": "",
        "name": "Home Assistant",
        "url": "https://notmyhass.duckdns.org:8123",
        "pass": "notmypass"
    }
]