const express = require('express')

const hbs= require ('hbs')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

// ROUTING

app.get('/' , (req, res)=>{
    res.render('index')
})

app.get('/about' , (req, res)=>{
    res.render('about')
})

app.get('/works' , (req, res)=>{
    res.render('works')
})

app.get('/photo-gallery' , (req, res)=>{
    res.render('photogallery')
})

app.listen(5005, ()=> console.log('Server started on port 5005'))