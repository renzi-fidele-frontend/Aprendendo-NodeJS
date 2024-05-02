const http = require("http");

//  Inicializando o servidor
const server = http.createServer((req, res) => {
   console.log("Pedido chegando...");

   console.log(`A URL é: ${req.url} e o método é: ${req.method}`);

   // Definindo o tipo de conteúdo da resposta
   res.setHeader("Content-Type", "text/html");

   // Caso seja feito um POST
   if (req.method === "POST") {
      let dados = "";

      // Após a requisição ter terminado
      req.on("end", () => {
         console.log(dados);
         dados.split("&").forEach((v) => console.log(v.split("=")));
      });

      // Ao chegar os dados do POST
      req.on("data", (chunk) => (dados += chunk));

      res.end(`<h1>Formulario enviado com sucesso!</h1>`);
   } else {
      res.end(
         "<form style='display: flex; padding: 5px; border-radius: 6px; gap: 1em; align-items: center; justify-content: center; flex-direction: column; border: 1px solid black; width: 500px; margin-inline: auto; margin-top: 6em' method='POST'><formfield><label for='nome'>Nome do usuario </label><input required type='text' name='nome'/></formfield><formfield><label for='idade'>Idade do usuario </label><input required type='number' name='idade'/></formfield> <button type='submit'>Enviar formulario </button> </form>"
      );
   }
});

// A rota em que o servidor estará observando, ficará observando até que eu remova o código e reinicie o servidor
server.listen(5000);
