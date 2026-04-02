---
sidebar_position: 2
sidebar_label: Developer Manual
---

# DMP Platform Developer Guide

## Introduction

### 1.1 Purpose of the Manual

This manual is intended for IoT hardware developers and firmware engineers who are integrating devices with the DMP platform. It provides comprehensive guidance on device development, protocol implementation, firmware management, and debugging.

The content covers device data model definition, communication protocol implementation, OTA firmware upgrades, and integration testing to ensure smooth device connectivity and operation.

### 1.2 Platform Overview

The DMP platform provides a complete device management solution supporting multiple communication protocols including Wi-Fi, Zigbee, Bluetooth, and 4G. This manual focuses on the technical aspects of device integration from a developer's perspective.

Key capabilities include:
- Device data model definition (Thing Model)
- Device-to-cloud communication protocols
- Firmware development and OTA upgrades
- Device debugging and diagnostics

### 1.3 Terminology Explanation

Before starting development, understand the following core concepts:

| Terminology | Explanation | Example |
|-------------|-------------|---------|
| Thing Model | Data model defining device capabilities, including properties, events, and actions | Smart Bulb with on/off, brightness, color temperature properties |
| DP (Data Point) | Specific data field in the Thing Model representing a single property or function | DP 1 = Switch, DP 2 = Brightness Level |
| TuyaLink | Protocol for direct device-to-cloud communication over MQTT | Device connecting via TuyaLink SDK |
| Gateway Sub-device | Device connecting through a gateway rather than directly to cloud | Zigbee sensor connecting via Zigbee gateway |
| PID (Product ID) | Unique identifier for a product model, burned into device during production | PID = "abcdefghijklmnop" |
| Device UUID | Unique identifier for each device instance | UUID = "uuid1234567890abcdef" |
| Device Secret | Authentication key paired with UUID for secure device connection | Secret = "secret1234567890abcdef" |

### 1.4 Quick Start

If you are new to DMP platform development, follow this quick start path:

1. **Understand the Platform** → Read Section 1.2 Platform Overview
2. **Create a Product** → Follow Section 2.1 Product Creation
3. **Define Data Model** → Follow Section 2.2 Thing Model Definition
4. **Implement Communication** → Follow Section 2.3 Device Communication
5. **Test Integration** → Follow Section 2.4 Device Debugging

For specific integration scenarios:
- **Wi-Fi Device Integration** → Section 3.1 Wi-Fi Device Development
- **Zigbee Device Integration** → Section 3.2 Zigbee Device Development
- **Firmware OTA** → Section 3.3 Firmware Management

## Product Development

### 2.1 Product Creation

#### 2.1.1 Creating a New Product

To start device development, you must first create a product in the DMP platform:

**Navigation Path:** [Product] – [Product Development] – [Create Product]

**Required Information:**
- Product Name: Display name for the product
- Product Category: Select from predefined categories
- Communication Protocol: Wi-Fi, Zigbee, Bluetooth, or 4G
- Product Model: Internal model identifier

**Steps:**
1. Click **Create Product**
2. Select the appropriate **Product Category** (this determines available standard functions)
3. Choose **Communication Type**
4. Enter **Product Name** and **Model**
5. Click **Confirm** to create

#### 2.1.2 Product Status Management

Products have the following status lifecycle:

- **In Development**: Initial status, all configurations can be modified
- **Pre-release**: Configuration locked, ready for testing
- **Released**: Production ready, available for mass production
- **Deprecated**: No longer supported, cannot create new devices

**Important:** Only products in "Released" status can be used for mass production and device activation.

### 2.2 Thing Model Definition

#### 2.2.1 Understanding Thing Model

The Thing Model defines the complete capability set of a device, including:

**Properties**: Device state that can be read and/or written
- Examples: Power switch, brightness level, temperature reading
- Support data types: Boolean, Integer, Enum, Float, String, Date, Raw

**Events**: Notifications sent from device to cloud
- Examples: Fault alarm, low battery warning, motion detected
- Can include multiple parameters

**Actions**: Commands sent from cloud to device
- Examples: Reset device, take photo, start recording
- Can have input parameters and output results

#### 2.2.2 Using Standard Functions

The platform provides **Standard Functions** for each product category:

**Advantages of Standard Functions:**
- Pre-configured in APP, no additional APP development needed
- Consistent user experience across products in same category
- Continuously maintained and updated by platform

**Types of Standard Functions:**
- **Mandatory**: Must be implemented, cannot be removed
- **Optional**: Can be added based on actual hardware capabilities

**Navigation Path:** [Product] – [Product Development] – [Thing Model] – [Standard Functions]

To add standard functions:
1. Select **Standard Functions** tab
2. Browse available functions for your category
3. Click **Add** to include in your product
4. Configure parameters as needed

#### 2.2.3 Creating Custom Functions

If standard functions don't meet your requirements, you can create custom functions:

**Navigation Path:** [Product] – [Product Development] – [Thing Model] – [Custom Functions]

**For Properties:**
- Define DP ID (avoid IDs starting with "1" - reserved for platform)
- Set data type and value range
- Configure read/write permissions

**For Events:**
- Define event identifier
- Add event parameters with data types

**For Actions:**
- Define action identifier
- Configure input parameters
- Define output parameters (if any)

### 2.3 Device Communication

#### 2.3.1 Communication Protocols

The DMP platform supports multiple communication protocols:

| Protocol | Description | Use Case |
|----------|-------------|----------|
| TuyaLink | MQTT-based direct connection | Wi-Fi, 4G devices |
| Zigbee | Mesh network via gateway | Low-power sensors, switches |
| Bluetooth | BLE direct or gateway | Portable devices, wearables |

