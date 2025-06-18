basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove fruits
basket.remove("Banana")
basket.remove("Blueberries")

# Add fruits
basket.append("Kiwi")
basket.insert(0, "Apples")   

# Count apples
apple_count = basket.count("Apples")

# Empty the basket
basket.clear()

print("Number of Apples in the basket:", apple_count)
print("Final basket contents:", basket)