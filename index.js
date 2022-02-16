const express = require('express');
const { readFile } = require('fs').promises;
const PORT = 8080;

const app = express();

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf-8') );

});

app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));