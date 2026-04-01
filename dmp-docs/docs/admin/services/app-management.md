---
sidebar_position: 1
---

# APP Management

## Section Overview

Through the DMP Management Console, you can centrally manage the integration between Apps and devices, as well as key App-side configurations (such as protocol access information, knowledge base configuration, and value-added service configuration).

Therefore, the first step is to create and maintain an App entity in the management console, which serves as the foundation for all subsequent configuration and management activities.

## Create APP

### Preparations

Before creating a new App, please prepare the following information:

| Information | Description |
|-------------|-------------|
| **App name** | Display name of the app |
| **App logo image** | PNG format, under 500 KB |
| **Android package name** | Provided by the App development team |
| **iOS bundle ID** | Provided by the App development team |

### Operation Steps

**Navigation Path:** [APP] → [APP Management]

1. Click **Add APP**

![Add APP Page](/img/admin/add-app-page.png)

2. Fill in the prepared information in the pop-up window

![Fill APP Info](/img/admin/fill-app-info.png)

3. Click **Confirm**

After creating the APP, an **APP Bound** will be generated automatically. Please provide this to the APP developer for APP packing.

![APP Bundle Info](/img/admin/app-bundle-info.png)

## APP Configuration

**Navigation Path:** [APP] → [APP Configuration]

### Configuration Items

Enter the page and click **Modify** to configure:

![APP Config Modify](/img/admin/app-config-modify.png)

| Setting | Description | Options |
|---------|-------------|---------|
| **Google Home support** | Whether to enable Google Home integration | Yes / No |
| **Alexa support** | Whether to enable Alexa integration | Yes / No |
| **Cloud storage marketplace** | Whether to enable cloud storage marketplace | Yes / No |
| **Value-added service order prefix** | Two-letter alphabetic prefix for order identification | e.g., "VS" |
| **App download URL** | Download link for the app | Provided by App owner |
| **Feedback service URL** | Customer feedback page | Provided by HTML team |
| **Cloud marketplace service URL** | Cloud storage marketplace page | Provided by HTML team |
| **Application agreement service URL** | User agreement page | Provided by HTML team |

## APP List Configuration

**Navigation Path:** [APP] → [APP Management] → [Publishing Configuration]

or

**Navigation Path:** [APP] → [Publishing Configuration]

### Entry Methods

- **Entry 1:** On the [APP Management] page, click **Publishing Configuration** for the selected App
- **Entry 2:** On the [Publishing Configuration] page, select the App from the dropdown menu at the top

## Next Steps

- Configure [Agreement and Privacy Policy](agreement-config)
- Set up [Push Certificates](push-certificates)
- Learn about [Network Provisioning](network-provisioning)
