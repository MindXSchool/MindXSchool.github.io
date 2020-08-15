"""
Viết một chương trình cho phép người dùng nhập vào một năm (ví dụ 1989) 
kiểm tra và in ra xem năm người dùng nhập vào có phải năm nhuận không
"""
def is_leap_year(year):
    if year % 4 == 0:
        return True
    return False

loop = True
while loop:
    year = input("Enter a year: ")
    try:
        year = int(year)
        if is_leap_year(year):
            print('{} is a leap year'.format(year))
        else:
            print('{} is not a leap year'.format(year))
        loop = False
    except ValueError:
        print("Invalid, try again!")