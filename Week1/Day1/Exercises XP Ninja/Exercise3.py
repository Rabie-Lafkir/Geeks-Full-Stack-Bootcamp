paragraph_text = (
    "Geeks Institute is an intensive coding and digital-skills bootcamp hosted inside "
    "LaStartupStation’s Technopark campus in Casablanca. "
    "The program offers immersive tracks in full-stack web development, data analytics, "
    "and other emerging technologies, combining project-based learning, hackathons, and "
    "mentorship to accelerate Moroccan youth into tech careers. "
    "Backed by partners such as Digital Africa and Morocco’s INDH initiative, "
    "Geeks Institute regularly runs selection hackathons and community events at "
    "LaStartupStation, connecting participants with the wider Moroccan start-up ecosystem "
    "while working to revolutionise tech education."
)

# 1) Total characters
total_characters = len(paragraph_text)

# 2) Build a list of sentences
sentence_list = []
for sentence_fragment in paragraph_text.split("."):
    cleaned_sentence = sentence_fragment.strip()
    if cleaned_sentence:          
        sentence_list.append(cleaned_sentence)
sentence_count = len(sentence_list)

# 3) Word list (split on whitespace)
word_list = paragraph_text.split()
word_count = len(word_list)

# 4) Unique words (lower-cased, punctuation stripped)
def strip_punctuation(word: str) -> str:
    # Remove non-alphanumeric characters from each end of the word
    while word and not word[0].isalnum():
        word = word[1:]
    while word and not word[-1].isalnum():
        word = word[:-1]
    return word.lower()

unique_word_list = []
for word in word_list:
    cleaned_word = strip_punctuation(word)
    if cleaned_word and cleaned_word not in unique_word_list:
        unique_word_list.append(cleaned_word)
unique_word_count = len(unique_word_list)

# -------- Results --------
print("Characters (including spaces):", total_characters)
print("Sentences:", sentence_count)
print("Words:", word_count)
print("Unique words:", unique_word_count)

# --- Bonus ---
non_whitespace_characters = sum(1 for ch in paragraph_text if not ch.isspace())
average_words_per_sentence = round(word_count / sentence_count, 2)
non_unique_word_count = word_count - unique_word_count

print("Non-whitespace characters:", non_whitespace_characters)
print("Average words per sentence:", average_words_per_sentence)
print("Non-unique words:", non_unique_word_count)
