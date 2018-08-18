// I think it's the case that if you want to see how many different ways you can write a number,
// you first start by all the ways that you can split it up into two numbers,
// then all the ways to split those up
// so the answer should be pretty apparent by something like memoized recurison

// can check this, and see if there might even be some simpler pattern, by looking at small numbers

1: 1
2: 1 + 1
3: 
2 + 1
1 + 1 + 1
4:
- 3 + 1
-- 2 + 1 + 1
-- 1 + 1 + 1 + 1
- 2 + 2
-- huh, all of these are already covered by the decomps of 3 + 1

5:
4 + 1
3 + 2
3 + 1 + 1
2 + 2 + 1
2 + 1 + 1 + 1
1 + 1 + 1 + 1 + 1





// so the problem is that you get duplication btwn the different tree branches
// could theoretically still use this method to check all possibilities and eliminate dupes, but would be painful