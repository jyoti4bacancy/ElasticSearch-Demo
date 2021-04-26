const express = require("express")
const router=express.Router();
const esClient=require('../utils/connect')


router.post('/product',(req,res)=>{
    esClient.index({
        index:"product",
        body:{
            "id":req.body.id,
            "name":req.body.name,
            "price":req.body.price,
            "description":req.body.description
        }
    })
    .then((result)=>{
        return res.json({"message":"Indexing successfully!.. "})
    })
    .catch((error)=>{
        return res.status(500).json({"message":error})
    })
})

router.get('/get-products',(req,res)=>{
    //req.body can also be used.
    const searchItem=req.query.item;
    
    esClient.search(
        {
            index:'product',
            body:{
                query:{
                    match:{ "name" : searchItem }
                }
            }
        }
    )
    .then((result)=>{
        res.json(result);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})


module.exports=router;