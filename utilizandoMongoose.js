const express = require("express");
const { readFileSync } = require("fs");
const { adicionarAluno, getAlunos } = require("./controllers/AlunoController");

const app = express();

// Importando página de html que será retornada
const paginaMongoDB = readFileSync("pages/paginaMongoDB.html");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.type("html");
   res.send(paginaMongoDB);
});

app.get("/alunos", getAlunos);

app.post("/alunos", adicionarAluno);

app.listen(4000);
