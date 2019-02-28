# with each doubling of the overall number, each individual digit doubles
# so you can keep track of the individual digits instead of the overall number
# the only slightly annoying bit is moving the remainder to the next digit after each step

def digits_of_2_to_the_n(n):
    digits_so_far = [1]
    for doubling in range(n):
        digits_so_far = [digit * 2 for digit in digits_so_far]
        # the number will be written backwards but it's nicer to deal w/
        for place in range(len(digits_so_far)):
            digit = digits_so_far[place]
            digits_so_far[place] = digit % 10
            to_carry = digit // 10
            if len(digits_so_far) < place + 2:
                digits_so_far += [to_carry]
            else:
                digits_so_far[place + 1] += to_carry
    return digits_so_far

print digits_of_2_to_the_n(15)
# 32768

print sum(digits_of_2_to_the_n(1000))