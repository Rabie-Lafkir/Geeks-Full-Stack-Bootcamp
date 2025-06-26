
# 📘 Restaurant Menu Manager (Exercise 1)

This project is a command-line based menu management system for a restaurant, built using **Python** and **PostgreSQL**. The system allows a manager to:

- View all menu items
- Add, update, or delete items
- Store and manage data persistently using a PostgreSQL database

---

## 📁 Project Structure

```
restaurant_menu_project/
│
├── .env                  # DB credentials (not committed)
├── requirements.txt      # Python dependencies
├── menu_item.py          # MenuItem class with CRUD methods
├── menu_manager.py       # MenuManager class for querying
└── menu_editor.py        # Main interactive CLI interface
```

---

## 🔧 Prerequisites

- Python 3.7+
- PostgreSQL installed and running
- pgAdmin or psql access

---

## 🛠️ Setup Instructions

### 1. Clone or download this repository

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate         # macOS/Linux
# OR
venv\Scripts\activate          # Windows
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Create a PostgreSQL database

```sql
CREATE DATABASE restaurant_menu_db;
```

Then create the table:

```sql
CREATE TABLE Menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);
```

---

## 🔑 .env Setup

Create a `.env` file in the project root:

```env
DB_NAME=restaurant_menu_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

---

## ▶️ Run the Program

```bash
python menu_editor.py
```

You will be prompted with options to:

- View an item
- Add a new item
- Delete an item
- Update an item
- Show the full menu
- Exit

---

## ✅ Example Interaction

```
--- Menu Editor ---
View an Item (V)
Add an Item (A)
Delete an Item (D)
Update an Item (U)
Show the Menu (S)
Exit (X)
Choose an option:
```

---

## 🧼 Tip

To reset your database content:
```sql
DELETE FROM Menu_Items;
```
