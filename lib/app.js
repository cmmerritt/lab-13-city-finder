/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatLocation, formatYelp, formatWeather } from './utils.js';


// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

//heartbeat route
app.get('/', (req, res) => {
  res.send('Proxy API');
});

app.get('/location', async (req, res) => {
  try {
    const apiKey = process.env.LOCATION_IQ_API_KEY;
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${req.query.search}&format=json`);
    /* .query({ api_key: process.env.LOCATION_IQ_API_KEY })
      .query ({ query: req.query.search }); */
  
    // munge
    const locations = formatLocation(response.body);

    // send it back
    res.json(locations);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const response = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`).set('Authorization', `Bearer ${process.env.YELP_DB_API_KEY}`);
  
    // munge
    const yelp = formatYelp(response.body);

    // send it back
    res.json(yelp);
    console.log(yelp);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;