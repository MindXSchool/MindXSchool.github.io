# Count number of digits of a number

number = int(input('Enter a number: '))

count = 0
if number < 0:
    number = - number

while number > 0:
    count += 1
    number = number // 10

print('Number of digits are: ',count)