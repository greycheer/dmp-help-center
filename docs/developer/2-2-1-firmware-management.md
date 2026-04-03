---
sidebar_position: 2
sidebar_label: 2.2.1 Product Firmware Management
---

#### 2.2.1 Product Firmware Management

**Product Firmware Management** is used to manage OTA firmware for the product.

Developers can associate an existing firmware repository with the product.

Each product can be linked to **only one firmware repository**, and **only firmware versions maintained in that repository** can be used for OTA upgrades of the product.

**For creating a firmware repository, please refer to the Firmware Management section.**

After a firmware repository is bound to a product, click the **Firmware Upgrade** button to enter the **[Firmware Upgrade]** page.

Click **New Firmware Upgrade**, select a firmware version, and fill in the required upgrade information to create an upgrade task for the product.

Click **Verify** to enter the firmware upgrade task verification page.

**Due to the special nature of OTA functionality, developers must complete OTA verification before the upgrade task can be released to a large number of devices.**

Click **Add by Device ID**, add the device UUIDs to be verified, keep the devices online, and log in to the App bound to those devices. You will then receive OTA upgrade prompts on the devices. Confirm the upgrade and observe the OTA process. On the firmware upgrade task verification page, you can monitor the upgrade status of the devices and resend the upgrade task if necessary.

**In addition to verifying whether an OTA task has been executed successfully (i.e., whether the device's local firmware version has been updated to the specified version), developers are also required to fully validate the runtime behavior of the firmware on the device side.**
