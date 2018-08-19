import math
# a^2 + b^2 = c^2
# c = sqrt(a^2 + b^2)

# a + b + c = 1000
# c = 1000 - a - b

# 1000 - a - b = sqrt(a^2 + b^2)

def find_ab():
    for a in range(1,1000):
        for b in range(1,1000):
            if 1000 - a - b == math.sqrt(a**2 + b**2):
                return a, b

print(find_ab())