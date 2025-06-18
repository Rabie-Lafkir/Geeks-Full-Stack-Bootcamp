my_name = "Rabie"
while True:
    name = input("Enter your name: ")
    if name.lower() == my_name.lower():
        break
    else:
        print("Oups! Wrong name, try again!")
print("We share the same name!")