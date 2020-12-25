var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.render('submit');
  //res.render('/Development/learning_sequelize/views/front_page.html');
});


router.post('/created', function(req, res, next) {
  const user=req.body;

  console.log(user);
  /*
  var sql = 'INSERT INTO users SET ?';

  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
  */

	res.redirect('/');  
});

module.exports = router;
