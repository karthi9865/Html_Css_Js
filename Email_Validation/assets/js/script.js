function validation() {
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const text = document.getElementById("text");

  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerText = " Your Email Is Valid";
    text.style.color = "green";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerText = " Your Email Is invalid";
    text.style.color = "red";
  }
  if (email.value == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerText = "";
  }
}
