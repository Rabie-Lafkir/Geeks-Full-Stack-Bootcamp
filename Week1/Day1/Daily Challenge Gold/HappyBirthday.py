# Get user input
birthdate = input("Enter your birthdate (DD/MM/YYYY): ")

# Candle part (using loop to build "iiiii")
candles = ""
for _ in range(5):
    candles += "i"
print("       ___" + candles + "___")

# "Happy" line (loop through each letter)
print("      |:", end="")
for char in "Happy":
    print(char + ":", end="")
print("|")

# Top cake border
print("    __|" + "_" * 11 + "|__")

# Frosting row with ^
print("   |", end="")
for _ in range(17):
    print("^", end="")
print("|")

# "Birthday" line (loop through each letter)
print("   |:", end="")
for char in "Birthday":
    print(char + ":", end="")
print("|")

# Empty middle layer
print("   |" + " " * 17 + "|")

# Base row using loop
print("   ", end="")
for _ in range(19):
    print("~", end="")
print()
