Ext
		.define(
				'Portal.view.MachineToolService.MachineToolAddForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.machinetooladdform',
					url : 'createUpdateMachineTool',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'machineToolHiddenId',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'machineToolMachineHiddenId',
								name : 'machineToolListId'
							},
							{
								xtype : 'hiddenfield',
								id : 'machineToolToolHiddenId',
								name : 'toolId'
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Tool Number',
								id : 'machineToolNumberAddTool',
								name : 'toolNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Tool',
								id : 'machineToolAsmCodeAddTool',
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
								id : 'machineToolAddSave',
								text : 'Save',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('machinetooladdform')[0];
									var formTab = Ext.ComponentQuery
											.query('#machineToolAddForm')[0];
									var store = Ext.data.StoreManager
											.get('MachineToolStore');
									if (form.isValid()) {
										form
												.submit({
													success : function(form,
															action) {
														Ext.Msg
																.alert('Info',
																		'New tool added to selected list');
														store.load();
														formTab.close();
													},
													failure : function(form,
															action) {
														Ext.Msg
																.alert('Error',
																		'Tool add to list failed.');
													}
												});
									}
								}
							},
							{
								xtype : 'button',
								id : 'machineToolAddReset',
								text : 'Reset Form',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('machinetooladdform')[0];
									form.getForm().reset();
								}
							} ]
				});