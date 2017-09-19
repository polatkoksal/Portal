Ext.define('Portal.store.SessionUserStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'userName', 'name', 'lastName', 'registerNumber', 'duty',
			'telephone', 'email' ],
	proxy : {
		type : 'ajax',
		url : 'getSessionUser',
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