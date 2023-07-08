function averageScore(fisrtName, lastName, introScore, gitScore, jsScore) {
  let avScore = ((introScore + gitScore + jsScore) / 3).toFixed(2);
  console.log(`${fisrtName} ${lastName}'s average score is ${avScore}`);
}

averageScore("Dave", "Kessler", 4, 3, 3);
averageScore("John", "Kim", 5, 4, 5);
averageScore("Janet", "Mao", 5, 4, 4);
