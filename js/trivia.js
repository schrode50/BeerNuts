var i = 0;
var score = 0;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('end').className = 'whiteOut';
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
});

  document.getElementById('answer1').click(function() {
    answerQuestion(document.getElementById('answer1'), 3);
  });

  document.getElementById('answer2').click(function() {
    answerQuestion(document.getElementById('answer2'), 4);
  });

  document.getElementById('answer3').click(function() {
    answerQuestion(document.getElementById('answer3'), 5);
  });

  document.getElementById('answer4').click(function() {
    answerQuestion(document.getElementById('answer4'), 6);
  });

  function newQuestion(i, timeout) {
    setTimeout(function () {
      console.log('am i in there ' + [i]);
      var ques1 = document.getElementById('question-num');
      var text1 = document.createTextNode(questions[i][0]);
      ques1.appendChild(text1);
      // document.getElementById('question-num').text(questions[i][0]);
      var ques2 = document.getElementById('question');
      var text2 = document.createTextNode(questions[i][1]);
      ques2.appendChild(text2);
      // document.getElementById('question').text(questions[i][1]);
      var ans1 = document.getElementById('answer1');
      var ansStr1 = document.createTextNode('A. ' + (questions[i][3]));
      ans1.appendChild(ansStr1);
      // document.getElementById('answer1').text("A. " + string(questions[i][3]));
      var ans2 = document.getElementById('answer2');
      var ansStr2 = document.createTextNode('B. ' + (questions[i][4]));
      ans2.appendChild(ansStr2);
      // document.getElementById('answer2').text("B. " + string(questions[i][4]));
      var ans3 = document.getElementById('answer3');
      var ansStr3 = document.createTextNode('C. ' + (questions[i][5]));
      ans3.appendChild(ansStr3);
      // document.getElementById('answer3').text("C. " + string(questions[i][5]));
      var ans4 = document.getElementById('answer4');
      var ansStr4 = document.createTextNode('D. ' + (questions[i][6]));
      ans4.appendChild(ansStr4);
      // document.getElementById('answer4').text("D. " + string(questions[i][6]));
    }, timeout);
  };
  newQuestion();

  function answerQuestion(answer, num) {
    console.log('answer question '+ [i]);
    if(questions[i][2] == questions[i][num]) {
      highlight('correct', answer);
      score++;
    } else {
      highlight('incorrect', answer);
    }
    if(i < questions.length -1) {
      console.log();
      var elId = document.getElementById('score')
      var textId = createTextNode(score);
      elId.appendChild(textId);
      i++;
      console.log();
      newQuestion(i, 500);
    } else {
      finalScore(elId);
    }
  };
  // answerQuestion();

  function finalScore(score) {
    setTimout(function() {
      var qaList = document.getElementById('q-aList');
      var qaRmv = document.getElementByClassName('q-a');//.remove();
      qaList.removchild(qaRmv);
      var final = document.getElementById('final-score');//.textContent(score));
      var scoreNode = document.createTextNode(score);
      final.appendChild(scoreNode);
      console.log('hey');
      document.getElementById('end').className ='';
      document.getElementById('yay').className = 'gold-stars';
    }, 500);
  };

var questions = [
  ['Question 1', 'The word beer comes from the Latin word \'bibere\' meaning..?', 'to drink', 'to consume', 'to enjoy', 'to drink', 'to grumble'],
  ['Question 2', 'Washington State produces what % of the hops used in local production?', '70', '40', '30', '80', '70'],
  ['Question 3', 'The earliest known chemical evidence of beer dates to circa 3500–3100 BC from which modern day region?', 'Iran', 'Iran', 'Syria', 'Belgium', 'Germany'],
  ['Question 4', 'What year did brewing begin in the Seattle area?', '1854', '1854', '1874', '1895', '1909'],
  ['Question 5', 'Pick the one location beer is not available in Japan?', 'drive-throughs', 'vending machines', 'street vendors', 'train stations', 'drive-throughs']
];
console.log('questions')
