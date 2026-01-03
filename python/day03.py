# print('Welcome to the rollercoaser!')
# height = int(input("What is height in cm ??"))
# if height>=120:
#    print('you can ride jhulla')
# else:
#     print("sssssssssssssssssssssssssssss")

# print("🎢 Welcome to Subham Play Station")

# client_name = input("Tell your first name: ")
# height = int(input("Enter your height (in cm): "))

# if height > 120:
#     age = int(input("Enter your age: "))

#     if age <= 12:
#         print(f"{client_name}, you need to pay $7.")
#     elif age <= 18:
#         print(f"{client_name}, you need to pay $12.")
#     else:
#         print(f"{client_name}, you need to pay $18.")
# else:
#     print(f"Sorry {client_name}, you are not eligible for this ride.")
# first_name = input("Enter your name: ")
# print(f"Welcome {first_name}, Happy New Year 🎉")

# height = float(input("Enter your height (cm): "))

# if height > 120:
#     print("You can ride 🎢")
#     age = int(input("Enter your age: "))

#     bill = 0

#     if age < 12:
#         bill = 5
#         print("Child ticket: $5")
#     elif age <= 18:
#         bill = 7
#         print("Teen ticket: $7")
#     elif age > 18:
#         bill = 12
#         print("Adult ticket: $12")
#     else:
#         print("Invalid age")

#     photo_want = input("Do you want a photo? (Y/N): ").upper()
#     if photo_want == 'Y':
#         bill += 3
#         print("Photo charge added: $3")

#     print(f"Total bill to pay: ${bill}")

# else:
#     print("Sorry, you can't ride 🚫")
# user_name =input('enter username:')
# print(f'Welcome to pizza Deliveries{user_name}')

# size=input('What size pizza do you want ?? S,M or L??')
# pepperoni=input("Do you want pepperoni on your pizza ? Y or N")
# extrea_cheese =input("Do you want pepperoni on your extrea_cheese ? Y or N")
# pize_price =0
# if size =='S':
#     pize_price+=15
# elif size =='M':
#     pize_price+=20
# elif size =="L":
#      pize_price+=25
# else:
#     print("You type the wrong inputs.")
# if pepperoni =='Y':
#     if size =='S':
#         pize_price+=2
#     else:
#         pize_price+=3
# if extrea_cheese=='Y':
#     pize_price+=1
# print(f"YOUR FINAL BILL IS {pize_price}")
        
# treasure island 
print("🏴‍☠️ Welcome to Treasure Island.")
print("Your mission is to find the treasure.\n")

treasure_path = input("You're at a cross road. Type 'left' or 'right': ").lower()

if treasure_path == 'right':
    print("💥 Game Over.")
else:
    swim_path = input("You come to a lake. Type 'swim' or 'wait': ").lower()

    if swim_path == 'swim':
        print("🐊 Game Over.")
    else:
        door_path = input("Which door? Blue, Red or Yellow: ").lower()

        if door_path == 'red':
            print("🔥 Game Over.")
        elif door_path == 'blue':
            print("🐍 Game Over.")
        elif door_path == 'yellow':
            print("🎉 You Win! Treasure Found 🏆")
        else:
            print("🚪 Invalid choice. Game Over.")
