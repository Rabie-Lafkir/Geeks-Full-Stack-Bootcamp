
# 🌍 Web API to DB

This project fetches **10 random countries** from the [REST Countries API](https://restcountries.com/) and saves them into a **PostgreSQL** database.

## ✅ What You Will Learn

- Consuming REST APIs in Python
- Writing to a PostgreSQL database
- Using `.env` files securely with `python-dotenv`

---

## 📁 Project Files

```
web_api_to_db/
├── .env                # Database credentials (Not commited)
├── .env.example        # Simulation of .env
├── main.py             # Core logic to fetch and insert data
├── requirements.txt    # Python dependencies
└── README.md           # Instructions
```

---

## 🧰 Requirements

- Python 3.7+
- PostgreSQL installed and running
- Internet access (to fetch from API)

---

## 🛠️ Setup Instructions

### 1. Create a PostgreSQL database

```sql
CREATE DATABASE rest_countries_db;

CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    capital VARCHAR(100),
    flag TEXT,
    subregion VARCHAR(100),
    population BIGINT
);
```

### 2. Configure environment variables

Create a `.env` file:

```env
DB_NAME=rest_countries_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

### 3. Create virtual environment and install dependencies

```bash
python -m venv venv
source venv/bin/activate       # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### 4. Run the script

```bash
python main.py
```

This will insert 10 random countries into your `countries` table.

---

## ✅ Output

```bash
✅ 10 random countries saved to database.
```

You can verify by running:
```sql
SELECT * FROM countries;
```
