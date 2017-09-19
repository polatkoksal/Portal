Ext
		.define(
				'Portal.view.UserService.UserSkillFilterForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.userskillfilterform',
					requires : [ 'Portal.view.UserService.UserSkillAddForm' ],
					items : [
							{
								xtype : 'hiddenfield',
								id : 'userSkillFilterHiddenUserId',
							},
							{
								xtype : 'button',
								id : 'userSkillFilterAddButton',
								text : 'Add User Skill',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('userSkillAddForm')) {
										tabPanel.add({
											xtype : 'userskilladdform',
											id : 'userSkillAddForm',
											title : 'Add User Skill',
											closable : true
										});
										var userIdField = Ext.ComponentQuery
												.query('#addUserSkillHiddenUserId')[0];
										var userId = Ext.ComponentQuery
												.query('#userSkillFilterHiddenUserId')[0]
												.getValue();
										userIdField.setValue(userId);
									}
									tabPanel.setActiveTab('userSkillAddForm');
								}
							},
							{
								xtype : 'button',
								id : 'userSkillFilterDeleteButton',
								text : 'Delete User Skill',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('userskillgrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										Ext.Msg
												.confirm(
														'Confirm',
														'Are you sure to delete selected user skill?',
														function(btn) {
															if (btn == "yes") {
																var store = Ext.data.StoreManager
																		.get("UserSkillStore");
																Ext.Ajax
																		.request({
																			method : 'POST',
																			url : 'deleteUserSkill',
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
																								'Selected user skill deleted.');
																				store
																						.load();
																				var form = Ext.ComponentQuery
																						.query('userskillupdateform')[0];
																				form
																						.getForm()
																						.reset();
																			},
																			failure : function(
																					response,
																					opts) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Delete user skill failed.');
																			}
																		});
															}
														});
									} else {
										Ext.Msg
												.alert('Warning',
														'You should select a user skill.');
									}
								}
							} ]
				});