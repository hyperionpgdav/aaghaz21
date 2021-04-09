/* Function used by the side bar Menu Icon  */
function menuIconFunction(x){
    changeMenuIcon(x);
}
function changeMenuIcon(x){
    x.classList.toggle("change");
}
function openSideNav(){
    var menu = document.getElementById("SideNavBox");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}

//Collapsible FAQ
var ques = document.getElementsByClassName("question");
var i;

for (i = 0; i < ques.length; i++) {
    ques[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var ans = this.nextElementSibling;
      if (ans.style.display === "block") {
        ans.style.display = "none";
      } else {
        ans.style.display = "block";
      }
    });
  }
  /*
  var images = ["musiccard1.jpg", "musiccard2.jpg", "musiccard3.jpg"];
  $(function () {
      var i = 0;
      $("#Music").css("background-image", "url(resources/" + images[i] + ")");
      setInterval(function () {
          i++;
          if (i == images.length) {
              i = 0;
          }
          $("#Music").fadeOut("slow", function () {
              $(this).css("background-image", "url(resources/" + images[i] + ")");
              $(this).fadeIn("slow");
          });
      }, 10000);
  });

  var images2 = ["dancecard1.jpg", "dancecard2.jpg", "dancecard3.jpg"];
  $(function () {
      var i = 0;
      $("#Dance").css("background-image", "url(resources/" + images2[i] + ")");
      setInterval(function () {
          i++;
          if (i == images2.length) {
              i = 0;
          }
          $("#Dance").fadeOut("slow", function () {
              $(this).css("background-image", "url(resources/" + images2[i] + ")");
              $(this).fadeIn("slow");
          });
      }, 10000);
  });*/