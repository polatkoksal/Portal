Ext
		.define(
				'Portal.view.FeedbackService.FeedbackUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.feedbackupdateform',
					url : 'createUpdateFeedback',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'feedbackHiddenId2',
								name : 'id'
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [
										{
											xtype : 'container',
											layout : 'vbox',
											items : [
													{
														xtype : 'textfield',
														fieldLabel : 'Project Name',
														id : 'feedbackProjectName2',
														name : 'projectName',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Part Number',
														id : 'feedbackPartNumber2',
														name : 'partNumber',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'KH Code',
														id : 'feedbackKhCode2',
														name : 'khCode',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'PDK NO',
														id : 'feedbackPdkNo2',
														name : 'pdkNo',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'datefield',
														fieldLabel : 'Feedback Date',
														id : 'feedbackDate2',
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
														id : 'feedbackDescription2',
														name : 'description',
														margin : '4px',
														width : 500,
														height : 100
													},
													{
														xtype : 'combobox',
														fieldLabel : 'Responsible',
														id : 'feedbackResponsible2',
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
														id : 'feedbackProvider2',
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
														id : 'feedbackAddSave2',
														text : 'Save',
														margin : '4px',
														handler : function() {
															var form = Ext.ComponentQuery
																	.query('feedbackupdateform')[0];
															var formTab = Ext.ComponentQuery
																	.query('#feedbackUpdateForm')[0];
															var feedbackStore = Ext.data.StoreManager
																	.get("FeedbackStore");
															if (form.isValid()) {
																form
																		.submit({
																			success : function(
																					form,
																					action) {
																				Ext.Msg
																						.alert(
																								'Info',
																								'Feedback is updated');
																				formTab
																						.close();
																				feedbackStore
																						.load();
																			},
																			failure : function(
																					form,
																					action) {
																				Ext.Msg
																						.alert(
																								'Error',
																								'Feedback update failed.');
																			}
																		});
															}
														}
													} ]
										}, {
											xtype : 'image',
											id : 'feedbackUpdateImage',
											margin : '4 0 0 50',
											height : 600,
											width : 600
										} ]
							} ]
				});