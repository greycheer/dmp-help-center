---
sidebar_position: 2
sidebar_label: Developer Manual
---

# DMP Platform Manual for Developer

## Introduction

### 1.1 Purpose of the Manual

This manual is intended to provide developers using the DMP platform with a comprehensive and systematic operational guide. By reading this manual, developers can quickly understand the platform's core capabilities and complete the full development workflow, including product creation, product feature configuration, device interaction setup, hardware development, and device debugging.

### 1.2 Platform Overview

The DMP platform is a comprehensive platform serving hardware manufacturers with device management capabilities at its core. This manual highlights a series of capabilities for rapid hardware product access: supporting hardware products of different categories to connect via Wi-Fi, 4G, LAN, etc.; supporting custom configuration of product functions; supporting custom APP/large-screen interactive panels; and supporting flexible OTA and debugging capabilities.

### 1.3 Terminology Explanation

Before starting, understand the following core concepts:

| Term | Explanation |
|------|-------------|
| DMP | Device Management Platform - A comprehensive platform serving hardware manufacturers with device management capabilities at its core |
| Five-Tuple | The unique identity credentials for device connection including: productId (PID), deviceUuid, deviceSecret, qrCode, ngwDomain, and deviceCode |
| PID | Product ID - The unique identifier of the product model |
| OTA | Over-The-Air - Firmware upgrade capability |
| DP | Data Point - A single functional attribute of a device |
| Standard Function | Pre-defined common functions for product categories |
| Thing Model | The definition of device capabilities including properties, events, and actions |
| Properties | Describe the real-time operating status of a device (Bool, Value, String, Enum, Float, Double, Date, Raw) |
| Events | Describe specific events or alarms triggered by the device |
| Actions | Describe executable capabilities or methods of the device |
| Firmware Repository | Container for managing firmware versions |
| Firmware Upgrade Task | OTA task created for upgrading device firmware |
| Function Groups | Tree-structured configuration for App device settings |

### 1.4 Quick Guide to Access to DMP Platform

- DMP Platform Domain: Please contact the platform team.

**Account and Permission Application**

The DMP platform does not support self-service account creation. Please provide the below information to DMP Platform Admin to create an account:

**Company Info:**
- Company Name
- Company Address
- Company Contact Person
- Company Contact Details

**Personal Info:**
- Account Nickname — Fill in according to customer requirements (in some ODM environments, account nicknames cannot include Chinese characters or Pinyin).
- Verification Email — Used to receive verification codes. Note: In overseas ODM environments, domestic email domains (e.g., qq.com, 163.com, domestic corporate domains) are not allowed. Overseas domains such as Gmail are recommended.

---

## Product Development on DMP Platform

### 2.1 Product Development

Device development is a core process within product development. It allows developers to flexibly define product capabilities and manage product firmware.

Developers can navigate to **Product → Product Development**, click **Continue Development** for a specific product to enter the product details page, and then select the **Device Development** subpage to perform related configurations.

![Product Development](/img/docs/K4MSbqPaSoSTB4xzlI5cOyqgnld.png)

![Device Development](/img/docs/FBbabVv2to7Ct5xYIqqcjRJ4n4e.png)

#### 2.2.1 Product Firmware Management

**Product Firmware Management** is used to manage OTA firmware for the product.

Developers can associate an existing firmware repository with the product. Each product can be linked to **only one firmware repository**, and **only firmware versions maintained in that repository** can be used for OTA upgrades of the product.

![Firmware Repository](/img/docs/F9ogb7UoVoCAftx8FK6c0Vp5nDc.png)

**For creating a firmware repository, please refer to the Firmware Management section.**

After a firmware repository is bound to a product, click the **Firmware Upgrade** button to enter the **[Firmware Upgrade]** page.

![Firmware Upgrade](/img/docs/FPJebO4lcosC7bxwAg0cuwiYn8b.png)

Click **New Firmware Upgrade**, select a firmware version, and fill in the required upgrade information to create an upgrade task for the product.

