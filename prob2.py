def recursive_memoized_fib(fibs_so_far, max_value):
    new_fib = fibs_so_far[-2] + fibs_so_far[-1]
    if new_fib > max_value:
        return fibs_so_far
    fibs_so_far.append(new_fib)
    return recursive_memoized_fib(fibs_so_far, max_value)
    
all_fibs = recursive_memoized_fib([1, 2], 4000000)
even_fibs = [fib for fib in all_fibs if fib % 2 == 0]
print(sum(even_fibs))