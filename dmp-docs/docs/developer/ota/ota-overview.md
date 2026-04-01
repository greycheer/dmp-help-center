---
sidebar_position: 1
---

# OTA Overview

## Overview

OTA (Over-The-Air) allows you to remotely update device firmware after deployment, fixing bugs or introducing new features efficiently.

## OTA Types

DMP supports three types of OTA upgrades:

| Type | Description | Use Case |
|------|-------------|----------|
| **APP Upgrade** | Users trigger upgrades via APP | User-controlled updates |
| **Automatic** | Devices auto-check and upgrade periodically | Routine maintenance |
| **Silent OTA** | Server pushes urgent updates without notification | Critical security patches |

## OTA Process

```
1. Upload Firmware → 2. Create Upgrade Task → 3. Grayscale Release → 4. Monitor → 5. Complete
```

### 1. Upload Firmware

- Upload new firmware version to platform
- Fill in version number and release notes
- Set upgrade strategy (optional)

### 2. Create Upgrade Task

- Select target devices (by product, group, or specific devices)
- Choose upgrade method (APP/Auto/Silent)
- Set upgrade schedule

### 3. Grayscale Release (Optional)

- Release to small batch first (e.g., 5% of devices)
- Monitor for issues
- Expand to full release if stable

### 4. Monitor Progress

- Track upgrade status in real-time
- View success/failure statistics
- Identify devices with issues

### 5. Complete or Rollback

- Confirm success after all devices upgraded
- Rollback to previous version if issues found

## Security Considerations

- Firmware must be signed by manufacturer
- Transmission uses encrypted channels
- Device verifies firmware integrity before installation
- Rollback capability for failed upgrades

## Next Steps

- Learn about [OTA Types](ota-types)
- Check [Implementation Guide](implementation)
