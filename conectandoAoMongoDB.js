const express = require("express");
const { readFileSync } = require("fs");
const { MongoClient } = require("mongodb");

const app = express();

const CONNECTION_STRING = "mongodb+srv://admin:Ratinho00@cluster0.ecocgfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Importando página de html que será retornada
const paginaMongoDB = readFileSync("pages/paginaMongoDB.html");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.type("html");
   res.send(paginaMongoDB);
});

app.get("/alunos", (req, res) => {
   //res.json({ alunos });
   // TODO: Retornar a lista dos anos na coleccao do MongoDB
});

app.post("/alunos", async (req, res) => {
   let { nome, idade } = req.body;
   let aluno = { nome, idade };

   // 1o Iniciamos a instância do cliente
   const client = new MongoClient(CONNECTION_STRING);

   // 2o Iniciamos a conexão
   await client
      .connect()
      .then(() => {
         const db = client.db();
         db.collection("alunos").insertOne(aluno);
         console.log("Adicionado com sucesso");
      })

      .catch((erro) => console.error("Não consegui adicionar ao Mongo DB"))
      .finally(() => {
         client.close();
         res.json({ mensagem: "Aluno adicionado com sucesso!" });
      });

   //res.json({ alunos });
});

app.listen(4000);