![New Upgrade](/img/docs/X28SbyWl5oU6HxxvVDscvj32nph.png)

![Upgrade Form](/img/docs/DyLubI4hPoM8uuxD1Tkcce3intw.png)

Click **Verify** to enter the firmware upgrade task verification page.

![Verify Upgrade](/img/docs/Zm1fbCUuhoj8mnxcT5FcqSt3nG3.png)

**Due to the special nature of OTA functionality, developers must complete OTA verification before the upgrade task can be released to a large number of devices.**

Click **Add by Device ID**, add the device UUIDs to be verified, keep the devices online, and log in to the App bound to those devices. You will then receive OTA upgrade prompts on the devices. Confirm the upgrade and observe the OTA process. On the firmware upgrade task verification page, you can monitor the upgrade status of the devices and resend the upgrade task if necessary.

![Add Device ID](/img/docs/UQXabmeHZo0AiQxROfncr2HAnVg.png)

**In addition to verifying whether an OTA task has been executed successfully (i.e., whether the device's local firmware version has been updated to the specified version), developers are also required to fully validate the runtime behavior of the firmware on the device side.**

### 2.2 Device Interaction

Device Interaction is used to manage interaction capabilities during consumer usage via the App/Web, including:

- **Product Display** (device models and images)
- **Device Provisioning Configuration** (Configuration Introduction)
- **Device Setting Configuration** (Functional Grouping)

Developers can navigate to **Product → Product Development**, click **Continue Development** for a specific product to enter the product details page, and then select the **Device Interaction** subpage to perform configuration.

![Device Interaction](/img/docs/Brb5bx0lnoJl5lxJm0lcUk2ZnOc.png)

#### 2.2.1 Product Display

Configure the product icon, product name, and product model that are exposed to consumers on the App/Web side.

![Product Display](/img/docs/GBiabvLI7oqWulxc46icI627n0e.png)

#### 2.2.2 Functional Grouping

Functional Grouping are used to manage product settings on the App and CMS. Developers can flexibly configure tree-structured function groups to meet common configuration needs during consumer use.

**When a product is created, the DMP platform initializes default function groups based on the product category. Developers can modify these defaults as needed.**

Click **New Primary Group** to create a highest-level group. Click groups in the tree to create sub-items (i.e., lower-level groups).
Each group supports editing of multilingual group names and descriptions.

![New Primary Group](/img/docs/B9rsbywCpoLOpCx7uUKcgdownXg.png)

![Edit Group](/img/docs/PbYgbBr4Eop583xn7uJcsoIXnPg.png)

For categories **whose type is Group**, the selectable functions must be consistent with the functions selected under **Device Development → Product Functions**.

![Select Functions](/img/docs/T32fbfo3HosgDSxGW6fcu3RPnyh.png)

![Function List](/img/docs/YNIpbzeSVoVGVIx975YciYG6nFf.png)

**Groups whose type is Group Name do not support function configuration. They exist as system placeholders to maintain the tree structure and only allow name modification and adding sub-items.**

For configured function items, developers can further adjust their display style and multilingual names/descriptions.

![Display Style](/img/docs/LNgVbFc15oUAU3xGwfncOdumn0d.png)

Available display styles: **Smart Control**, **Read-Only Display**, **Custom Display**.

The **Custom Display** mode is not yet available to developers and should not be selected. Multilingual names/descriptions control how the function is displayed and described on the App/CMS side.

The App-side display effect generated by function group configuration is shown as follows.

![App Display 1](/img/docs/K6UjboKX2oDdKrxf2G1cQIJ0nBV.png)

![App Display 2](/img/docs/I06ZbIif6og7XqxtBqZcsJGLn3g.png)

### 2.3 Firmware Management

Firmware Management is used to maintain firmware information for all developer products. The platform provides a clear two-level structure—Firmware Repository → Firmware Package → Firmware Upgrade Task—to manage firmware effectively.

Developers can navigate to **Product → Firmware Management** to perform configuration.

![Firmware Management](/img/docs/Ern1bueTMoBy2jxdPvgcoxeFnNd.png)

Click **New Firmware** and fill in the required information to create a new firmware repository.

![New Firmware](/img/docs/HrUzbkVwgoioNUxmsx6cymAcnNh.png)

**Firmware upgrade timeout** defines the OTA waiting time. If the timeout is exceeded, the upgrade is considered failed. This value can be adjusted based on firmware package size and user experience.

Click a **Firmware Key** in the firmware list to enter the firmware details page.

![Firmware Details](/img/docs/PWFybQ4Y2oboz2xsbQbcVIF6n2g.png)

Click **New Firmware Version**, fill in the required information, upload the firmware package, and save to complete firmware version creation.

After creation, you must click **Release** to put the firmware version into a released state before it can be used to configure OTA upgrade tasks.

![New Version](/img/docs/DuBXbAaFxoS42HxFAcXcixaNnGf.png)

![Release Version](/img/docs/NOg6bNRAaojliGxS4c8cOfgnnVc.png)

**Firmware versions must be created strictly in version order. Even if an OTA task is delivered to a device, the device will only upgrade to a firmware version that is higher than its current local version.**

**For how to enable upgrades using maintained firmware versions, please refer to the <Product Firmware Management> section.**

---

## Appendix

### 3.1 FAQ

**Frequently Asked Questions**

**Q: I cannot find a suitable product category when creating a product under development.**

— Please contact the platform team for assistance.

**Q: I cannot receive the email verification code when logging in.**

— Some Chinese email providers may not receive verification emails reliably. Please try using an international email service such as Gmail.

**Q: I cannot find appropriate product functions on the platform to match my hardware capabilities.**

— Please prepare a detailed description of the required functions and contact the platform team to have them added.

**Q: The debugging device cannot connect to the platform.**

— Please ensure the device meets the platform access requirements and that authentication information such as the five-tuple has been correctly configured.

**Q: Which provisioning Configurations should I configure during product development?**

This depends on the network connectivity method of your product. We recommend the following:

**Wi-Fi Products:**
- Configure two Configuration: Bluetooth and Wi-Fi Configuration

Priority:
- Bluetooth add as the primary binding method
- Wi-Fi configuration as a fallback option

**4G Products:**
- Configure four Configuration: Bluetooth, Scan the Device Body Code, Device Code Scanning and ID Addition

Priority:
- Bluetooth add as the primary binding method
- Scan the device body code as the secondary option
- ID addition and device code scanning as fallback options

**LAN Products:**
- Configure three Configuration: Scan the Device Body Code, LAN Scanning and ID Addition

Priority:
- Scan the device body code as the primary binding method
- LAN scanning and ID addition as fallback options

**Q: Why are some functions displayed in the App configuration page even though they are not set in Function Groups?**

— Function Groups only control the configurable settings section in the App. Other sections such as product basic information, device reboot, device sharing, and device information are built-in App features.

**Q: Why can't some functions configured in Function Groups be controlled in the App?**

— Currently, the platform only supports App-side control of **Bool** and **Enum** type attribute functions. Other function types are display-only and show the latest device-reported values. Support for additional types will be gradually introduced in future versions.

**Q: Why can't I select a certain firmware version when creating a firmware upgrade task?**

— Please check whether the firmware version has already been associated with a previous upgrade task. The system strictly enforces that each firmware version can only be used once for an upgrade within a single product.

**Q: I have completed OTA verification for a firmware upgrade task. How can I perform a batch OTA upgrade?**

— Batch OTA functionality is not yet available to developers. Please contact the platform team and provide the created firmware upgrade task so that the platform team can assist with the operation.

### 3.2 History

| Version | Date | Updates |
|---------|------|---------|
| 1.0.0 | 2024-01-01 | Initial release of DMP Platform Developer Manual |
| 1.1.0 | 2024-04-10 | Added FAQ section |
| 1.2.0 | 2024-08-15 | Updated firmware management documentation |
| 1.3.0 | 2025-01-01 | Major platform update with new UI and features |
