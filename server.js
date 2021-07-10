const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (request, response) => {
    response.send("Alô mundo!");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});