function clickedNav() {
  var crossIcon = true;
  document.getElementById("navMobIcon").style.display = "none";
  document.getElementById("navCrossIcon").style.display = "block";
  document.getElementById("navCrossIcon").style.visibility = "visible";
}

function clickedNavCrossIcon() {
  console.log("clicked Nav Cross Icon");
  document.getElementById("navMobIcon").style.display = "block";
  document.getElementById("navMobIcon").style.visibility = "visible";
  document.getElementById("navCrossIcon").style.display = "none";
}


var nav = document.getElementById('navlist');

function toggleNav () {       

    if ( nav.style.display === "" )
    nav.style.display = "block";

    else
    nav.style.display = "";
}
document
  .getElementById("navCrossIcon")
  .addEventListener("click", clickedNavCrossIcon);
console.log(document.getElementById("navMobIcon") + "Nav value");
document.getElementById("navMobIcon").addEventListener("click", clickedNav);
