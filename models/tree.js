
var dataSource = {"tree": "nodes", "children":
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

printTree = function(nodes){
		
	for(let i=0;i<nodes.length; i++){
	
		console.log(' item tree title: '+nodes[i].title);
		
		if(nodes[i].children){
			printTree(nodes[i].children);	
		}
		
		if(nodes[i].selected){
			
			console.log(' item tree selected, title: '+nodes[i].title+' detalhes:'+nodes[i].data.hasOwnProperty('detalhes')+' data ',nodes[i].data);
			
			if(nodes[i].data.hasOwnProperty('detalhes')){
				var detalhes = nodes[i].data.detalhes;
				
				for(let j=0;j<detalhes.length; j++){
					console.log(' detalhes ',detalhes[j]);
				}
			}
		}
	}
	
}

selectItem = function (item){
	
	let result = [];
	
	console.log('model'+item);
	switch(item) {
    case 'a':
        result = ['a1','a2','a3','a4'];
        break;
    case 'b':
        result = ['b1','b2','b3','c4'];
        break;
    case 'c':
        result = ['c1','c2','c3','c4'];
        break;
    case 'd':
        result = ['d1','d2','d3','d4'];
        break;
    case 'e':
        result = ['e1','e2','e3','e4'];
        break;		
    default:
		result = ['x','p','t','o'];
        break;
	}
	console.log('model ..'+result);
	return result
};

module.exports = {
	dataSource: dataSource,
	printTree: printTree,
	selectItem: selectItem,
}