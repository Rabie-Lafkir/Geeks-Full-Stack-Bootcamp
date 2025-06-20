class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_info = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_info)
        self.call_history.append(call_info)

    def show_call_history(self):
        print("Call History:")
        if not self.call_history:
            print("No calls made yet.")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        print(f"Outgoing messages from {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        print(f"Incoming messages to {self.phone_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, other_number):
        print(f"Messages from {other_number} to {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == other_number and msg["to"] == self.phone_number:
                print(msg)


# USAGE EXAMPLE
if __name__ == "__main__":
    phone1 = Phone("0656003312")
    phone2 = Phone("0664411232")

    # Test calling
    phone1.call(phone2)
    phone2.call(phone1)

    phone1.show_call_history()
    phone2.show_call_history()

    print("\n--- Messaging ---")
    phone1.send_message(phone2, "Assalmu Alaykoum")
    phone2.send_message(phone1, "Wa Alaykoum Assalam")

    print("\nPhone1 outgoing messages:")
    phone1.show_outgoing_messages()

    print("\nPhone2 incoming messages:")
    phone2.show_incoming_messages()

    print("\nPhone1 viewing messages from phone2:")
    phone1.show_messages_from("0664411232")
