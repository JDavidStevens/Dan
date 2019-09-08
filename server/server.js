require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(`${__dirname}/../build`))

const port = 4500;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})