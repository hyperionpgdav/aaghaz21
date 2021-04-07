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