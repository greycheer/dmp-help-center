---
sidebar_position: 3
---

# Device APIs

## Device Registration

### Register Device

```http
POST /api/v1/devices/register
Authorization: Bearer {token}
Content-Type: application/json

{
  "productId": "a1b2c3d4e5f6",
  "deviceUuid": "uuid-xxxx-xxxx",
  "deviceSecret": "secret-xxxx"
}
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "deviceId": "dev-xxxx",
    "status": "inactive",
    "productId": "a1b2c3d4e5f6"
  }
}
```

## Device Query

### Get Device List

```http
GET /api/v1/devices?page=1&size=20
Authorization: Bearer {token}
```

### Get Device Detail

```http
GET /api/v1/devices/{deviceId}
Authorization: Bearer {token}
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "deviceId": "dev-xxxx",
    "deviceUuid": "uuid-xxxx",
    "productId": "a1b2c3d4e5f6",
    "name": "Living Room Camera",
    "status": "online",
    "lastOnlineTime": "2024-01-01T00:00:00Z",
    "properties": {
      "PowerSwitch": true,
      "Brightness": 80
    }
  }
}
```

## Device Control

### Set Property

```http
POST /api/v1/devices/{deviceId}/properties
Authorization: Bearer {token}
Content-Type: application/json

{
  "PowerSwitch": true,
  "Brightness": 80
}
```

### Call Action

```http
POST /api/v1/devices/{deviceId}/actions/{actionId}
Authorization: Bearer {token}
Content-Type: application/json

{
  "speed": 3
}
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "result": "success",
    "executionTime": 120
  }
}
```

## Device Status

| Status | Description |
|--------|-------------|
| `inactive` | Never connected |
| `online` | Currently connected |
| `offline` | Disconnected |
| `disabled` | Disabled by admin |

## Next Steps

- Check [User APIs](user-apis)
- Learn about [OTA Implementation](../ota/implementation)
