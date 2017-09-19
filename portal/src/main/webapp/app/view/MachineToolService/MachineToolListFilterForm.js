Ext
		.define(
				'Portal.view.MachineToolService.MachineToolListFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.machinetoollistfilterform',
					requires : [
							'Portal.view.MachineToolService.MachineToolListAddForm',
							'Portal.view.MachineToolService.MachineToolAddForm' ],
					items : [
							{
								xtype : 'button',
								id : 'machineToolListAddMachineToolList',
								text : 'Add Machine Tool List',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('machineToolListAddForm')) {
										tabPanel.add({
											xtype : 'machinetoollistaddform',
											id : 'machineToolListAddForm',
											title : 'Add Machine Tool List',
											closable : true
										})
									}
									tabPanel
											.setActiveTab("machineToolListAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'machineToolListAddMachineTool',
								text : 'Add Tool To List',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									var grid = Ext.ComponentQuery
											.query('machinetoollistgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										if (!tabPanel
												.getChildByElement('machineToolAddForm')) {
											tabPanel
													.add({
														xtype : 'machinetooladdform',
														id : 'machineToolAddForm',
														title : 'Add Tool To Machine Tool List',
														closable : true
													})
											var machineId = Ext.ComponentQuery
													.query('#machineToolMachineHiddenId')[0];
											var id = grid.getSelectionModel()
													.getSelection()[0]
													.get('id');
											machineId.setValue(id);
										}
										tabPanel
												.setActiveTab("machineToolAddForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a machine tool list.');
									}

								}
							},
							{
								xtype : 'button',
								id : 'machineToolListDeleteMachineToolList',
								text : 'Delete Machine Tool List',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('machinetoollistgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected machine tool list?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("MachineToolListStore");
																var mToolStore = Ext.data.StoreManager
																		.get("MachineToolStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteMachineToolList',
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
																								'Selected machine tool list deleted.');
																				mToolStore
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
																								'Machine tool list delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a machine tool list.');
									}
								}
							},
							{
								xtype : 'button',
								id : 'machineToolListDeleteMachineTool',
								text : 'Delete Tool From List',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('machinetoolgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected tool from list?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("MachineToolStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteMachineTool',
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