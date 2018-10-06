const express = require('express');
const path = require('path');
const axios = require('axios');
let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../nodejs/index.html'));
});

app.get('/web15', (req,res) => {
    getDataFrom('https://btvn-web15s.herokuapp.com/api/web15').then(data => {
        res.send(data);
    })
});

app.get('/web14', (req,res) => {
    getDataFrom('https://btvn-web15s.herokuapp.com/api/web14').then(data => {
        res.send(data);
    })
});

app.get('/web13', (req,res) => {
    getDataFrom('https://btvn-web15s.herokuapp.com/api/web13').then(data => {
        res.send(data);
    })
});

app.get('/web12', (req,res) => {
    getDataFrom('https://btvn-web15s.herokuapp.com/api/web12').then(data => {
        res.send(data);
    })
});

app.get('/web11', (req,res) => {
    getDataFrom('https://btvn-web15s.herokuapp.com/api/web11').then(data => {
        res.send(data);
    })
});

app.get('/web10', (req,res) => {
    getDataFrom('https://btvn-web15s.herokuapp.com/api/web10').then(data => {
        res.send(data);
    })
});

app.listen(1808, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening at port 1808!");
});


function getDataFrom(url) {
    return axios
    .get(url)
    .then(response => {
        return response.data;
    })
    .catch(function (err) {
        console.log(err);
    });
}