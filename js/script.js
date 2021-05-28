
// bootstrap snippet state number counter used for number countering
(function($) {
    "use strict";
    function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */	
    $this.html(++current);
        if(current > $this.data('count')){
            $this.html($this.data('count'));
        } else {    
            setTimeout(function(){count($this)}, 50);
        }
    }  
          	
    $(".stat-count").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
    });
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".banner1 article").addClass("sticky-article");
        $("header").addClass("sticky");
    }
    else {
        $(".banner1 article").removeClass("sticky-article");
        $("header").removeClass("sticky")
    }
})
