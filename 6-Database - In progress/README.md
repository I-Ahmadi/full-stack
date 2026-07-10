# Database - PostgreSQL Lessons

This folder teaches beginner SQL and relational database topics using PostgreSQL-style SQL.

## Recommended Order

1. `intro.sql` - what databases, tables, rows, columns, and primary keys are
2. `data_types.sql` - text, numbers, booleans, dates, arrays, enums, JSONB
3. `crud.sql` - create, read, update, delete
4. `fs_data.sql` - filtering and sorting data
5. `agg.sql` - aggregate functions, grouping, `HAVING`
6. `rel_joins.sql` - relationships, primary keys, foreign keys, joins

## How To Run

Open PostgreSQL's `psql`, connect to a database, then run a file:

```sql
\i 'D:/Full Stack Development/Full-Stack/6-Database - In progress/intro.sql'
```

Or from a terminal with `psql` available:

```powershell
psql -d my_first_db -f "6-Database - In progress/intro.sql"
```

## What To Remember

- Tables store rows and columns.
- Primary keys uniquely identify rows.
- Foreign keys connect tables.
- CRUD means insert, select, update, delete.
- `WHERE` filters rows before grouping.
- `HAVING` filters grouped results after `GROUP BY`.
- Joins combine rows from multiple tables.
