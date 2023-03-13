const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.get("/", (req, res) => {
    res.send({"msg" : "all good"})
})
app.get("/food", (req, res) => {
    res.send({"msg" : "food endpoint is good"})
})

app.listen(8000, ()=>{
    console.log("server running at port 8000");
})