#### 2.3.2 TuyaLink Protocol

TuyaLink is the primary protocol for direct device-to-cloud communication.

**Connection Process:**
1. Device obtains five-tuple credentials (PID, UUID, Secret, etc.)
2. Device establishes MQTT connection to cloud
3. Device subscribes to command topics
4. Device publishes property updates and events
5. Device handles action commands from cloud

**MQTT Topics:**
```
// Device publishes property updates
up/thing/{device_uuid}/properties

// Device subscribes to action commands
down/thing/{device_uuid}/actions

// Device publishes events
up/thing/{device_uuid}/events
```

**Message Format:**
```json
{
  "msgId": "1234567890",
  "time": 1234567890,
  "data": {
    "switch": true,
    "brightness": 80
  }
}
```

#### 2.3.3 Device Authentication

Devices must authenticate using the five-tuple credentials:

**Authentication Fields:**
- productId (PID): Product identifier
- deviceUuid: Unique device ID
- deviceSecret: Device authentication key
- authkey: Derived authentication key

**Authentication Flow:**
1. Device calculates authkey from UUID + Secret
2. Device sends connection request with PID, UUID, authkey
3. Cloud validates credentials
4. Connection established on success

### 2.4 Device Debugging

#### 2.4.1 Device Simulator

Use the Device Simulator for testing without physical hardware:

**Navigation Path:** [Product] – [Product Development] – [Device Debugging] – [Simulator]

**Features:**
- Simulate device connection and data reporting
- Send commands to test action handling
- View real-time communication logs

#### 2.4.2 Communication Logs

View detailed communication logs for debugging:

**Navigation Path:** [Product] – [Product Development] – [Device Debugging] – [Logs]

**Log Types:**
- Connection logs: Device connect/disconnect events
- Property logs: Property updates from device
- Command logs: Commands sent to device
- Event logs: Events reported by device

#### 2.4.3 Online Debugging

For physical device debugging:

**Prerequisites:**
1. Device connected to network
2. Device activated on platform
3. Device in "In Development" or "Pre-release" status

**Debug Features:**
- Real-time property monitoring
- Send test commands
- View device logs
- Force refresh device status

## Specific Development Scenarios

### 3.1 Wi-Fi Device Development

#### 3.1.1 SDK Integration

The DMP platform provides SDKs for Wi-Fi device development:

**Available SDKs:**
- Tuya IoT SDK for embedded Linux
- Tuya IoT SDK for FreeRTOS
- Tuya IoT SDK for Arduino

**SDK Capabilities:**
- Device provisioning (EZ mode, AP mode, QR code)
- MQTT communication management
- OTA firmware upgrade
- Data model mapping

#### 3.1.2 Network Provisioning

Wi-Fi devices support multiple provisioning methods:

**EZ Mode (SmartConfig):**
- APP broadcasts Wi-Fi credentials
- Device sniffs packets to obtain SSID/password
- One-step provisioning, user-friendly

**AP Mode:**
- Device creates AP hotspot
- APP connects to device AP
- APP sends Wi-Fi credentials
- More reliable, requires mode switching

**QR Code:**
- Device scans QR code containing credentials
- Suitable for devices with camera

### 3.2 Zigbee Device Development

#### 3.2.1 Zigbee Architecture

Zigbee devices connect through a Zigbee gateway:

```
Zigbee Device ←→ Zigbee Gateway ←→ DMP Cloud ←→ APP
```

**Device Types:**
- Router: Can route messages, always powered
- End Device: Battery powered, sleeps to save power

#### 3.2.2 Gateway Integration

To integrate a Zigbee device:

1. Pair device with gateway
2. Gateway reports device to cloud
3. Cloud creates device entity
4. Device appears in APP

### 3.3 Firmware Management

#### 3.3.1 Firmware Repository

Manage firmware versions in the platform:

**Navigation Path:** [Product] – [Firmware Management] – [Firmware Repository]

**Firmware Information:**
- Version number (semantic versioning recommended)
- Firmware file (binary)
- Release notes
- Compatibility information

#### 3.3.2 OTA Upgrade Process

OTA (Over-The-Air) upgrade workflow:

1. **Upload Firmware**: Upload new firmware to repository
2. **Create Upgrade Task**: Select target devices and firmware version
3. **Push Notification**: Devices receive upgrade notification
4. **Download Firmware**: Device downloads firmware package
5. **Install Firmware**: Device installs and reboots
6. **Verify Upgrade**: Cloud verifies new version

#### 3.3.3 OTA Implementation

Device-side OTA handling:

**Receive OTA Notification:**
```json
{
  "msgId": "ota_12345",
  "time": 1234567890,
  "data": {
    "firmwareUrl": "https://...",
    "firmwareVersion": "2.0.0",
    "fileSize": 1024000,
    "checksum": "md5_checksum"
  }
}
```

**OTA Steps:**
1. Verify firmware package integrity
2. Download firmware to temporary storage
3. Verify checksum
4. Apply firmware update
5. Reboot device
6. Report new version to cloud

## Appendix

### 3.1 History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| v1.0.0 | 2024-01-10 | Platform Team | Initial release of Developer Guide |
| v1.1.0 | 2024-04-15 | Platform Team | Added Zigbee device development section |
| v1.2.0 | 2024-07-20 | Platform Team | Updated TuyaLink protocol documentation |
| v1.3.0 | 2024-10-30 | Platform Team | Added OTA implementation details |

### 3.2 Reference Documents

- API Reference: https://developer.tuya.com/docs/iot
- SDK Download: https://github.com/tuya/tuya-iotos-embeded-sdk
- Community Forum: https://www.tuya.com/vo/community
