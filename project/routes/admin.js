const express = require("express");
//const resource = require("../app");

const router = express.Router();

router.get("/admin", function(req, res, next){
    //res.json({
    //status: 1,
    //message: "This is a sample message"
    //});
    res.render('admin/dashboard'); 
});
module.exports = router;