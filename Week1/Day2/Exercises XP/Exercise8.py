toppings = []
price_per_topping = 2.5
base_price = 10


while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_price = base_price + price_per_topping * len(toppings)
print("\nToppings added:", ", ".join(toppings))
print(f"Total cost of your pizza is ${total_price:.2f}")
