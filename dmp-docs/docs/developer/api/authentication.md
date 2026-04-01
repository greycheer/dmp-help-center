---
sidebar_position: 2
---

# Authentication

## Overview

DMP API uses **Bearer Token** authentication. Obtain a token through user login, then include it in all API requests.

## Obtaining Token

### User Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": 7200,
    "tokenType": "Bearer"
  }
}
```

## Using Token

Include the token in the Authorization header:

```http
GET /api/v1/devices
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

## Token Refresh

When the access token expires, use the refresh token to get a new one:

```http
POST /api/v1/auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

## API Key Authentication (Device)

For device-to-cloud communication, use API key authentication:

```http
POST /api/v1/device/connect
X-API-Key: your_api_key
X-Device-Id: device_uuid
```

## Security Best Practices

1. **Store tokens securely** - Use secure storage mechanisms
2. **Refresh before expiry** - Implement proactive token refresh
3. **Handle 401 errors** - Retry with refreshed token
4. **Use HTTPS only** - Never send tokens over HTTP

## Next Steps

- Explore [Device APIs](device-apis)
- Check [User APIs](user-apis)
