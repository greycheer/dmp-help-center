---
sidebar_position: 6
sidebar_label: 2.2.2 Standard Functions
---


#### 2.2.2 Standard Function Management

##### 2.2.2.1 Section Overview

"Standard Functions" are a set of common, pre-defined functions provided by the platform for different product categories. They act as a ready-to-use "standard library," built in advance based on typical industry experience. This helps products complete functional configuration quickly and ensures that these functions are natively supported by the APP at delivery time.

When configuring a product, functions can only be selected from the standard function library; creating additional custom functions is not supported. Selected functions allow limited parameter adjustments as needed (such as value ranges, default values, etc.).

We strongly recommend prioritizing the direct use of standard functions and adapting to customization needs by **adding new functions rather than modifying existing ones**. This approach is considered best practice for maintaining compatibility and efficiency. The standard function library will continue to be updated with future platform releases.

**Note:** Modifying the existed standard functions may cause related settings in the APP to become invalid or behave unexpectedly. Please fully evaluate the impact or confirm with technical support before making changes.

##### 2.2.2.2 Operation Manual

Standard functions describe the capability scope of a device and can be categorized into **Properties**, **Events**, and **Actions**:

**Properties:**
- Describe the real-time operating status of a device. Properties can be reported by the device to the platform or set by the platform. This is the most common function type and can be further classified by data type:
  - **Boolean (Bool):** Binary values representing true or false
  - **Numeric (Value):** Integer values that support arithmetic operations
  - **String:** Non-numeric text data, does not support arithmetic operations
  - **Enum:** A user-defined set of finite values
  - **Float:** Single-precision decimal values
  - **Double:** Higher-precision decimal values
  - **Date:** UTC timestamp in string format; the system processes it as a UTC timestamp by default
  - **Raw:** Raw binary data or custom byte streams

**Events:**
- Describe specific events or alarms actively triggered by the device and reported to the platform.

**Actions:**
- Describe executable capabilities or methods of the device. These are issued by the platform, and the device returns the execution result.

To reduce the learning curve for developers, the DMP platform has preloaded a standardized function list for each product category based on industry standards. Product functions are divided into two types:

- **Mandatory Functions:** Common functions that all products under the same category must support. These cannot be removed, but some details can be edited.

- **Optional Functions:** Special functions supported only by certain products within a category. Developers can choose to add or remove these based on the actual hardware capabilities, and some details can also be edited.

**Navigation Path:** `[Products] – [Standard Functions]`

Click **Create Function**

![Create Function](/img/docs/admin-standard-function-01.png)




After filling in the function-related information, the function can be created successfully.

- Standard functions with **DP IDs starting with "1"** are defined by SDK developers. Other departments must not modify these functions.
- Once a standard function is created, it can be added to products.
- If a standard function has already been added to one or more products, some attributes and parameters become non-editable. To modify them, the function must first be unbound from all associated products.
- By clicking **Associated Products**

![Associated Products](/img/docs/admin-standard-function-02.png)

, you can view which products currently include this standard function.


