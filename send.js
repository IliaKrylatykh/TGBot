const token = "5548001603:AAEJ_KDpijcDPUAcRnxlItmAcbiaMlToJww";
const chatId = "-1001734552840";
const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Имя и номер телефона от отправителя</b>\n`;
  message += `<b>Имя: </b> ${this.name.value}\n`;
  message += `<b>Телефон: </b> ${this.tel.value}`;

  console.log(message);

  axios.post(urlApi, {
    chat_id: chatId,
    parse_mode: "html",
    text: message,
  });
  //   .then((res) => {
  //     this.name.valu = '';
  //     this.tel.value = '';
  //   })
  //   .catch((err) => {
  // console.log(err);
  //   })
  //   .finally(() => {
  // console.log('end');
  //   })
});
