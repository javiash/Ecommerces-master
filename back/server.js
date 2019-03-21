const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mailer = require('./mailer');

// Local imports
const db = require('./configure/db');
const authRoutes = require('./routes/authRoutes');

require('./configure/passport-setup');

const app = express();

app.use(morgan('tiny')); // loggin middleware
app.use(bodyParser.urlencoded({ extended: true })); // HTML submits
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'titans' })); // Cookie session middleware

app.use(express.static(`${__dirname}/public`));


app.use(passport.initialize()); // passport configuration & session connection
app.use(passport.session());


app.use('/auth', authRoutes);

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

mailer(
  'checkout',
  {
    name: 'Javier',
    mail: 'aenoriss@gmail.com',
    items: ['El señor de los anillos', 'Cronicas Marcianas', '20.000 Leguas de Viaje Submarino'],
    subject: 'BookStore Checkout',
  },
);

db.sync({ force: true }).then(() => {
  app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'));
});
