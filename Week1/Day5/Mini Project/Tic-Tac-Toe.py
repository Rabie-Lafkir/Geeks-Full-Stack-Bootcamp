class TicTacToe:
    def __init__(self):
        self.board = [[" " for _ in range(3)] for _ in range(3)]
        self.current_player = "X"
        self.winner = None

    def display_board(self):
        print("\nTIC TAC TOE")
        print("************************")
        for row in self.board:
            print("*", end=" ")
            print(" | ".join(row), end=" ")
            print("*")
            print("*" + "---|---|---" + "*")
        print("************************\n")

    def get_move(self):
        while True:
            try:
                row = int(input(f"Player {self.current_player}, enter row (1-3): ")) - 1
                col = int(input("Enter column (1-3): ")) - 1
                if row in range(3) and col in range(3):
                    if self.board[row][col] == " ":
                        return row, col
                    else:
                        print("⚠️ That cell is already occupied.")
                else:
                    print("⚠️ Input must be between 1 and 3.")
            except ValueError:
                print("⚠️ Please enter valid numbers.")

    def make_move(self, row, col):
        self.board[row][col] = self.current_player

    def check_win(self):
        b = self.board
        p = self.current_player
        # Rows, columns, diagonals
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

    def play(self):
        print("🎮 Welcome to TIC TAC TOE!")
        while True:
            self.display_board()
            row, col = self.get_move()
            self.make_move(row, col)

            if self.check_win():
                self.display_board()
                print(f"🎉 Player {self.current_player} wins!\n")
                break

            if self.check_tie():
                self.display_board()
                print("🤝 It's a tie!\n")
                break

            self.switch_player()

# Run the game
if __name__ == "__main__":
    game = TicTacToe()
    game.play()
