var express = require('express');
var router = express.Router();

var tree = require('../controllers/tree');

router.post('/treelist', tree.list);

router.get('/tree', tree.treeview);

router.post('/tree', tree.treeupdate);

module.exports = router;
