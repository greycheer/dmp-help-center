---
sidebar_position: 1
---

# API Overview

## Overview

DMP provides a comprehensive RESTful API suite for device management, user management, and data access.

## API Base URL

```
https://{ngwDomain}/api/v1
```

Contact the platform team for the specific domain.

## Authentication

All API requests require authentication. See [Authentication](authentication) for details.

## Common Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | Yes | Bearer token |
| `Content-Type` | Yes | `application/json` |
| `X-Request-ID` | No | Unique request ID for tracing |

## Response Format

All responses follow this structure:

```json
{
  "code": 200,
  "message": "success",
  "data": { },
  "requestId": "req-xxx"
}
```

### Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

## API Categories

| Category | Description | Documentation |
|----------|-------------|---------------|
| **User APIs** | User management, authentication | [User APIs](user-apis) |
| **Device APIs** | Device registration, control, status | [Device APIs](device-apis) |
| **OTA APIs** | Firmware management, upgrades | See [OTA Implementation](../ota/implementation) |

## Rate Limiting

- Default: 1000 requests/hour per API key
- Burst: 100 requests/minute

## SDK Support

Official SDKs available for:
- Java
- Python
- Node.js
- Go

## Next Steps

- Learn about [Authentication](authentication)
- Explore [Device APIs](device-apis)
- Check [User APIs](user-apis)
