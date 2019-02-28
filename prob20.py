# note that for convenience and efficiency, large_num_array starts with the ones, then the tens, etc. -- it's "backwards"
def product (small_multiplicand, large_num_array):
    product_array = [num_in_array * small_multiplicand for num_in_array in large_num_array]
    i = 0
    while i < len(product_array):
        product_in_array = product_array[i]
        product_array[i] = product_in_array % 10
        remainder = product_in_array // 10
        if (remainder != 0):
            if (len(product_array) - 1 < i + 1):
                product_array.append(0)
            product_array[i + 1] = product_array[i + 1] + remainder
        i = i + 1
    return product_array

print product(27, [5, 5])
# 27 * [5, 5]
# [135, 135]
# [148, 5]
# [14, 8, 5]
# [1, 4, 8, 5]

print product(842, [7, 5, 5, 5])
# 4678994

def factorial_sum (max):
    num_array = [1]
    for num in range(2, max + 1):
        num_array = product(num, num_array)
    return sum(num_array)

print factorial_sum(10)


