Ext
		.define(
				'Portal.view.UserService.UpdateUserForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.updateuserform',
					url : 'createUpdateUser',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'updateUserHiddenId',
								name : 'id'
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Name',
								id : 'updateUserName',
								name : 'name',
								allowBlank : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Surname',
								id : 'updateUserLastName',
								name : 'lastName',
								allowBlank : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'User Name',
								id : 'updateUserUserName',
								name : 'userName',
								allowBlank : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Register Number',
								id : 'updateUserRegisterNumber',
								name : 'registerNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Duty',
								id : 'updateUserDuty',
								name : 'duty',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Telephone',
								id : 'updateUserTelephone',
								name : 'telephone',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'E-mail',
								id : 'updateUserEmail',
								name : 'email',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Role',
								id : 'updateUserRole',
								name : 'role',
								store : [ 'Admin', 'User', 'PM', 'Prod' ],
								editable : false,
								forceSelection : true,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'button',
								id : 'updateUserSaveUser',
								text : 'Save',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('updateusergrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var updateUserForm = Ext.ComponentQuery
												.query('updateuserform')[0];
										if (updateUserForm.isValid()) {
											updateUserForm
													.submit({
														success : function(
																form, action) {
															Ext.Msg
																	.alert(
																			'Info',
																			'User updated.');
															var userStore = Ext.data.StoreManager
																	.get("UserStore");
															var comboUserStore = Ext.data.StoreManager
																	.get("ComboUserStore");
															userStore.load();
															comboUserStore
																	.load();
														},
														failure : function(
																form, action) {
															Ext.Msg
																	.alert(
																			'Error',
																			'User update failed.');
														}
													});
										}
									} else {
										Ext.Msg.alert('Warning',
												'You should select a user.');
									}
								}
							},
							{
								xtype : 'button',
								id : 'updateUserUserSkills',
								text : 'User Skills',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('updateusergrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										if (!tabPanel
												.getChildByElement('userSkillPanel')) {
											tabPanel.add({
												xtype : 'userskillpanel',
												id : 'userSkillPanel',
												title : 'User Skills',
												closable : true
											});
											var userId = Ext.ComponentQuery
													.query('#updateUserHiddenId')[0]
													.getValue();
											var store = Ext.data.StoreManager
													.get("UserSkillStore");
											store.getProxy().setExtraParam(
													'userId', userId);
											store.load();
											var userIdField = Ext.ComponentQuery
													.query('#userSkillFilterHiddenUserId')[0];
											var updateUserGrid = Ext.ComponentQuery
													.query('updateusergrid')[0];
											userIdField.setValue(updateUserGrid
													.getSelectionModel()
													.getSelection()[0]
													.get('id'));
											var role = Ext.ComponentQuery
													.query('#loginFormHiddenRole')[0]
													.getValue();
											var filterForm = Ext.ComponentQuery
													.query('userskillfilterform')[0];
											if (role != 'Admin') {
												filterForm.setVisible(false);
												Ext.ComponentQuery
														.query('#addUserSkillName2')[0]
														.setReadOnly(true);
												Ext.ComponentQuery
														.query('#addUserSkillTraining2')[0]
														.setReadOnly(true);
												Ext.ComponentQuery
														.query('#addUserSkillTrainingDate2')[0]
														.setReadOnly(true);
												Ext.ComponentQuery
														.query('#addUserSkillSkore2')[0]
														.setReadOnly(true);
												Ext.ComponentQuery
														.query('#addUserSkillSaveButton2')[0]
														.setVisible(false);
											}
										}
										tabPanel.setActiveTab('userSkillPanel');
									} else {
										Ext.Msg.alert('Warning',
												'You should select a user.');
									}
								}
							},
							{
								xtype : 'button',
								id : 'updateUserResetPassword',
								text : 'Reset User Password',
								margin : '4px',
								handler : function() {
									var grid = Ext.ComponentQuery
											.query('updateusergrid')[0];
									if (grid.getSelectionModel().hasSelection()) {
										var updateUserForm = Ext.ComponentQuery
												.query('updateuserform')[0];
										if (updateUserForm.isValid()) {
											Ext.Msg
													.confirm(
															'Confirm',
															'Are you sure to reset user password?',
															function(btn) {
																if (btn == "yes") {
																	Ext.Ajax
																			.request({
																				method : 'POST',
																				url : 'resetUserPassword',
																				params : {
																					'id' : updateUserForm
																							.getForm()
																							.findField(
																									'updateUserHiddenId')
																							.getValue(),

																				},
																				success : function(
																						response,
																						opts) {
																					Ext.Msg
																							.alert(
																									'Info',
																									'User password reset.');
																				},
																				failure : function(
																						response,
																						opts) {
																					Ext.Msg
																							.alert(
																									'Error',
																									'Password reset failed.');
																				}
																			});
																}
															});
										}
									} else {
										Ext.Msg.alert('Warning',
												'You should select a user.');
									}
								}
							} ]
				});