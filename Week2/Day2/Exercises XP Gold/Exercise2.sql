
-- Update birth_dates for Lea and Marc Benichou
UPDATE students
SET birth_date = '1998-11-02'
WHERE (first_name = 'Lea' OR first_name = 'Marc') AND last_name = 'Benichou';

-- Change last_name of David from Grez to Guez
UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

-- Delete Lea Benichou
DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- Count total students
SELECT COUNT(*) FROM students;

-- Count students born after 01/01/2000
SELECT COUNT(*) FROM students
WHERE birth_date > '2000-01-01';

-- Add math_grade column
ALTER TABLE students ADD COLUMN math_grade INTEGER;

-- Add grades
UPDATE students SET math_grade = 80 WHERE id = 1;
UPDATE students SET math_grade = 90 WHERE id IN (2, 4);
UPDATE students SET math_grade = 40 WHERE id = 6;

-- Count students with grade > 83
SELECT COUNT(*) FROM students
WHERE math_grade > 83;

-- Insert duplicate Omer Simpson with grade 70
INSERT INTO students (first_name, last_name, birth_date, math_grade)
SELECT 'Omer', 'Simpson', birth_date, 70
FROM students
WHERE first_name = 'Omer' AND last_name = 'Simpson'
LIMIT 1;

-- Count how many grades each student has
SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;

-- Sum of all student grades
SELECT SUM(math_grade) AS total_grade_sum
FROM students;
