from Game import Game

def get_user_menu_choice():
    print("Menu:")
    print(" (p) Play a new game")
    print(" (s) Show scores")
    print(" (x) Exit")
    choice = input("Enter your choice: ").strip().lower()
    if choice in ['p', 's', 'x']:
        return choice
    print("❌ Invalid option.")
    return None

def print_results(results):
    print("\nGame Summary:")
    print(f" Wins  : {results['win']}")
    print(f" Losses: {results['loss']}")
    print(f" Draws : {results['draw']}")
    print("\n🎮 Thank you for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()
        if not choice:
            continue

        if choice == 'p':
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == 's':
            print_results(results)

        elif choice == 'x':
            print_results(results)
            break

if __name__ == "__main__":
    main()
