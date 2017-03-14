var score = 0;
var quizContent = {
 q1: {
    question: "What is the difference rabbits and hares?",
    option1: "Rabbits eat vegetation, hares eat small rodents.",
    option2: "They are the same species, but found in different geographic locations.",
    option3: "They are the same, 'rabbit' sounds cuter.",
    option4: "Hares are larger than rabbits.", 
    correct: function(){
      return Object.keys(this)[4];
    }
  }, 
 q2: {
    question: "What is the difference between frogs and toads?",
    option1: "Frogs have slimy skin, toads have dry bumpy skin.",
    option2: "Toads have slimy skin, frogs have dry bumpy skin.",
    option3: "Frogs are reptiless, toads are amphibians.",
    option4: "Toads are reptiles, frogs are amphibians.",
   correct: function(){
      return Object.keys(this)[1];
    }
  }, 
q3:  {
    question: "What is the difference between leopoards and a cheetahs?",
    option1: "Leopards have spots while cheetahs have rosettes.",
    option2: "Cheetahs have spots, leopards have rosettes.",
    option3: "They are the same, and are called by different names.",    
    option4: "Leopards have black 'tear marks' down from the inner corner of their eyes.",
   correct: function(){
      return Object.keys(this)[2];
    }
  }, 
  q4: {
    question: "Identify a fact about Tea and/or coffee.",
    option1: "Tea should always be chilled before consuming.",
    option2: "There are different varieties of coffee, but only one kind of tea.",
    option3: "Coffee and tea are both classified as beverages.",
    option4: "Tea is brewed usually from dried tea seeds.",
   correct: function(){
      return Object.keys(this)[3];
    }
  }, 
  q5: {
    question: "What is the difference between arteries and veins?",
    option1: "Arteries run in the upper half of the body, vein in the lower part.",
    option2: "Arteries carry oxygenated blood away from the heart to the body.",
    option3: "Veins carry oxygenated blood away from the heart to the body.",
    option4: "Arteries carry oxygen-poor blood back from the body to the heart.",
    correct: function(){
      return Object.keys(this)[2];
    }
  },
  currentQuestion: 0
};

var totalQs = Object.keys(quizContent).length - 1;

//load the first quiz question
$(".js-start-button").click(function(event){
  event.preventDefault();
  $(".js-start-button").hide();
  $(".quiz-card").toggleClass("noShow");
  $(".question").append(Object.values(quizContent)[0].question);
  $(".a-label").append(Object.values(quizContent)[0].option1);
  $(".b-label").append(Object.values(quizContent)[0].option2);
  $(".c-label").append(Object.values(quizContent)[0].option3);
  $(".d-label").append(Object.values(quizContent)[0].option4);
  $(".pageNumber").append("Question#: 1" +" of " +totalQs);
});

//click on Next without making a selection

  $(".page").click(function(event){
    event.preventDefault();
    if ($('input[name = choice]:radio:checked').val() == undefined) {
       console.log($('input[name = choice]:radio:checked').val());
        $(".correct-or-not").text("Please make a selection.");
    }
    else {
      $(".correct-or-not").empty();
      
      if (quizContent.currentQuestion < 4) {
        renderQuiz();
      }
      else {
        $(".quiz-card").remove();
        $(".score").append("Your score on this quiz: " +score+ "/" +totalQs);
      }
    $("input[name=choice]").prop('checked', false); //clear any selected radio button
    }
  });
 
 function checkAnswer(selectedValue) {
  if (selectedValue == Object.values(quizContent)[quizContent.currentQuestion].correct()){
    $(".correct-or-not").text("That's correct!");
    score = score + 1;
  }
  else {
    $(".correct-or-not").text("The correct answer is: " +Object.values(quizContent)[quizContent.currentQuestion].correct());
  }
   return score;
 }
 
function renderQuiz() {
  $(".question").empty(); 
  $(".a-label").empty();
  $(".b-label").empty();
  $(".c-label").empty();
  $(".d-label").empty();
  $(".correct-or-not").empty();
  $(".pageNumber").empty();
  quizContent.currentQuestion = quizContent.currentQuestion + 1;
  $(".question").append(Object.values(quizContent)[quizContent.currentQuestion].question);
  $(".a-label").append(Object.values(quizContent)[quizContent.currentQuestion].option1);
  $(".b-label").append(Object.values(quizContent)[quizContent.currentQuestion].option2);
  $(".c-label").append(Object.values(quizContent)[quizContent.currentQuestion].option3);
  $(".d-label").append(Object.values(quizContent)[quizContent.currentQuestion].option4);
  var status = quizContent.currentQuestion + 1;
  $(".pageNumber").append("Question#: " +status+ " of " +totalQs);
}

//selecting an option calls checkAnswer()
$("input[name = choice]").change(function(){
  checkAnswer($("input[name = choice]:radio:checked").val());
});
