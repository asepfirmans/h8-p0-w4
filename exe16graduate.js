function graduates(students) {
  // kelompokkan berdasarkan class dan yang lulus
  var tempGroup = [];
  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j <= tempGroup.length; j++) {
      if (students[i].score > 75) {
        if (tempGroup[j] === undefined) {
          tempGroup[j] = [];
          tempGroup[j].push(students[i]);
          break;
        } else if (tempGroup[j][0].class === students[i].class) {
          tempGroup[j].push(students[i]);
          break;
        }
      }
    }
  }
  // push ke object
  var result = {};
  for (var k = 0; k < tempGroup.length; k++) {
    var batch = tempGroup[k][0].class;
    for (var l = 0; l < tempGroup[k].length; l++) {
      delete tempGroup[k][l].class;
    }
    result[batch] = tempGroup[k];
  }
  return result;
}

console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

// console.log(graduates([])); //{}