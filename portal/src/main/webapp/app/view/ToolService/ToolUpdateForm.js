Ext
		.define(
				'Portal.view.ToolService.ToolUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.toolupdateform',
					url : 'createUpdateTool',
					method : 'POST',
					autoScroll : true,
					items : [
							{
								xtype : 'hiddenfield',
								id : 'toolHiddenId2',
								name : 'id'
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
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Op',
																	id : 'toolOp2',
																	name : 'toolOp',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'Part Material',
																	id : 'partMaterial2',
																	name : 'partMaterial',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Asm Code',
																	id : 'asmCode2',
																	name : 'asmCode',
																	allowBlank : false,
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'Asm Definition',
																	id : 'asmDefinition2',
																	name : 'asmDefinition',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Holder Code',
																	id : 'holderCode2',
																	name : 'holderCode',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'Holder Definition',
																	id : 'holderDefinition2',
																	name : 'holderDefinition',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Extension Code',
																	id : 'extensionCode2',
																	name : 'extensionCode',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'Extension Definition',
																	id : 'extensionDefinition2',
																	name : 'extensionDefinition',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Shaft Code',
																	id : 'shaftCode2',
																	name : 'shaftCode',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'Shaft Definition',
																	id : 'shaftDefinition2',
																	name : 'shaftDefinition',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Cutter Code',
																	id : 'cutterCode2',
																	name : 'cutterCode',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'Cutter Definition',
																	id : 'cutterDefinition2',
																	name : 'cutterDefinition',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Insert Code',
																	id : 'insertCode2',
																	name : 'insertCode',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'Insert Definition',
																	id : 'insertDefinition2',
																	name : 'insertDefinition',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'numberfield',
																	fieldLabel : 'Function Length',
																	id : 'functionLength2',
																	name : 'functionLength',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'numberfield',
																	fieldLabel : 'Offset Length',
																	id : 'offsetLength2',
																	name : 'offsetLength',
																	margin : '4px',
																	width : 500
																} ]
													},
													{
														xtype : 'textarea',
														fieldLabel : 'Description',
														id : 'toolDescription2',
														name : 'description',
														margin : '4px',
														width : 709,
														height : 100
													},
													{
														xtype : 'button',
														id : 'toolAddSave2',
														text : 'Save',
														margin : '4px',
														handler : function() {
															var form = Ext.ComponentQuery
																	.query('toolupdateform')[0];
															var formTab = Ext.ComponentQuery
																	.query('#toolUpdateForm')[0];
															var toolStore = Ext.data.StoreManager
																	.get("ToolStore");
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
																				formTab
																						.close();
																				toolStore
																						.load();
																				store
																						.load();
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
														id : 'toolShowPdf',
														text : 'Display PDF',
														margin : '4px',
														handler : function() {
															var fileName = Ext.ComponentQuery
																	.query('#asmCode2')[0]
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
																						id : 'iframe-win-tool',
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
											id : 'toolUpdateImage',
											margin : '4 0 0 50',
											height : 600,
											width : 300
										} ]
							} ]
				});