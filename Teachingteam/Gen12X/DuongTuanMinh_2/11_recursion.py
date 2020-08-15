import random

def find_min(arr):
    if len(arr) == 1:
        return arr[0]
    else:
        new_min = find_min(arr[1:])
        if arr[0] > new_min:
            return new_min
        else:
            return arr[0]

# sequence = [random.randint(-10, 10) for i in range(10)]
# print("List:", sequence)
# print("Min value:", find_min(sequence))
# print()

def factorial(n):
    ans = 1
    if n == 0:
        return ans
    else:
        return n*factorial(n-1)

# print(factorial(0))
# print(factorial(3))
# print(factorial(5))
# print()

def fibonacci(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
# 0 1 1 2 3 5 8 13...
# print(fibonacci(1))
# print(fibonacci(8))
# print()

def gcd(a, b):
    """Computing the greatest common divisor of two integers"""
    if a == b:
        return a
    else:
        return gcd(min(a,b), max(a,b) - min(a,b))

# print(gcd(9, 4))
# print(gcd(120, 75))
# print()

def reverse_list(arr):
    if len(arr) == 1:
        return arr
    else:
        return reverse_list(arr[1:]) + arr[:1]

# print("List:",sequence)
# print("Result:",reverse_list(sequence))
# string = "MindX Dream"
# print("String: ",string)
# print("Result:",reverse_list(string))