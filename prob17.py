numbersToWords = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand"
}

def convertToWords(num):
    numString = str(num)
    
    while (len(numString) < 4):
        numString = "0" + numString

    digits = [int(char) for char in numString]

    ones = digits [-1]
    tens = digits [-2]
    hundreds = digits [-3]
    thousands = digits [-4]

    if (tens < 2):
        tensAndOnes = tens * 10 + ones
        words = numbersToWords[tensAndOnes]

    else:
        words = numbersToWords[ones]
        words = numbersToWords[tens * 10] + words
    
    if (hundreds > 0):
        hundredsWords = numbersToWords[hundreds] + "hundred"
        if (len(words) > 0):
            words = hundredsWords + "and" + words
        else:
            words = hundredsWords 
    
    if (numString == "1000"):
        words = "onethousand"
    
    return words

def countChars(max):
    totalChars = 0
    for num in range(1, max + 1):
        totalChars = totalChars + len(convertToWords(num))
    return totalChars



print convertToWords(965)
print convertToWords(119)
print convertToWords(1000)
print convertToWords(500)
print convertToWords(509)

print countChars(5)
print countChars(1000)