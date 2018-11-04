Ext
		.define(
				'Portal.view.JobRequestService.JobRequestFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.jobrequestfilterform',
					requires : [
							'Portal.view.JobRequestService.JobRequestAddForm',
							'Portal.view.FaiDfaiJobService.FaiDfaiJobUpdateForm' ],
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Select User',
								id : 'jobRequestSelectUser',
								store : 'ComboFaiUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								margin : '4px',
								width : 500,
								listeners : {
									select : function(combo, records, eOpts) {
										var form = Ext.ComponentQuery
												.query('jobrequestfilterform')[0];
										if (form.isValid()) {
											var combo = Ext.ComponentQuery
													.query('#jobRequestSelectUser')[0];
											var store = Ext.data.StoreManager
													.get("JobRequestStore");
											store.getProxy().setExtraParam(
													'userId', combo.getValue());
											store.load();
										}
									}
								}
							},
							{
								xtype : 'button',
								id : 'jobRequestAddJob',
								text : 'Add Job Request',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('JobRequestAddForm')) {
										tabPanel.add({
											xtype : 'jobrequestaddform',
											id : 'jobRequestAddForm',
											title : 'Add Job Request',
											closable : true
										})
									}
									tabPanel.setActiveTab("jobRequestAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'jobRequestDeleteJob',
								text : 'Delete Job Request',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('jobrequestgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected job request?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("JobRequestStore");
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
																								'Selected job request deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Job request delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a job request.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'jobRequestAddFaiDfaiJob',
								text : 'Add Request to Fai/DFai',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('jobrequestgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('faiDfaiJobUpdateForm')) {
											tabPanel
													.add({
														xtype : 'faidfaijobupdateform',
														id : 'faiDfaiJobUpdateForm',
														title : 'Add Request to Fai/DFai',
														closable : true
													})
											var store = Ext.data.StoreManager
													.get("JobRequestStore");
											var record = store.getById(grid
													.getSelectionModel()
													.getSelection()[0]
													.get('id'))
											Ext.ComponentQuery
													.query('#faiDfaiJobUpdateForm')[0]
													.loadRecord(record);
											
											var machineId = record.get('machineId');
											if (!isNaN(machineId)) {
												var machineStore = Ext.data.StoreManager
														.get("MachineStore");
												var machine = Ext.ComponentQuery
														.query('#faiDfaiMachine2')[0];
												machineStore.load({
													callback : function() {
														machine.setValue(machineId);
													}
												});
											}
										}
										tabPanel
												.setActiveTab("faiDfaiJobUpdateForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a job request.');
									}
								}
							} ]
				});