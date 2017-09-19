Ext.define('Portal.store.MachineToolStore', {
	extend : 'Ext.data.Store',
	fields : [ 'id', 'machineToolListId', 'toolId', 'toolNumber', 'toolOp',
			'partMaterial', 'asmCode', 'asmDefinition', 'holderCode',
			'holderDefinition', 'extensionCode', 'extensionDefinition',
			'shaftCode', 'shaftDefinition', 'cutterCode', 'cutterDefinition',
			'insertCode', 'insertDefinition', 'functionLength', 'offsetLength',
			'description' ],
	proxy : {
		type : 'ajax',
		url : 'getMachineTools',
		actionMethods : {
			read : 'POST',
		},
		extraParams : {
			'machineToolListId' : '',
			'asmCode' : '',
			'holderCode' : '',
			'holderDefinition' : '',
			'shaftCode' : '',
			'shaftDefinition' : '',
			'cutterCode' : '',
			'cutterDefinition' : '',
			'insertCode' : '',
			'insertDefinition' : '',
			'fLengthSmaller' : '',
			'fLengthBigger' : '',
			'toolOp' : '',
			'partMaterial' : ''
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