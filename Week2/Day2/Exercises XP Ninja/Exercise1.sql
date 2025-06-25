
-- 1. Fetch the last 2 customers in alphabetical order (A-Z), excluding the 'id'
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
OFFSET (
    SELECT COUNT(*) - 2 FROM customers
);

-- 2. Delete all purchases made by Scott
DELETE FROM purchases
WHERE customer_id = (
    SELECT id FROM customers WHERE first_name = 'Scott'
);

-- 3. Check if Scott still exists in the customers table
SELECT * FROM customers
WHERE first_name = 'Scott';

-- 4. Show all purchases with LEFT JOIN, so Scott's order appears with blank names
SELECT c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.id;

-- 5. Show all purchases with INNER JOIN, so Scott's order does NOT appear
SELECT c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.id;
