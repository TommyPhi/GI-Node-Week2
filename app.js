// Import required modules
const fs = require('fs');
const express = require('express')

// Initialize express app
const app = express();

// Function to load employee JSON
const loadJSON = () => {
    const dataBuffer = fs.readFileSync('employee.json');
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString)
}

// First GET for root
app.get('/', (req, res) => {
    res.send("<a href=/employees>Employee JSON</a>")
})

// Second GET for /employees
app.get('/employees', (req, res) => {
    const data = loadJSON();
    res.send(data)
})

// Third GET for specific employee ID
app.get(`/employees/:employeeID`, (req, res) => {
    const id = req.params.employeeID
    const data = loadJSON();
    const find = data.find((employee) => employee.employeeID === parseInt(id))
    if(find) {
        res.send(find)
    } else {
        res.send('Error: Employee not found')
    }
})

// Express listen to start
app.listen(3000, (err) => {
    if(err) {
        throw err
    }
    console.log('listening on port 3000')
})