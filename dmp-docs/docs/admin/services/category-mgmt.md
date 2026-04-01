---
sidebar_position: 1
---

# Category Management

## Section Overview

Based on business experience and market classification, the DMP management console has built-in product categories that have already been integrated. When creating a product, the correct product category must be selected.

Subsequently, corresponding standard function libraries and configuration templates will be preset according to the characteristics of each category.

## Backend Categories

**Navigation Path:** [Products] → [Category Management] → [Backend Categories]

**Note:** The built-in product categories are accumulated based on industry and device development experience. It is recommended to avoid modifying existing categories and only add new categories when necessary.

### Create Category

1. On the Backend Categories page, select **New Sub Item** or **Add A First Level Category** according to the level you want to manage

![Backend Categories](/img/admin/backend-categories.png)

2. Enter the category name and other required information
3. Specify whether the category is a **leaf node**

![Leaf Category Config](/img/admin/leaf-category-config.png)

**Important Notes:**

| Node Type | Can Add Subcategories | Can Add Products |
|-----------|----------------------|------------------|
| **Non-leaf** | ✅ Yes | ❌ No |
| **Leaf** | ❌ No | ✅ Yes |

### Edit or Delete Categories

Categories can also be edited or deleted from this page.

## Frontend Categories

Frontend categories correspond to the product list displayed on the App provisioning page.

**Navigation Path:** [Products] → [Category Management] → [Frontend Categories]

### Category Levels

| Level | Purpose |
|-------|---------|
| **Level 1** | Display-only, does not take effect |
| **Level 2** | Acts as product list tabs |
| **Level 3-4** | Leaf categories where products are displayed |

**Notes:**
- The App supports up to four levels of categories
- Configuring frontend categories exposes the product model and images to App users
- Some frontend categories are pre-created at platform delivery

### Create Leaf Category for Product

To display a product in the App:

1. Create a corresponding leaf category based on the product definition

![Frontend Categories](/img/admin/frontend-categories.png)

2. Generally, create required categories by clicking **Add Sub Item** under existing categories
3. The leaf category name must **exactly match** the product model name
4. Configure the provisioning wizard according to the product definition

![Configure Wizard](/img/admin/configure-wizard.png)

Changes made here take effect immediately and do not require withdrawing the product release.

## Next Steps

- Learn about [Standard Functions](standard-functions)
- Understand [Product Development](../product-dev/product-creation)
