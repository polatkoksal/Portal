Ext
		.define(
				'Portal.view.ToolService.ToolFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.toolfilterform',
					requires : [ 'Portal.view.ToolService.ToolAddForm' ],
					items : [
							{
								xtype : 'button',
								id : 'toolAddTool',
								text : 'Add Tool',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('toolAddForm')) {
										tabPanel.add({
											xtype : 'tooladdform',
											id : 'toolAddForm',
											title : 'Add Tool',
											closable : true
										})
									}
									tabPanel.setActiveTab("toolAddForm");

								}
							},
							{
								xtype : 'button',
								id : 'toolDeleteTool',
								text : 'Delete Tool',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('toolgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected tool?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("ToolStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteTool',
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
																								'Selected tool deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Tool delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg.alert('Warning',
												'You should select a tool.');
									}
								}
							} ]
				});