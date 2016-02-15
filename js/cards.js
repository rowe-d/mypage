$(function() {
    $(".card").on("click", "#prev", function() {
      var $currentCard = $(this.parentElement.parentElement);
       var _prev = $currentCard.find(".card-step.current").prev();
       _prev = _prev.length == 0 ? $currentCard.find(".card-step:last") : _prev;
           $currentCard.find(".card-step.current").fadeOut(300, function() {
               $(this).removeClass("current");
                _prev.fadeIn(300, function() {
                    $(this).addClass("current");
                });
           });
    });

    $(".card").on("click", "#next", function() {
      var $currentCard = $(this.parentElement.parentElement);
       var _next =  $currentCard.find(".card-step.current").next();
      _next = _next.length == 0 ? $currentCard.find(".card-step:first") : _next;
           $currentCard.find(".card-step.current").fadeOut(300, function() {
                $(this).removeClass("current");
                _next.fadeIn(300, function() {
                    $(this).addClass("current");
                });
           });
    });
});