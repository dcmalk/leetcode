-- USE leetcode;
-- Create table If Not Exists Tweets(tweet_id int, content varchar(50));
-- Truncate table Tweets;
-- insert into Tweets (tweet_id, content) values ('1', 'Let us Code');
-- insert into Tweets (tweet_id, content) values ('2', 'More than fifteen chars are here!');

# Write your MySQL query statement below
-- SELECT tweet_id
--   FROM Tweets
--  WHERE CHAR_LENGTH(content) > 15;

-- Using a subquery may improve execution plan optimization
SELECT tweet_id
  FROM (SELECT tweet_id, CHAR_LENGTH(content) AS len FROM Tweets) AS temp
 WHERE len > 15;