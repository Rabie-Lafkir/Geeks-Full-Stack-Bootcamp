# Morse code dictionary
morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----'
}

def text_to_morse(text):
    return ' '.join(morse_code_dict.get(c.upper(), '') for c in text)

def morse_to_text(morse):
    reverse_dict = {v: k for k, v in morse_code_dict.items()}
    return ''.join(reverse_dict.get(c, '') for c in morse.split())

# Examples:
print(text_to_morse("Mohamed"))
print(morse_to_text("-- --- .... .- -- . -.."))
