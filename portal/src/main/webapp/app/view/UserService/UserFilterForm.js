Ext
		.define(
				'Portal.view.UserService.UserFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.userfilterform',
					requires : [ 'Portal.view.UserService.AddUserForm' ],
					items : [
							{
								xtype : 'button',
								id : 'updateUserGridAddButton',
								text : 'Add User',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('addUserForm')) {
										tabPanel.add({
											xtype : 'adduserform',
											id : 'addUserForm',
											title : 'Add User',
											closable : true
										});
									}
									tabPanel.setActiveTab('addUserForm');
								}
							},
							{
								xtype : 'button',
								id : 'updateUserGridDeleteButton',
								text : 'Delete User',
								margin : '4px',
								handler : function() {
									var updateUserGrid = Ext.ComponentQuery
											.query('updateusergrid')[0];
									if (updateUserGrid.getSelectionModel()
											.hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected user?',
														function(btn) {
															if (btn == "yes") {
																var userStore = Ext.data.StoreManager
																		.get("UserStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteUser',
																			params : {
																				'id' : updateUserGrid
																						.getSelectionModel()
																						.getSelection()[0]
																						.get('id')
																			},
																			success : function(
																					response,
																					opts) {
																				if (response.responseText == 'true') {
																					Ext.Msg
																							.alert(
																									'Info',
																									'Selected user deleted.');
																					userStore
																							.load();
																					var form = Ext.ComponentQuery
																							.query('updateuserform')[0];
																					form
																							.getForm()
																							.reset();
																				} else {
																					Ext.Msg
																							.alert(
																									'Error',
																									'Selected user has jobs! Please change responsible or delete these jobs.');
																				}
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Delete user failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg.alert('Warning',
												'You should select a user.');
									}
								}
							} ]
				});