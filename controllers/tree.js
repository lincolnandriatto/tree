
var dataSource = {"foo": "bazbaz", "children":
[
	{"title": "node A", "folder": true, "expanded": true,
		"children":[
			{"title": "node B", "folder": true, "expanded": true,
				"children":[
					{"title": "node C", "folder": true, "expanded": true,
						"children":[
							{"title": "node D", "folder": true, "expanded": true,
								"children":[
									{"title": "node E1", "folder": false, "expanded": true,
										"detalhes":[{"a":1,"b":"a", "c":"b"}, {"a":2,"b":"a", "c":"b"}, {"a":3,"b":"a", "c":"b"}]
									},
									{"title": "node E2", "folder": false, "expanded": true,
										"detalhes":[{"a":1,"b":"a", "c":"b"}]
									},
									{"title": "node E3", "folder": false, "expanded": true,
										"detalhes":[{"a":1,"b":"a", "c":"b"}]
									}
								]
							}
						]
					}		
				]
			}
		]
	}
]};

dataSource = JSON.stringify(dataSource);

const treeview = function(req, res, next){
	
	console.log("tree view")
	res.render('tree/index', { "title": "Tree", dataSource : dataSource } );
	
};

const treeupdate = function(req, res, next){
	
	console.log("tree update")
	
	var dataSourceItems = req.body.dataSource
	var dataSourceJson = JSON.parse(dataSourceItems);
	
	console.log(' item: ',dataSourceJson);

	tree(dataSourceJson.children);
	
	res.render('tree/index', { "title": "Tree", dataSource : dataSourceItems } );
	
};

const list = function(req, res, next) {
	
	console.log(' list ');

	var items = req.body.items
	var items2 = req.body.items2
	
	console.log('testimp items '+items+' items2: '+items2);
	
  res.render('tree/index', { "title": "Tree", dataSource : dataSource } );
}

function tree(itemJson){
		
	for(let i=0;i<itemJson.length; i++){
	
		console.log(' item tree title: '+itemJson[i].title);
		
		if(itemJson[i].children){
			tree(itemJson[i].children);	
		}
		
		if(itemJson[i].selected){
			console.log(' selected '+itemJson[i].title);
			console.log(' item tree title: '+itemJson[i].title+' data ',itemJson[i].data);
			
			if(itemJson[i].detalhes!=undefined && itemJson[i].detalhes.length>0){
				var detalhes = itemJson[i].detalhes;
				console.log(' item tree detalhes: '+itemJson[i].detalhes);
				
				for(let j=0;i<detalhes.length; j++){
					consolo.log(' detalhes ',detalhes[j]);
				}
			}
		}
	}
	
}

module.exports = {
	treeview: treeview,
	treeupdate : treeupdate,
	list: list,
}