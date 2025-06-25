-- Create the FirstTab table
DROP TABLE IF EXISTS FirstTab;
CREATE TABLE FirstTab (
     id INTEGER, 
     name VARCHAR(10)
);

-- Insert values into FirstTab
INSERT INTO FirstTab VALUES
(5, 'Pawan'),
(6, 'Sharlee'),
(7, 'Krish'),
(NULL, 'Avtaar');

-- Create the SecondTab table
DROP TABLE IF EXISTS SecondTab;
CREATE TABLE SecondTab (
     id INTEGER
);

-- Insert values into SecondTab
INSERT INTO SecondTab VALUES
(5),
(NULL);

-- Q1
SELECT COUNT(*) AS Q1_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NULL
);

-- Output will be 0

-- Q2
SELECT COUNT(*) AS Q2_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id = 5
);
-- Output will be 2

-- Q3
SELECT COUNT(*) AS Q3_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab
);
-- Output will be 0

-- Q4
SELECT COUNT(*) AS Q4_Result
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NOT NULL
);
-- Output will be 2
