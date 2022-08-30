const axios = require("axios");

const url = "https://exp.host/--/api/v2/push/send";

const data = {
  to: "ExponentPushToken[K_pHK2FB5Zk6CFoukczPLy]",
  sound: "default",
  title: "Teste",
  body: "Testando notificações!",
  data: { someData: "goes here" },
};

axios.post(url, data, {
  headers: {
    "Accept-encoding": "gzip, deflate",
    "Content-Type": "application/json",
  },
}).then((response)=>{console.log(response.data)});

