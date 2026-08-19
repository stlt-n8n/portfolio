![OrderPulse Analytics](assets/banner.png)

# 🚀 OrderPulse Analytics (n8n)

An automated order analytics workflow built with **n8n**, **Google Sheets**, **JavaScript**, and **Telegram**.

This project demonstrates how business order data can be processed automatically to generate employee reports, monitor active orders, and send real-time notifications.

---

## ✨ Features

- 📊 Processing order analytics
- 👤 Employee-specific reporting
- 💰 Revenue & average order calculation
- 🛍 Product statistics
- 📨 Telegram notifications
- 📈 Report history logging
- 📋 Processing queue synchronization
- ⏰ Scheduled execution
- 🔄 Manual execution for testing

---

## 🛠 Tech Stack

- n8n
- JavaScript
- Google Sheets
- Telegram Bot API

---

## 📂 Workflow Overview

The workflow:

1. Reads orders from Google Sheets
2. Filters active processing orders
3. Calculates business metrics
4. Sends a Telegram report
5. Saves report history
6. Updates the processing queue

---

## 📊 Metrics

The workflow calculates:

- Processing Orders
- Processing Revenue
- Average Order Value
- Total Items
- Top Employee
- Top Product

---

## 📁 Repository Structure

```
workflow/
    orderpulse-workflow.json

screenshots/

README.md
```

---

## ⚙️ Setup

1. Import the workflow into n8n.
2. Connect your Google Sheets credentials.
3. Connect your Telegram Bot.
4. Configure the required IDs for your own environment.
5. Execute the workflow.

---

## 📌 Note

This public version has been sanitized before publishing.

All credentials, IDs and sensitive information have been removed.

---

## 📄 License

MIT

---

---

# 📸 Screenshots

## Workflow Overview

![Workflow Overview](screenshots/workflow-overview.png)

---

## Telegram Report

![Telegram Report](screenshots/telegram-report.png)

---

## Processing Queue

![Processing Queue](screenshots/processing-queue.png)

---

## Analytics Dashboard

![Analytics Dashboard](screenshots/dashboard.png)
