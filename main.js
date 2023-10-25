let tachesInput = document.querySelector("#tachesInput");
let inputBtn = document.querySelector("#inputBtn");
let ol = document.querySelector("#ol");

function liste() {
  ol.innerHTML += `<li>${tachesInput.value}</li>`;
}

inputBtn.addEventListener("click", liste);


// if(tachesInput == false) {
  //   ol.innerHTML = `${
  //     tachesInput.value.length > 0 ? tachesInput.value : "Veuillez entrer une tâche valide !"
  //   }`;
  // }