function countStudents(students: number[], sandwiches: number[]): number {
  let left: number = 0;

  while (left < sandwiches.length) {
    const student = students[0];
    students = students.slice(1);

    if (student != sandwiches[0]) {
      left++;
      students.push(student);
    } else {
      left = 0;
      sandwiches = sandwiches.slice(1);
    }
  }

  return students.length;
}

// Example 1
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));

// Example 2
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
