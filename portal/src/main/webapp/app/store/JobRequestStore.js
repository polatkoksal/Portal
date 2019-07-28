Ext.define('Portal.store.JobRequestStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'partNumber', 'drpNumber', 'projectName', 'category',
			'period', 'khCode', 'machineCode', 'description', 'nameSurname',
			'responsibleId', 'machineId', 'machineName', 'requestDate',
			'requestCompletionDate' ],
	proxy : {
		type : 'ajax',
		url : 'getJobRequests',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'userId' : '',
			'period' : '',
			'projectName' : ''
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