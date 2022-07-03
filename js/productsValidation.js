const e = require("express");

window.onload = function () {
  const { title } = require("process");

  let productForms = document.querySelector(".form-product");
  productForms.addEventListener("submit", (e) => {
    let errors = [];

    let title = document.querySelector("#name");
    let precio = document.querySelector("#cost");
    let discount = document.querySelector("#discount");
    let description = document.querySelector("#description");
    let category = document.querySelector("#category");
    let size = document.querySelector("#size");
    let destacado = document.querySelector("#destacado");
    let foto = document.querySelector("#foto");

    if (title.value == "") {
      erros.push("El nombre del producto no puede estar vacío");
      title.classList.add("is-invalid");
    } else {
      title.classList.add("is-valid");
      title.classList.remove("is-invalid");
    }

    if (precio.value < 0) {
      erros.push("El precio del producto no puede estar vacío");
      precio.classList.add("is-invalid");
    } else {
      precio.classList.add("is-valid");
      precio.classList.remove("is-invalid");
    }

    if (discount.value <= 0) {
      erros.push("El discount del producto no puede ser menor a 0");
      discount.classList.add("is-invalid");
    } else {
      discount.classList.add("is-valid");
      discount.classList.remove("is-invalid");
    }

    if (description.value == "") {
      erros.push("La descripción del producto no puede estar vacía");
      description.classList.add("is-invalid");
    } else {
      description.classList.add("is-valid");
      description.classList.remove("is-invalid");
    }

    if (category.value == "") {
      erros.push("La categoría del producto no puede estar vacío");
      category.classList.add("is-invalid");
    } else {
      category.classList.add("is-valid");
      category.classList.remove("is-invalid");
    }

    if (size.value < 0) {
      erros.push("El tamaño del producto no puede estar vacío");
      size.classList.add("is-invalid");
    } else {
      size.classList.add("is-valid");
      size.classList.remove("is-invalid");
    }

    if (destacado.value == "") {
      erros.push("Los destacados del producto tienen que estar seleccionados");
      destacado.classList.add("is-invalid");
    } else {
      destacado.classList.add("is-valid");
      destacado.classList.remove("is-invalid");
    }

    if (foto.value == "") {
      erros.push("Tiene que subir una foto del producto");
      foto.classList.add("is-invalid");
    } else {
      foto.classList.add("is-valid");
      foto.classList.remove("is-invalid");
    }
    if (errors.length > 0) {
      e.preventDefault();
      console.log(errors);
    }
  });
};
