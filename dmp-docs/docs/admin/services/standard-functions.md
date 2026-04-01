---
sidebar_position: 2
---

# Standard Function Management

## Section Overview

**Standard Functions** are a set of common, pre-defined functions provided by the platform for different product categories. They act as a ready-to-use **standard library**, built in advance based on typical industry experience.

This helps products complete functional configuration quickly and ensures that these functions are natively supported by the APP at delivery time.

**Important:** When configuring a product, functions can only be selected from the standard function library; creating additional custom functions is not supported. Selected functions allow limited parameter adjustments as needed (such as value ranges, default values, etc.).

**Best Practice:** We strongly recommend prioritizing the direct use of standard functions and adapting to customization needs by adding new functions rather than modifying existing ones.

⚠️ **Warning:** Modifying existing standard functions may cause related settings in the APP to become invalid or behave unexpectedly. Please fully evaluate the impact or confirm with technical support before making changes.

## Function Types

Standard functions describe the capability scope of a device and can be categorized into:

### 1. Properties

Describe the real-time operating status of a device. Properties can be reported by the device to the platform or set by the platform.

| Data Type | Description |
|-----------|-------------|
| **Bool** | Binary values representing true or false |
| **Value** | Integer values that support arithmetic operations |
| **String** | Non-numeric text data, does not support arithmetic operations |
| **Enum** | A user-defined set of finite values |
| **Float** | Single-precision decimal values |
| **Double** | Higher-precision decimal values |
| **Date** | UTC timestamp in string format |
| **Raw** | Raw binary data or custom byte streams |

### 2. Events

Describe specific events or alarms actively triggered by the device and reported to the platform.

### 3. Actions

Describe executable capabilities or methods of the device. These are issued by the platform, and the device returns the execution result.

## Function Classification

Product functions are divided into two types:

| Type | Description | Can Remove |
|------|-------------|------------|
| **Mandatory Functions** | Common functions that all products under the same category must support | ❌ No (but some details can be edited) |
| **Optional Functions** | Special functions supported only by certain products within a category | ✅ Yes |

## Operation Manual

**Navigation Path:** [Products] → [Standard Functions]

### Create Function

1. Click **Create Function**
2. Fill in the function-related information:
   - Function name
   - Function type (Property/Event/Action)
   - Data type (for Properties)
   - Input/Output parameters (for Actions/Events)
3. Click **Save** to create

**Note:** Standard functions with DP IDs starting with "1" are defined by SDK developers. Other departments must not modify these functions.

### Associate with Products

Once a standard function is created, it can be added to products.

- Click **Associated Products** to view which products currently include this standard function
- Functions can be added to products during product development

### Edit Restrictions

If a standard function has already been added to one or more products:
- Some attributes and parameters become **non-editable**
- To modify them, the function must first be unbound from all associated products

## Next Steps

- Learn about [Product Development](../product-dev/product-creation)
- Understand [Five-Tuple Generation](five-tuple-generation)
