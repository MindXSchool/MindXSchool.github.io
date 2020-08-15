"""
Viết một chương trình cho phép người dùng nhập 
vào hai số, tính tổng của 2 số này rồi in ra
"""
def add(a, b):
    return a + b

loop = True
while loop:
    a, b = input("Enter two numbers: ").split()
    try:
        a = int(a)
        b = int(b)
        print(add(a, b))
        loop = False
    except ValueError:
        print("Invalid, try again!")
    