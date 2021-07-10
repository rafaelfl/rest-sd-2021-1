const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

const bd = [
    {
        produto: "Big Mac",
        preco: 20.0
    },
    {
        produto: "Coca-cola",
        preco: 5.0
    },
    {
        produto: "Batata frita",
        preco: 10.0
    },
];

app.use(express.json());

app.get("/", (request, response) => {
    response.send("Alô mundo!");
});

app.get("/produtos", (req, res) => {
    res.send(bd);
});

app.get("/produtos/:id", (req, res) => {
    const idProduto = req.params.id;

    if (idProduto >= 0 && idProduto < bd.length) {
        res.send(bd[idProduto]);
    } else {
        res.status(404).send();
    }
});

app.post("/cadastro", (req, res) => {
    const produto = req.body;

    bd.push(produto);

    res.send({ result: "OK" });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});