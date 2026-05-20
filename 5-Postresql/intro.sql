-- ===================== PostgreSQL Intro =====================

-- PostgreSQL (Postgres) is:
-- A powerful open-source relational database
-- Used to store data in tables (rows & columns)
-- Uses SQL (Structured Query Language)

-- Think of it like:
-- An extremely smart Excel sheet that can handle millions of rows + complex logic + relationships.

-- 2. Core Concepts
-- Database → Table → Row → Column

-- | id | name | age |
-- | -- | ---- | --- |
-- | 1  | Ali  | 20  |
-- | 2  | Sara | 22  |

-- Creating Your First Database
CREATE DATABASE my_first_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INT
);
