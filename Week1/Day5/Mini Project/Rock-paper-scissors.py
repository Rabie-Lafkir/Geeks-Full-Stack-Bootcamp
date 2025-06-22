import random

class RockPaperScissorsGame:
    def __init__(self):
        self.wins = 0
        self.losses = 0
        self.draws = 0
        self.choices = {'r': 'Rock', 'p': 'Paper', 's': 'Scissors'}

    def get_computer_choice(self):
        return random.choice(list(self.choices.keys()))

    def determine_winner(self, user_choice, computer_choice):
        if user_choice == computer_choice:
            self.draws += 1
            return "Draw"
        elif (user_choice == 'r' and computer_choice == 's') or \
             (user_choice == 'p' and computer_choice == 'r') or \
             (user_choice == 's' and computer_choice == 'p'):
            self.wins += 1
            return "You Won!"
        else:
            self.losses += 1
            return "You Lost!"

    def show_results(self):
        print("\n📊 Final Game Results")
        print("----------------------")
        print(f"✅ Wins   : {self.wins}")
        print(f"❌ Losses : {self.losses}")
        print(f"➖ Draws  : {self.draws}")
        print("\n🎮 Thank you for playing!\n")

    def play(self):
        print("🎉 Welcome to Rock, Paper, Scissors!\n")
        while True:
            print("Main Menu:")
            print("  (g) Play a new game")
            print("  (x) Show scores and exit")
            choice = input("Enter your choice: ").strip().lower()

            if choice == 'g':
                user_choice = input("\nChoose (r)ock, (p)aper, or (s)cissors: ").strip().lower()
                if user_choice not in self.choices:
                    print("⚠️ Invalid input. Please enter r, p, or s.\n")
                    continue

                computer_choice = self.get_computer_choice()
                result = self.determine_winner(user_choice, computer_choice)

                print(f"\n🧍 You chose      : {self.choices[user_choice]}")
                print(f"💻 Computer chose : {self.choices[computer_choice]}")
                print(f"🏁 Result         : {result}\n")

            elif choice == 'x':
                self.show_results()
                break
            else:
                print("⚠️ Invalid menu option. Please try again.\n")

# Run the game
if __name__ == "__main__":
    game = RockPaperScissorsGame()
    game.play()
