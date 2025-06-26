-- 1. Rentals which are out
SELECT *
FROM rental
WHERE return_date IS NULL;

-- 2. Customers who have not returned their rentals (grouped by customer)
SELECT c.customer_id, c.first_name, c.last_name, COUNT(*) AS rentals_out
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY rentals_out DESC;

-- 3. All Action films with Joe Swank
-- Check if view film_list is useful:
SELECT * FROM film_list LIMIT 1;

-- Shortcut using `film_list` view:
SELECT fl.title, fl.description
FROM film_list fl
WHERE fl.category = 'Action'
  AND fl.actors ILIKE '%Joe Swank%';
