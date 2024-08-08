
import express from 'express'
const app = express()
const port = 8080
import cors from 'cors'
// const utils = require('./utils/data')
import {microbe, infectionTracker} from './utils/data.js'

const allowedOrigins = [
    'http://localhost:4003',
    'http://localhost:2000'
    // Add more ports as needed
  ];
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };
  
  app.use(cors(corsOptions));

app.get('/microbe/', (req, res) => {
  res.send(microbe)
})
app.get('/inf/', (req, res) => {
  res.send(infectionTracker)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})