from googletrans import Translator

# List of French words
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Create a translator instance
translator = Translator()

# Translate each word and store in a dictionary
translations = {word: translator.translate(word, src='fr', dest='en').text for word in french_words}

# Print the result
print(translations)
