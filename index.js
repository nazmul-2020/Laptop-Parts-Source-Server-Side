const express = require('express')
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mg2zq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nkbdl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {

    try {
        await client.connect();
        const serviceCollection = client.db("Laptop-Parts-source").collection("products");




        // // GET method route
        // app.get('/service', async (req, res) => {
        //     const query = {};
        //     const cursor = serviceCollection.find(query).project({ name: 1 });
        //     const services = await cursor.toArray();
        //     res.send(services)
        // })



        /**
          * API Naming Convention
          * app.get('/booking') // get all bookings in this collection. or get more than one or by filter
          * app.get('/booking/:id') // get a specific booking 
          * app.post('/booking') // add a new booking
          * app.patch('/booking/:id) //
          * app.delete('/booking/:id) //
         */
    }

    finally {

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Wel-Come-To-Laptop-Parts-source')
})

app.listen(port, () => {
    console.log(`Connect To Laptop-Parts-source  ${port}`)
})