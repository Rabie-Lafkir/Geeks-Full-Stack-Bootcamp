def get_full_name(first_name, last_name, middle_name=""):
    if middle_name:
        return f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else:
        return f"{first_name.capitalize()} {last_name.capitalize()}"


print(get_full_name(first_name="rabie", middle_name="driss", last_name="lafkir")) 
print(get_full_name(first_name="rabie", last_name="lafkir")) 
