Ext
		.define(
				'Portal.view.MachineToolService.MachineToolListSearchForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.machinetoollistsearchform',
					items : [
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Asm Code',
									labelWidth : 80,
									id : 'machineToolListSearchAsmCode',
									name : 'asmCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Holder Code',
									labelWidth : 80,
									id : 'machineToolListSearchHolderCode',
									name : 'holderCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Shaft Code',
									labelWidth : 80,
									id : 'machineToolListSearchShaftCode',
									name : 'shaftCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Cutter Code',
									labelWidth : 80,
									id : 'machineToolListSearchCutterCode',
									name : 'cutterCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Insert Code',
									labelWidth : 80,
									id : 'machineToolListSearchInsertCode',
									name : 'insertCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'numberfield',
									fieldLabel : 'Func. Length <',
									labelWidth : 90,
									id : 'machineToolListSearchFLengthSmaller',
									name : 'fLengthSmaller',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Part Material',
									labelWidth : 80,
									id : 'machineToolListSearchPartMaterial',
									name : 'partMaterial',
									margin : '4px',
									width : 160
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [
										{
											xtype : 'textfield',
											fieldLabel : 'Op',
											labelWidth : 80,
											id : 'machineToolListSearchToolOp',
											name : 'toolOp',
											margin : '4px',
											width : 160
										},
										{
											xtype : 'textfield',
											fieldLabel : 'Holder Def',
											labelWidth : 80,
											id : 'machineToolListSearchHolderDefinition',
											name : 'holderDefinition',
											margin : '4px',
											width : 160
										},
										{
											xtype : 'textfield',
											fieldLabel : 'Shaft Def',
											labelWidth : 80,
											id : 'machineToolListSearchShaftDefinition',
											name : 'shaftDefinition',
											margin : '4px',
											width : 160
										},
										{
											xtype : 'textfield',
											fieldLabel : 'Cutter Def',
											labelWidth : 80,
											id : 'machineToolListSearchCutterDefinition',
											name : 'cutterDefinition',
											margin : '4px',
											width : 160
										},
										{
											xtype : 'textfield',
											fieldLabel : 'Insert Def',
											labelWidth : 80,
											id : 'machineToolListSearchInsertDefinition',
											name : 'insertDefinition',
											margin : '4px',
											width : 160
										},
										{
											xtype : 'numberfield',
											fieldLabel : 'Func. Length >',
											labelWidth : 90,
											id : 'machineToolListSearchFLengthBigger',
											name : 'fLengthBigger',
											margin : '4px',
											width : 160
										} ]
							},
							{
								xtype : 'button',
								id : 'machineToolListSearchFindButton',
								text : 'Find',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('machinetoollistgrid')[0];
									var store = Ext.data.StoreManager
											.get("MachineToolStore");
									if (grid.getSelectionModel().hasSelection()) {
										store.getProxy().setExtraParam(
												'machineToolListId',
												grid.getSelectionModel()
														.getSelection()[0]
														.get('id'));
										store
												.getProxy()
												.setExtraParam(
														'asmCode',
														Ext.ComponentQuery
																.query('#machineToolListSearchAsmCode')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'holderCode',
														Ext.ComponentQuery
																.query('#machineToolListSearchHolderCode')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'shaftDefinition',
														Ext.ComponentQuery
																.query('#machineToolListSearchShaftDefinition')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'shaftCode',
														Ext.ComponentQuery
																.query('#machineToolListSearchShaftCode')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'holderDefinition',
														Ext.ComponentQuery
																.query('#machineToolListSearchHolderDefinition')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'cutterCode',
														Ext.ComponentQuery
																.query('#machineToolListSearchCutterCode')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'cutterDefinition',
														Ext.ComponentQuery
																.query('#machineToolListSearchCutterDefinition')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'insertCode',
														Ext.ComponentQuery
																.query('#machineToolListSearchInsertCode')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'insertDefinition',
														Ext.ComponentQuery
																.query('#machineToolListSearchInsertDefinition')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'fLengthSmaller',
														Ext.ComponentQuery
																.query('#machineToolListSearchFLengthSmaller')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'fLengthBigger',
														Ext.ComponentQuery
																.query('#machineToolListSearchFLengthBigger')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'toolOp',
														Ext.ComponentQuery
																.query('#machineToolListSearchToolOp')[0]
																.getValue());
										store
												.getProxy()
												.setExtraParam(
														'partMaterial',
														Ext.ComponentQuery
																.query('#machineToolListSearchPartMaterial')[0]
																.getValue());
										store.load();

									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a machine tool list.');
									}
								}
							},
							{
								xtype : 'button',
								id : 'machineToolListSearchClearButton',
								text : 'Clear',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('machinetoollistsearchform')[0];
									form.getForm().reset();
								}
							} ]
				});