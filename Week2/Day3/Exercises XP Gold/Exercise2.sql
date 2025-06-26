-- 1. How many stores, and where?
SELECT s.store_id, c.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city c ON a.city_id = c.city_id
JOIN country co ON c.country_id = co.country_id;

-- 2. Total viewing time (in minutes) per store (only returned rentals)
SELECT s.store_id, SUM(f.length) AS total_minutes
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

-- 3. Customers in cities where stores are located
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
    SELECT a.city_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
);

-- 4. Customers in countries where stores are located
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT ci.country_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
    JOIN city ci ON a.city_id = ci.city_id
);

-- 5. Safe list of movies (not Horror, not scary keywords)
SELECT f.film_id, f.title, f.description, f.length
FROM film f
WHERE f.film_id NOT IN (
    SELECT fc.film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.name = 'Horror'
)
AND f.title !~* 'beast|monster|ghost|dead|zombie|undead'
AND f.description !~* 'beast|monster|ghost|dead|zombie|undead';

-- 6. Total safe viewing time in minutes, hours, and days
SELECT
    SUM(length) AS total_minutes,
    ROUND(SUM(length) / 60.0, 2) AS total_hours,
    ROUND(SUM(length) / 1440.0, 2) AS total_days
FROM film f
WHERE f.film_id NOT IN (
    SELECT fc.film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.name = 'Horror'
)
AND f.title !~* 'beast|monster|ghost|dead|zombie|undead'
AND f.description !~* 'beast|monster|ghost|dead|zombie|undead';

-- 7. General viewing time (all returned films)
SELECT
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(f.length) / 1440.0, 2) AS total_days
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL;
