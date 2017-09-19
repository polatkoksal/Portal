Ext
		.define(
				'Portal.view.MachineService.MachineFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.machinefilterform',
					requires : [ 'Portal.view.MachineService.MachineAddForm' ],
					items : [
							{
								xtype : 'button',
								id : 'machineAddMachine',
								text : 'Add Machine',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('machineAddForm')) {
										tabPanel.add({
											xtype : 'machineaddform',
											id : 'machineAddForm',
											title : 'Add Machine',
											closable : true
										})
									}
									tabPanel.setActiveTab("machineAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'machineDeleteMachine',
								text : 'Delete Machine',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('machinegrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected machine?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("MachineStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteMachine',
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
																								'Selected machine deleted.');
																				store
																						.load();
																				var form = Ext.ComponentQuery
																						.query('machineupdateform')[0];
																				form
																						.getForm()
																						.reset();
																				var img = Ext.ComponentQuery
																						.query('#machineUpdateImage')[0];
																				img
																						.setSrc('');
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Machine delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg.alert('Warning',
												'You should select a machine.');
									}
								}
							} ]
				});