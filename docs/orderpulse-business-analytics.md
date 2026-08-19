# OrderPulse Business Analytics

![Banner](images/banner.png)

![n8n](https://img.shields.io/badge/n8n-Automation-EA4B26?style=for-the-badge&logo=n8n&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-Analytics-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)
![Telegram](https://img.shields.io/badge/Telegram-Bot-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📊 Overview

**OrderPulse Business Analytics** is an automation workflow built with **n8n**, **Google Sheets**, **JavaScript**, and **Telegram**.

The workflow continuously monitors customer orders, calculates business KPIs, tracks employee performance, synchronizes Google Sheets, and automatically sends formatted operational reports via Telegram.

It demonstrates how workflow automation can replace repetitive reporting tasks while providing real-time business insights.

---

# 🚀 Features

- 📦 Processing order monitoring
- 📈 Business KPI calculation
- 💰 Revenue analytics
- 👨‍💼 Employee performance tracking
- 🏆 Top-selling product analysis
- 📲 Automated Telegram reports
- 📋 Processing Queue synchronization
- 📊 Google Sheets Dashboard
- 📁 Report History
- ⚡ Fully automated n8n workflow

---

# 🔄 Workflow Overview

![Workflow](images/workflow-business-overview.png)

### Workflow Logic

1. Read orders from Google Sheets
2. Check active processing orders
3. Notify if no processing orders exist
4. Filter active processing orders
5. Calculate business metrics
6. Save report history
7. Send Telegram report
8. Update Processing Queue

---

# 📲 Telegram Report

![Telegram Report](images/telegram-business-report.png)

The Telegram report includes:

- Active Orders
- Revenue
- Average Order Value
- Processing Items
- Top Employees
- Top Product
- Timestamp

---

# 📊 Dashboard

![Dashboard](images/dashboard-business.png)

The Google Sheets dashboard provides:

- Total Orders
- Processing Orders
- Revenue
- Order Status Distribution
- Business Metrics
- Top Employees

---

# 📋 Processing Queue

![Processing Queue](images/processing-queue-business.png)

The workflow automatically updates a dedicated **Processing Queue** sheet containing only active orders.

This view is useful for:

- Warehouse teams
- Customer support
- Operations managers
- Daily production planning

---

# 🛠 Technologies

- n8n
- Google Sheets
- Telegram Bot API
- JavaScript
- JSON

---

# 📂 Project Structure

```text
orderpulse-business-analytics/

│── README.md
│── orderpulse-business-analytics-public.json
│
└── images/
    ├── banner.png
    ├── dashboard-business.png
    ├── workflow-business-overview.png
    ├── telegram-business-report.png
    └── processing-queue-business.png
```

---

# ⚙️ Import Workflow

1. Download the workflow JSON.
2. Import it into n8n.
3. Connect your Google Sheets credentials.
4. Connect your Telegram credentials.
5. Execute the workflow.

---

# 💼 Example Use Cases

- 🌸 Flower shops
- 🛒 E-commerce
- 📦 Inventory monitoring
- 📊 Sales reporting
- 📈 Business analytics
- 🚚 Order tracking

---

# 📷 Screenshots

### Dashboard

![](images/dashboard-business.png)

---

### Telegram Report

![](images/telegram-business-report.png)

---

### Workflow

![](images/workflow-business-overview.png)

---

# 👨‍💻 Author

**stlt-n8n**

GitHub: https://github.com/stlt-n8n

---

⭐ If you like this project, consider giving it a star.
