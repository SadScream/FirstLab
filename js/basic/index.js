import express from "express"
import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.redirect('/brief');
})

app.get('/brief', (req, res) => {
    res.render('brief', {pageTitle: 'Brief'})
})

app.get('/appearance', (req, res) => {
    res.render('appearance', {pageTitle: 'Appearance'})
})

app.get('/personality', (req, res) => {
    res.render('personality', {pageTitle: 'Personality'})
})

app.get('/links', (req, res) => {
    res.render('links', {pageTitle: 'Links'})
})

app.listen(3000, () => {
    console.log('express app!!!')
})

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.use(express.static(__dirname + '/public'))