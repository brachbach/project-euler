# further optimiziation: don't do the multiplication when the new number on the right is smaller than the one on the left
# I think it's a bit tricky though to get that right

# another optimiziation -- keep track of how many zeros are in the string. That's pretty straightforward

# another -- start by converting to an array of numbers. Cuts down on conversions you have to do

# another -- skip ahead by run_length when you see zeros
digits = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'

def largest_product(digit_string, run_length):
    largest_so_far = 0
    product = 0
    start = 0
    for start in range (0, len(digit_string) - run_length):
        # print('product:', product)
        # print(digit_string[start: start + run_length])
        if product == 0:
            if not digit_string[start - 1] == '0':
                continue
            substring = digit_string[start: start + run_length]
            product = reduce(lambda product_so_far, next_digit: product_so_far * int(next_digit), substring, 1)
        else:
            # print(int(digit_string[start + run_length -1]))
            product = (product / int(digit_string[start - 1])) * int(digit_string[start + run_length -1])
        if product > largest_so_far:
            largest_so_far = product
    return largest_so_far

print(largest_product(digits, 13))
        
            