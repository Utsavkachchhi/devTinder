import express from 'express';
const app = express();

app.use('/',(req,res) => {
    res.send('my home page')
})

app.listen(8000,() => {
    console.log('server listen on port 8000');   
})