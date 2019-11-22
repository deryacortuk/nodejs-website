const path = require('path')
const hbs = require('hbs')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

const directoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')




app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(directoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: "Derya Cortuk"
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'DERYA CORTUK'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'you must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})


app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'you most provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help', (req, res) => {
    res.render("help", {
        title: "help page",
        name: "Derya Cortuk"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Derya Cortuk',
        errorMessage: 'Page not found!'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404 page',
        errorMessage: 'page not found'
    })


})




app.listen(3000)