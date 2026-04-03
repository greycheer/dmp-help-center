---
sidebar_position: 13
sidebar_label: 2.3.4 Network Provisioning
---


#### 2.3.4 Network Provisioning and Front-End Category Management

##### 2.3.4.1 Section Overview

After creating a hardware product, its network provisioning method must be configured in the management console. Once configured, the product can be discovered in the App, provisioned to the network, added to a user account, and used normally.

There are three network provisioning entry methods:

1. **Provisioning Home – Bluetooth Provisioning:**
   When the device is reset and powered on, and Bluetooth is enabled

![Bluetooth Provisioning](/img/docs/admin-provisioning-01.png)

 on the App, the device can be detected in the Bluetooth device area of the provisioning page (as shown below).


2. **Provisioning Home – Scan Device QR Code

![Scan QR Code](/img/docs/admin-provisioning-02.png)

:** Tap the scan icon in the top-right corner of the provisioning page to scan the device QR code for provisioning.


3. **Provisioning Home – Select Device Model

![Select Device Model](/img/docs/admin-provisioning-03.png)

:** Select the device model from the list to start provisioning.


Among these, Bluetooth direct provisioning does not require configuration in the DMP Management Console.

The latter two methods require configuring the provisioning guide in the DMP console (as shown below). The following section explains how to configure the second and third methods.


##### 2.3.4.2 Operation Manual

**Provisioning Home – Scan Device QR Code**

**Navigation Path:** `[Products] – [Product Development] – [Continue Development] – [Device Interaction] – [Configuration Instruction]`

Ensure the product is currently in the **"In Development"** status. If the product is in **"Pre-release"** or **"Released"** status, you must first withdraw the release before editing the provisioning wizard.


b. Configure and enable the wizard under "Device Interaction – Wizard Configuration" on the product details page.

**Note:** PNG and GIF formats are supported. Each provisioning method configured requires clicking **Save** once.

c. After configuration, the product must be moved to **Pre-release** status for the settings to take effect.

**Provisioning Home – Select Device Model**

**Navigation:** `[Products] – [Category Management] – [Frontend Categories]`

Frontend categories correspond to the product list displayed on the App provisioning page. Level 1 categories are display-only and do not take effect.

Level 2 categorie act as product list tabs.

The App supports up to four levels of categories, allowing leaf categories to be displayed at either the third or fourth level.

**Notes:**
- With the current design, configuring frontend categories for a product is equivalent to exposing the product model and images to App users. Please configure carefully.
- Some frontend categories are pre-created at platform delivery based on existing product integrations. If you need to modify built-in configurations, it is recommended to consult the technical support team first.

Create a leaf category for the product

To display a product in the App, you must first create a corresponding **leaf category** based on the product definition.
In general, there is no need to create a new top-level category

![Create Frontend Category](/img/docs/admin-frontend-category-01.png)

; required categories can be created by clicking **Add Sub Item**.


After creating the corresponding frontend category, configure the provisioning wizard according to the product definition.

Please note that the leaf category name must exactly match

![Configure Provisioning](/img/docs/admin-frontend-category-02.png)

 the product model name.
Changes made here take effect immediately and **do not** require withdrawing the product release.


