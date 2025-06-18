names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
search = input("What's your name? ")
if search in names:
    print("The index of the name is:", names.index(search))
else:
    print("Name not found.")
