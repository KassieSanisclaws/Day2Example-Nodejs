const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const albumsRouter = require('./Routes/albumsRoute');

//Enviroenment Variables:
dotenv.config();

//Express server app:
const app = express();
 
app.use(cors());
app.use(bodyParser.json());

//Routes:
app.use("/", albumsRouter);

//Error Handling:
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});
  
//Successful Response:
app.use((req, res,) => {
    // console.log('Request:', req.method, req);
    res.status(200).send({ message: 'Success' });     
});  

//Server:
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

module.exports = app;