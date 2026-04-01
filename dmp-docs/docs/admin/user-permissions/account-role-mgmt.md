---
sidebar_position: 1
---

# Platform Account and Role Management

## Section Overview

All permission settings and account assignments on the DMP platform are managed by the platform administrator. **Users are not allowed to create accounts on their own.**

Upon platform delivery, an initial administrator account is provided, along with predefined roles (including Platform Administrator, Hardware Developer, APP Manager, etc.) and their corresponding permissions. Administrators may subsequently assign or adjust roles and permissions according to actual needs.

## Account Information Collection

### Required Information [Important]

| Field | Description |
|-------|-------------|
| **Account Nickname** | Fill in according to customer requirements (in some ODM environments, account nicknames cannot include Chinese characters or Pinyin) |
| **Verification Email** | Used to receive verification codes. Note: In overseas ODM environments, domestic email domains (e.g., qq.com, 163.com, domestic corporate domains) are not allowed. Overseas domains such as Gmail are recommended. |

### Additional Information for Hardware Developers and External Collaborators

- Company Name
- Company Address
- Company Contact Person
- Company Contact Details

## Create a New Account

**Navigation Path:** [Settings] → [Account Management]

### Steps:

1. Enter the account configuration page and click **Add Account**

![Account Management Page](/img/admin/account-management.png)

2. Enter the account information, select the assigned role(s) (multiple selections allowed)

![Add Account Form](/img/admin/add-account-form.png)

3. Click **Confirm** to create the account

**Note:** Email, phone number, and password can be modified by the user after logging in.

### Account Management

Account information can be managed on this page using the **Edit**, **Reset Password**, and **Delete** functions.

## Managing Role Permissions

**Navigation Path:** [Settings] → [Role Management]

**Note:** The initial roles are configured based on business best practices. It is recommended to keep them unchanged and only add new roles when necessary.

### Create New Role

1. Enter the role configuration page and click **New Role**

![Role Management Page](/img/admin/role-management.png)

2. Enter the role name and select the corresponding pages and functions based on the role definition

![New Role Form](/img/admin/new-role-form.png)

3. Save the role

### Role Management

Roles can be managed on this page using the **Edit** and **Delete** functions.

## Predefined Roles

| Role | Description |
|------|-------------|
| **Platform Administrator** | Full platform access, user and role management |
| **Hardware Developer** | Product development, firmware management |
| **APP Manager** | App configuration, publishing management |

## Next Steps

- Learn about [Category Management](category-management)
- Understand [Standard Functions](standard-functions)
- Generate [Five-Tuples](five-tuple-generation) for production
