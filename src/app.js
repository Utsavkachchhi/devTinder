import express from 'express';
import { adminAuth, userAuth } from './middleware/auth.js';

const app = express();

// app.use('/',(req,res) => {
//     res.send('my home page')
// })

// app.get('/utsav',(req,res) => {
//     res.send('get method call')
// })

// app.post('/test',(req,res) => {
//     res.send('post method')
// })

// app.put('/test',(req,res) => {
//     res.send('put methd')
// })

// app.patch('/test',(req,res) => {
//     res.send('patch method')
// })

// app.get('/ab*c',(req,res) => {
//     res.send('pattern match')
// })


// app.get('/:data/test',(req,res) => {
//     const {data} = req.params;
//     console.log(data)
//     console.log(req.query);
    
//     res.send('result success')
// })

// app.use("/user",(req,res,next) => {
//     console.log('hello from js');
//     // res.send('1 output')
//     next()
// },(req,res,next) => {
//     console.log('hello from 2');
//     //res.send('2 output')
//     next()
// },
// [(req,res,next) => {
//     console.log('hello from 3');
//     // res.send('3 output')
//     next()
// },
// (req,res,next) => {
//     console.log('hello from 4');
//     res.send('4 output')
//     // next()
// },]
// )

app.get('/admin/getData',(req,res) => {
    res.send('get data from admin')
})

app.get('/user',userAuth,(req,res) => {
    res.send('user route')
})

app.delete('/admin/deleteData',adminAuth,(req,res) => {
    res.send('data deleted')
})


app.listen(8000,() => {
    console.log('server listen on port 8000');   
})