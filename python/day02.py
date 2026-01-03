# print(len('123456'))
# subscripting

# print('hellow'[0])  0 1 2 3 4 5

# print("123"+"232")
# print(len(1234))
# name_of_employee=len(str(input('enter your name')))
# print(name_of_employee)
# if name_of_employee<2:
#     print("subham")
# else:
#     print("dash")
# PEMDAS
# 12+1-2=11
# print(3*4+3/3-2)
# bill tip 
# pedmas
# f sting 
print('enter in your app')
bill=float(input('What was the total bill? ₹'))
tips =int(input('What tip would you like to give 10,20,30,40?'))
split_people=int(input('How many people to split the bill?'))
tip = bill * (tips / 100)
total_bill = bill + tip
per_person = total_bill / split_people
print(f"per person bill {round(per_person,2)}")


