---
sidebar_position: 2
---

# Batch Import

## Applicable Scenarios

Use the batch import function when you need to import a large number of devices at once.

## Operation Steps

### Step 1: Download Template

1. Go to **Device Management** → **Batch Import**
2. Click **Download Template**
3. Get the CSV/Excel template file

### Step 2: Fill in Device Information

Template field descriptions:

| Field | Required | Description |
|-------|----------|-------------|
| sn | Yes | Device serial number, unique identifier |
| name | No | Device name, defaults to SN |
| mac | No | MAC address |
| imei | No | IMEI number (cellular devices) |
| remarks | No | Device remarks |

**Example Data:**
```csv
sn,name,mac,remarks
CAM20240001,Living Room Camera,A4:DA:32:12:34:56,Sample device
CAM20240002,Door Camera,A4:DA:32:12:34:57,
```

### Step 3: Upload File

1. Click **Select File**
2. Choose the completed template file
3. Click **Start Import**

### Step 4: View Import Results

The system will display import results:
- ✅ Success: Number of successfully imported devices
- ⚠️ Duplicate: Device SNs that already exist
- ❌ Failed: Format errors or invalid data

## Import Rules

- Maximum 10,000 entries per batch
- File size not exceeding 5MB
- SNs cannot be duplicated; duplicates will be skipped

## Post-Import Operations

After successful import, devices are in "Inactive" status. You need to burn the corresponding device certificates into the devices. Devices will automatically activate when they connect to the platform.
