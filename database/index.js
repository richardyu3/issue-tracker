const express = require('express');
const { Client } = require('pg');
const path = require('path');

const connectionString = 'postgres://postgres:postgres@localhost:5432/issues';
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.set('port', process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/issues', function (req, res, next) {
    client.query('SELECT * FROM issues', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});
app.post('/issues', function(req, res, next) {
    client.query(`INSERT INTO issues (issue_type, priority, summary, status, assigned_to) VALUES (?, ?, ?, ?, ?)`, [req.body.issueType, req.body.priority, req.body.summary, req.body.status, req.body.assignedTo]);
})

// app.patch('/issues')
// app.delete('/issues')
app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});