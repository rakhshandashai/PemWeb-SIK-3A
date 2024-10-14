const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Corrected from semicolon to colon
    database: 'pertemuan5'
});

connection.connect((err) => {
    if (err) {
        console.error("Terjadi kesalahan dalam koneksi MySQL:", err.stack);
        return;
    }
    console.log("Koneksi MySQL berhasil dengan id " + connection.threadId);
});

app.set('view engine', 'ejs');

//ini adalah ruoting (create, read, update, delete)

//read
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, result) => {
        res.render('index', {users: result})
    })
});

//create / input / insert
app.post('/add', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'INSERT INTO users (name, email, phone) VALUES (?,?,?)'
    connection.query(query, [name, email, phone], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

//update
//untuk update halaman
app.get('/edit/:id', (req, res) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [req.params.id], (err, result) => {
        if(err) throw err;
        res.render('edit', {user: result[0]});
    });
});

//untuk update data
app.post('/update/:id', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'UPDATE users SET name = ?, email = ?, phone = ?, WHERE id = ?';
    connection.query(query, [name, email, phone, req.params.id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

//hapus
app.get('/delete/:id', (req, res) => {
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [req.params.id], (err, result) => {
        if(err) throw err;
        res.rendirect('/');
    });
});

app.listen(3000, () =>{
    console.log("Server berjalan di prot 3000, buka web melalui http://localhost:3000")
});

