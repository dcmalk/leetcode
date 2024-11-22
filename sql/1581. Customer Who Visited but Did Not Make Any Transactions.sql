-- USE leetcode;
-- Create table If Not Exists Visits(visit_id int, customer_id int);
-- Create table If Not Exists Transactions(transaction_id int, visit_id int, amount int);
-- Truncate table Visits;
-- insert into Visits (visit_id, customer_id) values ('1', '23');
-- insert into Visits (visit_id, customer_id) values ('2', '9');
-- insert into Visits (visit_id, customer_id) values ('4', '30');
-- insert into Visits (visit_id, customer_id) values ('5', '54');
-- insert into Visits (visit_id, customer_id) values ('6', '96');
-- insert into Visits (visit_id, customer_id) values ('7', '54');
-- insert into Visits (visit_id, customer_id) values ('8', '54');
-- Truncate table Transactions;
-- insert into Transactions (transaction_id, visit_id, amount) values ('2', '5', '310');
-- insert into Transactions (transaction_id, visit_id, amount) values ('3', '5', '300');
-- insert into Transactions (transaction_id, visit_id, amount) values ('9', '5', '200');
-- insert into Transactions (transaction_id, visit_id, amount) values ('12', '1', '910');
-- insert into Transactions (transaction_id, visit_id, amount) values ('13', '2', '970');

# Write your MySQL query statement below
SELECT v.customer_id, COUNT(*) AS count_no_trans
  FROM Visits v
  LEFT JOIN Transactions t
    ON v.visit_id = t.visit_id
 WHERE t.transaction_id IS NULL
 GROUP BY v.customer_id;

-- Test efficiency of avoiding a join
--  SELECT v.customer_id, COUNT(*) AS count_no_trans
--   FROM Visits v
--  WHERE NOT EXISTS (
--     SELECT 1
--      FROM Transactions t
--     WHERE v.visit_id = t.visit_id
--  )
--  GROUP BY v.customer_id;