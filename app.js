const express = require('express');

// Rotas
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Confifurações
const app = express();
app.use('/', router);

module.exports = app;