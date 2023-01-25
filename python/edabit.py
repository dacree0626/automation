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
    if circumferance > perimeter:
        return True
    else:
        return False

print(circle_or_square(5,100))