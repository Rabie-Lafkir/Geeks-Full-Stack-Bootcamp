from game import TicTacToe

def play():
    game = TicTacToe()
    print("🎮 Welcome to TIC TAC TOE!")

    while True:
        game.display_board()
        row, col = game.get_player_move()
        game.make_move(row, col)

        if game.check_win():
            game.display_board()
            print(f"🎉 Player {game.current_player} wins!\n")
            break

        if game.check_tie():
            game.display_board()
            print("🤝 It's a tie!\n")
            break

        game.switch_player()

if __name__ == "__main__":
    play()
