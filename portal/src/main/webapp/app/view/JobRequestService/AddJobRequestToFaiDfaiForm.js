Ext
		.define(
				'Portal.view.JobRequestService.AddJobRequestToFaiDfaiForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.addjobrequesttofaidfaiform',
					url : 'createUpdateFaiDfaiJob',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'addToFaiDfaiHiddenId2',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'addToFaiDfaiResponsibleId',
								name : 'responsibleId'
							},
							{
								xtype : 'numberfield',
								fieldLabel : 'Period',
								id : 'addToFaiDfaiPeriod2',
								name : 'period',
								minValue : 1,
								maxValue : 52,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Project Name',
								id : 'addToFaiDfaiProjectName2',
								name : 'projectName',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Category',
								id : 'addToFaiDfaiProjectCategory2',
								name : 'category',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Part Number',
								id : 'addToFaiDfaiPartNumber2',
								name : 'partNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Dpr Number',
								id : 'addToFaiDfaiDrpNumber2',
								name : 'drpNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'KH Code',
								id : 'addToFaiDfaiKhCode2',
								name : 'khCode',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Machine Code',
								id : 'addToFaiDfaiMachineCode2',
								name : 'machineCode',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Setup Ap. Resp.',
								id : 'addToFaiDfaiSetupApResp2',
								name : 'setupApRespId',
								store : 'ComboUserStore',
								displayField : 'nameSurname',
								valueField : 'id',
								editable : false,
								allowBlank : false,
								emptyText : 'Select Setup Ap. Resp.',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'datefield',
									fieldLabel : 'Fixture Start',
									id : 'addToFaiDfaiFixtureStart2',
									name : 'fixtureStart',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'datefield',
									fieldLabel : 'Fixture End',
									id : 'addToFaiDfaiFixtureEnd2',
									name : 'fixtureEnd',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'numberfield',
									fieldLabel : '%',
									id : 'addToFaiDfaiFixturePercentage2',
									name : 'fixturePercentage',
									minValue : 0,
									maxValue : 100,
									margin : '4px',
									width : 83,
									labelWidth : 20
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'datefield',
									fieldLabel : 'Cam | Vericut Start',
									id : 'addToFaiDfaiCatiaStart2',
									name : 'catiaStart',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'datefield',
									fieldLabel : 'Cam | Vericut End',
									id : 'addToFaiDfaiCatiaEnd2',
									name : 'catiaEnd',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'numberfield',
									fieldLabel : '%',
									id : 'addToFaiDfaiCatiaPercentage2',
									name : 'catiaPercentage',
									minValue : 0,
									maxValue : 100,
									margin : '4px',
									width : 83,
									labelWidth : 20
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'datefield',
									fieldLabel : 'Document Start',
									id : 'addToFaiDfaiDocumentStart2',
									name : 'documentStart',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'datefield',
									fieldLabel : 'Document End',
									id : 'addToFaiDfaiDocumentEnd2',
									name : 'documentEnd',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'numberfield',
									fieldLabel : '%',
									id : 'addToFaiDfaiDocumentPercentage2',
									name : 'documentPercentage',
									minValue : 0,
									maxValue : 100,
									margin : '4px',
									width : 83,
									labelWidth : 20
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'datefield',
									fieldLabel : 'Machine Start',
									id : 'addToFaiDfaiBenchStart2',
									name : 'benchStart',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'datefield',
									fieldLabel : 'Machine End',
									id : 'addToFaiDfaiBenchEnd2',
									name : 'benchEnd',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 200
								}, {
									xtype : 'numberfield',
									fieldLabel : '%',
									id : 'addToFaiDfaiBenchPercentage2',
									name : 'benchPercentage',
									minValue : 0,
									maxValue : 100,
									margin : '4px',
									width : 83,
									labelWidth : 20
								} ]
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Responsible',
								id : 'addToFaiDfaiResponsible2',
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
								xtype : 'textarea',
								fieldLabel : 'Description',
								id : 'addToFaiDfaiDescription2',
								name : 'description',
								margin : '4px',
								width : 500,
								height : 100
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'button',
									id : 'addToFaiDfaiAddSave2',
									text : 'Save',
									margin : '4px',
									handler : function() {
										var form = Ext.ComponentQuery
												.query('addjobrequesttofaidfaiform')[0];
										var formTab = Ext.ComponentQuery
												.query('#addJobRequestToFaiDfaiForm')[0];
										var faiDfaiJobStore = Ext.data.StoreManager
												.get("FaiDfaiJobStore");
										var jobRequestStore = Ext.data.StoreManager
												.get("JobRequestStore");
										if (form.isValid()) {
											form
													.submit({
														success : function(
																form, action) {
															Ext.Msg
																	.alert(
																			'Info',
																			'Job request is added to Fai/DFai');
															formTab.close();
															jobRequestStore
																	.load();
															faiDfaiJobStore
																	.load();
														},
														failure : function(
																form, action) {
															Ext.Msg
																	.alert(
																			'Error',
																			'Job request add failed.');
														}
													});
										}
									}
								} ]
							} ]
				});