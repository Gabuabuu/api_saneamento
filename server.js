import app from "./src/app.js";

import connectionDataBase from "./src/app/database/connection.js";

connectionDataBase.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(3000, () => {
      console.log("Rodando servidor na porta 3000");
      console.log("Conexão estabelecida com o banco de dados");
    });
  }
});
