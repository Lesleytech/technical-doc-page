function toggleSideBar() {
  var element = document.getElementById("navbar");
  element.style.left = element.style.left == "0px" ? "-250px" : "0px";
  console.log("Hello");
}
window.onresize = () => {
  var element = document.getElementById("navbar"),
    w = window.innerWidth;
  if (w > 600) {
    element.style.left = "0px";
  }
};
