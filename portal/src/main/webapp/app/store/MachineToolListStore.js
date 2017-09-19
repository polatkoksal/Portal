Ext.define('Portal.store.MachineToolListStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'name' ],
	proxy : {
		type : 'ajax',
		url : 'getMachineToolLists',
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