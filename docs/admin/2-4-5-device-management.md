---
sidebar_position: 19
sidebar_label: 2.4.5 Device Management
---


#### 2.4.5 Device Management

##### 2.4.5.1 Unbind Device

**Navigation Path:** `[Product] – [Device Manage]`

The platform provides multiple methods for unbinding devices:

**When Unbinding a Small Number of Devices**

Enter the UUID(s) of the device(s) to be unbound

![Search Device](/img/docs/admin-device-01.png)

 (multiple UUIDs can be separated by commas " , "). Remove the restriction on the first activation time, then click **Search**.


Based on the search results, you can:
- **Unbind directly on the current page

![Unbind Directly](/img/docs/admin-device-02.png)

** (This function is only available when the device status is "Bound").


- Select and unbind specific devices on the current page.

![Select and Unbind](/img/docs/admin-device-03.png)




- View device details in the **[Device After Sales]** Page and then unbind.



**When Unbinding a Large Number of Devices**

On the **[Device Manage]** page, click **Batch Operations -> Device Unbinding**. (This method has no upper limit on the number of devices that can be processed.)


**First method for entering device UUIDs:

![Enter UUIDs Directly](/img/docs/admin-device-07.png)

** Enter the UUIDs directly into the text box, separated by line breaks.


**Second method for entering device UUIDs:

![Upload File](/img/docs/admin-device-08.png)

** Download the import template, fill in the UUIDs of the devices to be processed, and then upload the file.


(Template Preview)

![Template Preview](/img/docs/admin-device-09.png)




Click **Confirm** to unbind the devices.

---

## Appendix

### 3.1 History

| Version | Date | Updates |
|---------|------|---------|
| 1.0.0 | 2024-01-01 | Initial release of DMP Platform Admin Manual |
| 1.1.0 | 2024-03-15 | Added cloud storage configuration section (2.3.5) |
| 1.2.0 | 2024-06-20 | Updated device management features (2.4.5) |
| 1.3.0 | 2024-09-10 | Added push management documentation (2.4.3) |
| 1.4.0 | 2025-01-01 | Major platform update with new UI and features |
