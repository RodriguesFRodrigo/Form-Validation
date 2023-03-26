console.log("----- script loaded successfully. -----");

// Helper funcions to get elements by id and class
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// Helper function to treat validations
// id: target our id
// serial: target our classes for error os success
// message: print a message
let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

// Get elements by id
let elementsToValidate = [
  {
    input: id("username"),
    serial: 0,
  },
  {
    input: id("email"),
    serial: 1,
  },
  {
    input: id("password"),
    serial: 2,
  },
];
let form = id("form");

// Get elements by class
// errosMsg is a array with all div.error
let errorMsg = classes("error");
console.log(errorMsg);
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("----- Try submit form. -----");
  elementsToValidate.forEach((element) => {
    engine(element.input, element.serial, "Cannot be blank");
  });
});
