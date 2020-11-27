$(".start-survey").click(function (event) {
  event.preventDefault();
  startQuiz();
});
$(".q-btn").click(function (event) {
  event.preventDefault();
  nextQuestion();
});
$(".question").on("change", "input", function () {
  $(".question.q-active .ans-wrap").removeClass("ans-selected");
  $(this).parent().addClass("ans-selected");
});

var index_question = 0

function startQuiz() {
  $("#q-loader").show();
  document.querySelector('#ln').innerHTML ='Hãy kiên nhẫn, hint sẽ hiện ra'
  
  console.log('thu tu tren',index_question)
  setTimeout(function () {
    $(".survey-intro").hide();
    $("#q-loader").hide();
    $(".survey-questions").show();


    //show clock
    $("#clock").show();

    //countdown
    window.count = 20
      console.log(count)
      //document.getElementById("clock").innerHTML = time
    let  time = setInterval(function(){
        document.getElementById("clock").innerHTML = count
        count--
        console.log(count)
        window.time = count
        if(index_question == 4){
          clearInterval(time)
          document.getElementById("clock").innerHTML = ''
        }
    },1000) 
  }, 500);
}

function nextQuestion() {
  window.count = 20
  if ($(".question.q-active .ans").is(":checked")) {
    index_question ++
    window.index_q = index_question
    $("#q-loader").show();
    setTimeout(function () {
      $("#q-loader").hide();
      $(".question.q-active")
        .removeClass("q-active")
        .next()
        .addClass("q-active");
    }, 500);
  } else {
    $(".question.q-active .ans-wrap").addClass("q-warning");
    setTimeout(function () {
      $(".question.q-active .ans-wrap").removeClass("q-warning");
    }, 400);
  }
  if ($(".question.q-last .ans").is(":checked")) {
    finishQuiz();
  }
}

function finishQuiz() {
  $("#q-loader").show();
  document.querySelector('#ln').innerHTML = ''
  document.querySelector('#hint').innerHTML =''
  setTimeout(function () {
    $(".survey-questions").hide();
    $("#q-loader").hide();
    $(".survey-exit").show();
  }, 500);
}

