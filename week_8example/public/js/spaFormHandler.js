document.addEventListener('DOMContentLoaded', init);

let firstnameFiled;
let lastnameField;
let resultElement;

function init() {
  firstnameFiled = document.getElementById('firstname'); lastnameField = document.getElementById('lastname');
  resultElement = document.getElementById('result');


  document.querySelector('button').addEventListener('click', submit)
}
async function submit() {
  const person = {
    firstname: firstnameFiled.value,
    lastname: lastnameField.value
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  };
  const data = await fetch('/inputspa', options);
  const jsonData = await data.json();

  resultElement.textContent = JSON.stringify(jsonData, null, 4);
}