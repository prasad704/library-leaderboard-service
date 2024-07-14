const express =require("express")
const app = express()
const fetch = require("node-fetch")
const leaderBoardRouter = require("./routes/fetchLeaderBoard")
const axios = require("axios")
app.get("/",(req,res)=>{
    res.send("working fine")
});

axios.get("http://localhost:8080/portal/leader").then((response)=>{
    console.log(response);
}).catch(function(error){
    console.log(error);
}).finally(function(){

})
/*function fetchLeaderBoardFunc(){

    let url = "http://localhost:8080/portal/leader";
    fetch(url).then((res)=>{
        res.json.then((re)=>{
            consoler.log(re);
        })
    })
}*/
app.use("/fetch/leaderBoard",leaderBoardRouter)
app.listen(2000,()=>{
//fetchLeaderBoardFunc();
});