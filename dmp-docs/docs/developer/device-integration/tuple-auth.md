---
sidebar_position: 1
---

# Tuple Authentication

## Overview

**Tuple** is a device authentication and key management scheme. Unique credentials (ID + secret) are pre-burned into each device during production for bidirectional authentication with the IoT platform.

## Tuple Components

Each Tuple set contains the following fields:

| Field | Description | Burning Requirement |
|-------|-------------|---------------------|
| **productId (PID)** | Unique product model ID | Recommended to burn |
| **deviceUuid** | Unique device identifier | Must be burned |
| **deviceSecret** | Device secret key | Must be burned |
| **qrCode** | Short URL for QR code labeling | For user scanning |
| **ngwDomain** | Cloud platform entry address | Shared across DMP |
| **deviceCode** | Simplified logical ID | Rarely used |

## Authentication Process

```
Device → Cloud
1. Device sends deviceUuid + productId
2. Cloud validates device identity
3. Device sends HMAC signature using deviceSecret
4. Cloud verifies signature
5. Connection established
```

## Burning Process

### Factory Burning

During device production:

1. **Generate Tuple Set** - Platform generates unique credentials for each device
2. **Burn to Device** - Factory burns credentials into device secure storage
3. **Label Device** - Print QR code label using qrCode field
4. **Quality Check** - Verify credentials are correctly burned

### Security Best Practices

- Store deviceSecret in secure hardware (e.g., secure element, TPM)
- Use encrypted communication channels
- Implement retry limits for failed authentication
- Rotate credentials periodically if supported

## Code Example

```c
// Device authentication example
typedef struct {
    char productId[32];
    char deviceUuid[64];
    char deviceSecret[64];
    char ngwDomain[128];
} Tuple;

// Build authentication request
void buildAuthRequest(Tuple *tuple, AuthRequest *req) {
    strcpy(req->deviceUuid, tuple->deviceUuid);
    strcpy(req->productId, tuple->productId);
    
    // Generate HMAC signature
    char payload[256];
    sprintf(payload, "%s%s%ld", tuple->deviceUuid, tuple->productId, time(NULL));
    hmac_sha256(payload, tuple->deviceSecret, req->signature);
}
```

## Next Steps

- Configure [Network Provisioning](network-provisioning)
- Implement [Device Binding](device-binding)
