//  Importando um módulo
const fs = require("fs");

const nome = "Renzi Fidele";

const data = new Date();

fs.writeFile("dados.txt", `Nome do usuário: ${nome}`, (err) => {
   console.log(data);
});
