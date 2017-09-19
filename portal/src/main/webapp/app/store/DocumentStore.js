Ext.define('Portal.store.DocumentStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'docNumber', 'docName', 'docType', 'keyWord' ],
	proxy : {
		type : 'ajax',
		url : 'getDocuments',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'docType' : '',
			'keyWord' : '',
			'docName' : ''
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