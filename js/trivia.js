document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('end').className = 'whiteOut';
  var i = 0;
  var score = 0;
    document.getElementById('start').addEventListener('click', function() {
    var container = document.getElementById('container');//.remove();
    var start = document.getElementById('start');
    var intro = document.getElementById('intro');
    container.removeChild(start);
    container.removeChild(intro);
    function addTextNode(text) {
      var newText = document.createTextNode('Score : ');
      label = document.getElementById('score-label');
      label.appendChild(newText);
    }
    addTextNode();
  })

  document.getElementById('answer1').click(function() {
    answerQuestion(document.getElementById('answer1'), 3);
  });

  document.getElementById('answer2').click(function() {
    answerQuestion(document.getElementById('answer1'), 4);
  });

  document.getElementById('answer3').click(function() {
    answerQuestion(document.getElementById('answer1'), 5);
  });

  document.getElementById('answer4').click(function() {
    answerQuestion(document.getElementById('answer1'), 6);
  });

  function newQuestion(i, setTimeout) {
    setTimeout(function () {
      document.getElementById('question-num').textContent(questions[i][0]);
      document.getElementById('question').textContent(questions[i][1]);
      document.getElementById('answer1').textContent("A. " + string(questions[i][3]));
      document.getElementById('answer2').textContent("B. " + string(questions[i][4]));
      document.getElementById('answer3').textContent("C. " + string(questions[i][5]));
      document.getElementById('answer4').textContent("D. " + string(questions[i][6]));
    }, setTimeout);
  }

  function answerQuestion(answer, num) {
    if(question[i][2] == question[i][num]) {
      highlight('correct', answer);
      score++;
    } else {
      highlight('incorrect', answer);
    }
    if(i < questions.length -1) {
      var elId = document.getElementById('score')
      var textId = createTextNode('score');
      elId.appendChild(textId);
      i++;
      newQuestion(i, 500);
    } else {
      finalScore(elId);
    }
  };

  function finalScore(score) {
    setTimout(function() {
      document.getElementByClassName('q-a').remove();
      document.getElementById('final-score'.textContent(score));
      document.getElementById('end').removeClass('whiteOut');
      document.getElementById('yay').className = 'gold-stars';
    }, 500);
  }
});

var questions = [
  ['Question 1', 'The word beer comes from the Latin word \'bibere\' meaning..?', 'to drink', 'to consume', 'to enjoy', 'to grumble'],
  ['Question 2', 'Washington State produces what % of the hops used in local production', '70', '40', '30', '80'],
  ['Question 3', 'The earliest known chemical evidence of beer dates to circa 3500–3100 BC from which modern day region', 'Iran', 'Syria', 'Belgium', 'Germany'],
  ['Question 4', 'What year did brewing begin in the Seattle area?', '1854', '1874', '1895', '1909'],
  ['Question 5', 'Pick the one location beer is not available in Japan', 'drive-throughs', 'vending machines', 'street vendors', 'train stations']
];
