---
sidebar_position: 3
---

# OTA Implementation

## Device-Side Implementation

### 1. Check for Updates

```c
void checkForUpdates() {
    // Build OTA check request
    OtaCheckRequest req = {
        .deviceUuid = DEVICE_UUID,
        .currentVersion = CURRENT_FIRMWARE_VERSION,
        .productId = PRODUCT_ID
    };
    
    // Send to cloud
    sendOtaCheckRequest(&req);
}
```

### 2. Download Firmware

```c
void onOtaCheckResponse(OtaCheckResponse *resp) {
    if (resp->hasUpdate) {
        // Start download
        startFirmwareDownload(
            resp->firmwareUrl,
            resp->firmwareSize,
            resp->checksum
        );
    }
}
```

### 3. Verify and Install

```c
void onDownloadComplete(uint8_t *firmware, size_t size) {
    // Verify checksum
    if (verifyChecksum(firmware, size, expectedChecksum)) {
        // Write to flash
        writeFirmwareToFlash(firmware, size);
        
        // Reboot
        systemReboot();
    } else {
        // Report failure
        reportOtaFailure("Checksum mismatch");
    }
}
```

## API Implementation

### Trigger OTA Upgrade

```http
POST /api/v1/ota/upgrade
Authorization: Bearer {token}
Content-Type: application/json

{
  "deviceIds": ["dev-001", "dev-002"],
  "firmwareVersion": "v1.2.0",
  "upgradeType": "silent",
  "scheduleTime": "2024-01-01T02:00:00Z"
}
```

### Query Upgrade Status

```http
GET /api/v1/ota/tasks/{taskId}/status
Authorization: Bearer {token}
```

Response:
```json
{
  "code": 200,
  "data": {
    "taskId": "task-xxxx",
    "status": "in_progress",
    "totalDevices": 100,
    "upgradedDevices": 45,
    "failedDevices": 2,
    "progress": 45
  }
}
```

## Firmware Download Protocol

### HTTPS Download

```c
// Initialize HTTPS connection
https_client_t *client = https_client_init();
https_client_set_url(client, firmware_url);

// Download with progress callback
https_client_download(client, on_download_progress);

// Progress callback
void on_download_progress(size_t downloaded, size_t total) {
    int percent = (downloaded * 100) / total;
    printf("Download progress: %d%%\n", percent);
}
```

## Rollback Mechanism

### Dual-Bank Strategy

```
Bank A: Current Firmware (Active)
Bank B: New Firmware (Download Target)
```

1. Download new firmware to Bank B
2. Verify checksum
3. Mark Bank B as boot target
4. Reboot
5. If boot fails, revert to Bank A

### Rollback API

```http
POST /api/v1/ota/rollback
Authorization: Bearer {token}
Content-Type: application/json

{
  "deviceIds": ["dev-001", "dev-002"],
  "targetVersion": "v1.1.0"
}
```

## Best Practices

1. **Dual-bank flash** - Always maintain rollback capability
2. **Checksum verification** - Verify firmware integrity
3. **Resume download** - Support partial download resume
4. **Progress reporting** - Keep users informed
5. **Failure handling** - Clear error messages and retry logic

## Next Steps

- Review [Device APIs](../api/device-apis)
- Check API reference for complete endpoint list
