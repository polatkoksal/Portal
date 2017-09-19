Ext.define('Portal.store.UserSkillStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'userId', 'name', 'training', 'trainingDate', 'skore' ],
	proxy : {
		type : 'ajax',
		url : 'getUserSkills',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'userId' : '',
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