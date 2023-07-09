const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const qr=require("qrcode");
const port=process.env.port || 3000;


app.set("view engine","ejs");   
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});


//post
app.post("/scan",(req,res)=>{
    const url=req.body.text;
    if(url.length===0)
    res.send("Empty Data!");

    qr.toDataURL(url,(err,src)=>{
        if(err) res.send("Error Occured!");
        
        res.render("scan",{src});
    })
});
    

app.listen(port ,()=>{
console.log("server is running....");
});