def findMaximumValueIndex(list):
    maximum = list[0]
    index = 0
    for i, value in enumerate(list):
        if value > maximum:
          maximum = value 
          index = i

list = [4, 6, 1, 2, 9]
findMaximumValueIndex(list)
