Ext.define('Portal.store.UserStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'userName', 'name', 'lastName', 'registerNumber', 'duty',
			'telephone', 'email', 'role' ],
	proxy : {
		type : 'ajax',
		url : 'getUsers',
		actionMethods : {
			read : 'POST',
		},
		reader : {
			type : 'json',
			root : 'data',
			successProperty : 'success',
			totalProperty : 'totalCount'
		}
	},
	autoLoad : false
});