const express = require('express');
const path = require('path')

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname,'public')));
app.use((req, res, next) => {
  
})

app.get('/', (req, res)=>{
  res.send('Hello express')
});

app.get('/about', (req, res)=>{
  res.render('about.hbs');
})

app.listen(3000, ()=>{
  console.log("Running on localhost:3000");
});
