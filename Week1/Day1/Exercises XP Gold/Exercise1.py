month = int(input("Enter a month number (From 1 To 12): "))

match month:
    case 3 | 4 | 5:
        print("Spring")
    case 6 | 7 | 8:
        print("Summer")
    case 9 | 10 | 11:
        print("Autumn")
    case 12 | 1 | 2:
        print("Winter")
    case _:
        print("Not a valid month")
