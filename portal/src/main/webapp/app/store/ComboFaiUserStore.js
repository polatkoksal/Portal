Ext.define('Portal.store.ComboFaiUserStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'nameSurname' ],
	proxy : {
		type : 'ajax',
		url : 'getComboFaiUsers',
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