
# Takes in first number user inputs
# a = int(input("Enter a number: "))

# # Takes in second number user inputs
# b = int(input("Enter another number: "))


# def sum(num1, num2):
#     return num1 + num2


# print(sum(a, b))

# # print(type(a), type(b)) #prints data type of the variables

# if(a > b):
#     print("First number is greater than the second number.")
# elif(b > a):
#     print("Second number is greater than the first number.")
# else:
#     print("Both numbers are equal")


'''
The quick fox jumped over
the lazy dog
'''

# for i in range(1, 11):
#     print(i)


'''

Create a multiplication time table
Which takes the user inputs and makes a multiplication table for them

'''

# def multiplicate_in_table(num):

#     for i in range(1, 13):
#         product = i * num
#         print (f"{i} x {num} = {product}")


# number = int(input("Enter a number: "))


# print(f"Multiplication time table of {number}:")

# multiplicate_in_table(number)


names_of_books = ["Tempest", "Americana", "Things Fall Apart", "Oliver Twist"]

# print(type(names_of_books))

names_of_books.append('Arrow of God')


for book in names_of_books:
    print(book)

books = {"Chinua Achebe": "Arrow of God", "Chimamanda Anidiche": "Half of a Yellow Sun"}

print((books["Chinua Achebe"]))