Ext.define('Portal.store.MachineTimeStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'machineId', 'op020k', 'op020o', 'op020b', 'op030k',
			'op030o', 'op030b', 'takilon', 'change' ],
	proxy : {
		type : 'ajax',
		url : 'getMachineTime',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'machineId' : ''
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