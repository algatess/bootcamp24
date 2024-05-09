function showForm() {
    var form = document.getElementById('form');
    form.style.display = 'block';
    document.getElementById("form").style.display = "block";
    document.getElementById("text-output").style.display = "none";
  }
  document.getElementById("ok").addEventListener("click", showForm);
  document.getElementById('ok').addEventListener('click' , function() {this.style.display = 'none';});
  document.getElementById('ok').addEventListener('click' , function() {this.textContent = newText; this.style.display = 'block'; }) 
  document.getElementById("form").addEventListener("submit", function(event) {event.preventDefault();
  var text = document.querySelector(".text").value;
  document.getElementById("text-output").textContent = "your request has been successfully completed" + text;
  document.getElementById("form").style.display = "none";
  document.getElementById("ok").style.display = "block";
  document.getElementById("text-output").style.display = "block";
  document.getElementById("ok").addEventListener("click", function () {
  this.style.display = "none";});
  });