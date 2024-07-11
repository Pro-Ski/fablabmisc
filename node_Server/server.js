const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__direname, 'public')));

app.listen(PORT, () => {
    console.log('Rock and roll! on http://localhost:${PORT}');
});
