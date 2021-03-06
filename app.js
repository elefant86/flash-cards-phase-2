require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const mainRout = require('./routes/mainRout');
const sendAnswers = require('./routes/sendAnswers');
const PORT = process.env.DB_PORT ?? 3000;
const app = express();
const authRouter = require('./routes/authRouter');


app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', authRouter);
app.use('/main', mainRout);
app.use('/sendAnswers', sendAnswers);

app.listen(PORT, () => {
console.log('Server start on port', PORT);
});
