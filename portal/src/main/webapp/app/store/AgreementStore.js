Ext.define('Portal.store.AgreementStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'partNumber', 'projectName', 'category', 'khCode',
			'description', 'nameSurname', 'responsibleId', 'level', 'poDate',
			'oldPartName', 'oldPartNamePL', 'oldPartNameTR', 'oldSubPartName',
			'oldSubPartNamePL', 'oldSubPartNameTR', 'newPartName',
			'newPartNamePL', 'newPartNameTR', 'newSubPartName',
			'newSubPartNamePL', 'newSubPartNameTR', 'changeStatus' ],
	proxy : {
		type : 'ajax',
		url : 'getFaiDfaiJobs',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'userId' : '',
			'projectName' : '',
			'jobState' : 'agreement'
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