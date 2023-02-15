// Create the server 
const express = require('express');
const app = express();
app.use(express.json());

// Assign routes
app.get('/', (req, res) => {
    res.send('Hello Truffle!');
});

// Create bills
// import bills from './seed';
const bills = [];

const seed1 = {
    name: "Brian",
    address: "123 Fake Street",
    hospital: "Memorial Sloan Kettering",
    date: new Date("2015-12-17T01:23:45"),
    amount: 100,
}
bills.push(seed1);

const seed2 = {
    name: "Lambert",
    address: "456 Fake Street",
    hospital: "Mayo Clinic",
    date: new Date("2020-01-02T03:04:05"),
    amount: 200,
}
bills.push(seed2);


// Return list of medical bills
app.get('/bills', (req, res) => {
    res.send(bills);
});

// Create a new medical bill
app.post('/bills', (req, res) => {
    // console.log(req.body);
    bills.push(req.body);

    res.send(`Thanks for submitting this bill for ${req.body.name}!`)
});

// Tell the server to listen for incoming traffic on a specific port
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
