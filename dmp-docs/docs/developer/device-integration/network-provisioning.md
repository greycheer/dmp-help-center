---
sidebar_position: 2
---

# Network Provisioning

## Overview

**Device Network Provisioning** configures a device's network settings (e.g., Wi-Fi SSID/password) to enable internet access and cloud communication.

## Supported Methods

| Method | Description | Best For |
|--------|-------------|----------|
| **Bluetooth** | Use BLE to transmit Wi-Fi credentials | Battery-powered devices |
| **Device Hotspot** | Device creates AP, APP connects and sends credentials | Devices without BLE |
| **QR Code** | Scan QR code containing network info | Simple setup scenarios |
| **Sound Wave** | Transmit data via audio frequencies | Special scenarios |

## Bluetooth Provisioning

### Process

1. **Device enters pairing mode** - LED blinks rapidly
2. **APP scans for devices** - Lists nearby devices
3. **User selects device** - APP connects via BLE
4. **Send Wi-Fi credentials** - SSID and password transmitted
5. **Device connects to Wi-Fi** - Confirms connection status

### Protocol Flow

```
APP → Device: Scan request
Device → APP: Advertisement data
APP → Device: Connect
APP → Device: Wi-Fi credentials (encrypted)
Device → Cloud: Authenticate
Device → APP: Connection success
```

## Device Hotspot Provisioning

### Process

1. **Device creates AP** - e.g., "DMP-Config-XXXX"
2. **APP connects to AP** - User switches Wi-Fi manually
3. **APP sends credentials** - Via HTTP to device
4. **Device switches to target Wi-Fi** - AP mode stops
5. **APP reconnects to normal Wi-Fi** - Checks device online status

## QR Code Provisioning

### Process

1. **Generate QR code** - Encode SSID/password in QR format
2. **Device scans QR code** - Using built-in camera
3. **Parse and connect** - Device extracts credentials

## Implementation Tips

- Implement timeout and retry mechanisms
- Provide clear user feedback (LED, voice)
- Support multiple provisioning attempts
- Handle credential encryption properly

## Next Steps

- Learn about [Device Binding](device-binding)
- Explore [API Reference](../api/overview)
