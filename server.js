var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running'));

app.use(express.static('public'));
app.use('/api', require('./controllers/burgers_controller.js'));
