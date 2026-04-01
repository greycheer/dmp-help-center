---
sidebar_position: 5
---

# Firmware Repository Management

## Overview

**Firmware Management** is used to maintain firmware information for all developer products. The platform provides a clear structure to manage firmware effectively:

```
Firmware Repository → Firmware Package → Firmware Upgrade Task
```

**Navigation Path:** [Product] → [Firmware Management]

## Creating Firmware Repository

### Step 1: Create New Repository

1. Click **New Firmware**
2. Fill in the required information:
   - **Firmware Name**: Descriptive name for the firmware
   - **Firmware Key**: Unique identifier
   - **Chip Platform**: Target hardware platform
   - **Upgrade Timeout**: OTA waiting time (can be adjusted based on firmware size)

**Note:** Firmware upgrade timeout defines the OTA waiting time. If the timeout is exceeded, the upgrade is considered failed.

### Step 2: Configure Repository

After creation, the firmware repository appears in the list. Click the **Firmware Key** to enter the firmware details page.

## Managing Firmware Versions

### Creating New Version

1. Click **New Firmware Version**
2. Fill in version information:
   - **Version Number**: Semantic versioning (e.g., 1.2.3)
   - **Release Notes**: Description of changes
   - **Firmware Package**: Upload the binary file
3. Click **Save**

### Releasing Firmware

After creation, you **must** click **Release** to put the firmware version into a released state before it can be used for OTA upgrade tasks.

**Important Rules:**
- Firmware versions must be created strictly in version order
- Devices will only upgrade to a firmware version that is **higher** than their current local version
- Each firmware version can only be used once for an upgrade within a single product

### Version Status

| Status | Description | Usable for OTA |
|--------|-------------|----------------|
| **Draft** | Newly created, not released | ❌ No |
| **Released** | Available for use | ✅ Yes |
| **Deprecated** | No longer recommended | ⚠️ Limited |

## Firmware Upgrade Tasks

For how to enable upgrades using maintained firmware versions, please refer to [Product Firmware Management](firmware-mgmt).

## Best Practices

1. **Version Numbering**: Use semantic versioning (MAJOR.MINOR.PATCH)
   - MAJOR: Incompatible changes
   - MINOR: New features (backward compatible)
   - PATCH: Bug fixes

2. **Release Notes**: Always include clear release notes
   - What changed
   - Why it changed
   - Any breaking changes

3. **Testing**: Test firmware thoroughly before release
   - Internal testing first
   - Small beta group
   - Gradual rollout

4. **Backup**: Maintain ability to rollback
   - Keep previous versions available
   - Test rollback procedure

## Next Steps

- Learn about [OTA Types](../ota/ota-types)
- Review [OTA Implementation](../ota/implementation)
