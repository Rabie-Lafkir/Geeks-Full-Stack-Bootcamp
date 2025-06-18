my_name = "Rabie"

user_name = input("Hi there! What’s your name? ")

if user_name.lower() == my_name.lower():
    print("No way, we share the same name!")
else:
    print(f"Nice to meet you, {user_name}. I’m {my_name}.")