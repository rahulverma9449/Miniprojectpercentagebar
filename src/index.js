import "./styles.css";
window.addEventListener("scroll", function () {
  let scrollprogress = document.getElementById("scrolled");
  var scrollbar = document.documentElement;
  var scrollbartop = scrollbar.scrollTop || document.body.scrollTop;
  var scrollbardown = scrollbar.scrollHeight || document.body.scrollHeight;
  var scrollPercentage =
    (scrollbartop / (scrollbardown - scrollbar.clientHeight)) * 100;
  let scrollValue = Math.round(scrollPercentage);
  scrollprogress.innerText = scrollValue + " % ";
  console.log(scrollPercentage);
});
