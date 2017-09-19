Ext.define('Portal.store.OtherJobStore',
		{
			extend : 'Ext.data.Store',
			fields : [ 'id', 'jobDesc', 'description', 'nameSurname',
					'responsibleId' ],
			proxy : {
				type : 'ajax',
				url : 'getOtherJobs',
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