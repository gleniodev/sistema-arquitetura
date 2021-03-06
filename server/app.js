const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const categoriasRouter = require('./routes/categorias');
const usuariosRouter = require('./routes/usuarios');
// const contatoRouter = require('./routes/contato');
// const loginRouter = require('./routes/login');
const portfolioRouter = require('./routes/portfolio');
const cidadesRouter = require('./routes/cidades');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/categorias', categoriasRouter);
app.use('/usuarios', usuariosRouter);
// app.use('/contato', contatoRouter);
// app.use('/login', loginRouter);
app.use('/portfolio', portfolioRouter);
app.use('/cidades', cidadesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //   res.status(err.status || 500);
  //   res.render('error');
});

module.exports = app;
