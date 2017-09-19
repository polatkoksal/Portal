Ext.define('Portal.store.ComboUserStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'nameSurname' ],
	proxy : {
		type : 'ajax',
		url : 'getComboUsers',
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