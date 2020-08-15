#recusion

def giaiThua(n):
    if n == 1:
        return 1

    else:
        return (n * giaiThua(n-1))


def fibbonancii(n):
    if n < 0: 
        return 'Please enter a possitive integer'

    elif n == 0:
        return 1

    elif n == 1:
        return 1
    
    elif n == 2:
        return 1

    else:
        return fibbonancii(n-1) + fibbonancii(n-2)

def UCLN(a, b):
    if a > b:

        remainder = a % b

        if remainder == 0:
            return b
        
        else: 
            return UCLN(b, remainder)

    else:

        return UCLN(b, a)


def reverseList(theList):
    if len(theList) == 1:
        return theList

    else: 
        return theList[(len(theList)-1):] \
             + reverseList(theList[:(len(theList)-1)])  


print(findMin([1, 4, 5, 10, 3]))