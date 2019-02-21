$(".dropdown-menu").hover(
  function() {
    $(this).prev(".nav-link").addClass("action")
  }, function() {
    $(this).prev(".nav-link").removeClass("action")
  }
);

$(".news-link-wrap").hover(
    function(){
        $(this).parent(".news-wrap").addClass("news-hover")
    }, function() {
        $(this).parent(".news-wrap").removeClass("news-hover")
      }
);

$("#nav-btn-news").click(
    function(){
        if($("#newsCollapse").hasClass("show")){
            $('#all-publication').show();
            $('.btn-news-test').hide();
        }else{
            $('#all-publication').hide();
            $('.btn-news-test').show();
        };
        
        if($(".li-news").hasClass("news-activ")){
            $('.li-news').removeClass("news-activ");
            $('.li-publication').addClass("news-activ");
        }else{
            $('.li-publication').removeClass("news-activ");
            $('.li-news').addClass("news-activ");
        };
        console.log('error ...');
    }    
);
$(document).ready(function(){
        $(".p-news-content").children("p").each(function(){
           if($( this ).text().length > 300){
               $(this).text(function(){
                   return $(this).text().substring(0, 300) + "...";
               });
           }
        })
});
