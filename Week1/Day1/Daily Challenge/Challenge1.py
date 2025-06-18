number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples_list = []

for i in range(1, length + 1):
    multiples_list.append(number * i)

print("Result:", multiples_list)
