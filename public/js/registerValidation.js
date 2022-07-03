window.onload = function () {
  console.log("hola");
  let errorsFront = [];
  let nombreInput = document.querySelector("#nombre");
  let apellidoInput = document.querySelector("#apellido");
  let emailInput = document.querySelector("#email");
  let passwordInput = document.querySelector("#password");
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
    if (passwordInput.length < 8) {
      errorsFront.push("La contraseña debe tener mínimo 8 caracteres");
    }
    if (nombreInput.value == "" || nombreInput.value < 2) {
      errorsFront.push("El nombre debe tener al menos dos caracteres");
    }
    if (apellidoInput.value == "" || apellidoInput.value < 2) {
      errorsFront.push("El apellido debe tener al menos dos caracteres");
    }

    if (errorsFront.length > 0) {
      errorsDiv.innerHTML = "";
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
