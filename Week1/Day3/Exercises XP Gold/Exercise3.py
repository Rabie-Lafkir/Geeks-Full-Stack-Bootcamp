class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        self.menu.append({
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        })
        print(f"Added '{name}' to the menu.")

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"Updated '{name}'.")
                return
        print(f"Dish '{name}' not found in the menu.")

    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f"Removed '{name}' from the menu.")
                return
        print(f"Dish '{name}' not found in the menu.")

    def display_menu(self):
        for dish in self.menu:
            print(dish)

# Usage Example
if __name__ == "__main__":
    manager = MenuManager()
    print("Initial menu:")
    manager.display_menu()

    print("\nAdding a new dish...")
    manager.add_item("Pizza", 20, "A", True)
    manager.display_menu()

    print("\nUpdating Salad...")
    manager.update_item("Salad", 19, "B", False)
    manager.display_menu()

    print("\nRemoving Hamburger...")
    manager.remove_item("Hamburger")
    manager.display_menu()
