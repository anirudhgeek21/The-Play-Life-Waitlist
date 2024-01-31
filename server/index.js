const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());


app.post("/regs" , async(req,res) => {
    try {
        const { name, age, email, refferal } = req.body;
        const createUser = await pool.query("INSERT INTO registrations (name , age , email , refferal) VALUES($1 ,$2 ,$3 ,$4) RETURNING *" ,[name , age , email, refferal]);
        res.json(createUser.rows[0]);
        console.log(req.body);
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
});


app.get("/regs" , async(req,res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM registrations");
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
});


app.listen(8000, () => {
    console.log("server is running on port 8000");
})
