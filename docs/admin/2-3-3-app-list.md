---
sidebar_position: 12
sidebar_label: 2.3.3 App List
---


#### 2.3.3 APP List Configuration

**Navigation Path:** `[APP] – [APP Management] – [Publishing Configuration]` / `[APP] – [Publishing Configuration]`

**Entry 1:** On the [APP] – [APP Management] page, click **Publishing Configuration** for the selected App.


**Entry 2:** On the [APP] – [Publishing Configuration] page, select the App from the dropdown menu at the top.


##### 2.3.3.1 Agreement Configuration

(User Agreement and Privacy Policy are configured in the same way, but managed on separate pages.)

**a. Create a version:**
Click **Add Version**

![Add Version](/img/docs/admin-agreement-01.png)

, enter the agreement version number, and click **Confirm**.

**Note:** Once added, an agreement version cannot be deleted. Only versions with a higher number than the currently active one can take effect. Please enter carefully.


**b. Edit version content:**
Select the language to be added, edit the title and content, and click **Save**.
Without closing the dialog, select the next language

![Edit Agreement Content](/img/docs/admin-agreement-02.png)

 and repeat the above steps. After all languages for the current version are completed and saved, close the dialog.


**c. Enable the agreement:**
Click **Enable** on the page to make the agreement effective

![Enable Agreement](/img/docs/admin-agreement-03.png)

 (there may be a delay of up to 30 minutes).
Before enabling, the agreement content can be reviewed and edited again. Once enabled, the agreement will be locked and cannot be modified.


##### 2.3.3.2 Push Certificate Configuration

Android and iOS push certificate configuration is completed

![Push Certificate Android](/img/docs/admin-push-cert-01.png)

![Push Certificate iOS](/img/docs/admin-push-cert-02.png)

 by the App owner by filling in the required information on the page and submitting it.

The push certificate effectiveness mechanism differ between Android and iOS and require special attention.

**Android:**
- Initial configuration: The `google-services.json` file must be provided to the App developers to update the App package. The configuration takes effect after the App is updated. Certificates are generally long-term and do not require regular renewal (subject to Google policies).
- Subsequent updates: If the Firebase push project under the Google account changes, the App must be updated and the push certificate reconfigured.

**iOS:**
- The push certificate takes effect immediately after configuration. The certificate is valid for one year and must be renewed before expiration.



