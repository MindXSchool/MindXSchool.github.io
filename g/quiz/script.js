$(".start-survey").click(function (event) {
  event.preventDefault();
  startQuiz();
});
var index_question = 0
$(".q-btn").click(function (event) {
  event.preventDefault();
  // let alert = document.querySelector('#v')
  // nextQuestion();
  if ($(".question.q-active .ans").is(":checked")) {
    let data = JSON.parse(localStorage.getItem('arrCorrectAns'))
    document.querySelector('#anwe').innerText = data[index_question]
    document.querySelector('#v').classList.add('va')
  }


});
$(".question").on("change", "input", function () {
  $(".question.q-active .ans-wrap").removeClass("ans-selected");
  $(this).parent().addClass("ans-selected");
});



function startQuiz() {
  $("#q-loader").show();
  document.querySelector('#ln').innerHTML = 'Be patient , hints will appear in a moment '
  setTimeout(function () {
    $(".survey-intro").hide();
    $("#q-loader").hide();
    $(".survey-questions").show();


    //show clock
    $("#clock").show();

    //countdown
    window.count = 90
    //document.getElementById("clock").innerHTML = time
    let time = setInterval(function () {
      document.getElementById("clock").innerHTML = count
      count--
      console.log(count)
      window.time = count
      if (index_question == 5) {
        clearInterval(time)
        document.getElementById("clock").innerHTML = ''
      }
    }, 1000)
  }, 500);
}

function nextQuestion() {
  document.querySelector('#v').classList.remove('va')
  window.count = 90
  if ($(".question.q-active .ans").is(":checked")) {
    index_question++
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
  document.querySelector('#hint').innerHTML = ''
  setTimeout(function () {
    $(".survey-questions").hide();
    $("#q-loader").hide();
    $(".survey-exit").show();
  }, 500);
}