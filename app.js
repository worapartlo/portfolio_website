import express from 'express';
import chalk from 'chalk';

const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {

    res.send('Welcome to page');
})

app.listen(port, () => {
    
    console.log('Please wait for the page to load...[]');
    console.log('listening on port' + chalk.green(' : ' + port));
});