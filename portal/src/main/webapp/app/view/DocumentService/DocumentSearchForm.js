Ext
		.define(
				'Portal.view.DocumentService.DocumentSearchForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.documentsearchform',
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Document Type',
								id : 'documentTypeSearch',
								name : 'docType',
								store : [ 'TRN', 'Instruction', 'LLD', 'Technical' ],
								editable : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Document Name',
								id : 'documentDocNameSearch',
								name : 'docName',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Keyword',
								id : 'documentKeyWordSearch',
								name : 'keyWord',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'button',
								id : 'documentSearchFindButton',
								text : 'Find',
								margin : '4px',
								handler : function() {
									var store = Ext.data.StoreManager
											.get("DocumentStore");
									store
											.getProxy()
											.setExtraParam(
													'docType',
													Ext.ComponentQuery
															.query('#documentTypeSearch')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'keyWord',
													Ext.ComponentQuery
															.query('#documentKeyWordSearch')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'docName',
													Ext.ComponentQuery
															.query('#documentDocNameSearch')[0]
															.getValue());
									store
											.load({
												callback : function(records,
														operation, success) {
													var grid = Ext.ComponentQuery
															.query('documentgrid')[0]
													if (!grid
															.getSelectionModel()
															.hasSelection()) {
														var updateForm = Ext.ComponentQuery
																.query('documentupdateform')[0]
																.getForm()
																.reset();
													}

												}
											});
								}
							},
							{
								xtype : 'button',
								id : 'documentSearchResetButton',
								text : 'Reset',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('documentsearchform')[0];
									form.getForm().reset();
								}
							} ]
				});