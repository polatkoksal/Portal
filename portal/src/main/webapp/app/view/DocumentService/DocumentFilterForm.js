Ext
		.define(
				'Portal.view.DocumentService.DocumentFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.documentfilterform',
					requires : [ 'Portal.view.DocumentService.DocumentAddForm' ],
					items : [
							{
								xtype : 'button',
								id : 'documentAddDocument',
								text : 'Add Document',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('documentAddForm')) {
										tabPanel.add({
											xtype : 'documentaddform',
											id : 'documentAddForm',
											title : 'Add Document',
											closable : true
										})
									}
									tabPanel.setActiveTab("documentAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'documentDeleteDocument',
								text : 'Delete Document',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('documentgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected document?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("DocumentStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteDocument',
																			params : {
																				'id' : grid
																						.getSelectionModel()
																						.getSelection()[0]
																						.get('id')
																			},
																			success : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Info',
																								'Selected document deleted.');
																				store
																						.load();
																				var form = Ext.ComponentQuery
																						.query('documentupdateform')[0];
																				form
																						.getForm()
																						.reset();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Document delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a document.');
									}
								}
							} ]
				});