print("Numbers number from 1 to 20:")
for n in range(1, 21):
    print(n)

print("Numbers where the loop index is even:")

for index, num in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(num)
