---
sidebar_position: 99
---

# Developer FAQ

## Product Development

### Q: I cannot find a suitable product category when creating a product under development.

**A:** Please contact the platform team for assistance. They can add new categories based on your requirements.

---

### Q: I cannot receive the email verification code when logging in.

**A:** Some Chinese email providers may not receive verification emails reliably. Please try using an international email service such as Gmail.

---

### Q: I cannot find appropriate product functions on the platform to match my hardware capabilities.

**A:** Please prepare a detailed description of the required functions and contact the platform team to have them added to the standard function library.

---

### Q: The debugging device cannot connect to the platform.

**A:** Please ensure:
1. The device meets the platform access requirements
2. Authentication information (five-tuple) has been correctly configured
3. Network connectivity is working
4. Device time is synchronized

---

## Device Interaction

### Q: Which provisioning configurations should I configure during product development?

**A:** This depends on the network connectivity method of your product:

#### Wi-Fi Products
Configure two provisioning methods:
- **Bluetooth** (primary binding method)
- **Wi-Fi Configuration** (fallback option)

#### 4G Products
Configure four provisioning methods:
- **Bluetooth** (primary binding method)
- **Scan the Device Body Code** (secondary option)
- **ID Addition** (fallback option)
- **Device Code Scanning** (fallback option)

#### LAN Products
Configure three provisioning methods:
- **Scan the Device Body Code** (primary binding method)
- **LAN Scanning** (fallback option)
- **ID Addition** (fallback option)

---

### Q: Why are some functions displayed in the App configuration page even though they are not set in Function Groups?

**A:** Function Groups only control the configurable settings section in the App. Other sections such as:
- Product basic information
- Device reboot
- Device sharing
- Device information

These are built-in App features and are always displayed.

---

### Q: Why can't some functions configured in Function Groups be controlled in the App?

**A:** Currently, the platform only supports App-side control of **Bool** and **Enum** type attribute functions. Other function types are display-only and show the latest device-reported values. Support for additional types will be gradually introduced in future versions.

---

## Firmware and OTA

### Q: Why can't I select a certain firmware version when creating a firmware upgrade task?

**A:** Please check whether the firmware version has already been associated with a previous upgrade task. The system strictly enforces that each firmware version can only be used once for an upgrade within a single product.

---

### Q: I have completed OTA verification for a firmware upgrade task. How can I perform a batch OTA upgrade?

**A:** Batch OTA functionality is not yet available to developers through the console. Please contact the platform team and provide the created firmware upgrade task so that the platform team can assist with the operation.

---

## Still Need Help?

If your question is not answered here:
1. Check the [Knowledge Base](../../admin/troubleshooting/knowledge-base)
2. Contact the platform support team
3. Refer to the [API Reference](../api/overview)
