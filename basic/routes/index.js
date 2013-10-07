
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.secondpage = function(req, res){
  res.render('secondpage', { title: 'Express' });
};

