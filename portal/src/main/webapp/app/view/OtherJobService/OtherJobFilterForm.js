Ext
		.define(
				'Portal.view.OtherJobService.OtherJobFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.otherjobfilterform',
					requires : [ 'Portal.view.OtherJobService.OtherJobAddForm' ],
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Select User',
								id : 'otherJobSelectUser',
								store : 'ComboUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								margin : '4px',
								width : 500,
								listeners : {
									select : function(combo, records, eOpts) {
										var form = Ext.ComponentQuery
												.query('otherjobfilterform')[0];
										if (form.isValid()) {
											var combo = Ext.ComponentQuery
													.query('#otherJobSelectUser')[0];
											var store = Ext.data.StoreManager
													.get("OtherJobStore");
											var actionStore = Ext.data.StoreManager
													.get("ActionStore");
											store.getProxy().setExtraParam(
													'userId', combo.getValue());
											store.load();
											actionStore.removeAll();
										}
									}
								}
							},
							{
								xtype : 'button',
								id : 'otherJobAddJob',
								text : 'Add Other Job',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('otherJobAddForm')) {
										tabPanel.add({
											xtype : 'otherjobaddform',
											id : 'otherJobAddForm',
											title : 'Add Other Job',
											closable : true
										})
									}
									tabPanel.setActiveTab("otherJobAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'otherJobAddAction',
								text : 'Add Action',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									var grid = Ext.ComponentQuery
											.query('otherjobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										if (!tabPanel
												.getChildByElement('actionAddForm')) {
											tabPanel.add({
												xtype : 'actionaddform',
												id : 'actionAddForm',
												title : 'Add Action',
												closable : true
											})
											var jobId = Ext.ComponentQuery
													.query('#jobHiddenId')[0];
											var id = grid.getSelectionModel()
													.getSelection()[0]
													.get('id');
											jobId.setValue(id);
										}
										tabPanel.setActiveTab("actionAddForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select an other job.');
									}

								}
							},
							{
								xtype : 'button',
								id : 'otherJobDeleteJob',
								text : 'Delete Other Job',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('otherjobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected other job?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("OtherJobStore");
																var actionStore = Ext.data.StoreManager
																		.get("ActionStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteOtherJob',
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
																								'Selected other job deleted.');
																				actionStore
																						.removeAll();
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Other job delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select an other job.');
									}
								}
							},
							{
								xtype : 'button',
								id : 'deleteAction',
								text : 'Delete Action',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('actiongrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected action?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("ActionStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteAction',
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
																								'Selected action deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Action delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg.alert('Warning',
												'You should select an action.');
									}
								}
							} ]
				});