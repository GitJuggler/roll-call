const TOKEN = "6088530092:AAGT7QckFBmjGeMctwbc8BMCAoINI2lFDdM";
const CHAT_ID = "-1001833797068";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let toast = document.querySelector(".toast");
let closeIcon = document.querySelector(".close");
let progress = document.querySelector(".progress");

let timer1, timer2;

document
  .getElementById("student-add-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let message = `<b>Зайявка с сайта!</b>\n`;
    message += `<strong>Надо добавить в лист:</strong>\n`;
    message += `${this.name.value} ${this.surname.value} ${this.phone.value}`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });

    this.name.value = "";
    this.surname.value = "";
    this.phone.value = "";

    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  });

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
