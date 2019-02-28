monthsToDays = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
}

daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

def sun_on_first():
    year = 1900
    month = 0
    day = 7
    max_year = 2000
    sun_on_first_so_far = 0

    while (year <= max_year):

        if (day == 1 and not year == 1900):
            sun_on_first_so_far = sun_on_first_so_far + 1
        
        day = day + 7

        days_in_month = daysPerMonth[month]

        if (days_in_month == 28):
            if (year % 4 == 0):
                days_in_month = 29

        if (day > days_in_month):
            day = day % days_in_month
            month = month + 1
        
        if (month == 12):
            month = 0
            year = year + 1

        print day, month, year
    
    return sun_on_first_so_far

print sun_on_first()

