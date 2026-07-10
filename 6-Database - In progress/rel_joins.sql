-- Relationships and JOINs
-- -----------------------
-- Relationships connect tables.
--
-- Primary key:
--   uniquely identifies a row.
--
-- Foreign key:
--   stores another table's primary key.

DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at DATE DEFAULT CURRENT_DATE
);

INSERT INTO customers (name, city)
VALUES
  ('Ali', 'Kabul'),
  ('Sara', 'Herat'),
  ('Aisha', 'Kabul');

INSERT INTO products (name, price)
VALUES
  ('Keyboard', 25.00),
  ('Mouse', 15.00),
  ('Monitor', 180.00);

INSERT INTO orders (customer_id, product_id, quantity)
VALUES
  (1, 1, 2),
  (1, 2, 1),
  (2, 3, 1);

-- INNER JOIN:
-- Only rows with matches in both tables.
SELECT
  customers.name AS customer,
  products.name AS product,
  orders.quantity
FROM orders
INNER JOIN customers ON customers.id = orders.customer_id
INNER JOIN products ON products.id = orders.product_id;

-- LEFT JOIN:
-- All rows from the left table, plus matching rows from the right table.
-- Customers with no orders still appear.
SELECT
  customers.name AS customer,
  orders.id AS order_id
FROM customers
LEFT JOIN orders ON orders.customer_id = customers.id
ORDER BY customers.id;

-- RIGHT JOIN:
-- All rows from the right table, plus matching rows from the left table.
-- Less common in app code because LEFT JOIN is usually easier to read.
SELECT
  orders.id AS order_id,
  customers.name AS customer
FROM orders
RIGHT JOIN customers ON customers.id = orders.customer_id;

-- FULL OUTER JOIN:
-- Everything from both sides. Non-matches show NULL.
SELECT
  customers.name AS customer,
  orders.id AS order_id
FROM customers
FULL OUTER JOIN orders ON orders.customer_id = customers.id;

-- One-to-many:
-- One customer can have many orders.
SELECT
  customers.name,
  COUNT(orders.id) AS order_count
FROM customers
LEFT JOIN orders ON orders.customer_id = customers.id
GROUP BY customers.id, customers.name
ORDER BY order_count DESC;

-- Many-to-many:
-- Students and courses need a junction table.

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE enrollments (
  customer_id INTEGER REFERENCES customers(id),
  course_id INTEGER REFERENCES courses(id),
  enrolled_at DATE DEFAULT CURRENT_DATE,
  PRIMARY KEY (customer_id, course_id)
);

INSERT INTO courses (title)
VALUES ('SQL Basics'), ('Node.js Basics');

INSERT INTO enrollments (customer_id, course_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 1);

SELECT
  customers.name AS student,
  courses.title AS course
FROM enrollments
INNER JOIN customers ON customers.id = enrollments.customer_id
INNER JOIN courses ON courses.id = enrollments.course_id
ORDER BY student, course;
