-- 1. Count how many films there are for each rating
SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;

-- 2. List of all the movies with rating G or PG-13
SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13');

-- 3. Filtered list: under 2 hours, rental_rate < 3.00, sorted alphabetically
SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;

-- 4. Update customer to your own details (example using id = 1)
UPDATE customer
SET first_name = 'Rabie',
    last_name = 'Lafkir',
    email = 'lafkirrabie2000@gmail.com'
WHERE customer_id = 1;

-- 5. Update the customer’s address (use a made-up address)
UPDATE address
SET address = '83 Rue Chaouia',
    address2 = 'Apt 24',
    district = 'Casablanca',
    postal_code = '20000',
    phone = '0656003312'
WHERE address_id = (
    SELECT address_id FROM customer WHERE customer_id = 1
);
