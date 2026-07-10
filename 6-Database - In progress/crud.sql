-- CRUD
-- ----
-- CRUD means:
-- - Create
-- - Read
-- - Update
-- - Delete

DROP TABLE IF EXISTS crud_users;

CREATE TABLE crud_users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER CHECK (age >= 0),
  gender VARCHAR(20),
  email VARCHAR(255) UNIQUE NOT NULL,
  city VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- CREATE: insert one row
INSERT INTO crud_users (name, age, gender, email, city)
VALUES ('Ismail', 23, 'Male', 'ismail@example.com', 'Kabul');

-- CREATE: insert many rows
INSERT INTO crud_users (name, age, gender, email, city)
VALUES
  ('Sara', 22, 'Female', 'sara@example.com', 'Herat'),
  ('Ahmed', 25, 'Male', 'ahmed@example.com', 'Kabul'),
  ('Aisha', 24, 'Female', 'aisha@company.com', 'Kabul');

-- READ: select all columns
SELECT * FROM crud_users;

-- READ: select specific columns
SELECT name, email FROM crud_users;

-- READ: filter rows
SELECT *
FROM crud_users
WHERE age > 22;

-- UPDATE: change matching rows
UPDATE crud_users
SET age = 24
WHERE email = 'ismail@example.com';

-- UPDATE with RETURNING shows changed rows
UPDATE crud_users
SET city = 'Mazar'
WHERE name = 'Sara'
RETURNING id, name, city;

-- DELETE: remove matching rows
DELETE FROM crud_users
WHERE email = 'ahmed@example.com'
RETURNING id, name;

-- Final table
SELECT * FROM crud_users
ORDER BY id;

-- Safety habit:
-- Always write SELECT first to check your WHERE condition before UPDATE/DELETE.
