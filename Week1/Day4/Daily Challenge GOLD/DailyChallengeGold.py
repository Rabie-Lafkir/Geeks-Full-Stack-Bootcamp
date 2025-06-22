import random

# Gene class
class Gene:
    def __init__(self, value=None):
        self.value = value if value is not None else random.choice([0, 1])

    def mutate(self):
        if random.random() < 0.5:  # 50% chance to flip
            self.value ^= 1

    def __repr__(self):
        return str(self.value)


# Chromosome class
class Chromosome:
    def __init__(self, size=5):
        self.genes = [Gene() for _ in range(size)]

    def mutate(self):
        for gene in self.genes:
            gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __repr__(self):
        return ''.join(str(g) for g in self.genes)


# DNA class
class DNA:
    def __init__(self, chromosome_count=5, gene_per_chromosome=5):
        self.chromosomes = [Chromosome(size=gene_per_chromosome) for _ in range(chromosome_count)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def __repr__(self):
        return '\n'.join(str(c) for c in self.chromosomes)


# Organism class
class Organism:
    def __init__(self, dna, environment_factor):
        self.dna = dna
        self.environment_factor = environment_factor  # Chance to trigger DNA mutation

    def attempt_mutation(self):
        if random.random() < self.environment_factor:
            self.dna.mutate()


# Simulation function
def simulate():
    generations = 0
    dna = DNA(chromosome_count=3, gene_per_chromosome=3)
    org = Organism(dna, environment_factor=0.9)

    while not org.dna.is_all_ones():
        org.attempt_mutation()
        generations += 1

        # Print progress every 100 generations
        if generations % 100 == 0:
            print(f"Generation {generations}: Still mutating...")

    print("\n--- Simulation Complete ---")
    print(f"It took {generations} generations to reach perfect DNA (all 1s).\n")
    print("Final DNA:")
    print(org.dna)


# Run simulation
if __name__ == "__main__":
    simulate()
