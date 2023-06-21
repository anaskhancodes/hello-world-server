import express from 'express';



const app = express();



//      http://192.168.0.104:3000
app.get('/', (req, res) => {
    console.log('Hello World!', new Date());
    res.send('In the realm of programming, Hello, World! stands as a universal language, transcending barriers and inviting collaboration across borders. ' + new Date());
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${port}`)
})