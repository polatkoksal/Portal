Ext
		.define(
				'Portal.view.FeedbackService.FeedbackAddForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.feedbackaddform',
					url : 'createUpdateFeedback',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'feedbackHiddenId',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'feedbackImageName',
								name : 'imageName'
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Project Name',
								id : 'feedbackProjectName',
								name : 'projectName',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Part Number',
								id : 'feedbackPartNumber',
								name : 'partNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'KH Code',
								id : 'feedbackKhCode',
								name : 'khCode',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'PDK NO',
								id : 'feedbackPdkNo',
								name : 'pdkNo',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'datefield',
								fieldLabel : 'Feedback Date',
								id : 'feedbackDate',
								name : 'feedbackDate',
								value : new Date(),
								format : 'd/m/Y',
								editable : false,
								margin : '4px',
								width : 200
							},
							{
								xtype : 'textarea',
								fieldLabel : 'Description',
								id : 'feedbackDescription',
								name : 'description',
								margin : '4px',
								width : 500,
								height : 100
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Responsible',
								id : 'feedbackResponsible',
								name : 'responsible',
								store : 'ComboUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								allowBlank : false,
								emptyText : 'Select Responsible',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Feedback Provider',
								id : 'feedbackProvider',
								name : 'feedbackProvider',
								store : 'ComboUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								allowBlank : false,
								emptyText : 'Select Feedback Provider',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'button',
								id : 'feedbackAddSave',
								text : 'Save',
								margin : '4px',
								handler : function() {
								}
							},
							{
								xtype : 'button',
								id : 'feedbackUploadImage',
								text : 'Upload Image',
								margin : '4px',
								handler : function() {
									win = new Ext.Window(
											{
												title : 'Upload Image',
												width : 521,
												height : 105,
												modal : true,
												items : [ {
													xtype : 'form',
													id : 'feedbackImageUpload',
													name : 'imageUpload',
													width : 500,
													frame : true,
													margin : '4px',
													items : [ {
														xtype : 'filefield',
														name : 'image',
														fieldLabel : 'Image',
														labelWidth : 50,
														msgTarget : 'side',
														anchor : '100%',
														buttonText : 'Browse...'
													} ],
													buttons : [ {
														text : 'Upload',
														handler : function() {
															var form = this.up(
																	'form')
																	.getForm();
															if (form.isValid()) {
																form
																		.submit({
																			url : 'feedBackUploadImage',
																			method : 'POST',
																			waitMsg : 'Uploading your image...',
																			success : function(
																					form,
																					action) {
																				var imageName = Ext.ComponentQuery
																						.query('#feedbackImageName')[0];
																				imageName
																						.setValue(action.result.fileName);
																				win
																						.close();
																				Ext.Msg
																						.alert(
																								'Info',
																								'Image '
																										+ action.result.fileName
																										+ ' is uploaded.');
																			},
																			failure : function(
																					form,
																					action) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Image upload failed.');
																			}
																		});
															}
														}
													} ]
												} ]
											});
									win.show();
								}
							},
							{
								xtype : 'button',
								id : 'feedbackAddSave',
								text : 'Save',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('feedbackaddform')[0];
									var formTab = Ext.ComponentQuery
											.query('#feedbackAddForm')[0];
									var feedbackStore = Ext.data.StoreManager
											.get("FeedbackStore");
									if (form.isValid()) {
										form
												.submit({
													success : function(form,
															action) {
														Ext.Msg
																.alert('Info',
																		'New feedback is added');
														formTab.close();
														feedbackStore.load();
													},
													failure : function(form,
															action) {
														Ext.Msg
																.alert('Error',
																		'Feedback add failed.');
													}
												});
									}
								}
							},
							{
								xtype : 'button',
								id : 'feedbackAddReset',
								text : 'Reset Form',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('feedbackaddform')[0];
									form.getForm().reset();
								}
							} ]
				});