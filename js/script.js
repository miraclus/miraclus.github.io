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

// $("#nav-btn-news").click(
//     function(){
//         if($("#newsCollapse").hasClass("show")){
//             $('#all-publication').show();
//             $('.btn-news-test').hide();
//         }else{
//             $('#all-publication').hide();
//             $('.btn-news-test').show();
//         };
        
//         if($(".li-news").hasClass("news-activ")){
//             $('.li-news').removeClass("news-activ");
//             $('.li-publication').addClass("news-activ");
//         }else{
//             $('.li-publication').removeClass("news-activ");
//             $('.li-news').addClass("news-activ");
//         };
//         console.log('error ...');
//     }    
// );

document.getElementById("li-realization").addEventListener("click", function(){displayNewsBlock("realizationCollapse", "li-realization");});
document.getElementById("li-news").addEventListener("click", function(){displayNewsBlock("newsCollapse", "li-news");});
document.getElementById("li-publication").addEventListener("click", function(){displayNewsBlock("publicationCollapse", "li-publication");});

function displayNewsBlock(sectionForDisplay, activeMenuName){    
    hideAllNewsBlocks();
    document.getElementById(sectionForDisplay).style.display = "block";
    changeSectionTag(sectionForDisplay);
    changeActiveNewsMenu(activeMenuName);
}
function hideAllNewsBlocks(){
    let newsBlocks = document.getElementsByClassName("newsSection");
    for(var i=0; i < newsBlocks.length; i++){
        newsBlocks[i].style.display = "none";
    }
}
function changeSectionTag(sectionName){
    if (sectionName === "realizationCollapse"){
        document.getElementById("news-h2").innerHTML = "Реализация";
    } else if (sectionName == "newsCollapse"){
        document.getElementById("news-h2").innerHTML = "Новости";
    } else if (sectionName == "publicationCollapse"){
        document.getElementById("news-h2").innerHTML = "Публикации";
    }
}
function changeActiveNewsMenu(activeMenuName){
    $('.news-menu').removeClass("news-activ");
    $('#' + activeMenuName).addClass("news-activ");
}
