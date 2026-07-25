-- PostgreSQL Data Types
-- ---------------------
-- Data types define what kind of value a column can store.

DROP TABLE IF EXISTS data_type_examples;
DROP TYPE IF EXISTS account_status;

CREATE TYPE account_status AS ENUM ('active', 'paused', 'closed');

CREATE TABLE data_type_examples (
  id SERIAL PRIMARY KEY,

  -- Text
  full_name TEXT NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  country_code CHAR(2),

  -- Numbers
  age INTEGER,
  login_count BIGINT DEFAULT 0,
  account_balance NUMERIC(10, 2) DEFAULT 0.00,

  -- Date and time
  birthday DATE,
  preferred_login_time TIME,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

  -- Boolean
  is_verified BOOLEAN DEFAULT FALSE,

  -- Custom enum
  status account_status DEFAULT 'active',

  -- Arrays
  skills TEXT[],

  -- JSONB is usually preferred over JSON in Postgres for querying/indexing
  profile JSONB
);

INSERT INTO data_type_examples (
  full_name,
  username,
  country_code,
  age,
  account_balance,
  birthday,
  preferred_login_time,
  is_verified,
  skills,
  profile
)
VALUES (
  'Aisha Rahimi',
  'aisha',
  'AF',
  24,
  150.75,
  '2002-04-10',
  '09:30:00',
  TRUE,
  ARRAY['JavaScript', 'SQL', 'Node.js'],
  '{"role": "admin", "theme": "dark"}'
);

SELECT
  id,
  full_name,
  username,
  age,
  account_balance,
  is_verified,
  status,
  skills,
  profile ->> 'role' AS role
FROM data_type_examples;

-- Common choices:
-- - TEXT for normal strings
-- - INTEGER for whole numbers
-- - NUMERIC(10, 2) for money-like exact decimals
-- - BOOLEAN for true/false
-- - TIMESTAMPTZ for timestamps in apps
-- - JSONB for flexible structured data
