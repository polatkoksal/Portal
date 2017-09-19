Ext.define('Portal.store.MachineStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'name', 'type'],
	proxy : {
		type : 'ajax',
		url : 'getMachines',
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