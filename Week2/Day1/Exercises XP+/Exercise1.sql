-- Create the database
CREATE DATABASE IF NOT EXISTS bootcamp;
\c bootcamp

-- Create the students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birth_date DATE
);

-- Insert the initial data efficiently
INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

Insert your own data
INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Rabie', 'Lafkir', '2000-06-19');

SELECT QUERIES

-- 1. Fetch all data
SELECT * FROM students;

-- 2. Fetch all first_names and last_names
SELECT first_name, last_name FROM students;

-- 3. Student with id = 2
SELECT first_name, last_name FROM students WHERE id = 2;

-- 4. Student with last_name = 'Benichou' AND first_name = 'Marc'
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- 5. Students with last_name = 'Benichou' OR first_name = 'Marc'
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- 6. Students whose first_name contains 'a'
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a%';

-- 7. Students whose first_name starts with 'a'
SELECT first_name, last_name FROM students
WHERE first_name ILIKE 'a%';

-- 8. Students whose first_name ends with 'a'
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a';

-- 9. Students whose second-to-last letter of first_name is 'a'
SELECT first_name, last_name FROM students
WHERE SUBSTRING(first_name FROM '.a.$') IS NOT NULL;

-- 10. Students with id = 1 AND id = 3 (no result — logically impossible, probably meant OR)
SELECT first_name, last_name FROM students
WHERE id IN (1, 3);

-- 11. Students born on or after 2000-01-01
SELECT * FROM students
WHERE birth_date >= '2000-01-01';
