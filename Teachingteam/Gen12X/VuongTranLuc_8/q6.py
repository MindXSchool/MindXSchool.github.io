# Add number at the end of a list

numberList = [1, 2, 3, 4,5]

print('Hi there, this is our sequences: ')

for number in numberList:
    print(number, end=' ')

print()

newNumber = int(input('what do you want to add: '))
numberList.append(newNumber)

print('This is our new sequence: ')

for number in numberList:
    print(number, end=' ')

print()