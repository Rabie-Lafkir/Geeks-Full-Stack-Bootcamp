user_input = input("Enter a word: ")

result = ""

for char in user_input:
    if result == "" or char != result[-1]:
        result += char

print("Cleaned word:", result)
