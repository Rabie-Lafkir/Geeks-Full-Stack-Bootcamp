car_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
car_list = car_str.split(", ")

print(f"Total manufacturers: {len(car_list)}")

print("Descending:", sorted(car_list, reverse=True))

has_o = [c for c in car_list if 'o' in c.lower()]
print(f"Names with 'o': {len(has_o)}")

no_i = [c for c in car_list if 'i' not in c.lower()]
print(f"Names without 'i': {len(no_i)}")

dupe_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_list = sorted(set(dupe_list))
print(", ".join(unique_list))
print(f"Unique manufacturers: {len(unique_list)}")

reversed_names = [name[::-1] for name in sorted(unique_list)]
print("Reversed letter names A-Z:", reversed_names)
