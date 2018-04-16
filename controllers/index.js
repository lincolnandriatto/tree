
const init = function(req, res, next) {
  res.render('index', { title: 'Express' });
}

module.exports = {
	init: init,
}