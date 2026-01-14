import express from "express";

const server = express();

server.use(express.json())

let frase = "Mi flor del jardin crecio esta mañana"

server.get("/api/frase", (req, res) => {
  res.json({ frase })
});

server.get("/api/palabras/:pos", (req, res) => {
  const pos = parseInt(req.params.pos);
  const fraseArray = frase.split(" ");
  if(!fraseArray[pos]) return res.status(400).json({ error: "position not exists"})
  res.json({ buscada: fraseArray[pos] })
});

server.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  frase = frase.split(" ");
  const pos = frase.push(palabra) - 1;
  frase = frase.join(" ");
  res.json({ agregada: palabra, pos })  
});

server.put("/api/palabras/:pos", (req, res) => {
  const pos = parseInt(req.params.pos);
  const { palabra } = req.body;

  frase = frase.split(" ");
  const frasePrevia = frase[pos]
  frase[pos] = palabra;
  frase = frase.join(" ");

  res.json({ actualizada: palabra, anterior: frasePrevia})

});

server.delete("/api/palabras/:pos", (req, res) => {
  const pos = parseInt(req.params.pos);

  frase = frase.split(" ");
  const frasePrevia = frase[pos]
  frase.splice(pos, 1);
  frase = frase.join(" ");

  res.json({ removido: frasePrevia })
});

server.listen(5000, () => console.log("server up"))
