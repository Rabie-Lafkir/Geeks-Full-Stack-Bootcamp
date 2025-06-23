-- Count how many actors are currently in the table
SELECT COUNT(*) AS total_actors
FROM actors;

-- insert the actor with all required fields
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Chris', 'Hemsworth', '08/11/1983', 0);

-- 4. Retrieve all actors
SELECT * FROM actors;

