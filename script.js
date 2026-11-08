// Student Results Management System
// Run this file in a browser using index.html, then open Developer Tools > Console.

class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  // Calculate the average of the student's three subjects using reduce().
  calculateAverage() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }

  // Grade scale used in this project:
  // A: 90+, B: 80-89, C: 70-79, D: 60-69, E: 50-59, F: below 50.
  getGrade(average) {
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else if (average >= 50) {
      return "E";
    } else {
      return "F";
    }
  }

  // A student passes only if BOTH conditions are satisfied.
  getFinalResult(average) {
    if (average >= 50 && this.attendance >= 75) {
      return "ناجح";
    } else {
      return "يحتاج مراجعة";
    }
  }
}

// Main students array: four Student objects with different results.
const studentsList = [
  new Student(101, "Ahmed Ali", [92, 88, 95], 96),
  new Student(102, "Mariam Hassan", [45, 48, 42], 90),
  new Student(103, "Omar Samy", [65, 72, 68], 82),
  new Student(104, "Salma Mostafa", [40, 46, 48], 70)
];

// 1) Find students whose original average is between 40 and 49 inclusive.
const strugglingStudents = studentsList.filter((student) => {
  const average = student.calculateAverage();
  return average >= 40 && average <= 49;
});

// 2) Add five mercy marks to each struggling student's AVERAGE.
// Math.min(100, ...) prevents an average from exceeding 100.
// map() creates new result objects and does not change original grades.
const mercyStudents = strugglingStudents.map((student) => {
  const originalAverage = student.calculateAverage();
  const newAverage = Math.min(100, originalAverage + 5);

  return {
    id: student.id,
    name: student.name,
    originalAverage: Number(originalAverage.toFixed(2)),
    mercyMarks: 5,
    newAverage: Number(newAverage.toFixed(2))
  };
});

// 3) Sum the adjusted averages using reduce().
const totalAfterMercy = mercyStudents.reduce((sum, student) => {
  return sum + student.newAverage;
}, 0);

// 4) Protect against division by zero if there are no struggling students.
const mercyAverage = mercyStudents.length > 0
  ? totalAfterMercy / mercyStudents.length
  : 0;

// Print a clear report for every student in the original studentsList.
console.log("========== STUDENTS REPORT ==========");

studentsList.forEach((student) => {
  const average = student.calculateAverage();

  console.log({
    id: student.id,
    name: student.name,
    average: Number(average.toFixed(2)),
    grade: student.getGrade(average),
    finalResult: student.getFinalResult(average),
    attendance: `${student.attendance}%`
  });
});

// Print the students who received mercy marks.
console.log("========== MERCY COMMITTEE ==========");
console.table(mercyStudents);

// Print the overall adjusted average for struggling students.
console.log(
  "Average of struggling students after mercy marks:",
  Number(mercyAverage.toFixed(2))
);
