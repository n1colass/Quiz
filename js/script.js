const question = [
  {
    question: "answer" ,
    answer: "відповідь",
  },
  {
    question: "car" ,
    answer: "машина",
  },
  {
    question: "plane" ,
    answer: "літак",
  },
  {
    question: "color" ,
    answer: "колір",
  },
  {
    question: "bike" ,
    answer: "велосипед",
  },
  {
    question: "TV" ,
    answer: "телевізор",
  },
  {
    question: "pen" ,
    answer: "ручка",
  },
  {
    question: "language" ,
    answer: "мова",
  },
  {
    question: "book" ,
    answer: "книга",
  },
  {
    question: "dog" ,
    answer: "пес",
  },
  {
    question: "cat" ,
    answer: "кіт",
  },
  {
    question: "fish" ,
    answer: "риба",
  },
]

$(document).ready(function () {

  function right(){
      rightAns++;
      $(".newQuest").attr("disabled",true);
      $(`.result-${current}`).css({"background":"#239B56"});
      $(".question").css({"background":"#239B56","border":"3px solid #239B56","color":"white"});
      $(".question").html("Вірно!");
      blink = setInterval(() => {
        $(".question").fadeOut(200).fadeIn(200);
      }, 200);
      setTimeout(() => {
        clearInterval(blink);
      }, 1000);
  }
  function wrong(){
    wrongAns++;
    $(".newQuest").attr("disabled",true);
    $(`.result-${current}`).css({"background":"#CB4335"});
    $(".question").css({"background":"#CB4335","border":"3px solid #CB4335","color":"white"});
    $(".question").html("Не вірно!");
    blink = setInterval(() => {
      $(".question").fadeOut(200).fadeIn(200);
    }, 200);
    setTimeout(() => {
      clearInterval(blink);
    }, 1000);
}
  function resetQuest(){
    $(".newQuest").removeAttr("disabled");
    $(".question").removeAttr("style");
    random = Math.floor(Math.random() * question.length);
    $(".question").html(question[random].question);
    $(".in").val("");
  }

  let rightAns = 0;
  let wrongAns = 0;
  let current = 0;
  $("input").focus();

  let random = Math.floor(Math.random() * question.length);
  $(".question").html(question[random].question);

  $(".newQuest").click(function(){
    current++;

    if(current > 9 ){
      setTimeout(() => {
        if(rightAns <= 5){
        alert("You should to study english better!!&"+"\nRight answer: " + rightAns + "\nWrons answer: " + wrongAns);
        window.location.reload(true);
      }else if(rightAns > 5){
        alert("Your knowledge is good!!!"+"\nRight answer: " + rightAns + "\nWrons answer: " + wrongAns);
        window.location.reload(true);
      }
      }, 2000);
    }
    setTimeout(() => {
        question.splice(random,1);
    }, 100); 
    
    let inputAnswer = $("input").val().toLowerCase().trim();
    if(inputAnswer == question[random].answer){
      right();
      setTimeout(() => {
        resetQuest();
      }, 2000);
    }else{
      wrong();
      setTimeout(() => {
        resetQuest();
      }, 2000);
    }

  });
});