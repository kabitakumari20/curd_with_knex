const express = require('express')
const app = express()
app.use(express.json());
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        database: 'bangalore',
        password: 'kabita@123',
    }
});
app.get('/gettAl', (req, res) => {
    knex.select('*').from('students').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
})

app.post("/insertData", (req, res) => {
    let demo = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    };

    // console.log(demo);
    knex('students').insert(demo).then((dem) => {
        // console.log(demo, "ooooo")
        res.send("data inserted")
        console.log("data insert----------")
    }).catch((err) => {
        res.send(err)
    });
});

app.put("/upload", (req, res) => {
    //console.log(req.body, "pppp");
    knex.update({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    })
        .table("students")
        .where("id", req.body.id)
        .then(u => {
            console.log(u);
            res.status(200).json(u)
            res.send("data update successfully")
        })
        .catch(e => {
            console.log(e);
            res.status(500).json(e)
        }
        );
})
app.delete("/delet",(req,res) =>{
    knex.delete({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    })
        .table("students")
        .where("id", req.body.id)
        .then(u => {
            console.log(u);
            res.status(200).json(u)
            res.send("data delete successfu")
        })
        .catch(e => {
            console.log(e);
            res.status(500).json(e)
        }
        );
})
app.listen(3000, (err) => {
    console.log('server running.........')
});


