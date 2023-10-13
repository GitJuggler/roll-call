const TOKEN = "6088530092:AAGT7QckFBmjGeMctwbc8BMCAoINI2lFDdM";
const CHAT_ID = "-1001833797068";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


document
  .getElementById("student-add-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let message = `<b>Зайявка с сайта!</b>\n`;
    message += `<strong>Надо добавить в лист:</strong>\n`;
    message += `${this.name.value} ${this.surname.value} ${this.phone.value}`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    });
  });
