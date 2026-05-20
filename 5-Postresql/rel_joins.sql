-- ===================== Relationships & JOINs =====================

-- Connect tables together

-- Primary key vs Foreign key
-- One-to-many relationship
-- Many-to-many relationship
-- INNER JOIN
-- LEFT JOIN
-- RIGHT JOIN
-- FULL JOIN (FULL OUTER JOIN)

-- 1. Primary Key vs Foreign Key

-- Primary Key (PK)
-- A column that uniquely identifies each row in a table

-- Example:
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INT
);

-- Meaning:
-- id must be unique
-- No two users can have the same id
-- Cannot be NULL

-- Foreign Key (FK)
-- A column that links to another table’s primary key

-- Example:
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT,
  product TEXT
);

-- One-to-Many Relationship
-- What it means:

-- One record in Table A → many records in Table B

-- Example:
-- One user → many orders

-- users table:
-- id	name
-- 1	Ali

-- orders table:
-- id	user_id	 product
-- 1	1	     Phone
-- 2	1	     Laptop

-- MANY-TO-MANY RELATIONSHIP:
-- One record in Table A → many in Table B
-- AND
-- One record in Table B → many in Table A

-- -- Students & Courses
-- students table
-- id	     name
-- 1	     Ali
-- 2	     Sara

-- -- courses table
-- id	    title
-- 1	    SQL
-- 2	    JS

-- --------------------

-- INNER JOIN
-- Returns ONLY matching data from both tables
SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;

-- LEFT JOIN
-- Returns ALL rows from left table + matching rows from right table
SELECT users.name, orders.product
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;

-- LEFT table = users
-- RIGHT table = orders

-- RIGHT JOIN
-- Returns ALL rows from the right table, even if there is no match in the left table.
SELECT users.name, orders.product
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;

-- FULL JOIN (FULL OUTER JOIN)
-- Returns:

-- ALL rows from LEFT table
-- ALL rows from RIGHT table
-- Matches where possible
SELECT users.name, orders.product
FROM users
FULL OUTER JOIN orders
ON users.id = orders.user_id;

-- Meaning:
-- Show everything from both tables
-- If no match → NULL appears
