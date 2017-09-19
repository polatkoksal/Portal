Ext
		.define(
				'Portal.view.MachineToolService.MachineToolGrid',
				{
					extend : 'Ext.grid.Panel',
					alias : 'widget.machinetoolgrid',
					requires : [ 'Portal.view.MachineToolService.MachineToolUpdateForm' ],
					store : 'MachineToolStore',
					height : 350,
					columns : [ {
						header : 'Tool Number',
						dataIndex : 'toolNumber',
						width : 70
					}, {
						header : 'Op',
						dataIndex : 'toolOp',
						width : 70
					}, {
						header : 'Part Material',
						dataIndex : 'partMaterial',
						width : 100
					}, {
						header : 'Asm Code',
						dataIndex : 'asmCode',
						width : 70
					}, {
						header : 'Asm Definition',
						dataIndex : 'asmDefinition',
						width : 70
					}, {
						header : 'Holder Code',
						dataIndex : 'holderCode',
						width : 70
					}, {
						header : 'Holder Definition',
						dataIndex : 'holderDefinition',
						width : 70
					}, {
						header : 'Extension Code',
						dataIndex : 'extensionCode',
						width : 70
					}, {
						header : 'Extension Definition',
						dataIndex : 'extensionDefinition',
						width : 70
					}, {
						header : 'Shaft Code',
						dataIndex : 'shaftCode',
						width : 70
					}, {
						header : 'Shaft Definition',
						dataIndex : 'shaftDefinition',
						width : 70
					}, {
						header : 'Cutter Code',
						dataIndex : 'cutterCode',
						width : 70
					}, {
						header : 'Cutter Definition',
						dataIndex : 'cutterDefinition',
						width : 70
					}, {
						header : 'Insert Code',
						dataIndex : 'insertCode',
						width : 70
					}, {
						header : 'Insert Definition',
						dataIndex : 'insertDefinition',
						width : 70
					}, {
						header : 'Function Length',
						dataIndex : 'functionLength',
						width : 70
					}, {
						header : 'Offset Length',
						dataIndex : 'offsetLength',
						width : 70
					}, {
						header : 'Description',
						dataIndex : 'description',
						width : 70
					} ],
					listeners : {
						itemdblclick : function(thi, record, item, index, e,
								eOpts) {
							var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
							if (!tabPanel
									.getChildByElement('machineToolUpdateForm')) {
								tabPanel.add({
									xtype : 'machinetoolupdateform',
									id : 'machineToolUpdateForm',
									title : 'Update Machine Tool',
									closable : true
								})
								Ext.ComponentQuery
										.query('#machineToolUpdateForm')[0]
										.loadRecord(record);
								var img = Ext.ComponentQuery
										.query('#machineToolUpdateImage')[0];
								var imgName = record.get('asmCode');
								img.setSrc('getImage?imgName=' + imgName);
								var role = Ext.ComponentQuery
										.query('#loginFormHiddenRole')[0]
										.getValue();
								if (role != 'Admin') {
									Ext.ComponentQuery
											.query('#machineToolNumberAddTool2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#machineToolAsmCodeAddTool2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#machineToolAddSave2')[0]
											.setVisible(false);
								}
								var comboToolStore = Ext.data.StoreManager
										.get("ComboToolStore");
								var toolId = parseInt(Ext.ComponentQuery
										.query('#machineToolToolHiddenId2')[0]
										.getValue());
								var tool = Ext.ComponentQuery
										.query('#machineToolAsmCodeAddTool2')[0];
								tool.doQuery(imgName);
								tool.setValue(toolId);
							}
							tabPanel.setActiveTab("machineToolUpdateForm");
						}
					}
				});