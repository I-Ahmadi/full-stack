-- ===================== Data Types =====================

-- Data Types define the type of data a column can hold

-- 1. NUMERIC TYPES | Integers
SMALLINT   -- small numbers (-32k to 32k)
INTEGER    -- normal numbers (most used)
BIGINT     -- very large numbers

// Example
age INTEGER;

-- Decimal (exact)
NUMERIC(10,2)
// Example
price NUMERIC(10,2);

-- 2. TEXT TYPES
TEXT        -- Unlimited text
VARCHAR(50) -- Limited text
CHAR(5)     -- Fixed length

// Example  
name TEXT;
username VARCHAR(50);
code CHAR(5);

-- 3. DATE & TIME TYPES
DATE        -- 2026-04-10
TIME        -- 14:30:00
TIMESTAMP   -- date + time

-- Example
created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;

-- 4. BOOLEAN
BOOLEAN

-- Example
is_active BOOLEAN DEFAULT TRUE;

-- 5. SERIAL (AUTO INCREMENT)
SERIAL

-- Example
id SERIAL PRIMARY KEY;

-- 6. UUID | Used in modern apps (more secure than SERIAL)
UUID

-- Example
id UUID DEFAULT gen_random_uuid();

-- 7. ENUM (CUSTOM TYPE)
CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

-- 8. JSON / JSONB
JSON
JSONB

-- Example
profile JSONB;

-- Sample JSON
-- {
--   "name": "Ali",
--   "skills": ["JS", "SQL"]
-- }

-- 9. ARRAY TYPES
TEXT[]
INT[]

-- Example
skills TEXT[];

INSERT INTO users (skills)
VALUES (ARRAY['JS', 'SQL']);

-- FULL TABLE EXAMPLE
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    age INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    balance NUMERIC(10,2),
    gender ENUM('Male', 'Female', 'Other'),
    skills TEXT[],
    profile JSONB,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
