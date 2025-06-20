import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throws = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        throws += 1
        if die1 == die2:
            break
    return throws


def main():
    num_trials = 100
    all_throws = []

    for _ in range(num_trials):
        throws = throw_until_doubles()
        all_throws.append(throws)

    total_throws = sum(all_throws)
    average_throws = total_throws / num_trials

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")


main()
