var express = require('express');
var router = express.Router();


router.get('/', (req, res, next)=>{
    //get all users
    let jsonObj= {
        name: "Karl Kho"
    }
    res.status(200).send(jsonObj);
});

router.get('/:id', (req, res)=>{
    //get specific user
});

router.post('/', (req, res)=>{
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    res.status(200).send(req.body);
});

router.delete('/', (req, res)=>{

});

module.exports=router;