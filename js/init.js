function incrementQuestion() {
  questionSet = answerSets[questionSetIndex];
  $('.current-question-index').html(questionSetIndex + 1);
  var pageAnswers = $('.question').find('.answer');

  _.forEach(pageAnswers, function(pageAnswer) {
    var answerIndex = $(pageAnswer).find('input').attr('id').split('word').pop();
    var answer = questionSet[answerIndex];
    currentSet[answerIndex] = {
      answer: answer,
      selected: false
    }
    $(pageAnswer).find('label').html(answer.word);
    $(pageAnswer).find('input').attr('checked', false);
    $(pageAnswer).find('input').attr('disabled', false);
  });

  $('.submit-button').addClass('disabled');
}

function completeQuiz() {
    $('.question').fadeOut(2000);
    user.sortAnswers();
    var grades = user.gradeQuiz();
    var percentageParagraphs = $('.results').find('.percentage-breakdown-box').find('p');
    _.forEach(percentageParagraphs, function(paragraph) {
      var type = $(paragraph).attr('class');
      $(paragraph).find('.percent').html(grades[type].percentage);
    });

    var type = user.getHighest().personalityType;
    $(typeContent[type].parallax).insertAfter('nav');
    $('.results').find('.type-content').append(typeContent[type].content);
    $('.results').fadeIn(3000);
}

// function parallax() {
//   console.log('parallax triggered')
//   var parallaxBox = document.querySelectorAll(".show-parallax");
//   var speed = 0.3;
//
//   window.onscroll = function(){
//     [].slice.call(parallaxBox).forEach(function(el,i){
//       var windowYOffset = window.pageYOffset;
//       var elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
//       el.style.backgroundPosition = elBackgrounPos;
//     });
//   };
// }

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.results').hide();

    // THIS ATTEMPT TO TRIGGER MY OWN PARALLAX DID NOT WORK but wow did I learn a lot.
    //
    // parallax();
    // var showingParallax = false;
    //
    // $('.image-container').viewportChecker({
    //    classToAddForFullView: 'show-parallax',
    //    removeClassAfterAnimation: true,
    //    repeat: true,
    //    offset: 10,
    //    invertBottomOffset: true
    // });
    //
    // $(window).scroll(function() {
    //
    //   if (!$('.show-parallax').visible(true)) {
    //     console.log('show-parallax is not visible')
    //     showingParallax = false;
    //   } else if (showingParallax) {
    //     console.log('showing parallax')
    //   } else if ($('.show-parallax').visible(true)) {
    //     console.log('show-parallax is visible')
    //     parallax();
    //     showingParallax = true;
    //   }
    // });

    $('.answer').on('change', 'input', function(e) {
      var allAnswers = $('.question').find('.answer');
      _.forEach(allAnswers, function(pageAnswer) {
        // make sure checked answers on page correspond to checked answers in memory
        var answerIndex = $(pageAnswer).find('input').attr('id').split('word').pop();
        currentSet[answerIndex].selected = $(pageAnswer).find('input')[0].checked;
      });

      // --------------------------------------------------------------

      var numSelected = 0;
      _.forEach(currentSet, function(answerSet) {
        if (answerSet.selected) {
          numSelected ++;
        }
      });

      // if 2 answers selected, disable other checkboxes and enable button
      if (numSelected == 2) {
        $('.submit-button').removeClass('disabled');
        _.forEach(allAnswers, function(pageAnswer) {
          if (!$(pageAnswer).find('input')[0].checked) {
            $(pageAnswer).find('input').attr('disabled', true);
          }
        })
      } else {
        $('.submit-button').addClass('disabled');
        $(allAnswers).find('input').attr('disabled', false);
      }
    });

    $('.question').on('click', '.submit-button', function(e) {
      e.preventDefault();

      var answers = _.filter(currentSet, function(answer) {
        return answer.selected;
      })

      _.forEach(answers, function(answerSet) {
        user.answers.push(answerSet.answer);
      });

      questionSetIndex ++;
      if (answerSets.length > questionSetIndex) {
        incrementQuestion();
      } else {
        completeQuiz();
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
