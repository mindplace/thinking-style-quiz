function calculatePercentage(num) {
  return Math.round((num/15) * 50);
}

function QuizUser() {
  this.answers = [];
  this.sortedAnswers = {};
  this.grades = {};
  this.highest = {};
}

QuizUser.prototype.sortAnswers = function() {
  var sortedAnswers = {
    "concreteSequential": [],
    "abstractSequential": [],
    "abstractRandom": [],
    "concreteRandom": []
  }

  _.forEach(this.answers, function(answer) {
    var type = answer.personalityType;
    sortedAnswers[type].push(answer.word);
  });

  return this.sortedAnswers = sortedAnswers;
}

QuizUser.prototype.gradeQuiz = function() {
  var grades = {};

  for (var set in this.sortedAnswers) {
    grades[set] = {
      personalityType: set,
      count: this.sortedAnswers[set].length,
      percentage: calculatePercentage(this.sortedAnswers[set].length)
    }
  }

  return this.grades = grades;
}

QuizUser.prototype.getHighest = function() {
  var highest = {
    personalityType: "",
    percentage: 0
  };

  _.forEach(this.grades, function(set) {
    var personalityType = set.personalityType.replace(/([A-Z])/g, ' $1').replace(/^./,    function(str){ return str.toUpperCase(); });

    if (set.percentage > highest.percentage) {
      highest.personalityType = personalityType;
      highest.percentage = set.percentage;
    }
  });

  return this.highest = highest;
}
