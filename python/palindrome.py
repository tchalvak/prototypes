import sys
from collections import deque

''' Detect palindrome words by using a queue and a stack (though there are probably easier ways '''
class Palindrome:
    #Write your code here
    def __init__(self):
        self.stack = []
        self.q = deque([])
        
    '''Pushes a character onto a stack.'''
    def pushCharacter(self, char):
        self.stack.append(char)
        
    '''Enqueues a character in a queue.'''
    def enqueueCharacter(self, char):
        self.q.append(char)
        
    '''Pops and returns the top character.'''
    def popCharacter(self):
        return self.stack.pop()
        
    '''Dequeues and returns the first character.'''
    def dequeueCharacter(self):
        return self.q.popleft()
        
    def clear(self):
        self.q = ''
        self.stack = ''
        
p = Palindrome()
for i in 'whatever':
    p.pushCharacter(i)
    
for i in range(len('whatever')):
    print(p.popCharacter())

p = Palindrome()
for i in 'poolcue':
    p.enqueueCharacter(i)
    
for i in range(len('poolcue')):
    print(p.dequeueCharacter())


p.enqueueCharacter('z')
p.enqueueCharacter('a')
print(p.dequeueCharacter())
print(p.dequeueCharacter())

# read the string s
W=sys.argv[1]
#Create the Palindrome class object
p=Palindrome()   

l=len(W)
# push all the characters of string s to stack
for i in range(l):
    p.pushCharacter(W[i])
#enqueue all the characters of string s to queue
for i in range(l):
    p.enqueueCharacter(W[i])
f=True
#pop the top character from stack
#dequeue the first character from queue
#compare both the characters
for i in range(l):
    if p.popCharacter()!=p.dequeueCharacter():
        f=False
        break
#finally print whether string s is palindrome or not.
if f:
    print ("The word, "+W+", is a palindrome.")
else:
    print ("The word, "+W+", is not a palindrome.")    
