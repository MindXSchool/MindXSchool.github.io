import random

sequence = [random.randint(-10, 10) for i in range(4)]

print("Hi there, this is our sequence:")
print(*sequence, sep=", ")

if len(sequence) > 0:
    loop = True
    while loop:
        answer = input("Where do you want to delete (head/tail): ")
        if answer == "head":
            pos = 0
            loop = False
        elif answer == "tail":
            pos = -1
            loop = False
        else:
            print("Invalid, try again!")

    sequence.pop(pos)
    print("This is our new sequence:")
    print(*sequence, sep=", ")
