Ext.define('Portal.store.MenuStore', {
	extend : 'Ext.data.TreeStore',
	proxy : {
		type : 'ajax',
		url : 'getMenuItems',
		actionMethods : {
			read : 'POST'
		},
		reader : {
			type : 'json',
			root : 'data',
			leaf : true
		}
	},
	autoLoad : false
});