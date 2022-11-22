const express = require('express'),
    morgan = require('morgan');
   
    
const app = express();

app.use(express.static('public'));
app.use(morgan('common'));

let favPlants = [
    {
        name: 'Silver Dragon Alocasia',
        environment: 'Tropical'
    },

    {
        name: 'Swiss Cheese Plant',
        environment: 'Tropical'
    }
];

//GET requests
app.get('/', (req, res) => {
    res.send('Welcome to my plant club!');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html',
    { root: __dirname});
});

//return list of all plants 
app.get('/plants', (req, res) => {
    res.json(favPlants);
});

//gets data about one plant
app.get('/plants/:name', (req, res) => {
    res.json(plants.find((favPlant) =>
    { return favPlant.name ===req.params.name}));
});

//Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oh no, something went wrong. Please try again later.')
})

//listens for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080');
});

