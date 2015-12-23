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
var playAgain = document.getElementById('playAgain');


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('end').className = 'whiteOut';
  document.getElementById('questionList').style.display='none';
    document.getElementById('start').addEventListener('click', function() {
    var container = document.getElementById('container');//.remove();
    var start = document.getElementById('start').style.display='none';
    var intro = document.getElementById('intro').style.display='none';
    document.getElementById('questionList').style.display='block';
    // container.removeChild(start);
    // container.removeChild(intro);
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

      playAgain.hidden=false;
      // document.getElementById('yay').className = 'gold-stars';
    }, 500);
  };

var questions = [
  ['Question 1', 'The word beer comes from the Latin word \'bibere\' meaning..?', 'to drink', 'to consume', 'to enjoy', 'to drink', 'to grumble','The Latin word bibere means to drink!'],
  ['Question 2', 'Washington State produces what % of the hops used in local production?', '70', '40', '30', '80', '70', 'Washington state produces 70.8% of the hops used in the U.S.'],
  ['Question 3', 'The earliest known chemical evidence of beer dates to circa 3500–3100 BC from which modern day region?', 'Iran', 'Iran', 'Syria', 'Belgium', 'Germany', 'Iran has the earliest known chemical evidence of beer!'],
  ['Question 4', 'What year did brewing begin in the Seattle area?', '1854', '1854', '1874', '1895', '1909', "While the Seattle area is known today as a great beer destination, its brewing history goes back nearly to the city\'s official founding, and far pre-dates Washington\'s statehood. It began in 1854, when Antonio B. Rabbeson founded the Washington Brewery; Seattle was not quite three years old, but the growing logging town needed to start supplying its own beer as its population increased. Within 10 years, the brewery was advertising its 'porter, beer and cream ale.'"],
  ['Question 5', 'Pick the one location beer is not available in Japan?', 'drive-throughs', 'vending machines', 'street vendors', 'train stations', 'drive-throughs', 'You cannot get beer at drive-throughs in Japan.'],
  ['Question 6', 'Craft beer in Washington has how much of an economic impact locally?', '1 billion dollars', '1 million dollars', '1 billion dollars', '50 million dollars', '100 million dollars', 'Craft beer has an economic imapact of 1 billion dollars! WOW! That\'s a lot of money!'],
  ['Question 7', 'The standardized keg is referred to as a 1/2 barrel, how many gallons does this contain?', '15.5', '15.5', '20', '31', '50', 'A 1/2 barrel contains 15.5 U.S. gallons of beer!'],
  ['Question 8', 'Which country has the most individual beer brands?', 'Belgium', 'Germany', 'England', 'United States', 'Belgium', 'Belgium wins this one, they have 400 beer brands!'],
  ['Question 9', 'What is the most popular style of craft beer?', 'IPA', 'IPA', 'Porter', 'Blond', 'Amber', 'The IPA is the most popular style!'],
  ['Question 10', 'Who was the first U.S. President to brew beer in the White House?', 'Barack Obama', 'Barack Obama', 'George Washington', 'Thomas Madison', 'James Madison', 'While George Washington, Thomas Edison and James Madison were all home brewers, Barack Obama is the first president known to ever brew his own beer on the grounds of the White House. He brewed a White House Honey Brown Ale.'],
  ['Question 11', 'Beer color is directly related to what?', 'Malt', 'Hops', 'Malt', 'Barrel used', 'Time spent fermenting', 'The malted grain is what gives your beer its color! Without getting too technical, the two chemical reactions that most drastically affect beer color are called The Maillard Reaction and Caramelization. This is a chemical reaction that occurs between amino acids and reducing sugars. In beer, The Maillard Reaction happens when you kiln malted barley, which produces chocolate malt and black patent malt. You can expect chocolate, toasted or coffee notes and a darker color from darker malts like these. Caramelization also contributes to a beer’s color. This reaction occurs when you heat the sugar during a boil until it decomposes by itself. Longer boils means darker beer. Along with the darker colors, you can also expect caramelization to cause caramel, buttery or toffee flavors.'],
  ['Question 12', 'Which state has more breweries in its history than any other?', 'Pennsylvania', 'Pennsylvania', 'Washington', 'Oregon', 'California', 'Pennsylvania has the most prevelant beer history.'],
  ['Question 13', 'Beer is a rich source for which dietary source?', 'Silicon', 'Silicon', 'Astaxathin', 'Vitamin D', 'Lutein', 'Silicon. Malted barley and hops are rich in Silicon which is a key ingredient for increasing bone mineral density! This can help prevent osteoperosis!'],
  ['Question 14', ' Which state drinks the most beer?', 'North Dakota', 'North Dakota', 'Montana', 'Washington', 'Utah', 'North Dakota drinks the most beer. North Dakota residents drink 43.3 gallons a year per legal age resident! That is more than double of Utah!'],
  ['Question 15', 'How many beers can your body break down in one hour?', '1', '1', '2', '3', '4', 'Your body breaks down 1 beer per hour.'],
  ['Question 16', 'What is the oldest active brewery in the World?', 'Weihenstaphan', 'Heineken', 'Amstel', 'La Fin du Monde', 'Weihenstaphan', 'Weihenstaphan is the oldest active brewery! It was founded in 1040, and is owned by the state of Bavaria today. It is located in Freising, Germany north of Munich.'],
  ['Question 17', 'The term \'honeymoon\' traces back to where?', 'Babylon', 'Syria', 'Macedonia', 'Babylon', 'Micronesia', 'Brooklyn', 'In ancient Babylon for the month after a wedding the father of the bride would supply his son-in-law with all the mead he could drink. Based on the lunar calender this was called the honey month which then became the honeymoon.'],
  ['Question 18', "The term 'wet your whistle' was coined in which country?", 'England', 'Germany', 'England', 'Ireleand', 'Scotland', 'The term originated in England centuries ago. At one point they molded clay whistles into the handles of beer mugs which the patrons would blow into to get the bartenders attention for service.'],
  ['Question 19', 'What is the name of the strongest beer made?', 'Snake Venom', 'Snake Venom', 'Crazy Evil', 'Too Strong for You', 'Medicine', 'As of October 2013 the strongest beer in the world was Snake Venom produced in Scotland with an ABV of 67.5% it is closer in strength to a cask proofed whiskey than a beer.'],
  ['Question 20', 'Which country has an actual law regarding beer ingredients?', 'Germany', 'Germany', 'France', 'United States', 'Spain', 'Germany as a law on the books called Reinheitsgebot which means literally purity order and originally limited the ingredients to barley, hops, yeast, and water. This was originally put in place to prevent price competition between brewers and bakers and thusly avoid price increases for bread.'],
  ];
console.log('questions')

playAgain.addEventListener('click', function(){
  window.location.reload()
})
