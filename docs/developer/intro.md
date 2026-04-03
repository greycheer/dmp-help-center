---
sidebar_position: 1
sidebar_label: 1. Introduction
---

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
