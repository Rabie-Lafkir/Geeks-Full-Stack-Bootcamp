import time
import copy
import os

class GameOfLife:
    def __init__(self, rows, cols, initial_state):
        self.rows = rows
        self.cols = cols
        self.grid = [[0 for _ in range(cols)] for _ in range(rows)]
        for r, c in initial_state:
            if 0 <= r < rows and 0 <= c < cols:
                self.grid[r][c] = 1

    def display(self):
        os.system('cls' if os.name == 'nt' else 'clear')  # Clear screen
        for row in self.grid:
            print(' '.join(['■' if cell else '□' for cell in row]))
        print('\n')

    def count_live_neighbors(self, row, col):
        directions = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),          (0, 1),
            (1, -1), (1, 0), (1, 1)
        ]
        count = 0
        for dr, dc in directions:
            r, c = row + dr, col + dc
            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]
        return count

    def step(self):
        new_grid = copy.deepcopy(self.grid)
        for row in range(self.rows):
            for col in range(self.cols):
                live_neighbors = self.count_live_neighbors(row, col)
                if self.grid[row][col] == 1:
                    if live_neighbors < 2 or live_neighbors > 3:
                        new_grid[row][col] = 0
                else:
                    if live_neighbors == 3:
                        new_grid[row][col] = 1
        self.grid = new_grid

    def is_stable(self, old_grid):
        return self.grid == old_grid

    def run(self, max_generations=100):
        for gen in range(max_generations):
            self.display()
            old_grid = copy.deepcopy(self.grid)
            self.step()
            time.sleep(0.5)
            if self.is_stable(old_grid):
                print("Stable state reached. Game Over.")
                break


# Example usage with initial patterns
if __name__ == "__main__":
    # Glider pattern
    initial_state = [
        (1, 2),
        (2, 3),
        (3, 1), (3, 2), (3, 3)
    ]
    game = GameOfLife(20, 20, initial_state)
    game.run()
