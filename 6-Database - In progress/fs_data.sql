-- Filtering and Sorting Data
-- --------------------------
-- This lesson teaches:
-- - WHERE
-- - AND / OR
-- - IN
-- - BETWEEN
-- - LIKE / ILIKE
-- - ORDER BY
-- - LIMIT / OFFSET

DROP TABLE IF EXISTS filter_users;

CREATE TABLE filter_users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER,
  gender TEXT,
  email TEXT UNIQUE,
  city TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO filter_users (name, age, gender, email, city, created_at)
VALUES
  ('Ali', 20, 'Male', 'ali@example.com', 'Kabul', '2026-01-01'),
  ('Sara', 22, 'Female', 'sara@example.com', 'Herat', '2026-01-05'),
  ('Aisha', 24, 'Female', 'aisha@company.com', 'Kabul', '2026-02-01'),
  ('Omar', 29, 'Male', 'omar@company.com', 'Mazar', '2026-02-10'),
  ('Mina', 31, 'Female', 'mina@example.com', 'Kabul', '2026-03-01');

-- WHERE: exact filtering
SELECT *
FROM filter_users
WHERE city = 'Kabul';

-- AND: all conditions must be true
SELECT *
FROM filter_users
WHERE city = 'Kabul'
  AND age >= 24;

-- OR: at least one condition must be true
SELECT *
FROM filter_users
WHERE city = 'Kabul'
   OR city = 'Herat';

-- Parentheses matter with AND/OR
SELECT *
FROM filter_users
WHERE age > 22
  AND (gender = 'Female' OR email LIKE '%@company.com');

-- IN: match one value from a list
SELECT *
FROM filter_users
WHERE city IN ('Kabul', 'Herat');

-- BETWEEN: inclusive range
SELECT *
FROM filter_users
WHERE age BETWEEN 22 AND 30;

-- LIKE is case-sensitive. ILIKE is case-insensitive in Postgres.
SELECT *
FROM filter_users
WHERE name ILIKE 'a%';

SELECT *
FROM filter_users
WHERE email LIKE '%@company.com';

-- ORDER BY: sort rows
SELECT *
FROM filter_users
ORDER BY age DESC;

-- LIMIT/OFFSET: pagination
SELECT *
FROM filter_users
ORDER BY id
LIMIT 2 OFFSET 2;

-- Practical example
SELECT id, name, age, email, city
FROM filter_users
WHERE age > 21
  AND email LIKE '%@example.com'
ORDER BY created_at DESC
LIMIT 10;
