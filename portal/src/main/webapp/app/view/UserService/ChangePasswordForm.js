Ext
		.define(
				'Portal.view.UserService.ChangePasswordForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.changepasswordform',
					method : 'POST',
					items : [
							{
								xtype : 'textfield',
								fieldLabel : 'Old Password',
								id : 'oldPassword',
								inputType : 'password',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'New Password',
								id : 'newPassword',
								inputType : 'password',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'New Password Repeat',
								id : 'newPasswordRepeat',
								inputType : 'password',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'button',
								id : 'changeUserPassword',
								text : 'Change Password',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('changepasswordform')[0];
									var store = Ext.data.StoreManager
											.get("SessionUserStore");
									Ext.Ajax
											.request({
												method : 'POST',
												url : 'changePassword',
												params : {
													'oldPassword' : form
															.getForm()
															.findField(
																	'oldPassword')
															.getValue(),
													'newPassword' : form
															.getForm()
															.findField(
																	'newPassword')
															.getValue(),
													'newPasswordRepeat' : form
															.getForm()
															.findField(
																	'newPasswordRepeat')
															.getValue(),

												},
												success : function(response,
														opts) {
													if (response.responseText == 'changed') {
														Ext.Msg
																.alert('Info',
																		'Session user password changed.');
														var sessionUserForm = Ext.ComponentQuery
																.query('sessionuserform')[0];
														form.close();
														store
																.load({
																	callback : function(
																			records,
																			operation,
																			success) {
																		sessionUserForm
																				.loadRecord(store
																						.getAt(0));
																	}
																});
													} else if (response.responseText == 'oldNotMatched') {
														Ext.Msg
																.alert('Error',
																		'Wrong old password.');
													} else if (response.responseText == 'newNotMatched') {
														Ext.Msg
																.alert('Error',
																		'New passwords not matched.');
													}
												},
												failure : function(response,
														opts) {
													Ext.Msg
															.alert('Error',
																	'Change password failed.');
												}
											});
								}
							} ]
				});