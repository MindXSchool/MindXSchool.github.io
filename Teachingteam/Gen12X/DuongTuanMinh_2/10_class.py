class Counter():
    def __init__(self):
        self.count = 0
    def tick(self):
        self.count += 1
    def reset(self):
        self.count = 0

counter = Counter()
print(counter.count)
for i in range(10):
    counter.tick()
print(counter.count)
counter.reset()
print(counter.count)