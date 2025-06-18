longest = ""

while True:
    sentence = input("Type a sentence without the letter 'A' (or press Enter to quit): ")
    if sentence == "":
        break
    if "a" in sentence.lower():
        print("Oops, that sentence contains an A. You lost!")
        break
    if len(sentence) > len(longest):
        longest = sentence
        print("New record! That’s the longest so far.")
    else:
        print("Try longer word!")
