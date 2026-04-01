---
sidebar_position: 4
---

# User APIs

## User Management

### Get User Profile

```http
GET /api/v1/user/profile
Authorization: Bearer {token}
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "userId": "user-xxxx",
    "nickname": "Developer",
    "email": "user@example.com",
    "company": "Example Inc.",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

### Update Profile

```http
PUT /api/v1/user/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "nickname": "New Name",
  "company": "New Company"
}
```

## Team Management

### Get Team Members

```http
GET /api/v1/team/members
Authorization: Bearer {token}
```

### Invite Member

```http
POST /api/v1/team/invite
Authorization: Bearer {token}
Content-Type: application/json

{
  "email": "newmember@example.com",
  "role": "developer"
}
```

### Roles

| Role | Permissions |
|------|-------------|
| `admin` | Full access |
| `developer` | Product development, device management |
| `viewer` | Read-only access |

## Permission Management

### Get User Permissions

```http
GET /api/v1/user/permissions
Authorization: Bearer {token}
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "role": "developer",
    "permissions": [
      "product:read",
      "product:write",
      "device:read",
      "device:write"
    ]
  }
}
```

## Next Steps

- Explore [Device APIs](device-apis)
- Learn about [OTA Implementation](../ota/implementation)
