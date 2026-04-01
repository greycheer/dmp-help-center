---
sidebar_position: 2
---

# Product Firmware Management

## Overview

**Product Firmware Management** is used to manage OTA firmware for the product. Developers can associate an existing firmware repository with the product.

**Key Rules:**
- Each product can be linked to **only one** firmware repository
- Only firmware versions maintained in that repository can be used for OTA upgrades

## Accessing Firmware Management

**Navigation Path:** [Product] → [Product Development] → [Device Development] → [Firmware Management]

## Binding Firmware Repository

1. After creating a firmware repository (see [Firmware Management](../firmware-mgmt)), click **Bind Repository**
2. Select the firmware repository from the list
3. Confirm binding

## Creating Firmware Upgrade Tasks

After a firmware repository is bound to a product:

1. Click the **Firmware Upgrade** button
2. Click **New Firmware Upgrade**
3. Select a firmware version
4. Fill in the required upgrade information:
   - Upgrade type (APP/Auto/Silent)
   - Target devices
   - Schedule settings
5. Create the upgrade task

## OTA Verification

⚠️ **Important:** Due to the special nature of OTA functionality, developers must complete OTA verification before the upgrade task can be released to a large number of devices.

### Verification Steps

1. Click **Verify** to enter the firmware upgrade task verification page
2. Click **Add by Device ID**
3. Add the device UUIDs to be verified
4. Keep the devices online
5. Log in to the App bound to those devices
6. Receive OTA upgrade prompts on the devices
7. Confirm the upgrade and observe the OTA process
8. Monitor the upgrade status on the verification page

### Verification Requirements

In addition to verifying whether an OTA task has been executed successfully (i.e., whether the device's local firmware version has been updated to the specified version), developers are also required to **fully validate the runtime behavior** of the firmware on the device side.

## Batch OTA

⚠️ **Note:** Batch OTA functionality is not yet available to developers through the console. Please contact the platform team and provide the created firmware upgrade task so that the platform team can assist with the operation.

## Next Steps

- Learn about [Device Interaction Configuration](device-interaction)
- Review [OTA Types and Implementation](../ota/ota-types)
