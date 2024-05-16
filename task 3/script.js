const form = document.getElementById("form");
const okButton = document.getElementById("ok");
const textOutput = document.getElementById("text-output");

// Define functions
function showForm() {
  form.style.display = "block";
  okButton.style.display = "none";
  textOutput.style.display = "none";
}

function handleSubmit(event) {
  event.preventDefault();
  const text = document.querySelector(".text").value;
  textOutput.textContent = `Your request has been successfully completed ${text}`;
  form.style.display = "none";
  okButton.style.display = "block";
  textOutput.style.display = "block";
  okButton.addEventListener("click", hideOkButton);
}

function hideOkButton() {
  okButton.style.display = "none";
}

// Add event listeners
okButton.addEventListener("click", showForm);
form.addEventListener("submit", handleSubmit);
