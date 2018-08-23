# plan of attack: build up a hash of numbers to length of collatz sequence
# that way for each new number you collatz until it lines up w/ an old sequence, then you're done

def largest_collatz(max_start):
    max_length_so_far = 1
    longest_so_far = 1
    start_to_length = {1: 1}
    def collatz_length(start):
        if (start in start_to_length):
            return start_to_length[start]
        next = start / 2  if start % 2 == 0 else 3 * start + 1
        length = 1 + collatz_length(next)
        start_to_length[start] = length
        return length
    for start in range(2, max_start):
        length = collatz_length(start)
        if length > max_length_so_far:
            max_length_so_far = length
            longest_so_far = start
    return longest_so_far

# print largest_collatz(3) 
# should be 2: 2 => 1
print largest_collatz(1000000)
