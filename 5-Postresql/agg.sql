-- ===================== Aggregations & Grouping =====================

-- Goal: Analyze data

-- Used to get insights like:
-- * total users
-- * average values
-- * grouped results
-- * highest / lowest values

-- 1. COUNT → Count rows
SELECT COUNT(*) FROM users;
SELECT COUNT(age) FROM users;
SELECT COUNT(age) FROM users WHERE age IS NOT NULL;

-- 2. SUM → Total value
-- Adds numbers together
SELECT SUM(price) FROM products;
SELECT SUM(quantity) FROM orders WHERE DATE(created_at) = CURRENT_DATE;

-- 3. AVG → Average value
SELECT AVG(age) FROM users;

-- 4. MIN / MAX → Smallest & Largest
-- Finds minimum and maximum values
SELECT MIN(price), MAX(price) FROM products;
-- cheapest and most expensive product

-- 5. GROUP BY → Group data
-- Groups rows with same values
SELECT country, COUNT(*)
FROM users
GROUP BY country;

-- number of users per country

-- Rule:
-- Every column in SELECT must be:

-- * inside GROUP BY
-- * OR inside an aggregate function

-- 6. HAVING → Filter grouped data
-- Filters AFTER grouping
SELECT country, COUNT(*)
FROM users
GROUP BY country
HAVING COUNT(*) > 5;

-- only countries with more than 5 users
-- WHERE vs HAVING
-- WHERE → before grouping
-- HAVING → after grouping

-- FULL EXAMPLE
SELECT country, COUNT(*) AS total_users, AVG(age) AS avg_age
FROM users
WHERE age > 18
GROUP BY country
HAVING COUNT(*) > 2
ORDER BY total_users DESC;

-- Execution flow
-- FROM users
-- → WHERE age > 18
-- → GROUP BY country
-- → HAVING COUNT(*) > 2
-- → SELECT country, COUNT(*), AVG(age)
-- → ORDER BY total_users DESC

-- Count users per city
SELECT city, COUNT(*)
FROM users
GROUP BY city;

-- Total sales
SELECT SUM(price) FROM orders;

-- Average salary per department
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
