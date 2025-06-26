import requests
import random
import psycopg2
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")

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
    print("❌ Database connection failed:", e)
    exit()

# Fetch all countries with selected fields from REST Countries API
url = "https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population"
response = requests.get(url)

if response.status_code == 200:
    all_countries = list(response.json())

    if len(all_countries) >= 10:
        random_countries = random.sample(all_countries, 10)
    else:
        print(f"⚠️ Only {len(all_countries)} countries returned. Using them all.")
        random_countries = all_countries
else:
    print("❌ Failed to fetch data from REST Countries API.")
    cursor.close()
    connection.close()
    exit()

# Insert into DB
for country in random_countries:
    name = country.get("name", {}).get("common", "")
    capital = country.get("capital", ["Unknown"])[0]
    flag = country.get("flags", {}).get("png", "")
    subregion = country.get("subregion", "Unknown")
    population = country.get("population", 0)

    query = '''
    INSERT INTO countries (name, capital, flag, subregion, population)
    VALUES (%s, %s, %s, %s, %s)
    '''
    cursor.execute(query, (name, capital, flag, subregion, population))

connection.commit()
cursor.close()
connection.close()

print("✅ 10 random countries saved to the database.")
