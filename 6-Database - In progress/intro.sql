-- PostgreSQL Intro
-- ----------------
-- PostgreSQL, often called Postgres, is a relational database.
--
-- Relational databases store data in tables:
-- - table: a collection of related records
-- - row: one record
-- - column: one field on each record
-- - primary key: unique identifier for a row
-- - SQL: Structured Query Language
--
-- Learning order in this folder:
-- 1. intro.sql
-- 2. data_types.sql
-- 3. crud.sql
-- 4. fs_data.sql
-- 5. agg.sql
-- 6. rel_joins.sql

-- Database hierarchy:
-- server -> database -> schema -> table -> row/column

-- Create a database from psql:
-- CREATE DATABASE my_first_db;
--
-- Connect to it from psql:
-- \c my_first_db

DROP TABLE IF EXISTS intro_users;

CREATE TABLE intro_users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO intro_users (name, age)
VALUES
  ('Ali', 20),
  ('Sara', 22),
  ('Aisha', 24);

SELECT * FROM intro_users;

-- Key ideas:
-- - SERIAL creates auto-incrementing integer IDs.
-- - PRIMARY KEY makes each row uniquely identifiable.
-- - NOT NULL means the column must have a value.
-- - DEFAULT provides a value when you do not insert one.
