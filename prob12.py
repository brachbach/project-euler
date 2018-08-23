import math

def nth_triangular_number(n, prev_triangular = 1, prev_int = 1):
    if n == prev_int:
        return prev_triangular
    new_int = prev_int + 1
    return nth_triangular_number(n, prev_triangular + new_int, new_int)

assert nth_triangular_number(1) == 1
assert nth_triangular_number(2) == 3
assert nth_triangular_number(3) == 6

def find_factors(n):
    factors = [n]
    for i in range(1, int(math.floor(n/2)) + 1):
        if n % i == 0:
            factors.append(i)
    return factors

# print find_factors(28)

def find_triangular_with_n_factors(n):
    i = 1
    current_triangular = 1
    # simple lower bound, assuming that everything up to 500 was a factor,
    # and of course that there are no factors > 1/2 of n

    # a better lower bound would actually look at the first 500 numbers more carefully
    lower_bound = 490 * 2
    while current_triangular < lower_bound:
        i +=1
        current_triangular += i
    while True:
        i +=1
        current_triangular += i
        if (len(find_factors(current_triangular)) > n):
            return current_triangular

print find_triangular_with_n_factors(500)

