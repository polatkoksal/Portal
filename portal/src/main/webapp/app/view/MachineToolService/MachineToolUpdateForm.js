Ext
		.define(
				'Portal.view.MachineToolService.MachineToolUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.machinetoolupdateform',
					url : 'createUpdateMachineTool',
					method : 'POST',
					autoScroll : true,
					items : [
							{
								xtype : 'hiddenfield',
								id : 'machineToolHiddenId2',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'machineToolMachineHiddenId2',
								name : 'machineToolListId'
							},
							{
								xtype : 'hiddenfield',
								id : 'machineToolToolHiddenId2',
								name : 'toolId'
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [
										{
											xtype : 'container',
											layout : 'fit',
											items : [
													{
														xtype : 'textfield',
														fieldLabel : 'Tool Number',
														id : 'machineToolNumberAddTool2',
														name : 'toolNumber',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'combobox',
														fieldLabel : 'Tool',
														id : 'machineToolAsmCodeAddTool2',
														name : 'asmCode',
														store : 'ComboToolStore',
														displayField : 'asmCode',
														anyMatch : true,
														valueField : 'id',
														forceSelection : true,
														allowBlank : false,
														emptyText : 'Write CTA Code',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'button',
														id : 'machineToolAddSave2',
														text : 'Save',
														margin : '4px',
														handler : function() {
															var form = Ext.ComponentQuery
																	.query('machinetoolupdateform')[0];
															var formTab = Ext.ComponentQuery
																	.query('#machineToolUpdateForm')[0];
															var store = Ext.data.StoreManager
																	.get('MachineToolStore');
															if (form.isValid()) {
																form
																		.submit({
																			success : function(
																					form,
																					action) {
																				Ext.Msg
																						.alert(
																								'Info',
																								'Selected tool updated');
																				store
																						.load();
																				formTab
																						.close();
																			},
																			failure : function(
																					form,
																					action) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Tool update failed.');
																			}
																		});
															}
														}
													},
													{
														xtype : 'button',
														id : 'machineToolShowPdf',
														text : 'Display PDF',
														margin : '4px',
														handler : function() {
															var fileName = Ext.ComponentQuery
																	.query('#machineToolNumberAddTool2')[0]
																	.getValue();
															Ext
																	.create(
																			'Ext.window.Window',
																			{
																				title : 'PDF Content',
																				width : 850,
																				height : 500,
																				modal : true,
																				layout : 'fit',
																				items : [ {
																					xtype : 'component',
																					autoEl : {
																						tag : 'iframe',
																						id : 'iframe-win-machine-tool',
																						src : 'getPdfFile?fileName='
																								+ fileName
																					}
																				} ]
																			})
																	.show();
														}
													} ]
										}, {
											xtype : 'image',
											id : 'machineToolUpdateImage',
											margin : '4 0 0 50',
											height : 600,
											width : 300
										} ]
							} ]
				});