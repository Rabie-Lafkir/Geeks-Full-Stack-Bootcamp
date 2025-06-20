birthdays = {
    "Rabie": "2000/06/19",
    "Hasna": "2001/07/23",
    "Amina": "1992/03/15",
    "Chaimaa": "1988/10/10",
    "Ayoub": "1995/06/30"
}

print("Welcome! You can look up the birthdays of the following people:")
for person in birthdays:
    print(f"- {person}")

name = input("Enter a person's name: ")

if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}.")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")
