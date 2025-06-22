class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)
        print(f"{first_name} {self.last_name} was born and added to the family.")

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"You are over 18, your parents Latifa and Driss accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No family member named {first_name} was found.")

    def family_presentation(self):
        print(f"Family: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name} {member.last_name}, Age: {member.age}")



smith_family = Family("Lafkir")

smith_family.born("Rabie", 25)
smith_family.born("Khalil", 20)
smith_family.born("Hasna", 18)

smith_family.check_majority("Rabie")
smith_family.check_majority("Khalil")

smith_family.family_presentation()
