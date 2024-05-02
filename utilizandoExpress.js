const express = require("express");

const app = express();

app.get("/", (req, res) => {
   console.log("GET feito");
   res.send(
      "<form style='display: flex; padding: 5px; border-radius: 6px; gap: 1em; align-items: center; justify-content: center; flex-direction: column; border: 1px solid black; width: 500px; margin-inline: auto; margin-top: 6em' method='POST'><formfield><label for='nome'>Nome do usuario </label><input required type='text' name='nome'/></formfield><formfield><label for='idade'>Idade do usuario </label><input required type='number' name='idade'/></formfield> <button type='submit'>Enviar formulario </button> </form>"
   );
});

app.post("/", (req, res) => {
   console.log("Formulário enviado com sucesso");
   res.send("<h1>Bem vindo</h1>");
});

app.listen(3000);
