# find root of quadratic function
import math
def quadro(a, b, c):
    delta = b**2 - 4*a*c
    sqrtDelta = delta ** (1/2)

    if delta > 0:
        x1 = (-b - sqrtDelta) / (2*a)
        x2 = (-b + sqrtDelta) / (2*a)

        print('The function has two root: ', 'x1 = ', x1, 'x2 = ', x2)

    elif delta == 0:
        x = -b / (2*a)

        print('The fucntion has two same root: ', 'x1 = x2 = ', x)

    else:
        print('The function has no root')

quadro(1, 2, 1)
quadro(3, 4, 1)
quadro(2,3, 4)



