class TicTacToe:
    def __init__(self):
        self.board = [[" " for _ in range(3)] for _ in range(3)]
        self.current_player = "X"

    def display_board(self):
        print("\nTIC TAC TOE")
        print("************************")
        for row in self.board:
            print("*", end=" ")
            print(" | ".join(row), end=" ")
            print("*")
            print("*" + "---|---|---" + "*")
        print("************************\n")

    def get_player_move(self):
        while True:
            try:
                row = int(input(f"Player {self.current_player}, enter row (1-3): ")) - 1
                col = int(input("Enter column (1-3): ")) - 1
                if row in range(3) and col in range(3):
                    if self.board[row][col] == " ":
                        return row, col
                    else:
                        print("⚠️ Cell already taken. Try again.")
                else:
                    print("⚠️ Numbers must be between 1 and 3.")
            except ValueError:
                print("⚠️ Invalid input. Please enter numbers.")

    def make_move(self, row, col):
        self.board[row][col] = self.current_player

    def check_win(self):
        b = self.board
        p = self.current_player
        return (
            any(all(cell == p for cell in row) for row in b) or
            any(all(b[r][c] == p for r in range(3)) for c in range(3)) or
            all(b[i][i] == p for i in range(3)) or
            all(b[i][2 - i] == p for i in range(3))
        )

    def check_tie(self):
        return all(cell in ['X', 'O'] for row in self.board for cell in row)

    def switch_player(self):
        self.current_player = "O" if self.current_player == "X" else "X"
