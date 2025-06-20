import random

def guess_the_number(user_guess):
    random_number = random.randint(1, 100)
    
    if user_guess == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_guess}, Random number: {random_number}")


guess_the_number(47)  
