-- ===================== Filtering & Sorting Data =====================

-- Find exactly what you need

-- WHERE
-- AND / OR
-- LIKE
-- ORDER BY
-- LIMIT

-- Example: Find users older than 22, who are female or have an email ending with @cop.com, 
-- sorted by newest first, limit to 10 results

SELECT * FROM users
    WHERE age > 22
    AND gender = 2
    OR email LIKE '%@cop.com'
    ORDER BY id DESC
    LIMIT 10;

-- WHERE
SELECT * FROM users WHERE age > 22;
SELECT email FROM users WHERE name = 'Ismail';

-- AND → ALL conditions must be true
SELECT * FROM users
WHERE age > 18 AND city = 'Kabul';

-- OR → ANY condition can be true
SELECT * FROM users
WHERE city = 'Kabul' OR city = 'Herat';

-- LIKE → Search patterns in text
-- Starts with:
WHERE * FROM users WHERE name LIKE 'A%';
-- Ends with:
WHERE * FROM users WHERE name LIKE '%han';
-- Contains:
WHERE * FROM users WHERE name LIKE '%moh%';

-- ORDER BY → Sort data
-- Ascending (A → Z / small → big)
SELECT * FROM users
ORDER BY age ASC;

-- Descending (Z → A / big → small)
SELECT * FROM users
ORDER BY age DESC;

-- Default behavior: same as ASC
ORDER BY age;

-- LIMIT → Limit results
-- Returns only a specific number of rows
SELECT * FROM users
LIMIT 5;

-- returns only 5 rows
