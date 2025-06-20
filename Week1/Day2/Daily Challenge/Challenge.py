word = input("Enter a word: ")

letter_positions = {}

for index, letter in enumerate(word):
    if letter in letter_positions:
        letter_positions[letter].append(index)
    else:
        letter_positions[letter] = [index]

print(letter_positions)
