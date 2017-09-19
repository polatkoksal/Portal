Ext
		.define(
				'Portal.view.UserService.SessionUserForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.sessionuserform',
					url : 'UpdateSessionUser',
					requires : [ 'Portal.view.UserService.ChangePasswordForm' ],
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'sessionUserHiddenId',
								name : 'id'
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Name',
								id : 'sessionUserName',
								name : 'name',
								allowBlank : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Surname',
								id : 'sessionUserLastName',
								name : 'lastName',
								allowBlank : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'User Name',
								id : 'sessionUserUserName',
								name : 'userName',
								allowBlank : false,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Register Number',
								id : 'sessionUserRegisterNumber',
								name : 'registerNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Duty',
								id : 'sessionUserDuty',
								name : 'duty',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Telephone',
								id : 'sessionUserTelephone',
								name : 'telephone',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'E-mail',
								id : 'sessionUserEmail',
								name : 'email',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'button',
								id : 'sessionUserSaveUser',
								text : 'Save',
								margin : '4px',
								handler : function() {
									var sessionUserForm = Ext.ComponentQuery
											.query('sessionuserform')[0];
									if (sessionUserForm.isValid()) {
										var sessionUserStore = Ext.data.StoreManager
												.get("SessionUserStore");
										sessionUserForm
												.submit({
													success : function(form,
															action) {
														Ext.Msg
																.alert('Info',
																		'Session user updated.');
														sessionUserStore
																.load({
																	callback : function(
																			records,
																			operation,
																			success) {
																		sessionUserForm
																				.loadRecord(sessionUserStore
																						.getAt(0));
																	}
																});
														var comboUserStore = Ext.data.StoreManager
																.get("ComboUserStore");
														comboUserStore.load();
													},
													failure : function(form,
															action) {
														Ext.Msg
																.alert('Error',
																		'Session user update failed.');
													}
												});
									}
								}
							},
							{
								xtype : 'button',
								id : 'sessionUserUserSkills',
								text : 'User Skills',
								margin : '4px',
								handler : function() {
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
												.query('#sessionUserHiddenId')[0]
												.getValue();
										var store = Ext.data.StoreManager
												.get("UserSkillStore");
										store.getProxy().setExtraParam(
												'userId', userId);
										store.load();
										var userIdField = Ext.ComponentQuery
												.query('#userSkillFilterHiddenUserId')[0];
										userIdField.setValue(userId);
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
								}
							},
							{
								xtype : 'button',
								id : 'sessionChangePassword',
								text : 'Change Password',
								margin : '4px',
								handler : function() {
									var tabPanel = Ext.ComponentQuery
											.query('tabpanel')[0];
									if (!tabPanel
											.getChildByElement('changePasswordForm')) {
										tabPanel.add({
											xtype : 'changepasswordform',
											id : 'changePasswordForm',
											title : 'Change Password',
											closable : true
										})
									}
									tabPanel.setActiveTab("changePasswordForm");
								}
							} ]
				});