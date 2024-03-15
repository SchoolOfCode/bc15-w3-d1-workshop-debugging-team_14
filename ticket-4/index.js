// refactored the code, original had syntax errors especially the spelling of points

function getGradeFromPoints(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  } else {
    return "E";
  }
}

let pointsAwarded = 39;
const grade = getGradeFromPoints(pointsAwarded);
console.log(`${pointsAwarded} points, should be a/an ${grade}`);
