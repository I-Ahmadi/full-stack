-- Aggregations and Grouping
-- -------------------------
-- Aggregates summarize rows:
-- - COUNT
-- - SUM
-- - AVG
-- - MIN
-- - MAX

DROP TABLE IF EXISTS sales;

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  customer_name TEXT NOT NULL,
  city TEXT NOT NULL,
  product TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price NUMERIC(10, 2) NOT NULL,
  created_at DATE NOT NULL
);

INSERT INTO sales (customer_name, city, product, quantity, unit_price, created_at)
VALUES
  ('Ali', 'Kabul', 'Keyboard', 2, 25.00, '2026-01-01'),
  ('Sara', 'Herat', 'Mouse', 1, 15.00, '2026-01-01'),
  ('Aisha', 'Kabul', 'Monitor', 1, 180.00, '2026-01-02'),
  ('Omar', 'Mazar', 'Keyboard', 3, 25.00, '2026-01-02'),
  ('Mina', 'Kabul', 'Mouse', 4, 15.00, '2026-01-03');

-- COUNT: number of rows
SELECT COUNT(*) AS total_sales
FROM sales;

-- SUM: add values
SELECT SUM(quantity) AS total_items_sold
FROM sales;

-- Calculated revenue
SELECT SUM(quantity * unit_price) AS total_revenue
FROM sales;

-- AVG, MIN, MAX
SELECT
  AVG(unit_price) AS average_unit_price,
  MIN(unit_price) AS cheapest_unit_price,
  MAX(unit_price) AS most_expensive_unit_price
FROM sales;

-- GROUP BY: summarize per group
SELECT
  city,
  COUNT(*) AS order_count,
  SUM(quantity * unit_price) AS revenue
FROM sales
GROUP BY city
ORDER BY revenue DESC;

-- GROUP BY product
SELECT
  product,
  SUM(quantity) AS units_sold,
  SUM(quantity * unit_price) AS revenue
FROM sales
GROUP BY product
ORDER BY units_sold DESC;

-- WHERE filters before grouping
SELECT
  city,
  SUM(quantity * unit_price) AS revenue
FROM sales
WHERE created_at >= '2026-01-02'
GROUP BY city;

-- HAVING filters after grouping
SELECT
  city,
  SUM(quantity * unit_price) AS revenue
FROM sales
GROUP BY city
HAVING SUM(quantity * unit_price) > 50
ORDER BY revenue DESC;

-- Rule:
-- Every selected column must either be:
-- - inside GROUP BY
-- - inside an aggregate function
