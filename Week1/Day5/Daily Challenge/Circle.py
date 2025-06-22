import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}, diameter: {self.diameter:.2f}, area: {self.area:.2f}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __eq__(self, other):
        return isinstance(other, Circle) and self.radius == other.radius

    def __lt__(self, other):
        return isinstance(other, Circle) and self.radius < other.radius

    def __le__(self, other):
        return isinstance(other, Circle) and self.radius <= other.radius

    def __gt__(self, other):
        return isinstance(other, Circle) and self.radius > other.radius

    def __ge__(self, other):
        return isinstance(other, Circle) and self.radius >= other.radius

    def __ne__(self, other):
        return not self == other


# Test Code
if __name__ == "__main__":
    # Create circles using radius and diameter
    c1 = Circle(radius=3)
    c2 = Circle(diameter=8)

    print("C1:", c1)
    print("C2:", c2)

    # Access radius and diameter
    print("C1 Radius:", c1.radius)
    print("C1 Diameter:", c1.diameter)
    print("C1 Area:", c1.area)

    # Update diameter
    c1.diameter = 10
    print("Updated C1:", c1)

    # Add two circles
    c3 = c1 + c2
    print("C3 (C1 + C2):", c3)

    # Compare circles
    print("C1 == C2?", c1 == c2)
    print("C1 > C2?", c1 > c2)
    print("C1 < C2?", c1 < c2)

    # Sort circles
    circle_list = [c3, c1, c2]
    circle_list.sort()

    print("\nSorted Circles:")
    for circle in circle_list:
        print(circle)
