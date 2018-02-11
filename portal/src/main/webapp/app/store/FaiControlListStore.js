Ext.define('Portal.store.FaiControlListStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'faiJobId', 'cv11', 'cv12', 'cv13', 'cv14', 'cv15',
			'nc11', 'nc12', 'nc13', 'nc14', 'se11', 'se12', 'ob11', 'ob12',
			'se21', 'se22', 'se23', 'se24', 'no11', 'no12', 'cv21', 'cv22',
			'nc21', 'ta11', 'ta12', 'ob21', 'ob22', 'ob23', 'fa11', 'fa12',
			'fa13', 'fa14', 'operationCode', 'setupApRespId', 'listNumber',
			'flipNum', 'takilonNum', 'toolChange', 'stopTime', 'simulTime',
			'offerTime', 'totalTime' ],
	proxy : {
		type : 'ajax',
		url : 'getFaiControlList',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'faiJobId' : '',
			'listNumber' : ''
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