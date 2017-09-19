Ext
		.define(
				'Portal.view.FaiDfaiJobService.FaiDfaiJobFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.faidfaijobfilterform',
					requires : [ 'Portal.view.FaiDfaiJobService.FaiDfaiJobAddForm' ],
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Select User',
								id : 'faiDfaiSelectUser',
								store : 'ComboFaiUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								margin : '4px',
								width : 500,
								listeners : {
									select : function(combo, records, eOpts) {
										var form = Ext.ComponentQuery
												.query('faidfaijobfilterform')[0];
										if (form.isValid()) {
											var combo = Ext.ComponentQuery
													.query('#faiDfaiSelectUser')[0];
											var store = Ext.data.StoreManager
													.get("FaiDfaiJobStore");
											store.getProxy().setExtraParam(
													'userId', combo.getValue());
											store.load();
										}
									}
								}
							},
							{
								xtype : 'button',
								id : 'faiDfaiAddJob',
								text : 'Add Fai/DFai Job',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('faiDfaiJobAddForm')) {
										tabPanel.add({
											xtype : 'faidfaijobaddform',
											id : 'faiDfaiJobAddForm',
											title : 'Add Fai/DFai Job',
											closable : true
										})
									}
									tabPanel.setActiveTab("faiDfaiJobAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'faiDfaiDeleteJob',
								text : 'Delete Fai/DFai Job',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('faidfaijobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected Fai/DFai job?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("FaiDfaiJobStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteFaiDfaiJob',
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
																								'Selected Fai/DFai job deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Fai/DFai job delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a Fai/DFai job.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'faiDfaiDoneJob',
								text : 'Fai/DFai Job Done',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('faidfaijobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										win = new Ext.Window(
												{
													title : 'Set Done Date',
													width : 320,
													height : 60,
													modal : true,
													items : [ {
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'datefield',
																	fieldLabel : 'Done Date',
																	id : 'faiDfaiDoneDate',
																	name : 'doneDate',
																	value : new Date(),
																	format : 'd/m/Y',
																	editable : false,
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'button',
																	id : 'faiDfaiDoneDateOk',
																	text : 'Done',
																	margin : '4px',
																	handler : function() {
																		Ext.Msg
																				.confirm(
																						'Confirm',
																						'Are you sure to mark as done selected Fai/DFai job?',
																						function(
																								btn) {
																							if (btn == "yes") {
																								var store = Ext.data.StoreManager
																										.get("FaiDfaiJobStore");
																								var doneStore = Ext.data.StoreManager
																										.get("DoneFaiDfaiJobStore");
																								Ext.Ajax
																										.request({
																											method : 'POST',
																											url : 'doneFaiDfaiJob',
																											params : {
																												'id' : grid
																														.getSelectionModel()
																														.getSelection()[0]
																														.get('id'),
																												'doneDate' : Ext.ComponentQuery
																														.query('#faiDfaiDoneDate')[0]
																														.getRawValue()
																											},
																											success : function(
																													response,
																													opts) {
																												Ext.Msg
																														.alert(
																																'Info',
																																'Selected Fai/DFai job marked as done.');
																												store
																														.load();
																												doneStore
																														.load();
																												win
																														.close();
																											},
																											failure : function(
																													response,
																													opts) {
																												Ext.Msg
																														.alert(
																																'Error',
																																'Fai/DFai job marked as done failed.');
																												win
																														.close();
																											}
																										});
																							}
																						});
																	}
																},
																{
																	xtype : 'button',
																	id : 'faiDfaiDoneDateCancel',
																	text : 'Cancel',
																	margin : '4px',
																	handler : function() {
																		win
																				.close();
																	}
																} ]
													} ]
												});
										win.show();
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a Fai/DFai job.');
									}
								}

							} ]
				});