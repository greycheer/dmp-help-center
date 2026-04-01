---
sidebar_position: 2
---

# Agreement and Push Configuration

## Agreement Configuration

User Agreement and Privacy Policy are configured in the same way, but managed on separate pages.

### Create Agreement Version

1. Click **Add Version**
2. Enter the agreement version number
3. Click **Confirm**

**Note:** Once added, an agreement version cannot be deleted. Only versions with a higher number than the currently active one can take effect. Please enter carefully.

### Edit Version Content

1. Select the language to be added
2. Edit the title and content
3. Click **Save**
4. Without closing the dialog, select the next language and repeat the above steps
5. After all languages for the current version are completed and saved, close the dialog

### Enable Agreement

1. Click **Enable** on the page to make the agreement effective
2. There may be a delay of up to 30 minutes for changes to take effect

**Important:** Before enabling, the agreement content can be reviewed and edited again. Once enabled, the agreement will be locked and cannot be modified.

## Push Certificate Configuration

Android and iOS push certificate configuration is completed by the App owner by filling in the required information on the page and submitting it.

### Android Push Configuration

**Initial Configuration:**
- The `google-services.json` file must be provided to the App developers to update the App package
- The configuration takes effect after the App is updated
- Certificates are generally long-term and do not require regular renewal (subject to Google policies)

**Subsequent Updates:**
- If the Firebase push project under the Google account changes, the App must be updated and the push certificate reconfigured

### iOS Push Configuration

- The push certificate takes effect immediately after configuration
- The certificate is valid for **one year** and must be renewed before expiration

### Configuration Steps

1. Select the platform (Android/iOS)
2. Upload or paste the required certificate information
3. Click **Save** to apply

## Next Steps

- Learn about [Network Provisioning](network-provisioning)
- Configure [Cloud Storage Plans](cloud-storage)
