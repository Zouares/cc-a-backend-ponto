const express = require('express');
const app = express();

app.get('/users', (req,res) => {
    res.send("Nesse rota vou retornar os usuarios");
});

app.post('/users', (req,res) => {
    res.send("Nessa rota users usando post");

});

app.get('/user/:id1', (req,res) => {
    res.send(`o parâmetro é ${req.params.id}`)

});

app.get('/user/:id1-id2', (req,res) => {
    res.send(req.params);

});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor web ouvindo na porta ${port}!`);
});
