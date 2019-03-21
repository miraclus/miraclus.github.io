$(document).ready(function(){
    $(".p-news-content").children("p").each(function(){
       if($( this ).text().length > 300){
           $(this).text(function(){
               return $(this).text().substring(0, 300) + "...";
           });
       }
    });
    
});
