-- Part I: Create table and insert data
DROP TABLE IF EXISTS purchases;
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    item_id INT REFERENCES items(id),
    quantity_purchased INT
);

-- Insert purchases with subqueries
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT id FROM items WHERE name ILIKE '%fan%'),
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT id FROM items WHERE name ILIKE '%large desk%'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT id FROM items WHERE name ILIKE '%small desk%'),
    2
);

-- Part II: Queries

-- All purchases
SELECT * FROM purchases;

-- All purchases joined with customers
SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.id;

-- Purchases by customer with ID = 5
SELECT * FROM purchases
WHERE customer_id = 5;

-- Purchases for a large desk AND a small desk
SELECT * FROM purchases
WHERE item_id IN (
    SELECT id FROM items WHERE name ILIKE '%large desk%' OR name ILIKE '%small desk%'
);

-- Customers who have made a purchase, with item name
SELECT c.first_name, c.last_name, i.name AS item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

-- Try to insert a purchase with missing item_id
-- This should fail due to NOT NULL or FK constraint (if item_id is NOT NULL)
-- Uncomment to test:
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES (1, NULL, 1);
