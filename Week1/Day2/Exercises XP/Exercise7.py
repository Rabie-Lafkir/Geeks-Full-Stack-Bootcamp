import random

def get_random_temp():
    return round(random.uniform(-10, 40), 1)  


def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
    
     
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif temp >= 0 and temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif temp >= 16 and temp < 24:
        print("Nice weather.")
    elif temp >= 24 and temp < 33:
        print("A bit warm, stay hydrated.")
    elif temp >= 33 and temp <= 40:
        print("It’s really hot! Stay cool.")


main()
