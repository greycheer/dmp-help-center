const fs = require('fs');
const path = require('path');

// Read the current admin index.md
let adminContent = fs.readFileSync(path.join(__dirname, 'docs', 'admin', 'index.md'), 'utf8');

// Add images after specific sections
const imageMappings = [
  // 2.1.3 Create a New Account
  { pattern: /Enter the account information, select the assigned role\(s\).*?\n\n\*\*Note:\*\*/s, image: '![Add Account](/img/docs/admin-account-management-01.png)', insertAfter: true },
  
  // 2.1.4 Managing Role Permissions  
  { pattern: /Enter the role configuration page and click \*\*New Role\*\*\./, image: '\n![New Role](/img/docs/admin-role-management-01.png)\n', insertAfter: true },
  { pattern: /Enter the role name, then select the corresponding pages and functions based on the role definition\./, image: '\n![Role Permissions](/img/docs/admin-role-management-02.png)\n', insertAfter: true },
  
  // 2.2.1 Category Creation
  { pattern: /When creating or editing product information, you can select the category to which the product belongs/, image: '\n![Category Selection](/img/docs/admin-category-management-01.png)\n', insertAfter: true },
  { pattern: /On the \*\*Backend Categories\*\* page, select \*\*New Sub Item\*\* or \*\*Add A First Level Category\*\*/, image: '\n![Backend Categories](/img/docs/admin-category-management-02.png)\n', insertAfter: true },
  { pattern: /Categories can also be \*\*edited\*\* or \*\*deleted\*\* from this page\./, image: '\n![Edit Category](/img/docs/admin-category-management-03.png)\n', insertAfter: true },
  
  // 2.2.2 Standard Function
  { pattern: /Click \*\*Create Function\*\*/, image: '\n![Create Function](/img/docs/admin-standard-function-01.png)\n', insertAfter: true },
  { pattern: /By clicking \*\*Associated Products\*\*/, image: '\n![Associated Products](/img/docs/admin-standard-function-02.png)\n', insertAfter: true },
  
  // 2.2.4 Five-Tuple
  { pattern: /Click \*\*Continue Development\*\*/, image: '\n![Continue Development](/img/docs/admin-five-tuple-01.png)\n', insertAfter: true },
  { pattern: /Click the sub-tab \[Mass Production\] and select the.*?Generate Authorization Code/, image: '\n![Generate Authorization Code](/img/docs/admin-five-tuple-02.png)\n', insertAfter: true },
  { pattern: /Enter the number of authorization codes to be produced/, image: '\n![Enter Quantity](/img/docs/admin-five-tuple-03.png)\n', insertAfter: true },
  { pattern: /Wait for the five-tuples to be generated\./, image: '\n![Generating](/img/docs/admin-five-tuple-04.png)\n', insertAfter: true },
  { pattern: /Click \*\*Export Authorization Code\*\* to download/, image: '\n![Export](/img/docs/admin-five-tuple-05.png)\n', insertAfter: true },
  
  // 2.3.1 Create App
  { pattern: /Click \*\*Add APP\*\*/, image: '\n![Add APP](/img/docs/admin-create-app-01.png)\n', insertAfter: true },
  { pattern: /Fill in the prepared information from step-1 accordingly/, image: '\n![Fill APP Info](/img/docs/admin-create-app-02.png)\n', insertAfter: true },
  { pattern: /After creating the APP, an APP Bound for the APP will be generated automatically/, image: '\n![APP Bound](/img/docs/admin-create-app-03.png)\n', insertAfter: true },
  
  // 2.3.2 APP Configuration
  { pattern: /Enter the page and click\*\* Modify\*\*/, image: '\n![Modify APP Config](/img/docs/admin-app-config-01.png)\n', insertAfter: true },
  
  // 2.3.3 App List Configuration
  { pattern: /Entry 1: On the \[APP\] – \[APP Management\] page, click/, image: '\n![Publishing Configuration Entry 1](/img/docs/admin-app-list-01.png)\n', insertAfter: true },
  { pattern: /Entry 2: On the \[APP\] – \[Publishing Configuration\] page/, image: '\n![Publishing Configuration Entry 2](/img/docs/admin-app-list-02.png)\n', insertAfter: true },
  
  // 2.3.3.1 Agreement Configuration
  { pattern: /Click \*\*Add Version\*\*/, image: '\n![Add Version](/img/docs/admin-agreement-01.png)\n', insertAfter: true },
  { pattern: /Without closing the dialog, select the next language/, image: '\n![Edit Agreement Content](/img/docs/admin-agreement-02.png)\n', insertAfter: true },
  { pattern: /Click \*\*Enable\*\* on the page to make the agreement effective/, image: '\n![Enable Agreement](/img/docs/admin-agreement-03.png)\n', insertAfter: true },
  
  // 2.3.3.2 Push Certificate
  { pattern: /Android and iOS push certificate configuration is completed/, image: '\n![Push Certificate Android](/img/docs/admin-push-cert-01.png)\n\n![Push Certificate iOS](/img/docs/admin-push-cert-02.png)\n', insertAfter: true },
  
  // 2.3.4 Provisioning
  { pattern: /When the device is reset and powered on, and Bluetooth is enabled/, image: '\n![Bluetooth Provisioning](/img/docs/admin-provisioning-01.png)\n', insertAfter: true },
  { pattern: /Provisioning Home – Scan Device QR Code/, image: '\n![Scan QR Code](/img/docs/admin-provisioning-02.png)\n', insertAfter: true },
  { pattern: /Provisioning Home – Select Device Model/, image: '\n![Select Device Model](/img/docs/admin-provisioning-03.png)\n', insertAfter: true },
  { pattern: /Configure the provisioning guide in the DMP console/, image: '\n![Provisioning Guide](/img/docs/admin-provisioning-04.png)\n\n![Provisioning Guide 2](/img/docs/admin-provisioning-05.png)\n', insertAfter: true },
  
  // 2.3.4 Frontend Category
  { pattern: /In general, there is no need to create a new top-level category/, image: '\n![Create Frontend Category](/img/docs/admin-frontend-category-01.png)\n', insertAfter: true },
  { pattern: /Please note that the leaf category name must exactly match/, image: '\n![Configure Provisioning](/img/docs/admin-frontend-category-02.png)\n', insertAfter: true },
  
  // 2.3.5 Cloud Storage
  { pattern: /The DMP Management Console supports configuring and publishing cloud storage plans/, image: '\n![Cloud Storage Example](/img/docs/admin-cloud-storage-01.png)\n', insertAfter: true },
  { pattern: /Navigation Path: \[Marketing\] – \[Value-added Services\] – \[Cloud Storage Templates\]/, image: '\n![Cloud Storage Templates](/img/docs/admin-cloud-storage-02.png)\n', insertAfter: true },
  { pattern: /Create and manage templates in \[Cloud Storage Templates\]/, image: '\n![Create Template](/img/docs/admin-cloud-storage-03.png)\n', insertAfter: true },
  { pattern: /Navigation: \[Marketing\] – \[Value-added Services\] – \[Mall Management\] – \[Commodity Management\]/, image: '\n![Commodity Management](/img/docs/admin-cloud-storage-04.png)\n', insertAfter: true },
  { pattern: /Navigation: \[Marketing\] – \[Value-added Services\] – \[Mall Management\] – \[Commodity Grouping\]/, image: '\n![Commodity Grouping](/img/docs/admin-cloud-storage-05.png)\n\n![Create Product Group](/img/docs/admin-cloud-storage-06.png)\n\n![Associate Products](/img/docs/admin-cloud-storage-07.png)\n', insertAfter: true },
  { pattern: /Navigation Path:\[Marketing\] – \[Value-added Services\] – \[Mall Management\] – \[Product Shelves\]/, image: '\n![Product Shelves](/img/docs/admin-cloud-storage-08.png)\n', insertAfter: true },
  
  // 2.4.1 Knowledge Base
  { pattern: /App Knowledge Base Entry:/, image: '\n![App Knowledge Base Entry](/img/docs/admin-knowledge-base-01.png)\n\n![App Knowledge Base Entry 2](/img/docs/admin-knowledge-base-02.png)\n', insertAfter: true },
  { pattern: /Device Knowledge Base Entry:/, image: '\n![Device Knowledge Base Entry](/img/docs/admin-knowledge-base-03.png)\n\n![Device Knowledge Base Entry 2](/img/docs/admin-knowledge-base-04.png)\n\n![Device Knowledge Base Entry 3](/img/docs/admin-knowledge-base-05.png)\n', insertAfter: true },
  { pattern: /Click \*\*\[Create Knowledge Base\]\*\* to create a new knowledge base/, image: '\n![Create Knowledge Base](/img/docs/admin-knowledge-base-06.png)\n\n![Select APP and Language](/img/docs/admin-knowledge-base-07.png)\n', insertAfter: true },
  { pattern: /Then click \*\*\[Add First-level Category\]\*\* to create a top-level category/, image: '\n![Add First-level Category](/img/docs/admin-knowledge-base-08.png)\n\n![Enter Category Name](/img/docs/admin-knowledge-base-09.png)\n', insertAfter: true },
  { pattern: /After creating a first-level category, you can either/, image: '\n![Create Subcategory](/img/docs/admin-knowledge-base-10.png)\n\n![Add Knowledge Article](/img/docs/admin-knowledge-base-11.png)\n', insertAfter: true },
  { pattern: /After adding knowledge articles, they can be managed via the operation column:/, image: '\n![Manage Knowledge Articles](/img/docs/admin-knowledge-base-12.png)\n\n![Sort Articles](/img/docs/admin-knowledge-base-13.png)\n', insertAfter: true },
  
  // 2.4.2 After-sales
  { pattern: /#### 2\.4\.2 After-sales Management/, image: '\n![After-sales Management](/img/docs/admin-after-sales-01.png)\n', insertAfter: true },
  
  // 2.4.3 Push Management
  { pattern: /- Create Push Notifications/, image: '\n![Create Push Notification](/img/docs/admin-push-01.png)\n\n![Create Push 2](/img/docs/admin-push-02.png)\n\n![Create Push 3](/img/docs/admin-push-03.png)\n\n![Create Push 4](/img/docs/admin-push-04.png)\n', insertAfter: true },
  { pattern: /- Push Review/, image: '\n![Push Review](/img/docs/admin-push-05.png)\n', insertAfter: true },
  { pattern: /- Target Audience Management/, image: '\n![Target Audience](/img/docs/admin-audience-01.png)\n', insertAfter: true },
  { pattern: /- Create Audience/, image: '\n![Create Audience](/img/docs/admin-audience-02.png)\n', insertAfter: true },
  { pattern: /- Edit Audience/, image: '\n![Edit Audience](/img/docs/admin-audience-03.png)\n', insertAfter: true },
  
  // 2.4.4 Cloud Storage Order
  { pattern: /#### 2\.4\.4 Cloud Storage Order Management/, image: '\n![Cloud Order Management](/img/docs/admin-cloud-order-01.png)\n', insertAfter: true },
  { pattern: /In the corresponding order row, click the \*\*\[Unsubscribe\]\*\* button/, image: '\n![Unsubscribe](/img/docs/admin-cloud-order-02.png)\n\n![Refund Method](/img/docs/admin-cloud-order-03.png)\n', insertAfter: true },
  
  // 2.4.5 Device Management
  { pattern: /Enter the UUID\(s\) of the device\(s\) to be unbound/, image: '\n![Search Device](/img/docs/admin-device-01.png)\n', insertAfter: true },
  { pattern: /Unbind directly on the current page/, image: '\n![Unbind Directly](/img/docs/admin-device-02.png)\n', insertAfter: true },
  { pattern: /Select and unbind specific devices on the current page\./, image: '\n![Select and Unbind](/img/docs/admin-device-03.png)\n', insertAfter: true },
  { pattern: /View device details in the\*\* \[Device After Sales\]\*\* Page/, image: '\n![Device After Sales](/img/docs/admin-device-04.png)\n\n![Unbind from Details](/img/docs/admin-device-05.png)\n', insertAfter: true },
  { pattern: /On the \*\*\[Device Manage\]\*\*  page, click \*\*Batch Operations/, image: '\n![Batch Operations](/img/docs/admin-device-06.png)\n', insertAfter: true },
  { pattern: /First method for entering device UUIDs:/, image: '\n![Enter UUIDs Directly](/img/docs/admin-device-07.png)\n', insertAfter: true },
  { pattern: /Second method for entering device UUIDs:/, image: '\n![Upload File](/img/docs/admin-device-08.png)\n', insertAfter: true },
  { pattern: /\(Template Preview\)/, image: '\n![Template Preview](/img/docs/admin-device-09.png)\n', insertAfter: true }
];

// Apply image insertions
for (const mapping of imageMappings) {
  if (mapping.insertAfter) {
    adminContent = adminContent.replace(mapping.pattern, (match) => match + '\n' + mapping.image + '\n');
  }
}

// Write updated content
fs.writeFileSync(path.join(__dirname, 'docs', 'admin', 'index.md'), adminContent);
console.log('Updated docs/admin/index.md with images');
