const request = require('request');

exports.post = function(req, res)
{
  console.log(req.body);
  res.end(req.body);
}

exports.render = function(req, res)
{
  var path = req.route.path.replace(/\/?\/?/gi, "").split('(:id)?').join("");
  var canonicalURL = req.protocol + '://' + req.get('host');

  if(path == 'null') path = '/';

  res.render('index', {
    path : path
  });
}
