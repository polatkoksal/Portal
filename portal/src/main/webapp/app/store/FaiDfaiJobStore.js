Ext.define('Portal.store.FaiDfaiJobStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'partNumber', 'drpNumber', 'projectName', 'category',
			'period', 'khCode', 'machineCode', 'fixtureStart', 'fixtureEnd',
			'fixturePercentage', 'catiaStart', 'catiaEnd', 'catiaPercentage',
			'documentStart', 'documentEnd', 'documentPercentage', 'benchStart',
			'benchEnd', 'benchPercentage', 'description', 'nameSurname',
			'responsibleId', 'machineName', 'machineId', 'rawWidth',
			'rawLength', 'rawHeigth' ],
	proxy : {
		type : 'ajax',
		url : 'getFaiDfaiJobs',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'userId' : '',
			'period' : '',
			'projectName' : '',
			'jobState' : 'undone'
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