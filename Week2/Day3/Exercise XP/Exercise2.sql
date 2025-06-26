-- 1. Use UPDATE to change the language of some films
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);

-- 2. Check foreign key constraints on customer table
SELECT
    conname AS constraint_name,
    confrelid::regclass AS referenced_table
FROM pg_constraint
WHERE conrelid = 'customer'::regclass;

-- Expected result: customer references address(address_id) and store(store_id)
-- This means any INSERT into `customer` must use existing address_id and store_id values.

-- 3. Drop the customer_review table (created in Exercise 1)
-- This should work easily unless another table depends on it (which it doesn’t by default)
DROP TABLE IF EXISTS customer_review;

-- 4. Find how many rentals are still outstanding (not returned)
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- 5. Find the 30 most expensive outstanding movies (by replacement cost)
SELECT DISTINCT f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

-- 6. Help your friend find the 4 specific movies

-- 6.1 The film is about a sumo wrestler and features Penelope Monroe
SELECT DISTINCT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
  AND (f.title ILIKE '%sumo%' OR f.description ILIKE '%sumo%');

-- 6.2 A short documentary (< 1 hour) and rated 'R'
SELECT title
FROM film
WHERE length < 60 AND rating = 'R';

-- 6.3 A film rented by Matthew Mahan, returned between July 28 and Aug 1, 2005, and he paid over $4
SELECT DISTINCT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND p.amount > 4
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 6.4 A film watched by Matthew Mahan that has "boat" in title/description and is expensive
SELECT DISTINCT f.title, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;
