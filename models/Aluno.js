const mongoose = require("mongoose");

const schemaDoAluno = new mongoose.Schema({ nome: { type: String, required: true } });

const Aluno = mongoose.Model("Aluno", schemaDoAluno);

module.exports = Aluno;