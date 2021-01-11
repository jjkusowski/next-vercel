import axios from "axios";

export function checkUserExistCall(email) {
  const createUserReq = { requestType: "userExistCheck", emailId: email };

  axios({
    method: "POST",
    url: "https://webex.com/bin/createBuyAcc",
    data: createUserReq,
  })
    .then((response1) => {
      console.log(response1);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function checkUser(email: string) {
  const data1 = `<message xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:serv='http://www.webex.com/schemas/2009/05/service'> <header/> <body> <bodyContent xsi:type='java:com.webex.webapp.sxa.binding.user.GetAllSitesByEmailAgg'> <email>sandeepkulkarni374@gmail.com</email> </bodyContent> </body> </message>`;
  axios({
    method: "POST",
    url: "https://api.webex.com/gla/GLAService",
    data: data1,
    headers: {
      "Content-Type": "application/xml",
      Accept: "application/xml",
    },
  })
    .then((response) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");

      const bodyContent = xmlDoc.getElementsByTagName("serv:bodyContent")[0];

      for (let i = 0; i < bodyContent.children.length; i += 1) {
        if (
          bodyContent.children[i].getElementsByTagName("user:cluster")[0]
            .textContent === "Production Env"
        ) {
          if (
            bodyContent.children[i].getElementsByTagName("user:result")[0]
              .textContent === "SUCCESS"
          ) {
            window.location.href = "https://signin.webex.com/collabs/auth";
          } else {
            checkUserExistCall(email);
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
