const path = require('path')
const express = require('express');
const hbs =require('hbs');

const app = express();

const port = 8000;
const static_Path=path.join(__dirname,'../public')
const template_path=path.join(__dirname,'../template/views')
const Partial_path=path.join(__dirname,'../template/partials')
app.use(express.static(static_Path));
app.set('view engine', 'hbs');
app.set('views',template_path)
hbs.registerPartials(Partial_path)

app.get('/', (req, res) => {
  res.render('');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(port, (req, res) => {
  console.log('Connected Successfully');
});
