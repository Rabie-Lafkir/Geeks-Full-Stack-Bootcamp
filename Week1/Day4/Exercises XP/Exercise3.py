import random

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


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + list(args)
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet.")


dog1 = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 4, 18)
dog3 = PetDog("Max", 3, 15)

dog1.train()

dog1.play(dog2.name, dog3.name)

dog1.do_a_trick()
dog2.do_a_trick()  
