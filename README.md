
# Cellular Automaton Visualizer

## 0. Introduction
You might have heard of Conway's Game of Life—a fascinating example of cellular automata. I can't recall precisely 
when I first encountered it, but it was years ago. What stuck with me was its dynamic structures and intriguing behavior. 
Over time, I've seen numerous visualizations of this game in programming contexts.

In December 2024, I became interested in RISC-V and related concepts. 
One day, YouTube suggested a lecture titled "Cellular Automata - A Christmas Lecture". 
It discussed the Turing-completeness of Rule 110, and this re-ignited my curiosity about 
elementary cellular automata (ECA). This project emerged as a result of that inspiration.



## 1. Elementary Cellular Automata - Theory

Elementary cellular automata are one-dimensional automata consisting of binary cells. 
Each cell updates its state based on its current value and the values of its immediate neighbors, 
according to a specific rule. The rules are represented by an 8-bit number (0–255), 
which dictates how the cell transitions between states.

Key concepts include:
Initial Row: The starting state, typically a single active cell in the center.
Rules: Binary functions defining the cell's next state.
Visualization: Successive rows create dynamic, often fractal-like patterns.

Rule 110 is particularly notable for being Turing-complete, meaning it can simulate any computation.

## 2. Elementary Cellular Automata - Practice
Elementary cellular automata are not just mathematical curiosities. 
They find practical applications in various fields, including:

Cryptography: Generating pseudo-random numbers.

Computer Science: Modeling computation (e.g., Rule 110 as a universal Turing machine).

Physics: Simulating complex systems.


## 3. Links
   
[wolfram atlas of ECA](https://atlas.wolfram.com/01/01/) 
[a board with my observations, testing others' ideas, and the progress of this project] - 

[Elementary Cellular Automata + music](https://codepen.io/Dafuseder/pen/RgQVKg) 

https://demonstrations.wolfram.com/ 


## 4. Project Versions

Version 1 (Current, eca rules folder): Built upon a CodePen implementation by Kjetil Golid (https://codepen.io/kgolid/pen/oNgZKqV).
Key features in this version include a clean interface, interactive controls, and extensibility for future enhancements.  
Dynamic Visualizations: Compare multiple cellular automata simultaneously by adding visualizers.
Custom Rules: Change the rule of each automaton (0–255) dynamically.

In next:
### done:
+ added dark-light mode and click-changer
+ effects when hovering over buttons and pressing
+ random rule visualization function
+ added controls for each card:
      - "A" to apply the new rule.
      - "S" to save an image of the current state of the machine in PNG format.
      - "C" to close a specific rendering card
+ dynamic change of rules
+ sth mini updates
  the above mentioned will be in ver 1.5
  

### progress:
- Django project


By Stanislav Oryshchuk. started  - 31.12.2024.
0201/001
