import random

wins = 0
losses = 0

while True:
    guess = input("Guess a number 1-9 (or tape'quit'): ")
    if guess.lower() == "quit":
        break
    if not guess.isdigit():
        print("Enter a number.")
        continue
    guess_num = int(guess)
    if not 1 <= guess_num <= 9:
        print("Number out of range.")
        continue

    secret = random.randint(1, 9)
    if guess_num == secret:
        print("Winner")
        wins += 1
    else:
        print(f"Better luck next time. The number was {secret}.")
        losses += 1

print(f"Games won: {wins}, games lost: {losses}")
