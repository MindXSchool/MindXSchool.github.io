import random

sequence = [random.randint(-10, 10) for i in range(4)]

print("Hi there, this is our sequence:")
print(*sequence, sep=", ")

loop = True
while loop:
    number = input("Enter a number: ")
    try:
        number = int(number)
        sequence.insert(0, number)
        print("This is our new sequence:")
        print(*sequence, sep=", ")
        loop = False
    except ValueError:
        print("Invalid, try again!")