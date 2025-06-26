import psycopg2
from dotenv import load_dotenv
import os

# Load env vars from .env
load_dotenv()

# DB connection settings
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")

# Connect to DB
connection = psycopg2.connect(
    dbname=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD,
    host=DB_HOST,
    port=DB_PORT
)
cursor = connection.cursor()

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
        cursor.execute(query, (self.name, self.price))
        connection.commit()

    def delete(self):
        query = "DELETE FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (self.name,))
        connection.commit()

    def update(self, new_name, new_price):
        query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
        cursor.execute(query, (new_name, new_price, self.name))
        connection.commit()
        self.name = new_name
        self.price = new_price
