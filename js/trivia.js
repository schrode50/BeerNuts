var i = 0;
var score = 0;
var ques1;
var text1;
var ques2;
var text2;
var ans1;
var ansStr1;
var ans2;
var ansStr2;
var ans3;
var ansStr3;
var ans4;
var ansStr4;


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('end').className = 'whiteOut';
    document.getElementById('start').addEventListener('click', function() {
    var container = document.getElementById('container');//.remove();
    var start = document.getElementById('start');
    var intro = document.getElementById('intro');
    container.removeChild(start);
    container.removeChild(intro);
    function addTextNode(text) {
      // var newText = document.createTextNode('Score : ');
      // label = document.getElementById('score-label');
      // label.appendChild(newText);
    }
    addTextNode();
  })
});

  var answer1= document.getElementById('answer1')
  answer1.addEventListener('click',function() {
    answerQuestion(document.getElementById('answer1'), 3);
    answer1.textContent='';
    answer2.textContent='';
    answer3.textContent='';
    answer4.textContent='';
    ques1.textContent=' ';
    ques2.textContent='';
  })

  var answer2 = document.getElementById('answer2')
  answer2.addEventListener('click',function() {
    answerQuestion(document.getElementById('answer2'), 4);
    answer1.textContent='';
    answer2.textContent='';
    answer3.textContent='';
    answer4.textContent='';
    ques1.textContent=' ';
    ques2.textContent='';
  })

  var answer3 = document.getElementById('answer3')
  answer3.addEventListener('click', function() {
    answerQuestion(document.getElementById('answer3'), 5);
    answer1.textContent='';
    answer2.textContent='';
    answer3.textContent='';
    answer4.textContent='';
    ques1.textContent=' ';
    ques2.textContent='';
  })

  var answer4= document.getElementById('answer4')
  answer4.addEventListener('click', function() {
    answerQuestion(document.getElementById('answer4'), 6);
    answer1.textContent='';
    answer2.textContent='';
    answer3.textContent='';
    answer4.textContent='';
    ques1.textContent=' ';
    ques2.textContent='';
  })

  function newQuestion(i) {
    setTimeout(function () {
      console.log('am i in there ' + [i]);
      ques1 = document.getElementById('question-num');
      text1 = document.createTextNode(questions[i][0]);
      ques1.appendChild(text1);
      // document.getElementById('question-num').text(questions[i][0]);
      ques2 = document.getElementById('question');
      text2 = document.createTextNode(questions[i][1]);
      ques2.appendChild(text2);
      // document.getElementById('question').text(questions[i][1]);
      ans1 = document.getElementById('answer1');
      ansStr1 = document.createTextNode('A. ' + (questions[i][3]));
      ans1.appendChild(ansStr1);
      // document.getElementById('answer1').text("A. " + string(questions[i][3]));
      ans2 = document.getElementById('answer2');
      ansStr2 = document.createTextNode('B. ' + (questions[i][4]));
      ans2.appendChild(ansStr2);
      // document.getElementById('answer2').text("B. " + string(questions[i][4]));
      ans3 = document.getElementById('answer3');
      ansStr3 = document.createTextNode('C. ' + (questions[i][5]));
      ans3.appendChild(ansStr3);
      // document.getElementById('answer3').text("C. " + string(questions[i][5]));
      ans4 = document.getElementById('answer4');
      ansStr4 = document.createTextNode('D. ' + (questions[i][6]));
      ans4.appendChild(ansStr4);
      // document.getElementById('answer4').text("D. " + string(questions[i][6]));
    })
  }
  newQuestion(i);

  function answerQuestion(answer, num) {
    console.log('answer question '+ [i]);
    if(questions[i][2] == questions[i][num]) {
      ('correct', answer);
      score++;
    } else {
      ('incorrect', answer);
    }
    if(i < questions.length -1) {
      console.log();
      // var elId = document.getElementById('score')
      // var textId = document.createTextNode('Score: ' + score);
      // elId.appendChild(textId);
      i++;
      console.log();
      newQuestion(i, 500);
    } else {
      finalScore();
    }
  };
  // answerQuestion();

  function finalScore() {
    setTimeout(function() {
      var qaList = document.getElementById('questionList');
      var qaRmv = document.getElementById('q-aList');//.remove();
      qaList.removeChild(qaRmv);
      var final = document.getElementById('final-score');//.textContent(score));
      var scoreNode = document.createTextNode(score);
      final.appendChild(scoreNode);
      console.log('hey');
      document.getElementById('end').className ='';
      // document.getElementById('yay').className = 'gold-stars';
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
