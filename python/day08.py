# def calculate_love_score(name1,name2):
#     combined_names=(name1+name2).lower()
#     true_count = (
#         combined_names.count("t") +
#         combined_names.count("r") +
#         combined_names.count("u") +
#         combined_names.count("e")
#     )

#     love_count = (
#         combined_names.count("l") +
#         combined_names.count("o") +
#         combined_names.count("v") +
#         combined_names.count("e")
#     )
#     love_score = int(str(true_count) + str(love_count))
#     return love_score
    
    
# calculate_love_score("Kanye West", "Kim Kardashian")

# encrypt to encrypt 
# decrypt to decrypt
# alphabet = [
#     'a','b','c','d','e','f','g','h','i','j','k','l','m',
#     'n','o','p','q','r','s','t','u','v','w','x','y','z'
# ]

# def encrypt(name, shift):
#     sample = ""
#     for letter in name:
#         sample_data = alphabet.index(letter) + shift
#         shift_postion =sample_data%len(alphabet)
#         print(sample_data,shift_postion)
#         sample += alphabet[shift_postion]
#     return sample

# daa = encrypt('subham', 1)
# print(daa)


alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
]

def encrypt(name, shift):
    sample = ""
    for letter in name:
        sample_data = alphabet.index(letter) -shift
        shift_postion =sample_data%len(alphabet)
        sample += alphabet[shift_postion]
    return sample

daa = encrypt('tvcibn', 1)
print(daa)
