---
sidebar_position: 3
---

# Device Binding

## Overview

**Device Binding** is the process of associating a device with a user account to grant remote control permissions via APP.

## Binding Methods

| Method | Description | Use Case |
|--------|-------------|----------|
| **QR Code Scanning** | Scan device QR code | Fast, user-friendly |
| **Device ID Input** | Manually enter device ID | QR code damaged |
| **Bluetooth Discovery** | Auto-discover nearby devices | BLE-enabled devices |
| **AP Mode** | Connect to device AP | Initial setup |

## QR Code Binding

### Process

1. **User opens APP** - Navigate to "Add Device"
2. **Select QR code method** - Camera opens
3. **Scan device QR code** - qrCode field from Tuple
4. **APP queries device info** - Validates device exists
5. **Send binding request** - Cloud associates device with user
6. **Binding success** - Device appears in user device list

### QR Code Content

The qrCode field in Tuple is a short URL:
```
https://dmp.example.com/d/xxxxx
```

When scanned, it redirects to device binding page with device info.

## Manual ID Input

### Process

1. **User selects manual input**
2. **Enter deviceUuid** - Printed on device label
3. **APP validates device** - Checks device exists and unbound
4. **Confirm binding** - User confirms ownership
5. **Binding complete**

## Bluetooth Discovery

### Process

1. **APP scans for nearby devices** - Via BLE
2. **List discovered devices** - Show device names
3. **User selects device**
4. **APP reads device info** - Via BLE GATT
5. **Execute binding**

## API Integration

### Binding Request

```http
POST /api/v1/device/bind
Content-Type: application/json
Authorization: Bearer {token}

{
  "deviceUuid": "uuid-xxxx-xxxx",
  "productId": "pid-xxxx"
}
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "deviceId": "dev-xxxx",
    "bindStatus": "bound",
    "bindTime": "2024-01-01T00:00:00Z"
  }
}
```

## Unbinding

Users can unbind devices:
- Via APP: Device settings → Remove device
- Via API: Send unbind request

## Next Steps

- Explore [API Reference](../api/overview)
- Learn about [OTA Implementation](../ota/implementation)
