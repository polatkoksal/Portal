Ext
		.define(
				'Portal.view.MethodService.MethodFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.methodfilterform',
					requires : [ 'Portal.view.MethodService.MethodAddForm' ],
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Select User',
								id : 'methodSelectUser',
								store : 'ComboFaiUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								margin : '4px',
								width : 500,
								listeners : {
									select : function(combo, records, eOpts) {
										var form = Ext.ComponentQuery
												.query('methodfilterform')[0];
										if (form.isValid()) {
											var combo = Ext.ComponentQuery
													.query('#methodSelectUser')[0];
											var store = Ext.data.StoreManager
													.get("MethodStore");
											store.getProxy().setExtraParam(
													'userId', combo.getValue());
											store.load();
										}
									}
								}
							},
							{
								xtype : 'button',
								id : 'methodAddJob',
								text : 'Add Method Job',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('methodAddForm')) {
										tabPanel.add({
											xtype : 'methodaddform',
											id : 'methodAddForm',
											title : 'Add Method Job',
											closable : true
										})
									}
									tabPanel.setActiveTab("methodAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'methodDeleteJob',
								text : 'Delete Method Job',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('methodgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected method job?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("MethodStore");
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
																								'Selected method job deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Method job delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a method job.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'methodAddToFai',
								text : 'Add Method Job to FAI/DFAI Job',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('methodgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('faiDfaiJobUpdateForm')) {
											tabPanel
													.add({
														xtype : 'faidfaijobupdateform',
														id : 'faiDfaiJobUpdateForm',
														title : 'Add Method Job to FAI/DFAI Job',
														closable : true
													})
											var store = Ext.data.StoreManager
													.get("MethodStore");
											var record = store.getById(grid
													.getSelectionModel()
													.getSelection()[0]
													.get('id'))
											Ext.ComponentQuery
													.query('#faiDfaiJobUpdateForm')[0]
													.loadRecord(record);

											var machineId = record
													.get('machineId');
											if (!isNaN(machineId)) {
												var machineStore = Ext.data.StoreManager
														.get("MachineStore");
												var machine = Ext.ComponentQuery
														.query('#faiDfaiMachine2')[0];
												machineStore
														.load({
															callback : function() {
																machine
																		.setValue(machineId);
															}
														});
											}

											var responsibleId = record
													.get('responsibleId');
											if (!isNaN(responsibleId)) {
												var comboUserStore = Ext.data.StoreManager
														.get("ComboUserStore");
												var responsible = Ext.ComponentQuery
														.query('#faiDfaiResponsible2')[0];
												comboUserStore
														.load({
															callback : function() {
																responsible
																		.setValue(responsibleId);
															}
														});
											}
										}
										tabPanel
												.setActiveTab("faiDfaiJobUpdateForm");

									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a method job.');
									}
								}

							} ]
				});