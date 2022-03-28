SELECT A.account_number FROM branch B
INNER JOIN account A  ON B.Branch_name = A.Branch_name
WHERE B.Branch_city = 'Riverside'