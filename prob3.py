# approaches:
# - start factoring it, and see what I'm left with
# - start from the number and go down -- clearly worse

def find_small_factors(number, factors_so_far, max):
    factor_to_try = 2
    while factor_to_try < max:
        if number % factor_to_try == 0:
            factors_so_far.append(factor_to_try)
            return find_small_factors(number / factor_to_try, factors_so_far, max)
        factor_to_try += 1
    return number, factors_so_far

print(find_small_factors(600851475143, [], 10000))
            