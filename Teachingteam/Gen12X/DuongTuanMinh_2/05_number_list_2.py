"""Viết chương trình in ra 1 dãy số từ 1 đến 20, chỉ bao gồm các số chia hết cho 3"""
print(*[i for i in range(1, 21) if i % 3 == 0], sep=", ")