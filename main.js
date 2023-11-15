let tachesInput = document.querySelector("#tachesInput");
let inputBtn = document.querySelector("#inputBtn");
let ul = document.querySelector("#ul");

const checkFunction = () => {
  const inputList = document.createElement("INPUT");
  inputList.setAttribute("type", "checkbox");
  ul.appendChild(inputList);

  const labelCheked = document.createElement("label");
  labelCheked.textContent=tachesInput.value;
  ul.appendChild(labelCheked);

  const br = document.createElement("br");
  ul.appendChild(br);

  if(checkFunction.value.length === 0) {
    return;
  }
}

inputBtn.addEventListener("click", checkFunction);