---
sidebar_position: 1
sidebar_label: 1. Introduction
---

## Introduction

### 1.1 Purpose of the Manual

This manual is intended for platform owners and senior administrators of the DMP device management platform, providing overall guidance on platform operation, management, and configuration. The content focuses on core functions such as user management based on roles and permissions, product category and standard thing model management, authorization code (device quintuple) generation, and device debugging and status management.

Simultaneously, the manual covers APP configuration management and value-added service package management to support efficient platform operation and continuous expansion of IoT business.

### 1.2 Platform Overview

The DMP platform is a comprehensive platform serving hardware manufacturers with device management capabilities at its core. This manual highlights a series of capabilities for rapid hardware product access: supporting hardware products of different categories to connect via Wi-Fi, 4G, LAN, etc.; supporting custom configuration of product functions; supporting custom APP/large-screen interactive panels; and supporting flexible OTA and debugging capabilities.

### 1.3 Terminology Explanation

Before starting, understand the following core concepts:

| Term | Explanation |
|------|-------------|
| DMP | Device Management Platform - A comprehensive platform serving hardware manufacturers with device management capabilities at its core |
| Five-Tuple | The unique identity credentials for device connection including: productId (PID), deviceUuid, deviceSecret, qrCode, ngwDomain, and deviceCode |
| PID | Product ID - The unique identifier of the product model |
| APP | Application - The mobile application for end users to manage devices |
| OTA | Over-The-Air - Firmware upgrade capability |
| DP | Data Point - A single functional attribute of a device, also known as Thing Model function |
| Standard Function | Pre-defined common functions for product categories, acting as a ready-to-use "standard library" |
| Thing Model | The definition of device capabilities including properties, events, and actions |
| Properties | Describe the real-time operating status of a device (Bool, Value, String, Enum, Float, Double, Date, Raw) |
| Events | Describe specific events or alarms actively triggered by the device and reported to the platform |
| Actions | Describe executable capabilities or methods of the device, issued by the platform |
| Leaf Category | The lowest level category where products can be assigned (cannot have subcategories) |
| Value-added Service | Additional paid services like cloud storage |

### 1.4 Quick Guide

If you find the content of this manual extensive and are unsure where to start, please follow the guidance below:

- If you are a platform operations administrator and need to manage platform accounts and assign permissions for different roles:
  → Please refer to **2.1: Platform Account and Role Management**

- If you need to manage product categories and standard functions, or generate device credentials (Five-Tuple) for production:
  → Please refer to **2.2: Product Development Management**

- If you need to create or manage Apps:
  → Please refer to **2.3.1: Create App**
  → Please refer to **2.3.2: App List Configuration**
  → Please refer to **2.3.3: Network Provisioning and Front-End Category Management**

- If you need to manage App FAQs, handle after-sales operations, or manage App-related customer interactions:
  → Please refer to **2.4: Customer Relationship Management**

- If you need to understand how to create products, configure firmware upgrades, or set up device settings menus:
  → Please contact the platform liaison and request the DMP Platform Developer Guide
