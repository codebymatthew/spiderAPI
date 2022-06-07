const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())

const coolSpiders = {
    'jumping spider': {
        'venomous': 'no',
        'family': 'Salticidae',
        'fun fact': 'Capable of jumping up to six inches!'
    },
    'cellar spider': {
        'venomous': 'no',
        'family': 'Pholcidae',
        'fun fact': 'Commonly thought to be venomous but their mouth isn\'t strong enough to pierce human skin.  Also not venomous.'
    },
    'black widow': {
        'venomous': 'yes',
        'family': 'Theridiidae',
        'fun fact': 'Has a cool red hourglass on its belly.'
    },
    'huntsman': {
        'venomous': 'yes',
        'family': 'Sparassidae',
        'fun fact': 'Sometimes called a crab spider due to their size.'
    },
    'unknown': {
        'unknown': 'unknown',
        'unknown': 'unknown',
        'unknown': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request, response) => {
    const spiderName = request.params.name.toLocaleLowerCase()
    if( coolSpiders[spiderName] ) {
        response.json(coolSpiders[spiderName])
    }
    else {
        response.json(coolSpiders['unknown'])
    }
})
app.get('/api', (request, response) => {
    response.json(coolSpiders)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})