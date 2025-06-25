
-- 1. Select all the columns from the “customer” table
SELECT * FROM customer;

-- 2. Display the names using alias “full_name”
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3. All distinct account creation dates
SELECT DISTINCT create_date FROM customer;

-- 4. All customer details ordered by first name descending
SELECT * FROM customer ORDER BY first_name DESC;

-- 5. Film ID, title, description, year of release, rental rate ordered by rental rate ascending
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Address and phone number of customers living in Texas district
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- 7. Retrieve all movie details where movie_id is 15 or 150
SELECT * FROM film
WHERE film_id IN (15, 150);

-- 8. Check if your favorite movie exists (example: 'Inception')
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Inception';

-- 9. Movies starting with first two letters of favorite movie (example: 'In')
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'In%';

-- 10. 10 cheapest movies
SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. Next 10 cheapest movies (without using LIMIT)
-- Using subquery with OFFSET/ROW_NUMBER for educational purposes
SELECT film_id, title, rental_rate FROM (
    SELECT film_id, title, rental_rate,
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rn
    FROM film
) AS sub
WHERE rn > 10 AND rn <= 20;

-- 12. Join customer and payment tables to get name and payments
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 13. Movies not in inventory
SELECT * FROM film
WHERE film_id NOT IN (
    SELECT DISTINCT film_id FROM inventory
);

-- 14. Cities and their countries
SELECT ci.city, co.country
FROM city ci
JOIN country co ON ci.country_id = co.country_id;

-- 15. Bonus: Sellers and their sales
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;
