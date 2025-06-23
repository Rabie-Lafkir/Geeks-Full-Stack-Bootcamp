/* ---------- items table ---------- */
CREATE TABLE IF NOT EXISTS items (
    id        SERIAL PRIMARY KEY,
    item_name VARCHAR(100)  NOT NULL,
    price     NUMERIC(10,2) NOT NULL
);

INSERT INTO items (item_name, price) VALUES
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan',        80)
ON CONFLICT DO NOTHING;  

/* ---------- customers table ---------- */
CREATE TABLE IF NOT EXISTS customers (
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) NOT NULL
);

INSERT INTO customers (first_name, last_name) VALUES
    ('Greg',    'Jones'),
    ('Sandra',  'Jones'),
    ('Scott',   'Scott'),
    ('Trevor',  'Green'),
    ('Melanie', 'Johnson')
ON CONFLICT DO NOTHING;

/* ---------- Requested queries ---------- */
-- A) All items
SELECT * FROM items;

-- B) Items with price > 80
SELECT * FROM items WHERE price > 80;

-- C) Items with price <= 300
SELECT * FROM items WHERE price <= 300;

-- D) Customers with last name 'Smith'
SELECT * FROM customers WHERE last_name = 'Smith';

-- E) Customers with last name 'Jones'
SELECT * FROM customers WHERE last_name = 'Jones';

-- F) Customers whose first name is NOT 'Scott'
SELECT * FROM customers WHERE first_name <> 'Scott';
