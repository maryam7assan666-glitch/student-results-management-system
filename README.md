# Student Results Management System

A console-based JavaScript project using Classes, Objects, and modern array methods.

## Files
- `index.html`: loads the JavaScript file in a browser.
- `script.js`: contains the complete Student class, academic calculations, mercy committee processing, and console reports.

## How to run
1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Open Developer Tools (`F12` or the browser menu).
4. Select the **Console** tab to view the students' reports and mercy committee results.

## Implemented requirements
- `Student` class with `id`, `name`, `grades`, and `attendance`.
- `reduce()` to calculate each student's average.
- `if/else` grading scale: A, B, C, D, E, F.
- `&&` to check the average and attendance requirements.
- Four Student objects in `studentsList`, including students with averages from 40 to 49.
- `filter()` to select struggling students.
- `map()` to add five mercy marks to their averages without changing original grades.
- `reduce()` to calculate the sum of adjusted averages.
- A zero-student guard before calculating the mercy average.
- Console reports for all students and the mercy committee.

## Assumption about the grading scale
The task does not specify numerical boundaries for letter grades. This project uses:
- A: 90 and above
- B: 80–89
- C: 70–79
- D: 60–69
- E: 50–59
- F: below 50

The five mercy marks are added to the student's average, as requested, and the result is capped at 100.
