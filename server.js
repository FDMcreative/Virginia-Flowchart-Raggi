//node packages
const express = require('express');
const morgan = require('morgan');

//create express app
const app = express();

//set view engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

//set static files
app.use(express.static(`${__dirname}/public`));

//logging middleware
app.use(morgan('dev'));

//set redirects for pages
app.get('/', (req,res) => {
  res.status(200).render('index', { heading: 'Sei infelice?' });
});
app.get('/raggi', (req,res) => {
  res.status(200).render('raggi', { heading: 'E\' colpa della Raggi. \n Insultala.' });
});
app.get('/buche', (req,res) => {
  res.status(200).render('buche', { heading: 'Il buco di bilancio non sai cos\'è, ma le buche stradali ti rovinano l\'assetto basso?' });
});
app.get('/immondizia', (req,res) => {
  res.status(200).render('immondizia', { heading: 'Vuoi abbandonare water e materasso accanto ai secchioni, ma non ci arrivi perché il tuo vicino ha fatto già lo stesso?' });
});
app.get('/olimpiadi', (req,res) => {
  res.status(200).render('olimpiadi', { heading: 'Sei campione di salto della quaglia, ma non ci saranno le olimpiadi in città?' });
});
app.get('*', (req,res) => {
  res.status(404).render('404', { heading: '404: File Not Found ???' });
});

//listen traffic
app.listen(3000, () => console.log('express is listening on 3000...') );
