document.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  let bullet = document.createElement("span");
  let audio = document.querySelector("audio");

  let x = e.offsetX;
  let y = e.offsetY;
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";

  body.appendChild(bullet);
  audio.play();
});
