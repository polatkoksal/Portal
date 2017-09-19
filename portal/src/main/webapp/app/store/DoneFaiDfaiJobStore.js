Ext.define('Portal.store.DoneFaiDfaiJobStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'partNumber', 'drpNumber', 'projectName', 'category',
			'period', 'khCode', 'machineCode', 'setupApResp', 'setupApRespId',
			'fixtureStart', 'fixtureEnd', 'fixturePercentage', 'catiaStart',
			'catiaEnd', 'catiaPercentage', 'documentStart', 'documentEnd',
			'documentPercentage', 'benchStart', 'benchEnd', 'benchPercentage',
			'description', 'nameSurname', 'responsibleId', 'doneDate' ],
	proxy : {
		type : 'ajax',
		url : 'getDoneFaiDfaiJobs',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'userId' : '',
			'partNumber' : ''
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