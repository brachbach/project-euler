import math
# a^2 + b^2 = c^2
# c = sqrt(a^2 + b^2)

# a + b + c = 1000
# c = 1000 - a - b

# 1000 - a - b = sqrt(a^2 + b^2)

# if a = b: 1000 -2a = sqrt(2a^2)
# 1000 -2a = sqrt(2)a
# 1000 = 2 + sqrt(2)a
# a = 292.8

# still want to think about ways to optimize more

def find_ab():
    # c must be greater than either a or b
    # as shown above, if it were the case that a = b (lowest possible a), then a would be about 292.8
    # and of course b can't be smaller than 1
    for a in range(292,500):
        # as shown above, if it were the case that a = b (highest possible b), then b would be about 292.8
        for b in range(1, min(a + 1, 294)):
            if 1000 - a - b == math.sqrt(a**2 + b**2):
                return a, b

print(find_ab())