---
sidebar_position: 2
---

# OTA Types

## APP Upgrade

Users trigger upgrades manually via the mobile APP.

### Process

1. User opens APP and navigates to device settings
2. APP checks for available firmware updates
3. User selects "Upgrade" if update available
4. Device downloads and installs firmware
5. Device restarts with new firmware

### Advantages

- User has full control
- Suitable for major feature updates
- Allows user to schedule upgrade timing

### Implementation

```http
GET /api/v1/devices/{deviceId}/ota/check
Authorization: Bearer {token}
```

Response:
```json
{
  "code": 200,
  "data": {
    "hasUpdate": true,
    "version": "v1.2.0",
    "releaseNotes": "Bug fixes and performance improvements"
  }
}
```

## Automatic Upgrade

Devices automatically check for and install updates on a schedule.

### Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| Check Interval | How often to check for updates | 24 hours |
| Install Window | Time window for installation | 02:00-05:00 |
| Retry Limit | Max retry attempts on failure | 3 |

### Process

1. Device wakes up at scheduled time
2. Checks for available updates
3. Downloads firmware in background
4. Installs and restarts automatically

### Advantages

- Zero user intervention
- Ensures devices stay up-to-date
- Ideal for routine maintenance

## Silent OTA

Server pushes urgent updates without user notification.

### Use Cases

- Critical security patches
- Bug fixes requiring immediate deployment
- Compliance updates

### Process

1. Platform marks firmware as "silent"
2. Server pushes update to devices
3. Device installs immediately or at next wake
4. No notification tone or user prompt

### Advantages

- Fastest deployment
- No user disruption
- Ensures critical updates applied

### Important Notes

- Use sparingly to maintain user trust
- Clearly document in release notes
- Provide opt-out option for users if possible

## Comparison

| Feature | APP Upgrade | Automatic | Silent OTA |
|---------|-------------|-----------|------------|
| User Control | High | Medium | Low |
| Deployment Speed | Slow | Medium | Fast |
| User Notification | Yes | Optional | No |
| Best For | Feature updates | Routine maintenance | Critical fixes |

## Next Steps

- Check [Implementation Guide](implementation)
