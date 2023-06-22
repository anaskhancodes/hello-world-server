import express from 'express';
import cors from 'cors'
import path from 'path';
const __dirname = path.resolve();


const app = express();
// app.use(cors());



//      http://192.168.0.104:3000



app.get('/weather/:CityName', (req, res) => {
    console.log('Hello World!', new Date());

    let weatherData = { 
        karachi: {
            city: "Karachi",
            TemoInC: 32,
            Wind: 54,
            high: 36,
            low: 28
        },

        islamabad:{
            city: "Islamabad",
            TemoInC: 22,
            Wind: 60,
            high: 25,
            low: 20
        },

        lahore:{
            city: "Lahore",
            TemoInC: 18,
            Wind: 30,
            high: 20,
            low: 14
        },

        faisalabad:{
            city: "Faisalabad",
            TemoInC: 34,
            Wind: 10,
            high: 38,
            low: 30
        },

        quetta:{
            city: "Quetta",
            TemoInC: 20,
            Wind: 5,
            high: 21,
            low: 18
        },

        multan:{
            city: "Multan",
            TemoInC: 21,
            Wind: 7,
            high: 22,
            low: 20 
        },
    }

    let UserInputCityName = req.params.CityName.toLowerCase();

    let weatherDataToSend = weatherData[UserInputCityName]


    if(weatherDataToSend){
        res.send(weatherDataToSend);
    }else{
        res.status(404).send(`Weather is not avaiblable for ${req.params.CityName}`);
    }



    // res.send();
})


app.use('/', express.static(path.join(__dirname,  'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

