const pg        = require('pg');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/assets', express.static('public/assets'));

const pg_config = {
    user: 'node',
    database: 'node_blog',
    password: '123',
    port: 5432
};
const pool = new pg.Pool(pg_config);

app.get('/', (req, res) => {
  pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM posts;', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('index', { posts: result.rows });
       })
   })
});

app.listen(8000);
