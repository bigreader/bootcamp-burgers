var express    = require('express');
var handlebars = require('express-handlebars');

var app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running'));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.use('/', require('./controllers/burgers_controller.js'));
