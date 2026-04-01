---
sidebar_position: 3
---

# Create Project

## What is a Project?

A **Project** is the basic unit for device management in DMP. A project typically corresponds to:
- A product model
- A customer/brand
- A business scenario

## Creation Steps

### Step 1: Navigate to Project Management

After logging into the console, click the left menu **Project Management** → **Create Project**.

### Step 2: Fill in Project Information

| Field | Description | Example |
|-------|-------------|---------|
| Project Name | Recognizable name | Smart Camera A1 |
| Project Code | Unique identifier | camera_a1_2024 |
| Device Type | Select device category | Camera |
| Estimated Quantity | Planned number of devices | 10000 |
| Description | Project description (optional) | Indoor home camera |

### Step 3: Configure Access Method

Select connection protocol based on device capabilities:

- **MQTT**: Recommended for most IoT devices
- **HTTP**: Suitable for devices with low reporting frequency
- **CoAP**: Suitable for resource-constrained devices

### Step 4: Obtain Access Credentials

After successful creation, the system will generate:

```yaml
Product Key (ProductKey): a1b2c3d4e5f6
Product Secret (ProductSecret): xxxxxxxxxxxxxxxx
```

**⚠️ Important**: Please keep the ProductSecret secure and do not hardcode it in device firmware.

## Project Overview

After successful creation, you can:

- 📊 View device statistics overview
- ➕ Add devices to the project
- ⚙️ Configure project-level parameters
- 👥 Invite team members

## Next Steps

After project creation, proceed to [Device Registration](../device-mgmt/device-registration) to learn how to connect your first device.
