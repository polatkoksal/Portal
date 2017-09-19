Ext
		.define(
				'Portal.view.DocumentService.DocumentUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.documentupdateform',
					url : 'createUpdateDocument',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'documentHiddenId2',
								name : 'id'
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Document Number',
								id : 'documentNumber2',
								name : 'docNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Document Name',
								id : 'documentName2',
								name : 'docName',
								allowBlank : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Document Type',
								id : 'documentType2',
								name : 'docType',
								store : [ 'TRN', 'Instruction', 'LLD',
										'Technical' ],
								editable : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textarea',
								fieldLabel : 'Keywords',
								id : 'documentKeyWord2',
								name : 'keyWord',
								margin : '4px',
								width : 500,
								height : 100
							},
							{
								xtype : 'button',
								id : 'documentAddSave2',
								text : 'Save',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('documentgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var form = Ext.ComponentQuery
												.query('documentupdateform')[0];
										var documentStore = Ext.data.StoreManager
												.get("DocumentStore");
										if (form.isValid()) {
											form
													.submit({
														success : function(
																form, action) {
															Ext.Msg
																	.alert(
																			'Info',
																			'Selected document updated');
															documentStore
																	.load({
																		callback : function(
																				records,
																				operation,
																				success) {
																			var grid = Ext.ComponentQuery
																					.query('documentgrid')[0];
																			if (!grid
																					.getSelectionModel()
																					.hasSelection()) {
																				var updateForm = Ext.ComponentQuery
																						.query('documentupdateform')[0];
																				updateForm
																						.getForm()
																						.reset();
																			}
																		}
																	});
														},
														failure : function(
																form, action) {
															Ext.Msg
																	.alert(
																			'Error',
																			'Document update failed.');
														}
													});
										}
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a document.');
									}
								}
							},
							{
								xtype : 'button',
								id : 'documentShowPdf',
								text : 'Display PDF',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('documentgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var fileName = Ext.ComponentQuery
												.query('#documentName2')[0]
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
																	id : 'iframe-win',
																	src : 'getPdfFile?fileName='
																			+ fileName
																}
															} ]
														}).show();
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a document.');

									}
								}
							} ]
				});
