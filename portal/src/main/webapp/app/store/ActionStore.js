Ext.define('Portal.store.ActionStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'jobId', 'actionDesc', 'actionStart', 'actionEnd',
			'actionPercentage' ],
	proxy : {
		type : 'ajax',
		url : 'getActions',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'jobId' : '',
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