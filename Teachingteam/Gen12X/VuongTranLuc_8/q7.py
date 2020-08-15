# add number at the front of a sequences

numberList = [1, 2, 3, 4, 5]

print("Hi there, this is our sequences:")

for number in numberList:
    print(number, end=' ')

print()

newNumber = int(input('What do you want to add: '))
numberList.insert(0, newNumber)

print('This is our new sequence: ')

for number in numberList: 
    print(number, end=' ')

print()