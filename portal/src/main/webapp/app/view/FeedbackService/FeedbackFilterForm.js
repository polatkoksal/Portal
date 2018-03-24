Ext
		.define(
				'Portal.view.FeedbackService.FeedbackFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.feedbackfilterform',
					requires : [ 'Portal.view.FeedbackService.FeedbackAddForm' ],
					items : [
							{
								xtype : 'combobox',
								fieldLabel : 'Feedback Provider:',
								id : 'feedbackSelectUser',
								store : 'ComboFaiUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								margin : '4px',
								width : 500,
								labelWidth: 150,
								listeners : {
									select : function(combo, records, eOpts) {
										var form = Ext.ComponentQuery
												.query('feedbackfilterform')[0];
										if (form.isValid()) {
											var combo = Ext.ComponentQuery
													.query('#feedbackSelectUser')[0];
											var store = Ext.data.StoreManager
													.get("FeedbackStore");
											store.getProxy().setExtraParam(
													'userId', combo.getValue());
											store.load();
										}
									}
								}
							},
							{
								xtype : 'button',
								id : 'feedbackAddJob',
								text : 'Add Feedback',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('feedbackAddForm')) {
										tabPanel.add({
											xtype : 'feedbackaddform',
											id : 'feedbackAddForm',
											title : 'Add Feedback',
											closable : true
										})
									}
									tabPanel.setActiveTab("feedbackAddForm");
								}
							},
							{
								xtype : 'button',
								id : 'feedbackDeleteJob',
								text : 'Delete Feedback',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('feedbackgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected feedback?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("FeedbackStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteFeedback',
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
																								'Selected feedback is deleted.');
																				store
																						.load();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Feedback delete failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a feedback.');
									}
								}
							} ]
				});