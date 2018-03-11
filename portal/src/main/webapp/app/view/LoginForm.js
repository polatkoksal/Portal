Ext
		.define(
				'Portal.view.LoginForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.loginform',
					requires : [ 'Portal.view.MenuPanel' ],
					items : [
							{
								xtype : 'hiddenfield',
								id : 'loginFormHiddenRole',
							},
							{
								xtype : 'hiddenfield',
								id : 'loginFormHiddenUserId',
							},
							{
								xtype : 'textfield',
								fieldLabel : 'User Name',
								labelAlign : 'right',
								id : 'loginFormUserName',
								margin : '4px',
								width : 280
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Password',
								labelAlign : 'right',
								inputType : 'password',
								id : 'loginFormPassword',
								margin : '4px',
								width : 280,
								listeners : {
									specialkey : function(field, e) {
										if (e.getKey() == e.ENTER) {
											var loginForm = Ext.ComponentQuery
													.query('loginform')[0];
											Ext.Ajax
													.request({
														method : 'POST',
														url : 'login',
														params : {
															'userName' : loginForm
																	.getForm()
																	.findField(
																			'loginFormUserName')
																	.getValue(),
															'password' : loginForm
																	.getForm()
																	.findField(
																			'loginFormPassword')
																	.getValue(),

														},
														success : function(
																response, opts) {
															var loginForm = Ext.ComponentQuery
																	.query('loginform')[0];
															loginForm
																	.getForm()
																	.findField(
																			'loginFormHiddenRole')
																	.setValue(
																			response
																					.getResponseHeader('userRole'));
															loginForm
																	.getForm()
																	.findField(
																			'loginFormHiddenUserId')
																	.setValue(
																			response
																					.getResponseHeader('userId'));
															var loginForm = Ext.ComponentQuery
																	.query('loginform')[0];
															var tabPanel = Ext.ComponentQuery
																	.query('tabpanel')[0];
															var viewPort = Ext.ComponentQuery
																	.query('viewport')[0];
															var menuStore = Ext.data.StoreManager
																	.get("MenuStore");
															loginForm
																	.setVisible(false);
															menuStore.load();
															viewPort
																	.add(
																			{
																				xtype : 'menupanel',
																				id : 'menuPanel',
																				region : 'west',
																			},
																			{
																				xtype : 'tabpanel',
																				id : 'tabPanel',
																				region : 'center',
																			});
														},
														failure : function(
																response, opts) {
															Ext.Msg
																	.alert(
																			'Error',
																			'Wrong user name or password!');
														}
													});
										}
									}
								}
							},
							{
								xtype : 'container',
								layout : {
									type : 'hbox',
									align : 'center',
									pack : 'end',
								},
								dock : 'center',
								id : 'loginFormButtons',
								items : [
										{
											xtype : 'button',
											text : 'Login',
											id : 'loginFormLoginButton',
											itemId : 'loginFormLoginButton',
											margin : '4 0 0 51',
											handler : function(caller) {
												var loginForm = Ext.ComponentQuery
														.query('loginform')[0];
												Ext.Ajax
														.request({
															method : 'POST',
															url : 'login',
															params : {
																'userName' : loginForm
																		.getForm()
																		.findField(
																				'loginFormUserName')
																		.getValue(),
																'password' : loginForm
																		.getForm()
																		.findField(
																				'loginFormPassword')
																		.getValue(),

															},
															success : function(
																	response,
																	opts) {
																var loginForm = Ext.ComponentQuery
																		.query('loginform')[0];
																loginForm
																		.getForm()
																		.findField(
																				'loginFormHiddenRole')
																		.setValue(
																				response
																						.getResponseHeader('userRole'));
																loginForm
																		.getForm()
																		.findField(
																				'loginFormHiddenUserId')
																		.setValue(
																				response
																						.getResponseHeader('userId'));
																var loginForm = Ext.ComponentQuery
																		.query('loginform')[0];
																var tabPanel = Ext.ComponentQuery
																		.query('tabpanel')[0];
																var viewPort = Ext.ComponentQuery
																		.query('viewport')[0];
																var menuStore = Ext.data.StoreManager
																		.get("MenuStore");
																loginForm
																		.setVisible(false);
																menuStore
																		.load();
																viewPort
																		.add(
																				{
																					xtype : 'menupanel',
																					id : 'menuPanel',
																					region : 'west',
																				},
																				{
																					xtype : 'tabpanel',
																					id : 'tabPanel',
																					region : 'center',
																				});
															},
															failure : function(
																	response,
																	opts) {
																Ext.Msg
																		.alert(
																				'Error',
																				'Wrong user name or password!');
															}
														});
											}
										},
										{
											xtype : 'button',
											text : 'Reset',
											id : 'loginFormResetButton',
											itemId : 'loginFormResetButton',
											margin : '4px',
											handler : function(caller) {
												var loginForm = Ext.ComponentQuery
														.query('loginform')[0];
												loginForm.getForm().reset();
											}
										} ]
							} ]
				});
