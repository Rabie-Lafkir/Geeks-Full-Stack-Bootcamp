family = {}
while True:
    name = input("Enter family member's name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age
    
total_cost = 0

for name, age in family.items():
    if age < 3:
        print(f'Ticket is free for {name}')
    elif age >= 3 and age <= 12:
        print(f'Ticket is $10 for {name}')
        total_cost += 10
    else:
        print(f'Ticket is $15 for {name}')
        total_cost += 15
     
print("---------------------------------------")
print(f'The total cost of family tickets is {total_cost}')