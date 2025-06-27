function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function findAvg(gradesList) {
  const average = calculateAverage(gradesList);
  console.log("Average grade:", average);

  if (average >= 10) {
    console.log("Congratulations, you passed!");
  } else {
    console.log("You failed and must repeat the course.");
  }
}

findAvg([12, 15, 8, 14, 9]);
