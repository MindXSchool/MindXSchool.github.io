import math

''' Bài 10 '''
class counter:
	def __init__(count):
		self.count = 0
	
	def tick():
		self.count += 1
	
	def reset():
		self.count = 0

''' Bài 1-9 '''
def ssum():
	a,b=input('Nhap a,b: ').split()
	print(int(a)+int(b))
	
def nhuan():
	y=input('Nhap nam: ')
	print('Is', y, 'nhuan year?', int(y)%4==0)

def c_digit():
	n=input('Nhap so: ')
	print(len(n))

def p20():
	print(list(range(1,21)))

def p3():
	print(list(filter(lambda i: (i%3==0), list(range(1,21)))))

def addn_bot(l):
	print('Hi there, this is our sequence:\n', str(l)[1:-1])
	n=input('What do you want to add: ')
	l.append(int(n))
	print('This is our new sequence:\n', str(l)[1:-1])

def addn_top(l):
	print('Hi there, this is our sequence:\n', str(l)[1:-1])
	n=input('What do you want to add: ')
	l.insert(0, int(n))
	print('This is our new sequence:\n', str(l)[1:-1])

def delt(l):
	print('Hi there, this is our sequence:\n', str(l)[1:-1])
	choice=input('Where do you want to delete (head/tail): ')
	if choice=='head':
		l.pop(0)
		print('This is our new sequence:\n', str(l)[1:-1])
	elif choice=='tail':
		l.pop()
		print('This is our new sequence:\n', str(l)[1:-1])
		
def quadro():
	a,b,c = input('Nhap a,b,c: ').split()
	a,b,c = int(a),int(b),int(c)
	if a==0:
		if b==0:
			if c==0: print("Pt vo so nghiem")
			else: print("Pt vo nghiem")
		else: print("x=", -c/b)
	else:
		delta=b*b-4*a*c
		if delta<0: print("Pt vo nghiem")
		elif delta==0: print("x1=x2=", -b/(2*a))
		else:
			print("x1=", (-b+math.sqrt(delta))/(2*a))
			print("x2=", (-b-math.sqrt(delta))/(2*a))

''' Bài 11 '''
def findmin(l):
	if len(l)==1:
		return l[0]
	else:
		return min(l[0], findmin(l[1:]))

def giaithua(n):
	if n<=2:
		return n
	else:
		return n*giaithua(n-1)

def fibbonacii(n):
	if n<=1:
		return 1
	else:
		return fibbonacii(n-1) + fibbonacii(n-2)

def ucln(a, b):
	if a==b:
		return a
	else:
		return ucln(max(a,b)-min(a,b), min(a,b))

def dao(l):
	if len(l)==1:
		return l[0]
	else:
		return str(l[len(l)-1])+str(dao(l[:len(l)-1]))

def de_quy():
	l = [7,36,4,233,6,3,87,23]
	s = 'abcdefgh'
	n = 4
	x = 100
	print(findmin(l))
	print(giaithua(n))
	print(fibbonacii(n))
	print(ucln(n, x))
	print(dao(s))

''' MAIN '''
l = [1,5,-9,3]
while True:
	t = input('Nhap so bai (1-9 hoac 11): ')
	t = int(t)
	if t==1: ssum()
	elif t==2: nhuan()
	elif t==3: c_digit()
	elif t==4: p20()
	elif t==5: p3()
	elif t==6: addn_bot(l)
	elif t==7: addn_top(l)
	elif t==8: delt(l)
	elif t==9: quadro()
	elif t==11: de_quy()
	else: break
	print()
