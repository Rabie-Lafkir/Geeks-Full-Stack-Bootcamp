from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n--- Menu Editor ---")
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("Exit (X)")

        choice = input("Choose an option: ").strip().upper()

        if choice == "V":
            name = input("Enter item name: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"{item.name}: {item.price} DH")
            else:
                print("Item not found.")

        elif choice == "A":
            add_item_to_menu()

        elif choice == "D":
            remove_item_from_menu()

        elif choice == "U":
            update_item_from_menu()

        elif choice == "S":
            show_restaurant_menu()

        elif choice == "X":
            print("\nFinal Menu:")
            show_restaurant_menu()
            break

        else:
            print("Invalid choice.")

def add_item_to_menu():
    name = input("Item name: ")
    price = int(input("Item price: "))
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Item name to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print("Item deleted successfully.")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    name = input("Item to update: ")
    item = MenuManager.get_by_name(name)
    if item:
        new_name = input("New name: ")
        new_price = int(input("New price: "))
        item.update(new_name, new_price)
        print("Item updated successfully.")
    else:
        print("Error: Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\n--- Restaurant Menu ---")
        for name, price in items:
            print(f"{name} - {price} DH")
    else:
        print("Menu is empty.")

if __name__ == '__main__':
    show_user_menu()
