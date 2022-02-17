const express = require('express');
const { readFile } = require('fs').promises;
const PORT = 8080;

const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf-8') );
});

app.get('/ball', (req, res) => {
    res.status(200).send({
        ball: '🏀',
        type: 'basketball'
    }) 
});

app.post('/ball/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        ball: `🏀 with your ${logo} logo and ID of ${id}`,
    });
});

app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));