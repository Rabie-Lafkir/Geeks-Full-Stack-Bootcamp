class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}"


dog1 = Dog(name="Rex", age=5, weight=20)
dog2 = Dog(name="Buddy", age=3, weight=25)
dog3 = Dog(name="Luna", age=4, weight=18)


print(dog1.bark())          
print(dog2.run_speed())      
print(dog1.fight(dog2))      
print(dog2.fight(dog3))      
print(dog3.fight(dog1))      
