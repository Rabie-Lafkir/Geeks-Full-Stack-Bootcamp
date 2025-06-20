# Define the Song class
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# "Lose Yourself" - Eminem 
lose_yourself = Song([
    "Look, if you had one shot or one opportunity",
    "To seize everything you ever wanted in one moment",
    "Would you capture it or just let it slip?"
])

lose_yourself.sing_me_a_song()
