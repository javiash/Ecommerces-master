const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const morgan = require('morgan');

const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// Local imports
const db = require('./configure/db');
const authRoutes = require('./routes/authRoutes');
const Book = require('./models/book');
const Category = require('./models/category');

require('./configure/passport-setup');


app.use(morgan('tiny')); // loggin middleware
app.use(bodyParser.urlencoded({ extended: true })); // HTML submits
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'titans' })); // Cookie session middleware

app.use(express.static(`${__dirname}/public`));


app.use(passport.initialize()); // passport configuration & session connection
app.use(passport.session());

app.get('/piphole', (req, res) => {
  console.log('piphole');
  Book.findOne({
    where: { id: 1 },
    include: [Category],
  })
    .then((res) => {
      console.log('CATEGORIA', res.categories);
    },);
  res.send('ok');
});

app.use('/auth', authRoutes);


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

db.sync({ force: false }).then(() => {
  app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'));
});
