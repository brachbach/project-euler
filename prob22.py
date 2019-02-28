import string

def get_value(str):
    values = 0
    for i in range (len(str)):
        values = values + string.lowercase.index(str[i].lower()) + 1
    return values
    

with open("p022_names.txt") as names_file:
    names = names_file.read().split('","')
    names.sort()
    # print names
    total = 0
    for i in range(len(names)):
        rank = i + 1
        total = total + (rank * get_value(names[i]))
    print total

# print get_value("COLIN")