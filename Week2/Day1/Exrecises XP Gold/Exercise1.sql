-- 1. Fetch the first four students ordered by last_name alphabetically
SELECT * FROM students
ORDER BY last_name ASC
LIMIT 4;

-- 2. Fetch the details of the youngest student
SELECT * FROM students
ORDER BY birth_date DESC
LIMIT 1;

-- 3. Fetch three students skipping the first two students
SELECT * FROM students
OFFSET 2
LIMIT 3;
