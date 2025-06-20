import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reversed_list(self):
        return self.letters[::-1]

    def sorted_list(self):
        return sorted(self.letters)

    def generate_random_list(self):
        return [random.randint(0, 100) for _ in self.letters]

# Usage Example
if __name__ == "__main__":
    my_list = MyList(['d', 'a', 'c', 'b'])
    print("Original list:", my_list.letters)
    print("Reversed list:", my_list.reversed_list())
    print("Sorted list:", my_list.sorted_list())
    print("Random number list:", my_list.generate_random_list())
