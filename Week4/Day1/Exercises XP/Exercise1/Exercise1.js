/*
Exercise 1 — Scope

Below are my predictions (with explanations) for the value of `a` in each snippet
from the exercise.

--------------------------------------------------
#1 funcOne
--------------------------------------------------
inside the funcOne function → 3  
Because `a` starts at 5, passes the `if`, is reassigned to 3, then alerted.

If `a` were declared with `const`, the reassignment (`a = 3`) would throw
“TypeError: Assignment to constant variable”.

--------------------------------------------------
#2 funcTwo / funcThree
--------------------------------------------------
Step‑by‑step execution in the console:

1. global `a` is 0  
2. `funcThree()` → alerts 0  
3. `funcTwo()`  → sets global `a` to 5  
4. `funcThree()` → alerts 5  

If `a` were a `const`, the assignment inside `funcTwo()` would throw the same
TypeError as above.

--------------------------------------------------
#3 funcFour / funcFive
--------------------------------------------------
`funcFour()` creates a global property `a` on `window` and sets it to "hello".  
`funcFive()` then alerts "hello".

--------------------------------------------------
#4 funcSix
--------------------------------------------------
`funcSix()` declares its own block‑scoped `a` with the value "test", which
shadows the outer `a = 1`, so the alert shows "test".  
Declaring either binding with `const` behaves the same because neither is
reassigned.

--------------------------------------------------
#5 block scope
--------------------------------------------------
Inside the `if` block → 5  
Outside the `if` block → 2

Each `a` is block‑scoped, so the inner one does not affect the outer one.
Replacing `let` with `const` does not change the result because neither binding
is mutated.
*/
