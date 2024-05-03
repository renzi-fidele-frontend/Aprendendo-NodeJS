const express = require("express");
const fs = require("fs");

const app = express();

const port = 3000;

app.listen(port);

// Importando página de html que será retornada
const paginaDados = fs.readFileSync("pages/dados.html");

// Ao se navegar para home
app.get("/", (req, res) => {
   console.log("GET feito");
   res.send(
      "<form style='display: flex; padding: 5px; border-radius: 6px; gap: 1em; align-items: center; justify-content: center; flex-direction: column; border: 1px solid black; width: 500px; margin-inline: auto; margin-top: 6em' method='POST'><formfield><label for='nome'>Nome do usuario </label><input required type='text' name='nome'/></formfield><formfield><label for='idade'>Idade do usuario </label><input required type='number' name='idade'/></formfield> <button type='submit'>Enviar formulario </button> </form>"
   );
});

// Ao se fazer post na home
app.post("/", (req, res) => {
   let dados_resposta = "";

   req.on("end", () => {
      let nomeUsuario = dados_resposta.split("&")[0].split("=")[1].split("+").join(" ");
      console.log(dados_resposta);
      res.send(`<h1>Bem vindo ${nomeUsuario}</h1>`);
   });

   req.on("data", (chunk) => {
      dados_resposta += chunk;
   });
   console.log("Formulário enviado com sucesso");
});

// Ao se navegar para dados
app.get("/dados", (req, res) => {
   res.type("html");
   res.send(paginaDados);
});

// Utilizamos o método next() quando nenhuma responsta é enviada
