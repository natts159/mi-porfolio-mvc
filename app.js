const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/main')

/*recurso estatico*/
app.use(express.static('public'));


/*configuración del motor de plantillas */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* rutas */
app.use('/', mainRoutes);

app.listen(3000, () => console.log('Servidor funcionando'))