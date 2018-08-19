import math
# a^2 + b^2 = c^2
# c = sqrt(a^2 + b^2)

# a + b + c = 1000
# c = 1000 - a - b

# 1000 - a - b = sqrt(a^2 + b^2)

# still want to think about ways to optimize more

def find_ab():
    # c must be greater than either a or b
    for a in range(1,500):
        # math.sqrt(300**2 * 2) > 400
        for b in range(1,300):
            if 1000 - a - b == math.sqrt(a**2 + b**2):
                return a, b

print(find_ab())