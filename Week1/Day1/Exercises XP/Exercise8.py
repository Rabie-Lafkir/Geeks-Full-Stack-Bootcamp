sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich",
    "Pastrami sandwich"
]

print("The deli has run out of pastrami. Removing pastrami orders...")

# Remove every pastrami order
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

# Prepare the remaining sandwiches
while sandwich_orders:
    current = sandwich_orders.pop(0)  # take the first order
    print(f"I made your {current.lower()}")
    finished_sandwiches.append(current)