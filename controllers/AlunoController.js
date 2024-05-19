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

const getAlunos = async (req, res) => {
   let alunos;
   try {
      alunos = await Aluno.find();
   } catch (erro) {
      console.log("Erro ao apanhar os alunos no DB");
      return res.status(404).json({ mensagen: "Erro ao apanhar os alunos no DB" });
   }
   res.json({ alunos: alunos });
};

exports.adicionarAluno = adicionarAluno;
exports.getAlunos = getAlunos;
