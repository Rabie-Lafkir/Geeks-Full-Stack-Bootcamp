names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

if user_name in names:
    index = names.index(user_name)
    print(f"The first occurrence of {user_name} is at index {index}.")
else:
    print("Your name was not found in the list.")
