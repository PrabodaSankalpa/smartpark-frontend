document.getElementById("login").addEventListener("click", login);

function login() {
  let email = document.getElementById("mail").value;
  let password = document.getElementById("password").value;

  if (email && password) {
    if (email == "kamal@gmail.com" && password == "1234") {
      window.location.replace("./dashboard.html");
    } else {
      alert("Invalid");
    }
  } else {
    alert("Required");
  }
}
