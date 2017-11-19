function Answer(word, type) {
  this.word = word;
  this.personalityType = type;
}

function setupAnswers(data) {
  for (var i in data) {
    var personalityType = i;
    var set = _.shuffle(data[i]);
    data[i] = _.map(set, function(word) {
      return new Answer(word, personalityType);
    });
  }
  return data;
}

function setupAnswerSets(data) {
  var answerArrays = _.values(data);

  var sets = _.zip(answerArrays[0], answerArrays[1], answerArrays[2], answerArrays[3]);
  return _.map(sets, function(subset) {
    return _.shuffle(subset);
  });
}
// Maps over data to turn string words into Answer objects
setupAnswers(data);

// zips up the Answer arrays (answers already shuffled in setupAnswers()) in sets of 4, each Answer belonging to a different personalityType, each set of answers shuffled
var answerSets = setupAnswerSets(data);
