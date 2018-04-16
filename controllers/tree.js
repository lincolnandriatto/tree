const treeModels = require('../models/tree');

dataSource = JSON.stringify(treeModels.dataSource);

const treeview = function(req, res, next){
	
	console.log("tree view")
	res.render('tree/index', { "title": "Tree", dataSource : dataSource, items2: [1,2,3,4,5]} );
	
};

const treeupdate = function(req, res, next){
	
	console.log("tree update")
	
	var dataSourceItems = req.body.dataSource
	var dataSourceJson = JSON.parse(dataSourceItems);
	
	console.log(' item: ',dataSourceJson);

	treeModels.printTree(dataSourceJson.children);
	
	res.render('tree/index', { "title": "Tree", dataSource : dataSourceItems, items2: [1,2,3,4,5] } );
	
};

const list = function(req, res, next) {
	
	console.log(' list ');

	var itemSelected = req.body.items
	
	var listItem2 = treeModels.selectItem(itemSelected);
	
	var items2 = req.body.items2
	
	console.log('testimp items '+itemSelected+' items2: '+items2+' list items2 '+listItem2);
	
  res.render('tree/index', { "title": "Tree", dataSource : dataSource, items2: listItem2, items: itemSelected} );
}

module.exports = {
	treeview: treeview,
	treeupdate : treeupdate,
	list: list,
}