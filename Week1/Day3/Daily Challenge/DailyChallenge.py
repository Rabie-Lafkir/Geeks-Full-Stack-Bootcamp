class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        lines = [f"{self.name}'s farm\n"]
        for animal, count in self.animals.items():
            lines.append(f"{animal} : {count}")
        lines.append("\n    E-I-E-I-0!")
        return "\n".join(lines)

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        pluralized_animals = []

        for animal in animal_types:
            if self.animals[animal] > 1:
                pluralized_animals.append(animal + 's')
            else:
                pluralized_animals.append(animal)

        if len(pluralized_animals) == 1:
            animal_list = pluralized_animals[0]
        else:
            animal_list = ', '.join(pluralized_animals[:-1]) + " and " + pluralized_animals[-1]

        return f"{self.name}'s farm has {animal_list}."


# Test the code 
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# Output of get_info
print(macdonald.get_info())
print()
# Output of get_short_info (bonus)
print(macdonald.get_short_info())
