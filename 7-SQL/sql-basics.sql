/*
SELECT - extracts data from a database - DONE
UPDATE - updates data in a database - DONE
DELETE - deletes data from a database - DONE
INSERT INTO - inserts new data into a database - DONE
CREATE DATABASE - creates a new database - DONE
ALTER DATABASE - modifies a database - DONE
CREATE TABLE - creates a new table - DONE
ALTER TABLE - modifies a table - DONE
DROP TABLE - deletes a table - DONE
*/

/*
CREATE DATABASE test_db;
USE test_db;

CREATE TABLE students (
	std_id BIGINT SIGNED AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL UNIQUE,
	last_name VARCHAR(30) NOT NULL,
	std_age int NOT NULL,
	std_city VARCHAR(30) NOT NULL,
	std_country VARCHAR(30) NOT NULL
)

CREATE TABLE employees (
	id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    phone_number VARCHAR(30) DEFAULT NULL UNIQUE,
    hire_date DATE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL CHECK (salary >- 0),
    department_id BIGINT UNSIGNED NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT ON UPDATE CURRENT_TIMESTAMP
)
*/

/*
INSERT INTO studentS(first_name, last_name, std_age, std_city, std_country)
VALUES ("Ismail", "Ahmadi", 21, "Kabul", "Afghanistan");
VALUES ("John", "Doe", 25, "Paris", "France");

INSERT INTO employees (first_name, last_name, email, phone_number, hire_date, salary, department_id, status)
VALUES 
("Ismail", "Ahmadi", "ismail.ahmadi@example.com", "0700123456", "2024-01-15", 4500.00, 1, "Active"),
("John", "Doe", "john.doe@example.com", "0711987654", "2023-12-01", 5200.50, 2, "On Leave"),
("Sarah", "Khan", "sarah.khan@example.com", NULL, "2024-02-20", 6000.00, 1, "Active"),
("Lina", "Smith", "lina.smith@example.com", "0755555555", "2022-05-10", 7000.75, 3, "Active"),
("David", "Brown", "david.brown@example.com", NULL, "2023-08-05", 3800.00, 2, "Active");
*/

/*
DELETE FROM students
WHERE std_id = 1;

DELETE FROM employees 
WHERE id = 1;
*/

/*
UPDATE students
SET first_name = "David", last_name = "Fox", std_age = 30, std_city = "New York", std_country = "United State"
WHERE std_id = 2;

UPDATE employees
SET email = "ismail.ahmadi.929@gmail.com"
WHERE id = 1;
*/

/*
The DROP DATABASE statement is used to drop an existing SQL database.
The DROP TABLE statement is used to drop an existing table in a database.

DROP DATABASE testDB;
DROP TABLE employees; 
DROP TABLE students;
*/

/*
The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

Add a column in the table
ALTER TABLE students 
ADD (
    std_fee INT,
    std_email VARCHAR(100),
    std_status VARCHAR(20) DEFAULT 'Active'
);

ALTER TABLE students 
MODIFY std_fee INT NOT NULL;
MODIFY std_email VARCHAR(200) NOT NULL;
MODIFY std_city VARCHAR(150);

ALTER TABLE students
DROP std_fee;
DROP COLUMN std_country, 
DROP COLUMN std_fees;

ALTER TABLE students
RENAME COLUMN std_fee to std_fees
*/

/*
The SELECT statement is used to select data from a database.

SELECT customer_id, first_name, last_name FROM Customers;
SELECT * FROM customers;

The SELECT DISTINCT statement is used to return only distinct (different) values.

SELECT DISTINCT city FROM customers;
SELECT city FROM customers;
*/

/*
The WHERE clause is used to filter records.
SELECT * FROM customers
WHERE state = "MA";
*/

/*
where these operators can be used: =, >, <, >=, <=, <>
SELECT * FROM invoices
WHERE invoice_total > 100;
*/

/*
The ORDER BY keyword is used to sort the result-set in ascending or descending order. 

With "DESC" and "ASC"

SELECT * FROM invoices
ORDER BY client_ID

SELECT * FROM invoices
ORDER BY payment_total;

SELECT * FROM invoices
ORDER BY invoice_total DESC;

SELECT * FROM invoices
ORDER BY payment_total ASC;
*/

/*
The WHERE clause can contain one or many AND, OR operators.

SELECT * FROM employees
WHERE salary > 20000
AND office_id = 1;

SELECT * FROM employees
WHERE office_id = 1 AND (salary > 20000 OR salary <= 60000); 
WHERE office_id = 1 AND salary <= 63996;

SELECT *
FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain';
*/

/*
SELECT * FROM employees
WHERE salary BETWEEN 60000 AND 80000;

WHERE salary NOT BETWEEN 60000 AND 80000;

SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'A%';
*/

/*
The INSERT INTO statement is used to insert new records in a table.

INSERT INTO employees (employee_id, first_name, last_name, job_title, salary, reports_to, office_id)
VALUES (243, 'Ismail', 'Ahmadi', 'Software Engineer', 80000, 4750, );

SELECT * FROM employees
WHERE first_name = "Ismail";
*/

