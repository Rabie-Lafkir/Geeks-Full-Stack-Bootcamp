class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.animal_groups = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.animal_groups = {}
        for animal in self.animals:
            key = animal[0].upper()
            if key not in self.animal_groups:
                self.animal_groups[key] = [animal]
            else:
                self.animal_groups[key].append(animal)
        return self.animal_groups

    def get_groups(self):
        if not self.animal_groups:
            self.sort_animals()
        for key, group in self.animal_groups.items():
            print(f"{key}: {group}")

# Example usage
zoo = Zoo("Jardin Zoologique de Rabat")
zoo.add_animal("Giraffe")
zoo.add_animal("Bear")
zoo.add_animal("Baboon")
zoo.add_animal("Lion")
zoo.add_animal("Wolf")
zoo.get_animals()
zoo.sell_animal("Bear")
zoo.get_animals()
zoo.sort_animals()
zoo.get_groups()
