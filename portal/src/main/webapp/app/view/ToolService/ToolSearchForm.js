Ext
		.define(
				'Portal.view.ToolService.ToolSearchForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.toolsearchform',
					items : [
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Asm Code',
									labelWidth : 80,
									id : 'toolSearchAsmCode',
									name : 'asmCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Holder Code',
									labelWidth : 80,
									id : 'toolSearchHolderCode',
									name : 'holderCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Shaft Code',
									labelWidth : 80,
									id : 'toolSearchShaftCode',
									name : 'shaftCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Cutter Code',
									labelWidth : 80,
									id : 'toolSearchCutterCode',
									name : 'cutterCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Insert Code',
									labelWidth : 80,
									id : 'toolSearchInsertCode',
									name : 'insertCode',
									margin : '4px',
									width : 160
								}, {
									xtype : 'numberfield',
									fieldLabel : 'Func. Length <',
									labelWidth : 90,
									id : 'toolSearchFLengthSmaller',
									name : 'fLengthSmaller',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Part Material',
									labelWidth : 80,
									id : 'toolSearchPartMaterial',
									name : 'partMaterial',
									margin : '4px',
									width : 160
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Op',
									labelWidth : 80,
									id : 'toolSearchToolOp',
									name : 'toolOp',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Holder Def',
									labelWidth : 80,
									id : 'toolSearchHolderDefinition',
									name : 'holderDefinition',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Shaft Def',
									labelWidth : 80,
									id : 'toolSearchShaftDefinition',
									name : 'shaftDefinition',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Cutter Def',
									labelWidth : 80,
									id : 'toolSearchCutterDefinition',
									name : 'CutterDefinition',
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									fieldLabel : 'Insert Def',
									labelWidth : 80,
									id : 'toolSearchInsertDefinition',
									name : 'insertDefinition',
									margin : '4px',
									width : 160
								}, {
									xtype : 'numberfield',
									fieldLabel : 'Func. Length >',
									labelWidth : 90,
									id : 'toolSearchFLengthBigger',
									name : 'fLengthBigger',
									margin : '4px',
									width : 160
								} ]
							},
							{
								xtype : 'button',
								id : 'toolSearchFindButton',
								text : 'Find',
								margin : '4px',
								handler : function() {
									var store = Ext.data.StoreManager
											.get("ToolStore");
									store
											.getProxy()
											.setExtraParam(
													'asmCode',
													Ext.ComponentQuery
															.query('#toolSearchAsmCode')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'holderCode',
													Ext.ComponentQuery
															.query('#toolSearchHolderCode')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'holderDefinition',
													Ext.ComponentQuery
															.query('#toolSearchHolderDefinition')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'shaftCode',
													Ext.ComponentQuery
															.query('#toolSearchShaftCode')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'shaftDefinition',
													Ext.ComponentQuery
															.query('#toolSearchShaftDefinition')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'cutterCode',
													Ext.ComponentQuery
															.query('#toolSearchCutterCode')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'cutterDefinition',
													Ext.ComponentQuery
															.query('#toolSearchCutterDefinition')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'insertCode',
													Ext.ComponentQuery
															.query('#toolSearchInsertCode')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'insertDefinition',
													Ext.ComponentQuery
															.query('#toolSearchInsertDefinition')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'fLengthSmaller',
													Ext.ComponentQuery
															.query('#toolSearchFLengthSmaller')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'fLengthBigger',
													Ext.ComponentQuery
															.query('#toolSearchFLengthBigger')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'toolOp',
													Ext.ComponentQuery
															.query('#toolSearchToolOp')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'partMaterial',
													Ext.ComponentQuery
															.query('#toolSearchPartMaterial')[0]
															.getValue());
									store.load();
								}
							},
							{
								xtype : 'button',
								id : 'toolSearchClearButton',
								text : 'Clear',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('toolsearchform')[0];
									form.getForm().reset();
								}
							} ]
				});