/*
The IS NULL and IS NOT NULL operator is used to test for empty values (NULL values).

SELECT * FROM employees
WHERE first_name IS NOT NULL;

WHERE first_name IS NULL;
*/

/*
The DELETE statement is used to delete existing records in a table.

DELETE FROM offices
WHERE office_id = 1;
*/

/*
SQL Data Types

1. Numeric Data Types

1. TINYINT | A very small integer
Used when you need to store very small numbers

Signed: When you need to allow negative values. Negative + Positive → (-128 to +127)
Unsigned: When you know the value is never negative. Only Positive → (0 to 255)

2. SMALLINT | A small integer
Use SMALLINT when you need to store numbers that are too big for TINYINT but smaller than what INT can handle.

Signed: When you need to allow negative values. Negative + Positive → (-32,768 to 32,767)
Unsigned: When you know the value is never negative. Only Positive → (0 to 65,535)

3. INT / INTEGER | A standard integer
Use INT for general-purpose numbers like IDs, counts, etc.

Signed: When you need to allow negative values. Negative + Positive → (-2,147,483,648 to 2,147,483,647)
Unsigned: When you know the value is never negative. Only Positive → (0 to 4,294,967,295)

4. BIGINT | A large integer
Use BIGINT for very large numbers like financial data or large IDs.

Signed: When you need to allow negative values. Negative + Positive → (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
Unsigned: When you know the value is never negative. Only Positive → (0 to 18,446,744,073,709,551,615)

5. DECIMAL(p, s) / NUMERIC(p, s) | A fixed precision number.
Used when you need exact numeric values, especially for money or financial data where rounding errors are unacceptable.

p = precision (total number of digits)
s = scale (number of digits after the decimal point)

Example: DECIMAL(10,2) can store numbers like 12345678.90.

6. FLOAT(p) | An approximate floating-point number (single precision).
FLOAT is a data type used to store numbers with decimal points, but it is not always perfectly accurate.

Example: You can store values like:

3.14
25.678
-12.5

But sometimes 3.14 might be stored as 3.1400001 because it is approximate.

7. DOUBLE PRECISION | A high-precision floating-point number (double precision).
Can store decimal numbers with more decimal places (more accurate).

Example: 3.1415926535 will stay more accurate as 3.1415926535 

=========================

2. Character/String Data Types

1. CHAR(n) | Fixed-size text
Always takes exactly n characters (pads with spaces).

Example: CHAR(5)
Save 'Hi' to 'Hi ' (adds spaces to make it 5 characters).

2. VARCHAR(n) | Flexible-size text
Takes up to n characters, no padding.

Save 'Hi' to 'Hi' (no spaces added).

3. TEXT | Big text
Stores large text (up to ~65,535 letters).
Example: Save a product description or a long comment.

4. TINYTEXT | Small text
Stores short text (up to 255 letters).
Example: Save a tag like 'urgent' or 'note'.

5. MEDIUMTEXT | Medium text
Stores up to 16 million letters.
Example: Save a full article or blog post.

6. LONGTEXT | Huge text
Stores up to 4 billion letters.
Example: Save a book or log file.

=========================

3. Date & Time Data Types

1. DATE | Stores only the date
Format: YYYY-MM-DD
Stores just the date, no time.
Example: '2025-03-18'

2. TIME | Stores only the time
Format: HH:MM:SS
Stores just the time, no date.
Example: '14:30:00' (2:30 PM)

3. DATETIME | Stores date + time
Format: YYYY-MM-DD HH:MM:SS
Combines date and time in one field.
Example: '2025-03-18 14:30:00'

4. TIMESTAMP | Stores date + time (auto-updates in some databases)
Similar to DATETIME, but: Often used for logging when something happened.
In some databases, it can auto-update to the current time on row changes.
Example: '2025-03-18 14:30:00'

TIMESTAMP is often used for created_at / updated_at columns.

YEAR | Stores only the year
Stores either 2-digit (99 = 1999) or 4-digit (1999) year formats.
Example: '2025' or '99'
*/

/*==========================*/

/*
// Practice Tables

CREATE TABLE student (
	student_id INT AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	std_age int NOT NULL,
	std_city VARCHAR(30) NOT NULL,
	std_country VARCHAR(30) NOT NULL
);

CREATE TABLE address (
address_id INT AUTO_INCREMENT PRIMARY KEY UNIQUE NOT NULL,
student_id INT,
std_city VARCHAR(50) NOT NULL,
std_country VARCHAR(50) NOT NULL,
FOREIGN KEY (student_id) REFERENCES student(student_id)
);

CREATE TABLE scores (
scores_id INT AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
student_id INT NOT NULL,
english INT NOT NULL,
programming INT NOT NULL,
pysics INT NOT NULL,
FOREIGN KEY(student_id) REFERENCES student(student_id)
)
*/
