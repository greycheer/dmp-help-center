---
sidebar_position: 2
---

# Terminology

Before starting, understand the following core concepts:

## Category

In IoT platforms, refers to a collection of devices with identical functional definitions or application scenarios, serving as templates for product definitions.

| Term | Explanation | Example |
|------|-------------|---------|
| **Category** | Template defining common attributes | "Smart Bulb" defining common attributes like switch status/brightness |
| **Product** | Specific device models under a category | A developer creates the "CS-6-AD Smart Bulb" product using the "Smart Bulb" category |

## Product

Specific device models or series under a category, with globally unique identifiers (PID).

## OTA (Over-The-Air)

Remote wireless updates for device firmware/software. DMP provides full OTA capabilities.

**Supported Methods:**
- **APP Upgrade**: Users trigger upgrades via APP
- **Automatic**: Devices auto-check and upgrade periodically
- **Silent OTA**: Server pushes urgent updates without broadcasting notification tones

**Example**: When pushing firmware updates in bulk to deployed smart speakers—whether to fix bugs or introduce new features—OTA provides an efficient solution.

## Device Binding

Process of associating a device with a user account to grant remote control permissions via APP.

**Binding Methods:**
- QR code scanning
- Device ID input
- Bluetooth
- And more

## Thing Model

A digital data model describing "what a device is, what it can do, and what it can notify." It standardizes device-cloud data interaction.

**Three Subtypes:**

| Subtype | Description | Example |
|---------|-------------|---------|
| **Properties** | Device attributes (read/write) | Current temperature, operating mode |
| **Actions** | Device-executable commands | Set fan speed |
| **Events** | Device-initiated notifications | Filter replacement alert |

**Example**: A "Smart AC" thing model may include:
- Property: Current temperature (read/write), operating mode (read/write)
- Action: Set fan speed (device-executable command)
- Event: Filter replacement alert (device-initiated notification)

## Tuple

A device authentication and key management scheme. Unique credentials (ID + secret) are pre-burned into each device during production for bidirectional authentication with the IoT platform.

**DMP uses Tuple for this purpose**, generated after product creation. Each set contains unique identifiers and connection parameters for a device:

| Field | Description | Burning Recommendation |
|-------|-------------|----------------------|
| productId (PID) | Unique product model ID | Recommended to burn |
| deviceUuid | Unique device ID | Must be burned |
| deviceSecret | Device secret | Must be burned |
| qrCode | Short URL for QR code labeling | For user scanning |
| ngwDomain | Cloud platform entry address | Shared across DMP |
| deviceCode | Simplified logical ID | Rarely used |

## Device Network Provisioning

Configuring a device's network settings (e.g., Wi-Fi SSID/password) to enable internet access and cloud communication.

**Methods:** Bluetooth, device hotspot, etc.
