# 🔐 auth_cli

Simple command-line authentication system using **PostgreSQL** with **password encryption**.

## 🧰 Requirements

- Python 3.7+
- PostgreSQL installed and running
- The following Python packages:
  - `psycopg2-binary`
  - `bcrypt`
  - `python-dotenv`

## 🐍 Setup with Virtual Environment

```bash
# Create a virtual environment
python -m venv venv

# Activate the environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

## 🗂️ Project Structure

```
auth_cli/
├── auth_cli.py
├── .env
├── .env.example
├── requirements.txt
└── README.md
```

## 📦 .env File Example

Rename `.env.example` to `.env` and fill it with your PostgreSQL credentials:

```env
DB_NAME=auth_cli_db
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
```

## 🚀 How to Run

```bash
python auth_cli.py
```

## 📝 Features

- Login and signup from CLI
- Passwords stored securely using bcrypt
- PostgreSQL backend for persistent user data