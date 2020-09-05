var express = require('express');
var router = express.Router();
var Code = require('../models/Code');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodePlayer' });
});

// Create Route
router.post('/output', (req, res, next) => {
  var code = {
    html: req.body.html,
    css: req.body.css,
    javascript: req.body.javascript
  }
  Code.create(code, (err, obj) => {
    if (!err){
      console.log(code);
      res.redirect('/output');
    }
  });
});

// Show Route
router.get('/output', (req, res, next) => {
  Code.find((err, obj) => {
    if (!err) {
      for(i=0;i<obj.length;i++){//to get the latest created code in the new variable
        new_code = obj[i];
      }
      console.log(new_code);
      res.render('output', {coding: new_code, title:"Output"});
    }
  })
});
//
// router.get('/output', (req,res,next) => {
//
//    var authenticated = req.params.authen || undefined;
//    console.log(req.params.authen);
//    console.log(authenticated);
//    //do something to authenticate user
//
//    if(authenticated === true){
//        //user is already authenticated
//        res.render("output");
//    }else {
//      res.redirect('back');
//    }
// });

module.exports = router;
