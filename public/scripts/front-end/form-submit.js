const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const label = document.querySelector("label");

submit.addEventListener("click", (event) => {
  let message;
  window.innerWidth < 700
    ? (message = "Error")
    : (message = "Invalid IP Address");

  label.className = ""    

  let IParray = input.value.split(".");
  IParray.every((x) => parseInt(x) <= 255 && parseInt(x)) && IParray.length == 4
    ? true
    : (event.preventDefault(),
      (label.innerHTML = message),
      label.classList.toggle("visible"));
});

export { submit };
