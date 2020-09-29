import express from 'express';
import routes from './src/routs/infRouts';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app=express();
const PORT=4000;

//mongoose connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://inferno:1234@cluster0-8xfbs.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);