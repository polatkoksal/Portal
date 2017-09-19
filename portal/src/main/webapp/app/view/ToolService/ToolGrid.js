Ext.define('Portal.view.ToolService.ToolGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.toolgrid',
	requires : [ 'Portal.view.ToolService.ToolUpdateForm' ],
	store : 'ToolStore',
	height : 500,
	columns : [ {
		header : 'Op',
		dataIndex : 'toolOp',
		width : 100
	}, {
		header : 'Part Material',
		dataIndex : 'partMaterial',
		width : 100
	}, {
		header : 'Asm Code',
		dataIndex : 'asmCode',
		width : 100
	}, {
		header : 'Asm Definition',
		dataIndex : 'asmDefinition',
		width : 100
	}, {
		header : 'Holder Code',
		dataIndex : 'holderCode',
		width : 100
	}, {
		header : 'Holder Definition',
		dataIndex : 'holderDefinition',
		width : 100
	}, {
		header : 'Extension Code',
		dataIndex : 'extensionCode',
		width : 100
	}, {
		header : 'Extension Definition',
		dataIndex : 'extensionDefinition',
		width : 100
	}, {
		header : 'Shaft Code',
		dataIndex : 'shaftCode',
		width : 100
	}, {
		header : 'Shaft Definition',
		dataIndex : 'shaftDefinition',
		width : 100
	}, {
		header : 'Cutter Code',
		dataIndex : 'cutterCode',
		width : 100
	}, {
		header : 'Cutter Definition',
		dataIndex : 'cutterDefinition',
		width : 100
	}, {
		header : 'Insert Code',
		dataIndex : 'insertCode',
		width : 100
	}, {
		header : 'Insert Definition',
		dataIndex : 'insertDefinition',
		width : 100
	}, {
		header : 'Function Length',
		dataIndex : 'functionLength',
		width : 100
	}, {
		header : 'Offset Length',
		dataIndex : 'offsetLength',
		width : 100
	}, {
		header : 'Description',
		dataIndex : 'description',
		width : 100
	} ],
	listeners : {
		itemdblclick : function(thi, record, item, index, e, eOpts) {
			var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
			if (!tabPanel.getChildByElement('toolUpdateForm')) {
				tabPanel.add({
					xtype : 'toolupdateform',
					id : 'toolUpdateForm',
					title : 'Update Tool',
					closable : true
				})
				Ext.ComponentQuery.query('#toolUpdateForm')[0]
						.loadRecord(record);
				var img = Ext.ComponentQuery.query('#toolUpdateImage')[0];
				var imgName = record.get('asmCode');
				img.setSrc('getImage?imgName=' + imgName);
				var role = Ext.ComponentQuery.query('#loginFormHiddenRole')[0]
						.getValue();
				if (role != 'Admin') {
					Ext.ComponentQuery.query('#toolOp2')[0].setReadOnly(true);
					Ext.ComponentQuery.query('#partMaterial2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#asmCode2')[0].setReadOnly(true);
					Ext.ComponentQuery.query('#asmDefinition2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#holderCode2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#holderDefinition2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#extensionCode2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#extensionDefinition2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#shaftCode2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#shaftDefinition2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#cutterCode2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#cutterDefinition2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#insertCode2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#insertDefinition2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#functionLength2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#offsetLength2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#toolDescription2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#toolAddSave2')[0]
							.setVisible(false);
				}
			}
			tabPanel.setActiveTab("toolUpdateForm");
		}
	}
});