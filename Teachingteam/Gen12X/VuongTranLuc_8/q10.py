#Class Counter

class Counter:
    def __init__(self):
        self.count = 0
    
    def tick(self):
        self.count += 1

    def reset(self):
        self.count = 0


A = Counter()

print(A.count)
A.tick()
print(A.count)


