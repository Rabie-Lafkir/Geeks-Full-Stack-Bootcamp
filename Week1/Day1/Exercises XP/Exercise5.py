my_fav_numbers = {3, 7, 11}

my_fav_numbers.add(42)
my_fav_numbers.add(99)

my_fav_numbers.remove(99)
friend_fav_numbers = {4, 7, 15}

# Combine both sets without duplicates
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favs:", my_fav_numbers)
print("Friend’s favs:", friend_fav_numbers)
print("Our favs:", our_fav_numbers)