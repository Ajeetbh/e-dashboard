const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product=require("./db/Products")
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("App is working");
});

app.post("/register", async (req, res) => {
  //res.send('API progress..')
  let user = new User(req.body);
  let result = await user.save();

  result = result.toObject();
  delete result.password;

  res.send(result);
});

app.post("/login", async (req, res) => {
  // res.send(req.body)
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
});

app.post("/add-product",async(req,res)=>{
  let product=new Product(req.body);
  let result=await product.save();
  res.send(result)
})

app.get('/products',async(req,res)=>{
  let products=await Product.find();
  if(products.length>0){
    res.send(products)
  }else{
    res.send({result:"No Product Found"})
  }
})

app.delete('/product/:id',async(req,res)=>{
  //res.send(req.params.id)
  const result=await Product.deleteOne({_id:req.params.id})
  res.send(result)
})

app.get("/product/:id",async(req,res)=>{
  let result=await Product.findOne({_id:req.params.id})
  if(result){
    res.send(result)
  }else{
    res.send({result:"No record found"})
  }
})

app.put("/product/:id",async(req,res)=>{
  let result=await Product.updateOne(
    {_id:req.params.id},
    {
      $set: req.body
    }
  )
  res.send(result)
})

app.listen(3000, () => {
  console.log("server is running");
});
