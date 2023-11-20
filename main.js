let tachesInput = document.querySelector("#tachesInput");
let inputBtn = document.querySelector("#inputBtn");
let ul = document.querySelector("#ul");

const todos = [];
const checkFunction = () => {
  
  if(tachesInput.value == "") {
    return;
  }
  
  todos.push(tachesInput.value)
  console.log(todos)

  const inputList = document.createElement("INPUT");
  inputList.setAttribute("type", "checkbox");
  ul.appendChild(inputList);

  const labelCheked = document.createElement("label");
  labelCheked.textContent=todos;
  ul.appendChild(labelCheked);

  const br = document.createElement("br");
  ul.appendChild(br);

  tachesInput.value = "";

  // if(inputList.checked == true) {
  //   labelCheked.style.textDecoration = "line-through";
  // }
}

tachesInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    inputBtn.click();
  }
});

inputBtn.addEventListener("click", checkFunction);