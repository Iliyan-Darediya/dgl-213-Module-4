/* 
    Course:         DGL-213  
    Assignment:     Module 3.5
    Filename:       proxy.js
    Author:         Iliyan Darediya
    Date:           11 Nov 2021
*/
const express = require('express');
const request = require('request');
const target = 4000;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const api_url = 'https://www.metaweather.com/api/location/615702/';//location of Paris
app.get('/*', (req, res) => {
  request(
    { url: api_url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
    )
    console.log(req.originalURL);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));