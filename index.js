const express = require('express');
const { readFile } = require('fs').promises;
const PORT = 8080;

const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf-8') );
});

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    }) 
});

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `\u{1F455} with your ${logo} logo and ID of ${id}`,
    });
});

app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));