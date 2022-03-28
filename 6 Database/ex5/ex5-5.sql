SELECT D.customer_name,sum(balance) FROM account A
INNER JOIN depositor D  ON A.account_number = D.account_number
GROUP BY D.customer_name
HAVING count(*) > 1
ORDER BY sum(balance) DESC
