# # dictoroy_nesting
# # dictionaries to store key and value to store
# # they allow group together 


# def student_scores_data(student_scores):
#     for name, score in student_scores.items():
#         if 91 <= score <= 100:
#             print(name, 'Outstanding')
#         elif 81 <= score <= 90:
#             print(name, 'Exceeds Expectations')
#         elif 71 <= score <= 80:
#             print(name, 'Acceptable')
#         elif score <= 70:
#             print(name, 'Fail')
#         else:
#             print(name, 'Invalid number')


# student_scores_data({
#     'Harry': 88,
#     'Ron': 78,
#     'Hermione': 95,
#     'Draco': 75,
#     'Neville': 60
# })
# order = {
#     "starter": {1: "Salad", 2: "Soup"},
#     "main": {1: ["Burger", "Fries"], 2: ["Steak"]},
#     "dessert": {1: ["Ice Cream"], 2: []},
# }
# print(order['main'][2])

def sample_highest_bid(bids):
    highest_bid = 0
    winner = ""

    for name, price in bids.items():
        if price > highest_bid:
            highest_bid = price
            winner = name

    return f"Winner is {winner} with bid ₹{highest_bid}"


 
# list and while loop

sample = {}
bid_price = True
while bid_price :
    name = input("Enter your name: ")
    price = int(input("Enter your bid price: ₹"))
    
    sample[name]=price
    choice = input("Do you want to continue bidding? (yes/no): ").lower()
    if choice == 'no':
        bid_price = False
        
    result = sample_highest_bid(sample)
print(result)
