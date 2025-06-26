import psycopg2
import bcrypt
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

DB_NAME = os.getenv("DB_NAME", "auth_cli_db")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", "postgres")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")

# Connect to PostgreSQL
try:
    connection = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    cursor = connection.cursor()
except Exception as e:
    print("❌ Could not connect to the database:", e)
    exit()

# Create users table
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(50) PRIMARY KEY,
    password TEXT NOT NULL
)
""")
connection.commit()

# Helper functions
def user_exists(username):
    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    return cursor.fetchone() is not None

def verify_password(username, password):
    cursor.execute("SELECT password FROM users WHERE username = %s", (username,))
    result = cursor.fetchone()
    if result:
        hashed_password = result[0]
        return bcrypt.checkpw(password.encode(), hashed_password.encode())
    return False

def create_user(username, password):
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed))
    connection.commit()

# Preload 3 users
default_users = {
    "rabie": "rabie@123",
    "hasna": "qwerty",
    "amine": "coucou"
}
for user, pwd in default_users.items():
    if not user_exists(user):
        create_user(user, pwd)

# CLI
logged_in = None
while True:
    command = input("\nEnter a command (login, signup, exit): ").lower()

    if command == "exit":
        break

    elif command == "login":
        username = input("Username: ").strip()
        password = input("Password: ").strip()

        if user_exists(username) and verify_password(username, password):
            print("✅ You are now logged in.")
            logged_in = username
        else:
            print("❌ Invalid credentials. Try again or use 'signup' to create an account.")

    elif command == "signup":
        while True:
            new_username = input("Choose a username: ").strip()
            if not user_exists(new_username):
                break
            print("⚠️ Username already exists, try another.")

        new_password = input("Choose a password: ").strip()
        create_user(new_username, new_password)
        print("✅ Account created. You can now log in.")

    else:
        print("❓ Unknown command. Use 'login', 'signup', or 'exit'.")

# Cleanup
cursor.close()
connection.close()
