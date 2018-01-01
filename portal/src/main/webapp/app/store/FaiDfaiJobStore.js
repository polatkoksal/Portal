Ext.define('Portal.store.FaiDfaiJobStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'partNumber', 'drpNumber', 'projectName', 'category',
			'period', 'khCode', 'machineCode', 'fixtureStart', 'fixtureEnd',
			'fixturePercentage', 'catiaStart', 'catiaEnd', 'catiaPercentage',
			'documentStart', 'documentEnd', 'documentPercentage', 'benchStart',
			'benchEnd', 'benchPercentage', 'description', 'nameSurname',
			'responsibleId' ],
	proxy : {
		type : 'ajax',
		url : 'getFaiDfaiJobs',
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