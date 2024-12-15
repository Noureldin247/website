const express = require('express');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.redirect('/login'); 
});


app.get('/login', (req, res) => {
    res.render('login'); 
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    
    if (username === 'admin' && password === 'password') {
        res.redirect('/home'); 
    } else {
        res.send('Invalid credentials. <a href="/login">Try again</a>');
    }
});


app.get('/home', (req, res) => {
    res.render('home');
});


app.get('/hiking', (req, res) => {
    res.render('hiking'); 
});


app.get('/inca', (req, res) => {
    res.render('inca'); 
});


app.get('/annapurna', (req, res) => {
    res.render('annapurna'); 
});


app.get('/cities', (req, res) => {
    res.render('cities'); 
});


app.get('/paris', (req, res) => {
    res.render('paris'); 
});


app.get('/rome', (req, res) => {
    res.render('rome'); 
});


app.get('/islands', (req, res) => {
    res.render('islands'); 
});


app.get('/bali', (req, res) => {
    res.render('bali'); 
});


app.get('/santorini', (req, res) => {
    res.render('santorini'); 
});


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});