Ext
		.define(
				'Portal.view.FaiDfaiJobService.DoneFaiDfaiJobFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.donefaidfaijobfilterform',
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Responsible',
								id : 'doneFaiDfaiSelectUser',
								store : 'ComboFaiUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								margin : '4px',
								width : 500,
								listeners : {
									select : function(combo, records, eOpts) {
										var form = Ext.ComponentQuery
												.query('donefaidfaijobfilterform')[0];
										if (form.isValid()) {
											var combo = Ext.ComponentQuery
													.query('#doneFaiDfaiSelectUser')[0];
											var store = Ext.data.StoreManager
													.get("DoneFaiDfaiJobStore");
											store.getProxy().setExtraParam(
													'userId', combo.getValue());
											store.load();
										}
									}
								}
							},
							{
								xtype : 'button',
								id : 'doneFaiDfaiDeleteJob',
								text : 'Delete Done Fai/DFai Job',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('donefaidfaijobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected done Fai/DFai job?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("DoneFaiDfaiJobStore");
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
																								'Selected done Fai/DFai job deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Done Fai/DFai job delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a done Fai/DFai job.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'showDoneFaiControlList1',
								text : 'Fai Control List 1',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('donefaidfaijobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('faiControlListForm')) {
											tabPanel.add({
												xtype : 'faicontrollistform',
												id : 'faiControlListForm',
												title : 'FAI Control List 1',
												closable : true
											})
											var faiJobId = grid
													.getSelectionModel()
													.getSelection()[0]
													.get('id');
											var store = Ext.data.StoreManager
													.get("FaiControlListStore");
											store.getProxy().setExtraParam(
													'faiJobId', faiJobId);
											store.getProxy().setExtraParam(
													'listNumber', 1);
											store
													.load({
														callback : function() {
															var record = store
																	.findRecord(
																			'faiJobId',
																			faiJobId);
															if (record != null) {
																Ext.ComponentQuery
																		.query('#faiControlListForm')[0]
																		.loadRecord(record);
															}
														}
													});
											Ext.ComponentQuery
													.query('#faiCtrlHiddenFaiJobId')[0]
													.setValue(faiJobId);
											Ext.ComponentQuery
													.query('#faiCtrlSave')[0]
													.setVisible(false);
										}
										tabPanel
												.setActiveTab("faiControlListForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a done Fai/DFai job.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'showDoneFaiControlList2',
								text : 'Fai Control List 2',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('donefaidfaijobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('faiControlListForm')) {
											tabPanel.add({
												xtype : 'faicontrollistform',
												id : 'faiControlListForm',
												title : 'FAI Control List 2',
												closable : true
											})
											var faiJobId = grid
													.getSelectionModel()
													.getSelection()[0]
													.get('id');
											var store = Ext.data.StoreManager
													.get("FaiControlListStore");
											store.getProxy().setExtraParam(
													'faiJobId', faiJobId);
											store.getProxy().setExtraParam(
													'listNumber', 2);
											store
													.load({
														callback : function() {
															var record = store
																	.findRecord(
																			'faiJobId',
																			faiJobId);
															if (record != null) {
																Ext.ComponentQuery
																		.query('#faiControlListForm')[0]
																		.loadRecord(record);
															}
														}
													});
											Ext.ComponentQuery
													.query('#faiCtrlHiddenFaiJobId')[0]
													.setValue(faiJobId);
											Ext.ComponentQuery
													.query('#faiCtrlSave')[0]
													.setVisible(false);
										}
										tabPanel
												.setActiveTab("faiControlListForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a done Fai/DFai job.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'showDoneFaiControlList3',
								text : 'Fai Control List 3',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('donefaidfaijobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('faiControlListForm')) {
											tabPanel.add({
												xtype : 'faicontrollistform',
												id : 'faiControlListForm',
												title : 'FAI Control List 3',
												closable : true
											})
											var faiJobId = grid
													.getSelectionModel()
													.getSelection()[0]
													.get('id');
											var store = Ext.data.StoreManager
													.get("FaiControlListStore");
											store.getProxy().setExtraParam(
													'faiJobId', faiJobId);
											store.getProxy().setExtraParam(
													'listNumber', 3);
											store
													.load({
														callback : function() {
															var record = store
																	.findRecord(
																			'faiJobId',
																			faiJobId);
															if (record != null) {
																Ext.ComponentQuery
																		.query('#faiControlListForm')[0]
																		.loadRecord(record);
															}
														}
													});
											Ext.ComponentQuery
													.query('#faiCtrlHiddenFaiJobId')[0]
													.setValue(faiJobId);
											Ext.ComponentQuery
													.query('#faiCtrlSave')[0]
													.setVisible(false);
										}
										tabPanel
												.setActiveTab("faiControlListForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a done Fai/DFai job.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'showDoneFaiControlList4',
								text : 'Fai Control List 4',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('donefaidfaijobgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('faiControlListForm')) {
											tabPanel.add({
												xtype : 'faicontrollistform',
												id : 'faiControlListForm',
												title : 'FAI Control List 4',
												closable : true
											})
											var faiJobId = grid
													.getSelectionModel()
													.getSelection()[0]
													.get('id');
											var store = Ext.data.StoreManager
													.get("FaiControlListStore");
											store.getProxy().setExtraParam(
													'faiJobId', faiJobId);
											store.getProxy().setExtraParam(
													'listNumber', 4);
											store
													.load({
														callback : function() {
															var record = store
																	.findRecord(
																			'faiJobId',
																			faiJobId);
															if (record != null) {
																Ext.ComponentQuery
																		.query('#faiControlListForm')[0]
																		.loadRecord(record);
															}
														}
													});
											Ext.ComponentQuery
													.query('#faiCtrlHiddenFaiJobId')[0]
													.setValue(faiJobId);
											Ext.ComponentQuery
													.query('#faiCtrlSave')[0]
													.setVisible(false);
										}
										tabPanel
												.setActiveTab("faiControlListForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a done Fai/DFai job.');
									}
								}

							} ]
				});