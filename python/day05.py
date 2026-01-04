import string
import random

alphabets = list(string.ascii_lowercase)   # a to z
numbers = list(string.digits)              # 0 to 9
symbols = list(string.punctuation)          # symbols
name_chart =int(input('enter you length of chartcater:'))
nr_symboll =int(input('enter you symboll of chartcater:'))
nr_number =int(input('enter you numer of chartcater:'))
string_data ='';
for name_charts in range(1,name_chart+1):
    string_data+=random.choice(alphabets)
for name_charts in range(1,nr_symboll+1):
    string_data+=random.choice(numbers)
for name_charts in range(1,nr_number+1):
    string_data+=random.choice(symbols)
print(string_data)

