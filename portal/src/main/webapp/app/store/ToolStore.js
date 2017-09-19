Ext.define('Portal.store.ToolStore',
		{
			extend : 'Ext.data.Store',
			fields : [ 'id', 'machineId', 'number', 'toolOp', 'partMaterial',
					'asmCode', 'asmDefinition', 'holderCode',
					'holderDefinition', 'extensionCode', 'extensionDefinition',
					'shaftCode', 'shaftDefinition', 'cutterCode',
					'cutterDefinition', 'insertCode', 'insertDefinition',
					'functionLength', 'offsetLength', 'description' ],
			proxy : {
				type : 'ajax',
				url : 'getTools',
				actionMethods : {
					read : 'POST',
				},
				extraParams : {
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