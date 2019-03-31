Ext.define('Portal.store.MethodStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'partNumber', 'drpNumber', 'projectName', 'category',
			'period', 'khCode', 'machineCode', 'description', 'nameSurname',
			'responsibleId', 'machineName', 'machineId', 'rawWidth',
			'rawLength', 'rawHeigth', 'methodStart', 'methodEnd', 'dprData',
			'configuration', 'productTree', 'mp', 'engAndCncFolder', 'fixture',
			'catiaNcProduct', 'catiaCatProcess', 'obfAndPmkf', 'partCard' ],
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
			'jobState' : 'method'
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