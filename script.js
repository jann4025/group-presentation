"use strict";

document.querySelector("button").addEventListener("click", removeStart);

function removeStart() {
  document.querySelector("#start-container").classList.add("hide");
  document.querySelector(".natalie").classList.remove("hidden");
  document.querySelector("#musik").play();
}

const animated = document.querySelector(".spotlight-enter-active");
animated.addEventListener("animationend", () => {
  setTimeout(assignmentNumber, 2000);
});

function assignmentNumber() {
 document.querySelector(".natalie").classList.add("hidden");
  document.querySelector(".info").classList.remove("hidden");
    setTimeout(showSarah, 3000);
}

function showSarah() {
  document.querySelector(".info").classList.add("hidden");
  document.querySelector(".sarah").classList.remove("hidden");
    setTimeout(showVideo, 4000);

}

function showVideo() {
 document.querySelector(".sarah").classList.add("hidden");
  document.querySelector(".video-clip").classList.remove("hidden");
    setTimeout(showJannick, 3000);

}

function showJannick() {
  
document.querySelector(".video-clip").classList.add("hidden");
  document.querySelector(".jannick").classList.remove("hidden");

  
    setTimeout(fadeOut, 3000);

}

 
function fadeOut() {
  document.querySelector(".jannick").classList.add("fade");
}