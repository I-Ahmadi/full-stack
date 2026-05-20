-- ===================== CRUD =====================

-- CRUD Operations (Core SQL)
-- Goal: Work with data

-- INSERT
-- SELECT
-- UPDATE
-- DELETE

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

-- Insert Data
INSERT INTO users (name, age, email)
VALUES ('Ismail', 23, 'ismail.ahmadi.929@gmail.com');

-- Multiple Rows
INSERT INTO users (name, age, email)
VALUES
    ('Sara', 22, 'sara@example.com'),
    ('Ahmed', 25, 'ahmed@example.com'),
    ('Ismail', 21, 'ismail.ahmadi.929@gmail.com');

-- SELECT (Read Data)
SELECT * FROM users;

-- Specific columns:
SELECT name, email FROM users; 

-- WHERE clause:
SELECT * FROM users WHERE age > 22;
SELECT * FROM users WHERE gender = 'Female' 
    AND age < 25 
    AND email LIKE '%@cop.com';

-- UPDATE (Modify Data)
UPDATE users SET age = 23 WHERE name = 'Ismail';

-- More Complex:
UPDATE users
    SET email = 'ismail.ahmadi.929@gmail.com'
        WHERE name = 'Ismail' AND age = 21;

-- DELETE (Remove Data)
DELETE FROM users WHERE name = 'Ahmad';
DELETE FROM users WHERE age < 22 AND email LIKE '%@example.com';
