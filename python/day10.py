def is_leap_year(year):
    if (year%400==0 )or (year % 4 ==0 and year % 100 != 0):
        print('leapyear')
    else:
        print("not leapyear")
is_leap_year(2001)
""" leap year is divide by 400  or divide by 4 and not divide 100"""