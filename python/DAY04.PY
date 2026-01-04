import random
# print(random.random()*10)
# print(round(random.uniform(1,10),1))
# friens=['Alice','bob','Charlie','David','subham']
# data =random.randint(0,len(friens))
# print(friens[data])
# print(random.choice(friens))
# data = random.randint(0, 1)
# if data == 0:
#     print("head")
# else:
#     print("Tail")
# rock paper scissors
import  random
data_input = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors: "))
choices = ['ROCK', 'PAPER', 'SCISSORS']
if data_input<0 and data_input>2:
    print('invalid ')
else:
     computer_choice = random.randint(0, 2)
print("You chose:", choices[data_input])
print("Computer chose:", choices[computer_choice])
if data_input ==computer_choice :
    print('draw')
elif (data_input == 0 and computer_choice == 2) or \
         (data_input == 1 and computer_choice == 0) or \
         (data_input == 2 and computer_choice == 1):
        print("User wins 🎉")
else:
    print('computer wins')
