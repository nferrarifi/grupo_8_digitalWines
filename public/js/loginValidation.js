window.onload = function () {
  let errorsFront = [];
  let emailInput = document.querySelector("#emailInput");
  let passwordInput = document.querySelector("#passwordInput");
  let form = document.querySelector("#form");
  let errorsDiv = document.querySelector(".errors");

  form.addEventListener("submit", function (event) {
    if (emailInput.value == "") {
      errorsFront.push("Es obligatorio ingresar un email");
    }
    if (emailInput.value.indexOf("@") < 0) {
      errorsFront.push("Por favor ingrese un email válido");
    }
    if (passwordInput.value === "") {
      errorsFront.push("Es obligatorio ingresar una contraseña");
    }

    if (errorsFront.length > 0) {
      console.log(errorsFront);
      event.preventDefault();
      errorsFront.forEach((error) => {
        let errorP = document.createElement("p");
        errorP.innerText = error;
        errorsDiv.appendChild(errorP);
      });
      errorsFront = [];
    }
  });
};
