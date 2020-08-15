"""
Viết một chương trình cho phép người dùng nhập vào một số 
và đếm số chữ số của số mà người dùng nhập vào.
"""
def digit_count(number):
    if number < 10:
        return 1
    return digit_count(number // 10) + 1

loop = True
while loop:
    number = input("Enter a number: ")
    try:
        number = int(number)
        print(digit_count(number))
        loop = False
    except ValueError:
        print("Invalid, try again!")