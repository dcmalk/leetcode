-- USE leetcode;
-- Create table If Not Exists Weather (id int, recordDate date, temperature int);
-- Truncate table Weather;
-- insert into Weather (id, recordDate, temperature) values ('1', '2015-01-01', '10');
-- insert into Weather (id, recordDate, temperature) values ('2', '2015-01-02', '25');
-- insert into Weather (id, recordDate, temperature) values ('3', '2015-01-03', '20');
-- insert into Weather (id, recordDate, temperature) values ('4', '2015-01-04', '30');

# Write your MySQL query statement below
--
-- Based on the challenge description specifying 'yesterday,' I assumed the dates would
-- always be consecutive, which led to the use of LAG() without accounting for potential
-- gaps in dates. However, this fails an edge case.
--
-- SELECT id
--   FROM (
--       SELECT id, temperature,
--              LAG(temperature) OVER (ORDER BY recordDate) AS prev_temperature
--         FROM weather
--   ) AS temp
--  WHERE temperature > prev_temperature;

-- After discovering the dates weren't guaranteed to be consecutive, I opted for a self-join
-- approach for its simplicity and ability to explicitly handle gaps in dates. This passes.
--
SELECT w1.id
  FROM Weather w1
  JOIN Weather w2
    ON w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)
 WHERE w1.temperature > w2.temperature;

