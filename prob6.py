one_to_one_hundred = range(1,101)
squares = [num**2 for num in one_to_one_hundred]
sum_of_squares = sum(squares)

print(sum(range(1,101))**2 - sum_of_squares)