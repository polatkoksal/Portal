Ext
		.define(
				'Portal.view.JobRequestService.JobRequestUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.jobrequestupdateform',
					url : 'createUpdateJobRequest',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'jobRequestHiddenId2',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'jobRequestMachineId2',
								name : 'machineId'
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
														xtype : 'datefield',
														fieldLabel : 'Request Date',
														id : 'jobRequestDate2',
														name : 'requestDate',
														value : new Date(),
														format : 'd/m/Y',
														editable : false,
														margin : '4px',
														width : 500
													},
													{
														xtype : 'datefield',
														fieldLabel : 'Request Completion Date',
														id : 'jobRequestCompletionDate2',
														name : 'requestCompletionDate',
														value : new Date(),
														format : 'd/m/Y',
														editable : false,
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Project Name',
														id : 'jobRequestProjectName2',
														name : 'projectName',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Category',
														id : 'jobRequestProjectCategory2',
														name : 'category',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Part Number',
														id : 'jobRequestPartNumber2',
														name : 'partNumber',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Dpr Number',
														id : 'jobRequestDrpNumber2',
														name : 'drpNumber',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'KH Code',
														id : 'jobRequestKhCode2',
														name : 'khCode',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'combobox',
														fieldLabel : 'Machine',
														id : 'jobRequestMachineCode2',
														name : 'machineCode',
														store : 'MachineStore',
														displayField : 'name',
														valueField : 'id',
														editable : false,
														allowBlank : false,
														emptyText : 'Select Machine',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textarea',
														fieldLabel : 'Description',
														id : 'jobRequestDescription2',
														name : 'description',
														margin : '4px',
														width : 500,
														height : 100
													},
													{
														xtype : 'container',
														layout : 'hbox',
														items : [
																{
																	xtype : 'button',
																	id : 'jobRequestAddSave2',
																	text : 'Save',
																	margin : '4px',
																	handler : function() {
																		var form = Ext.ComponentQuery
																				.query('jobrequestupdateform')[0];
																		var formTab = Ext.ComponentQuery
																				.query('#jobRequestUpdateForm')[0];
																		var jobRequestStore = Ext.data.StoreManager
																				.get("JobRequestStore");
																		if (form
																				.isValid()) {
																			form
																					.submit({
																						success : function(
																								form,
																								action) {
																							Ext.Msg
																									.alert(
																											'Info',
																											'Job request is updated');
																							formTab
																									.close();
																							jobRequestStore
																									.load();
																						},
																						failure : function(
																								form,
																								action) {
																							Ext.Msg
																									.alert(
																											'Error',
																											'Job request update failed.');
																						}
																					});
																		}
																	}
																},
																{
																	xtype : 'button',
																	id : 'jobRequestShowPdf',
																	text : 'Display PDF',
																	margin : '4px',
																	handler : function() {
																		var fileName = Ext.ComponentQuery
																				.query('#jobRequestPartNumber2')[0]
																				.getValue();
																		Ext
																				.create(
																						'Ext.window.Window',
																						{
																							title : 'PDF Content',
																							width : 850,
																							height : 500,
																							modal : true,
																							layout : 'fit',
																							items : [ {
																								xtype : 'component',
																								autoEl : {
																									tag : 'iframe',
																									id : 'iframe-win-fai',
																									src : 'getPdfFile?fileName='
																											+ fileName
																								}
																							} ]
																						})
																				.show();
																	}
																} ]
													} ]
										}, {
											xtype : 'image',
											id : 'jobRequestUpdateImage',
											margin : '4 0 0 50',
											height : 400,
											width : 600
										} ]
							} ]
				});