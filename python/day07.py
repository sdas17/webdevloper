import random

sample = ['dash', 'subham', 'rahul']
live = 5
dumy = random.choice(sample)

sample_data = "-" * len(dumy)

print("Word:", sample_data,live)

while live > 0 and "-" in sample_data:
    sample = input("Guess a letter: ").lower()
    new_sample_data = ""
    wins_flag = False

    for i in range(len(dumy)):
        if dumy[i] == sample:
            wins_flag = True
            new_sample_data += dumy[i]
        else:
            new_sample_data += sample_data[i]

    sample_data = new_sample_data
    print("Word:", sample_data)

    if wins_flag:
        print("Correct guess 🎉")
    else:
        live -= 1
        print("Wrong guess 💀 Lives left:", live)

if "-" not in sample_data:
    print("🎉 You WIN! Word:", dumy)
else:
    print("💀 You LOSE! Word was:", dumy)
