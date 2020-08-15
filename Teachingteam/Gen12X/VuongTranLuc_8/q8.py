# delete head/tail number of a sequence

numberList = [1, 2, 3, 4 , 5]

print('Hi there, this is our sequence:')

for number in numberList:
    print(number, end=' ')

print()

delPosition = input('Where do you want to delete (head/tail)?: ')

while True: 

    if delPosition == 'head':
        numberList.pop(0)
        break

    elif delPosition == 'tail': 
        numberList.pop(len(numberList)-1)
        break

    else: 
        print('Wrong position, please try again!')
        delPosition = input('Where do you want to delete (head/tail)?: ')

print('This is our new sequence: ')

for number in numberList:
    print(number, end=' ')

print()




