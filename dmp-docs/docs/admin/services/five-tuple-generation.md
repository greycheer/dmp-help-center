---
sidebar_position: 3
---

# Five-Tuple Generation

## Section Overview

After creating a product, you can generate a **five-tuple** in the product details page. Each five-tuple represents the unique identity of a device and contains the essential information required for the device to connect and communicate with the platform.

## Five-Tuple Elements

| Element | Description | Burning Recommendation |
|---------|-------------|----------------------|
| **productId (PID)** | The unique identifier of the product model. Devices under the same PID share the same function definitions (data model) and default product configuration. | Recommended to burn |
| **deviceUuid** | The unique identifier of the device, used to bind the device to an account or ID. | Must be burned |
| **deviceSecret** | The device secret key, required for authentication. | Must be burned |
| **qrCode** | A short device link used to generate a QR code, which is printed on a label for users to scan and add the device. | For user scanning |
| **ngwDomain** | The entry address for the device to connect to the cloud platform (Northbound Gateway). All devices within the same DMP environment share the same value. | Shared across DMP |
| **deviceCode** | A unique device identifier used at the business layer. It serves as a simplified logical identifier that implicitly maps to the other five parameters. | Used less frequently |

## Operation Manual

**Navigation Path:** [Products] → [Product Development] → [Continue Development] → [Mass Production] → [Generate Authorization Code]

### Generate Five-Tuples

1. Click **Continue Development** for the target product
2. Click the sub-tab **[Mass Production]**
3. Select **Generate Authorization Code**
4. Enter the number of authorization codes to be produced
5. Add batch remarks
6. Click **Confirm**
7. Wait for the five-tuples to be generated

### Export Five-Tuples

1. Click **Export Authorization Code**
2. Download the generated five-tuple file (usually CSV or Excel format)
3. Provide the file to the factory for device burning

## Factory Burning

During device production, the factory should:

1. Burn **deviceUuid**, **deviceSecret**, and optionally **productId** into device secure storage
2. Print QR code labels using the **qrCode** field
3. Verify credentials are correctly burned during quality check

## Security Best Practices

- Store deviceSecret in secure hardware (e.g., secure element, TPM) when possible
- Keep the exported five-tuple file secure
- Do not transmit five-tuples over unsecured channels
- Maintain proper access controls for five-tuple files

## Next Steps

- Learn about [Device Registration](../device-mgmt/device-registration)
- Understand [OTA Upgrades](../device-mgmt/ota-upgrades)
