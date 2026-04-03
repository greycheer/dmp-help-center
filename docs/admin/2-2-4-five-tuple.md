---
sidebar_position: 8
sidebar_label: 2.2.4 Five-Tuple Generation
---

#### 2.2.4 Five-Tuple Generation

##### 2.2.4.1 Section Overview

After creating a product, you can generate a **five-tuple** in the product details page. Each five-tuple represents the unique identity of a device and contains the essential information required for the device to connect and communicate with the platform. The elements are explained as follows:

- **productId (PID):** The unique identifier of the product model. Devices under the same PID share the same function definitions (data model) and default product configuration. It is recommended to burn this value into the device.
- **deviceUuid:** The unique identifier of the device, used to bind the device to an account or ID. This value must be burned into the device.
- **deviceSecret:** The device secret key, required for authentication. This value must be burned into the device.
- **qrCode:** A short device link used to generate a QR code, which is printed on a label for users to scan and add the device.
- **ngwDomain:** The entry address for the device to connect to the cloud platform (Northbound Gateway). All devices within the same DMP environment share the same value.
- **deviceCode:** A unique device identifier used at the business layer. It serves as a simplified logical identifier that implicitly maps to the other five parameters (used less frequently).

##### 2.2.4.2 Operation Manual

**Navigation Path:** `[Products] – [Product Development]`

Click **Continue Development** for a specific product to enter the product details page.

Click the sub-tab [Mass Production] and select the **Generate Authorization Code**.

Enter the number of authorization codes to be produced and the batch remarks, then click **Confirm**.

Wait for the five-tuples to be generated.

Click **Export Authorization Code** to download the generated five-tuple file.
