const TOKEN = "6088530092:AAGT7QckFBmjGeMctwbc8BMCAoINI2lFDdM";
const CHAT_ID = "-1001833797068";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document
  .getElementById("register-form")    
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // variables
    let nameVal = this.name.value;
    let emailVal = this.email.value;
    let phoneVal = this.tel.value;
    let passVal = this.password.value;
    let status = ["[admin]", "[student]"];
    let newStatus;
    let dangerAlert = document.querySelector(".da");
    let close = document.querySelector(".close");

    for (let i = 0; i < status.length; i++) {
      if (this.password.value == "ADMIN-roll-call-1") {
        newStatus = status[0];
      } else {
        newStatus = status[1];
      }
    }

    // preparing a message
    let message = `Новый юзер!\n`;
    message += `Имя: ${this.name.value}\n`;
    message += `Пароль: ${this.password.value}\n`;
    message += `Емайл: ${this.email.value}\n`;
    message += `Телефон: ${this.tel.value}\n`;
    message += `Статус: ${newStatus}`;

    // sending to Telegram
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })

      .catch(function (error) {
        dangerAlert.style.display = "flex";
      });

    this.name.value = "";
    this.email.value = "";
    this.password.value = "";
    this.tel.value = "";

    close.onclick = (e) => {
      dangerAlert.style.display = "none";
    };

    // sending data to backend
    let zero = 0;
    let zeroPlus = zero++;

    axios.post("http://localhost:3001/users", {
      id: zeroPlus,
      name: nameVal,
      password: passVal,
      email: emailVal,
      phoneNumber: phoneVal,
      status: newStatus,
    });
  });