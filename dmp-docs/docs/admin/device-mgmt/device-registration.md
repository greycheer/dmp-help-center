---
sidebar_position: 1
---

# Device Registration

## Registration Methods

DMP supports three device registration methods:

### Method 1: Per-Device Secret (Recommended)

Each device has independent device certificates with the highest security.

**Applicable Scenarios:**
- High security requirements
- Controllable device quantities (< 100,000 units)

**Process:**
1. Go to Console → **Device Management** → **Add Device**
2. Enter device SN (Serial Number)
3. System generates DeviceSecret
4. Burn DeviceSecret into the device

### Method 2: Per-Product Secret

Same product model shares product certificates; devices register dynamically.

**Applicable Scenarios:**
- Mass production
- Automated production line burning

**Process:**
1. Use ProductKey + ProductSecret
2. Device dynamically obtains DeviceSecret on first connection
3. Subsequent connections use DeviceKey + DeviceSecret

### Method 3: No Pre-registration

Device automatically registers when first connecting to the platform.

**Applicable Scenarios:**
- Rapid prototype verification
- Test environments

**⚠️ Note**: Not recommended for production environments

## Device Activation

Device is considered activated upon first successful connection to the platform.

### Activation Status

| Status | Description |
|--------|-------------|
| Inactive | Device has never connected to the platform |
| Online | Device is currently connected |
| Offline | Device was activated but is currently disconnected |
| Disabled | Device has been disabled by administrator |

### Check Activation Status

1. Go to **Device Management** page
2. Check the "Status" column in the device list
3. Click on device to view details

## Common Questions

**Q: What if device activation fails?**

Please check:
- Is the device certificate correct?
- Is the network connection normal?
- Is the device time synchronized?

**Q: How to batch import devices?**

Refer to [Batch Import](batch-import) documentation.
