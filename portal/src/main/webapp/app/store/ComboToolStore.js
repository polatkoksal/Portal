Ext.define('Portal.store.ComboToolStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'asmCode' ],
	proxy : {
		type : 'ajax',
		url : 'getComboTools',
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