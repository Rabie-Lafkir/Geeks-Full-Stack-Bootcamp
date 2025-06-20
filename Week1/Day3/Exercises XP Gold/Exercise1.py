import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * self.radius ** 2

    def definition(self):
        print("A circle is a shape with all points equidistant from its center.")

# Usage Example
if __name__ == "__main__":
    c = Circle(5)
    print("Radius:", c.radius)
    print("Perimeter:", c.perimeter())
    print("Area:", c.area())
    c.definition()
