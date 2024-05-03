const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.listen(port);

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
   res.type("html");
   res.send(
      "<form style='display: flex; padding: 5px; border-radius: 6px; gap: 1em; align-items: center; justify-content: center; flex-direction: column; border: 1px solid black; width: 500px; margin-inline: auto; margin-top: 6em' method='POST'><formfield><label for='nome'>Nome do usuario </label><input required type='text' name='nome'/></formfield><formfield><label for='idade'>Idade do usuario </label><input required type='number' name='idade'/></formfield> <button type='submit'>Enviar formulario </button> </form>"
   );
});

app.post("/", (req, res) => {
   console.log(req.body);
   res.send(`<h1>Ola, ${req.body.nome}</h1><br><p>A sua idade e: ${req.body.idade}</p>`);
});
