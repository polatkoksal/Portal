Ext.define('Portal.store.FeedbackStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'projectName', 'partNumber', 'khCode', 'pdkNo',
			'feedbackDate', 'description', 'feedbackProviderName',
			'feedbackProviderId', 'responsibleName', 'responsibleId',
			'imageName' ],
	proxy : {
		type : 'ajax',
		url : 'getFeedbacks',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'userId' : ''
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