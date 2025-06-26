-- 1. Retrieve all films rated G or PG that are currently available (returned or never rented)
SELECT DISTINCT f.film_id, f.title, f.rating
FROM film f
WHERE f.rating IN ('G', 'PG')
  AND f.film_id IN (
    SELECT i.film_id
    FROM inventory i
    LEFT JOIN rental r ON i.inventory_id = r.inventory_id
    WHERE r.return_date IS NOT NULL OR r.rental_id IS NULL
  );

-- 2. Create a waiting list table for children’s DVDs
DROP TABLE IF EXISTS waiting_list;
CREATE TABLE waiting_list (
    wait_id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INT NOT NULL REFERENCES film(film_id),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Insert test data into waiting list
INSERT INTO waiting_list (child_name, film_id) VALUES
('Alice', 10),
('Bob', 10),
('Charlie', 20);

-- 4. Get number of people waiting for each children’s DVD
SELECT f.title, COUNT(w.wait_id) AS waiting_count
FROM waiting_list w
JOIN film f ON w.film_id = f.film_id
GROUP BY f.title
ORDER BY waiting_count DESC;
