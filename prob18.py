testTriStr = """3
7 4
2 4 6
8 5 9 3"""

triangleStr = """75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"""

def getTriFromString (triString):
    rows = triString.split("\n")
    rows_and_columns = [row.split(" ") for row in rows]
    return [[int(char) for char in row] for row in rows_and_columns]

max_so_far = 0

def max_path_sum (triangle):
    global max_so_far
    max_so_far = 0
    def inner_recurse (rowIdx = 0, colIdx = 0, sum_so_far = 0):
        global max_so_far
        # print rowIdx, colIdx, sum_so_far
        if (rowIdx > len(triangle) - 1):
            if (sum_so_far > max_so_far):
                max_so_far = sum_so_far
            return
        
        row = triangle[rowIdx]

        if (colIdx > len(row) - 1):
            return
        
        inner_recurse(rowIdx + 1, colIdx, sum_so_far + row[colIdx])
        inner_recurse(rowIdx + 1, colIdx + 1, sum_so_far + row[colIdx])
    
    inner_recurse()

    return max_so_far

print(max_path_sum(getTriFromString(testTriStr)))
print(max_path_sum(getTriFromString(triangleStr)))