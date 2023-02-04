import math

def dis(price, discount):
    disc = discount/100
    print(disc)
    return price * disc

print(dis(1000,50))

def tri_area(base, height):
    return(str((base * height) / 2))

print("triangle area: " + tri_area(3,6))

def color_invert(rgb):
    first = abs(255 - rgb[0])
    second = abs(255 - rgb[1])
    third = abs(255 - rgb[2])
    return (first, second, third)

print(color_invert((165, 170, 221)))


def stutter(word):
    g = word[:2]
    return(g + "... " + g + "... " + word)

print(stutter("incredible"))

# Given the radius of a circle and the area of a square, return 
# True if the circumference of the circle is greater than the square's perimeter and 
# False if the square's perimeter is greater than the circumference of the circle.
# You can use Pi to 2 decimal places (3.14).
# Circumference of a circle equals 2 * Pi * radius.
# To find the perimeter of a square using its area, find the square root of area (to get side length) and multiply that by 4.

def circle_or_square(radius, area):
    circumferance = radius * 3.14 * 2
    perimeter = (area ** .5) * 4
    if (circumferance > perimeter or circumferance == perimeter):
        return True
    else:
        return False

print(circle_or_square(5,100))

# You are given two numbers a and b. Create a function that returns the next number greater than a and b and divisible by b.

def divisible_by_b(a, b):
    c = b
    while(c < a):
        c = c + b
    return c

print(divisible_by_b(17,8))


# Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
# If the number is a multiple of 3 the output should be "Fizz".
# If the number given is a multiple of 5, the output should be "Buzz".
# If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
# If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
# The output should always be a string even if it is not a multiple of 3 or 5.

def fizzBuzz(x):
    fbr = str(x)
    if ((x % 3 != 0) and (x % 5 != 0)):
        return fbr
    elif((x % 3 == 0) and (x % 5 != 0)):
        return "Fizz"
    elif((x % 3 != 0) and (x % 5 == 0)):
        return "Buzz"
    elif((x % 3 == 0) and (x % 5 == 0)):
        return "FizzBuzz"

print(fizzBuzz(18))


# Create methods for the Calculator class that can do the following:

# Add two numbers.
# Subtract two numbers.
# Multiply two numbers.
# Divide two numbers.

class Calculator:
    def add(self, a, b):
        return a + b
    def subtract(self, a, b):
        return a - b
    def multiply(self, a, b):
        return a * b
    def divide(self, a, b):
        return a / b

calculator = Calculator()

print(calculator.add(10,5))
print(calculator.subtract(10,5))
print(calculator.multiply(10,5))
print(calculator.divide(10,5))


# Create a function that takes r1 and r2 as arguments and returns the volume of a spherical shell rounded to the nearest thousandth.

def vol_shell(r1, r2):
    if(r1 >= r2):
        return math.pi * (4/3) * (r1**3 - r2**3)
    else:
        return math.pi * (4/3) * (r2**3 - r1**3)

print(vol_shell(1,1))

# Collatz sequence: If even, divide by 2. If odd, 3n + 1
# Create a function that, when given two positive integers a b, 
# returns the string "a" if integer a took fewer steps to reach 1 than b when passed through the Collatz sequence, 
# or "b" if integer b took fewer steps to reach 1 than a.

def collatz(a,b):
    aa = 0
    bb = 0
    while(a != 1):
        if(a % 2 == 0):
            a = a / 2
        else:
            a = (a*3) + 1
        aa = aa + 1
    
    while(b != 1):
        if(b % 2 == 0):
            b = b / 2
        else:
            b = (b*3) + 1
        bb = bb + 1

    if(aa <= bb):
        return "a"
    else:
        return "b"

print(collatz(13,16))

def max_collatz(a):
    aa = []
    while(a != 1):
        if(a % 2 == 0):
            a = a / 2
        else:
            a = (a*3) + 1
        aa.append(a)
    maxaa = 0
    for el in aa:
        if(el > maxaa):
            maxaa = el
    return maxaa

print(max_collatz(85))

def fibonacci(n):
    a = 1
    b = 1
    for x in range(n - 2):
        b = b + a
        a = b
    return b

print(fibonacci(5))

# 1, 1, 2, 3, 5, 8, 13, 21
# 1, 2, 3, 4, 5, 6, 7, 8