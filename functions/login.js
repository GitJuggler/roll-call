let username = document.querySelector(".username").value;
let password = document.querySelector(".password").value;

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let usersGet = axios.get("http://localhost:3001/users/");
  for (let i = 0; i < document.getElementById("login-form").length; i++) {
    if (username == usersGet) {
      alert(usersGet.name);
    } else {
      alert(usersGet.name);
    }
  }
});
