import math

def quadro(a, b, c):
    if a == 0:
        return (-c/b)
    else:
        delta = pow(b,2) - 4*a*c
        if delta < 0:
            return "No solution"
        elif delta == 0:
            return (-b/(2*a))
        else:
            x1 = (-b + math.sqrt(delta)) / (2*a)
            x2 = (-b - math.sqrt(delta)) / (2*a)
            return x1, x2

loop = True
while loop:
    a, b, c = input("Enter a b c: ").split()
    try:
        a = int(a)
        b = int(b)
        c = int(c)
        print("Function: {}x^2 + {}x + {} = 0".format(a, b, c))
        print("Solution:")
        print(quadro(a, b, c))
        loop = False
    except ValueError:
        print("Invalid, try again!")
    
