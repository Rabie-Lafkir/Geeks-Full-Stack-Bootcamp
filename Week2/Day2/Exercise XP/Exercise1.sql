-- 1. All items, ordered by price (lowest to highest)
SELECT *
FROM items
ORDER BY price ASC;


-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;


-- 3. The first 3 customers in alphabetical order of the first name (A-Z), excluding the primary key
SELECT first_name, last_name, email
FROM customers
ORDER BY first_name ASC
LIMIT 3;


-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;
