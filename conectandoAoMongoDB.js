const express = require("express");
const { readFileSync } = require("fs");
const { MongoClient } = require("mongodb");

const app = express();

const CONNECTION_STRING = "mongodb+srv://admin:Ratinho00@cluster0.dcvywkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// 1o Iniciamos a instância do cliente
const client = new MongoClient(CONNECTION_STRING);

// Importando página de html que será retornada
const paginaMongoDB = readFileSync("pages/paginaMongoDB.html");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.type("html");
   res.send(paginaMongoDB);
});


app.get("/alunos", async (req, res) => {
   //res.json({ alunos });
   // TODO: Retornar a lista dos anos na coleccao do MongoDB

   try {
      await client.connect();
      const db = client.db();
      const alunos = await db.collection("alunos").find().toArray();
      console.log("Alunos apanhados");
      console.log(alunos);
      res.json({ alunos });
   } catch (error) {
      console.log(err);
      return res.status(401).json({ mensagem: "Erro ao fazer o get no DB" });
   }
   client.close();
});

app.post("/alunos", async (req, res) => {
   let { nome, idade } = req.body;
   let aluno = { nome, idade };

   // 2o Iniciamos a conexão
   try {
      await client.connect();
      const db = client.db();
      const result = await db.collection("alunos").insertOne(aluno);
      console.log("Adicionado com sucesso");
      res.json({ mensagem: "Aluno adicionado com sucesso!" });
   } catch (error) {
      console.log(error.message);
      return res.status(401).json({ mensagem: "Não consegui adicionar ao Mongo DB" });
   }
   client.close();

   //res.json({ alunos });
});

app.listen(4000);
