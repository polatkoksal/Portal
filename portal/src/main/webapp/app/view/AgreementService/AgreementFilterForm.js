Ext
		.define(
				'Portal.view.AgreementService.AgreementFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.agreementfilterform',
					requires : [ 'Portal.view.AgreementService.AgreementAddForm' ],
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Select User',
								id : 'agreementSelectUser',
								store : 'ComboFaiUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								margin : '4px',
								width : 500,
								listeners : {
									select : function(combo, records, eOpts) {
										var form = Ext.ComponentQuery
												.query('agreementfilterform')[0];
										if (form.isValid()) {
											var combo = Ext.ComponentQuery
													.query('#agreementSelectUser')[0];
											var store = Ext.data.StoreManager
													.get("AgreementStore");
											store.getProxy().setExtraParam(
													'userId', combo.getValue());
											store.load();
										}
									}
								}
							},
							{
								xtype : 'button',
								id : 'agreementAddJob',
								text : 'Add Agreement Job',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('agreementAddForm')) {
										tabPanel.add({
											xtype : 'agreementaddform',
											id : 'agreementAddForm',
											title : 'Add Agreement Job',
											closable : true
										})
									}
									tabPanel.setActiveTab("agreementAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'agreementDeleteJob',
								text : 'Delete Agreement Job',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('agreementgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected agreement job?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("AgreementStore");
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
																								'Selected agreement job deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Agreement job delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a agreement job.');
									}
								}

							},
							{
								xtype : 'button',
								id : 'agreementAddToMethod',
								text : 'Add Agreement Job to Method Job',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('agreementgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('methodUpdateForm')) {
											tabPanel
													.add({
														xtype : 'methodupdateform',
														id : 'methodUpdateForm',
														title : 'Add Agreement Job to Method Job',
														closable : true
													})
											var store = Ext.data.StoreManager
													.get("AgreementStore");
											var record = store.getById(grid
													.getSelectionModel()
													.getSelection()[0]
													.get('id'))
											Ext.ComponentQuery
													.query('#methodUpdateForm')[0]
													.loadRecord(record);

											var responsibleId = record
													.get('responsibleId');
											if (!isNaN(responsibleId)) {
												var comboUserStore = Ext.data.StoreManager
														.get("ComboUserStore");
												var responsible = Ext.ComponentQuery
														.query('#methodResponsible2')[0];
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
												.setActiveTab("methodUpdateForm");
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a agreement job.');
									}
								}

							} ]
				});