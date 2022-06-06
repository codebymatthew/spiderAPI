const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())

const coolSpiders = {
    'jumping spider': {
        'Venomous': 'no',
        'Family': 'Salticidae',
        'Fun Fact': 'Capable of jumping up to six inches!'
    },
    'cellar spider': {
        'Venomous': 'no',
        'Family': 'Pholcidae',
        'Fun Fact': 'Commonly thought to be venomous but their mouth isn\'t strong enough to pierce human skin.  Also not venomous.'
    },
    'black widow': {
        'Venomous': 'yes',
        'Family': 'Theridiidae',
        'Fun Fact': 'Has a cool red hourglass on its belly.'
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})