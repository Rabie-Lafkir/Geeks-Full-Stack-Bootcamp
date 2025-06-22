# Challenge 1: Sorting
def sort_words(input_string):
    return ','.join(sorted([word.strip() for word in input_string.split(',')]))

# Challenge 2: Longest Word
def longest_word(sentence):
    words = sentence.split()
    return max(words, key=len)


# ==== Testing ====
if __name__ == "__main__":
    # Challenge 1 test
    input_data = "without,hello,bag,world"
    print("Sorted words:", sort_words(input_data)) 

    # Challenge 2 tests
    print("Longest word:", longest_word("Margaret's toy is a pretty doll."))
    print("Longest word:", longest_word("A thing of beauty is a joy forever.")) 
    print("Longest word:", longest_word("Forgetfulness is by all means powerless!")) 
