class BankAccount:
    def __init__(self, username, password):
        self.balance = 0
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Authentication failed")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Deposit amount must be positive")
        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Withdraw amount must be positive")
        self.balance -= amount

class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, minimum_balance=0):
        super().__init__(username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Withdraw amount must be positive")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw beyond the minimum balance")
        self.balance -= amount

# Part IV: ATM Class
class ATM:
    def __init__(self, account_list, try_limit):
        if not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("All items in account_list must be BankAccount instances")

        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit. Setting default value to 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\nATM Main Menu:")
            print("1. Log In")
            print("2. Exit")
            choice = input("Choose an option: ")

            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Thank you for using the ATM. Goodbye!")
                break
            else:
                print("Invalid option. Please try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            try:
                account.authenticate(username, password)
                print("Login successful!")
                self.show_account_menu(account)
                return
            except:
                continue

        self.current_tries += 1
        print(f"Login failed. Tries left: {self.try_limit - self.current_tries}")

        if self.current_tries >= self.try_limit:
            print("Maximum login attempts reached. Shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\nAccount Menu:")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Check Balance")
            print("4. Exit")
            choice = input("Choose an option: ")

            try:
                if choice == "1":
                    amount = int(input("Enter deposit amount: "))
                    account.deposit(amount)
                    print(f"Deposited. New balance: ${account.balance}")
                elif choice == "2":
                    amount = int(input("Enter withdraw amount: "))
                    account.withdraw(amount)
                    print(f"Withdrawn. New balance: ${account.balance}")
                elif choice == "3":
                    print(f"Current balance: ${account.balance}")
                elif choice == "4":
                    print("Exiting account menu.")
                    break
                else:
                    print("Invalid choice.")
            except Exception as e:
                print(f"Error: {e}")

# Example usage:
acc1 = BankAccount("user1", "pass1")
acc2 = MinimumBalanceAccount("user2", "pass2", 100)
atm = ATM([acc1, acc2], 3)
