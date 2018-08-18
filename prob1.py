# definitely brute force

def three_or_five_mults():
    sum = 0
    for num in range(3, 1000):
        if (num % 3 == 0 or num % 5 == 0):
            sum += num
    return sum

print(three_or_five_mults())
