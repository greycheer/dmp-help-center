---
sidebar_position: 3
---

# Thing Model

## Overview

A Thing Model is a digital data model describing "what a device is, what it can do, and what it can notify." It standardizes device-cloud data interaction.

## Three Subtypes

### 1. Properties

Device attributes that can be read and/or written.

| Property | Data Type | Access | Example |
|----------|-----------|--------|---------|
| Power Switch | Boolean | Read/Write | true/false |
| Brightness | Integer | Read/Write | 0-100 |
| Current Temperature | Float | Read-only | 25.5°C |
| Operating Mode | Enum | Read/Write | "cool"/"heat"/"dry" |

**Example Definition:**
```json
{
  "identifier": "PowerSwitch",
  "name": "Power Switch",
  "dataType": "Bool",
  "accessMode": "rw"
}
```

### 2. Actions

Device-executable commands with input and output parameters.

| Action | Input | Output | Description |
|--------|-------|--------|-------------|
| Set Fan Speed | {"speed": 3} | {"result": "success"} | Set AC fan speed level |
| Take Photo | {} | {"url": "..."} | Trigger camera capture |
| Reset Device | {"type": "soft"} | {"result": "success"} | Reset to factory settings |

**Example Definition:**
```json
{
  "identifier": "SetFanSpeed",
  "name": "Set Fan Speed",
  "inputParams": [
    {"identifier": "speed", "dataType": "Int", "range": "1-5"}
  ]
}
```

### 3. Events

Device-initiated notifications when certain conditions occur.

| Event | Parameters | Description |
|-------|------------|-------------|
| Low Battery | {"level": 15} | Battery level below threshold |
| Filter Replace Alert | {"days": 30} | Air filter needs replacement |
| Motion Detected | {"zone": "entrance"} | PIR sensor triggered |
| Door Opened | {"timestamp": 1234567890} | Door sensor triggered |

**Example Definition:**
```json
{
  "identifier": "LowBattery",
  "name": "Low Battery Warning",
  "outputParams": [
    {"identifier": "level", "dataType": "Int", "unit": "%"}
  ],
  "type": "Warning"
}
```

## Complete Example: Smart AC

```json
{
  "productKey": "a1b2c3d4e5f6",
  "thingModel": {
    "properties": [
      {
        "identifier": "CurrentTemperature",
        "name": "Current Temperature",
        "dataType": "Float",
        "unit": "°C",
        "accessMode": "r"
      },
      {
        "identifier": "OperatingMode",
        "name": "Operating Mode",
        "dataType": "Enum",
        "values": ["cool", "heat", "dry", "fan"],
        "accessMode": "rw"
      }
    ],
    "actions": [
      {
        "identifier": "SetFanSpeed",
        "name": "Set Fan Speed",
        "inputParams": [
          {"identifier": "speed", "dataType": "Int", "range": "1-5"}
        ]
      }
    ],
    "events": [
      {
        "identifier": "FilterReplaceAlert",
        "name": "Filter Replacement Alert",
        "outputParams": [
          {"identifier": "days", "dataType": "Int", "unit": "days"}
        ],
        "type": "Info"
      }
    ]
  }
}
```

## Next Steps

- Learn how devices authenticate using [Tuple Authentication](../device-integration/tuple-auth)
- Configure [Network Provisioning](../device-integration/network-provisioning)
- Implement [Device Binding](../device-integration/device-binding)
