//Mercury.js
//Vanilla Javascipt Framework
//Developer: Gaurav Kumar


//Rendring Website - jQuery Free
function renderWebsite(){
    //View Port Wisth
    var websiteWidth = parseInt(document.getElementsByTagName('body')[0].offsetWidth, 10);


    //For Full Height Items
    try {
      //Find full height items
      var fullHeightItmes = document.getElementsByClassName('fullHeight');
    }
    catch(err){fullHeightItmes=null;}
    if(fullHeightItmes.length){
      for (i = 0; i < fullHeightItmes.length; i++) {
          var currentHeight = parseInt(fullHeightItmes[i].offsetHeight, 10);

          var viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

          if(currentHeight < viewPortHeight){
              fullHeightItmes[i].style.height = viewPortHeight + "px";
          }else{

              var vcElement = fullHeightItmes[i].getElementsByClassName('verticalyCenter');

              currentHeight = parseInt(vcElement[0].offsetHeight, 10);

              fullHeightItmes[i].style.height = currentHeight + 140 + "px";
          }
      }
    }


    //For Vertical Center Items
    try {
      //Find vertically center element
      var verticalCenterItmes = document.getElementsByClassName('verticalyCenter');
    }
    catch(err){verticalCenterItmes=null;}
    if(verticalCenterItmes.length){
      for (i = 0; i < verticalCenterItmes.length; i++) {
        var verticalCenterItmesHeight = parseInt(verticalCenterItmes[i].offsetHeight, 10);
        verticalCenterItmes[i].style.marginTop = "-" + (verticalCenterItmesHeight/2) + "px";
      }
    }


     //For PostStyle
    try {
      //Find right sidebar layout element
      var right_sidebar_layout = document.getElementsByClassName('right-sidebar');
    }
    catch(err){right_sidebar_layout=null;}
    //Check for right sidebar layout
    if(right_sidebar_layout.length) {
      //Loop through right sidebar layouts
      for(var i=0; i<right_sidebar_layout.length; i++){
        //Get the width of content
        var postWidth = parseInt(right_sidebar_layout[i].offsetWidth, 10);
        var content = right_sidebar_layout[i].getElementsByClassName('content')[0];
        var sidebar = right_sidebar_layout[i].getElementsByClassName('sidebar')[0];

        if(websiteWidth > 759) {
            sidebar.style.width = '300px';
            content.style.width = Math.round( postWidth - 300 ) + 'px';

            var postHeight = parseInt(content.offsetHeight, 10);
            var sidebarHeight = parseInt(sidebar.offsetHeight, 10);

            if(postHeight > sidebarHeight) {
                sidebar.style.height = ( postHeight) + "px";
            }
        }else{
            sidebar.style.width = '';
            content.style.width = '';
            sidebar.style.height = '';
        }
      }
    }


    //For Banners
    try {
        //Find banner elements
        var bannerItem = document.getElementsByClassName('banner');
    }
    catch(err){bannerItem=null;}
    //Loop banner elements
    if(bannerItem.length){
      for (i = 0; i < bannerItem.length; i++) {

          //find child of banner item with class fluid
          var fluidItems = bannerItem[i].getElementsByClassName('fluid');
          var fluidItem = fluidItems[0];
          var fluidParent = fluidItem.parentNode;
          var boxItem = fluidParent.children[0];

          var fluidWidth = parseInt(fluidParent.offsetWidth, 10);
          var boxwidth = parseInt(boxItem.offsetWidth, 10);

          if (websiteWidth >= 761) {
              fluidItem.style.width = (fluidWidth - boxwidth - 6) + "px";
          }
          else {
              fluidItem.style.width = "auto";
              boxItem.style.width = "auto";
          }


      }
    }


    window.onresize = renderWebsite;
}


//Run These Functions
if(window.addEventListener){window.addEventListener('load', renderWebsite);}
else{window.attachEvent('onload', renderWebsite);}
