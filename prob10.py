import math

def find_primes_to_n(n):
    primes_so_far = [2, 3]
    num_to_check = 5
    while num_to_check < n:
        is_prime = True
        for prime in primes_so_far:
            if prime > math.sqrt(num_to_check):
                is_prime = True
                break
            if num_to_check % prime == 0:
                is_prime = False
                break
        if is_prime == True:
            primes_so_far.append(num_to_check)
        if (num_to_check + 1) % 6 == 0:
            num_to_check += 2
        else:
            num_to_check += 4
    return primes_so_far

print(sum(find_primes_to_n(2000000)))