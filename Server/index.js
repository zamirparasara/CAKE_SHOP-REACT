const express = require("express")
const mongos = require("mongoose")
const cors = require("cors")
const UserModel = require("./model/user")
const ProductDetails = require("./model/product")
const app = express()
app.use(express.json())
app.use(cors())

mongos.connect("mongodb://localhost:27017/CakeShopDatabase");



app.post("/productsAdd",(req,res)=>{
    ProductDetails.create(req.body).then(student=>res.json(student)).catch(err=>res.json(err));
    });

    app.get("/products", (req, res) => {
        // Assuming ProductDetails is defined elsewhere
        ProductDetails.find()
            .then(products => res.json(products))
            .catch(err => res.json(err));
    });

    
    app.get("/products/:id", async (req,res)=>
    {
        const productList = await ProductDetails.findById(req.params.id);
        if(!productList)
        {
            res.status(400).json({Success: false})
        }
        else
        {
            res.send(productList);
        }
    });



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});