const { connect } = require("mongoose");
const Aluno = require("../models/aluno");

const uri = "mongodb+srv://admin:Ratinho00@cluster0.dcvywkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

connect(uri)
   .then(() => console.log("Conectado com sucesso!"))
   .catch((err) => console.log("Erro ao conectar", err.message));

const adicionarAluno = async (req, res) => {
   const alunoAdicionado = new Aluno({ nome: req.body.nome, idade: req.body.idade });
   await alunoAdicionado
      .save()
      .then((alunoAdicionado) => res.json({ alunoAdicionado }))
      .catch((err) => console.log("Erro ao conectar", err.message));
};

exports.adicionarAluno = adicionarAluno;
