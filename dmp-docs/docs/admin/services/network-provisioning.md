---
sidebar_position: 3
---

# Network Provisioning Configuration

## Section Overview

After creating a hardware product, its network provisioning method must be configured in the management console. Once configured, the product can be discovered in the App, provisioned to the network, added to a user account, and used normally.

## Network Provisioning Entry Methods

There are three network provisioning entry methods:

### 1. Bluetooth Direct Provisioning

When the device is reset and powered on, and Bluetooth is enabled on the App, the device can be detected in the Bluetooth device area of the provisioning page.

**Note:** This method does **not** require configuration in the DMP Management Console.

### 2. Scan Device QR Code

Tap the scan icon in the top-right corner of the provisioning page to scan the device QR code for provisioning.

### 3. Select Device Model

Select the device model from the list to start provisioning.

## Configure QR Code Provisioning

**Navigation Path:** [Products] → [Product Development] → [Continue Development] → [Device Interaction] → [Configuration Instruction]

### Prerequisites

- Ensure the product is currently in the **"In Development"** status
- If the product is in **"Pre-release"** or **"Released"** status, you must first withdraw the release before editing

### Configuration Steps

1. Configure and enable the wizard under **Device Interaction → Wizard Configuration**
2. Upload provisioning guide images (PNG and GIF formats supported)
3. Each provisioning method configured requires clicking **Save** once
4. After configuration, the product must be moved to **Pre-release** status for the settings to take effect

### Provisioning Guide Content

The provisioning guide should include:
- Device reset instructions
- Network provisioning steps
- Troubleshooting tips

## Configure Device Model Selection

**Navigation Path:** [Products] → [Category Management] → [Frontend Categories]

### Create Leaf Category

1. Create a leaf category for the product
2. The leaf category name must **exactly match** the product model name
3. Configure the provisioning wizard according to the product definition

**Note:** Changes made here take effect immediately and do not require withdrawing the product release.

## Next Steps

- Learn about [Cloud Storage Plan Configuration](cloud-storage)
- Understand [Knowledge Base Configuration](../troubleshooting/knowledge-base)
