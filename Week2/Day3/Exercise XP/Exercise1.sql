-- 1. Use UPDATE to change the language of some films
-- Example: change films with id 1–3 to language_id = 2 (e.g., Italian)
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);