---
sidebar_position: 3
---

# OTA Upgrades

## Overview

OTA (Over-The-Air) allows you to remotely update device firmware after deployment, fixing bugs or introducing new features efficiently.

## OTA Capabilities

DMP provides comprehensive OTA capabilities:

| Feature | Description |
|---------|-------------|
| **APP Upgrade** | Users trigger upgrades via APP |
| **Automatic** | Devices auto-check and upgrade periodically |
| **Silent OTA** | Server pushes urgent updates without notification tones |

## Supported Methods

### Manual Upgrade
- Users trigger upgrades via APP
- Suitable for user-controlled updates

### Automatic Upgrade
- Devices auto-check and upgrade periodically
- Suitable for routine maintenance updates

### Silent OTA
- Server pushes urgent updates without broadcasting notification tones
- Suitable for critical security patches

## Upgrade Process

1. **Upload Firmware** - Upload new firmware version to platform
2. **Create Upgrade Task** - Select target devices and upgrade strategy
3. **Grayscale Release** (Optional) - Release to small batch first
4. **Monitor Progress** - Track upgrade status in real-time
5. **Complete/Rollback** - Confirm success or rollback if issues occur

## Best Practices

- Always test firmware in small batches before full release
- Schedule upgrades during low-traffic periods
- Provide clear user notifications for non-silent upgrades
- Monitor device status during and after upgrades

## Next Steps

For developer implementation details, see [OTA Overview](../../developer/ota/ota-overview).
