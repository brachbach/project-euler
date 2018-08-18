def is_palindrome(number):
    as_str = str(number)
    reverse_str = as_str[::-1]
    return as_str == reverse_str

def largest_palindrome():
    biggest_so_far = 0
    for i in range(999, 99, -1):
        for j in range(999, 99, -1):
            if is_palindrome(i * j):
                if i * j > biggest_so_far:
                    biggest_so_far = i * j
    return biggest_so_far

print(largest_palindrome())