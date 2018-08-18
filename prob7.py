import math

def find_nth_prime(n):
    primes_so_far = [2, 3, 5]
    while len(primes_so_far) < n:
        to_check = primes_so_far[-1]
        while True:
            if (to_check + 1) % 6 == 0:
                to_check += 2
            else:
                to_check += 4
            is_prime = True
            for prime in primes_so_far:
                if prime > math.sqrt(to_check):
                    is_prime = True
                    break
                if to_check % prime == 0:
                    is_prime = False
                    break
            if is_prime == True:
                primes_so_far.append(to_check)
                break
    return primes_so_far[-1]

print(find_nth_prime(10001))
        
            
