Ext
		.define(
				'Portal.view.AgreementService.AgreementUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.agreementupdateform',
					url : 'createUpdateFaiDfaiJob',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'agreementHiddenId2',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'responsibleId',
								name : 'responsibleId'
							},
							{
								xtype : 'hiddenfield',
								id : 'agreementJobState2',
								name : 'jobState',
								value : 'agreement'
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Project Name',
								id : 'agreementProjectName2',
								name : 'projectName',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Category',
								id : 'agreementProjectCategory2',
								name : 'category',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Part Number',
								id : 'agreementPartNumber2',
								name : 'partNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'KH Code',
								id : 'agreementKhCode2',
								name : 'khCode',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Seviye',
								id : 'agreementLevel2',
								name : 'level',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'datefield',
								fieldLabel : 'PO Date',
								id : 'agreementPoDate2',
								name : 'poDate',
								value : new Date(),
								format : 'd/m/Y',
								editable : false,
								margin : '4px',
								width : 200
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Eski Parca Adi',
									id : 'agreementOldPartName2',
									name : 'oldPartName',
									margin : '21 4 4 4',
									width : 300
								}, {
									xtype : 'textfield',
									fieldLabel : 'PL Rev.',
									labelAlign : 'top',
									id : 'agreementOldPartNamePL2',
									name : 'oldPartNamePL',
									margin : '4px',
									width : 92
								}, {
									xtype : 'textfield',
									fieldLabel : 'TR Rev.',
									labelAlign : 'top',
									id : 'agreementOldPartNameTR2',
									name : 'oldPartNameTR',
									margin : '4px',
									width : 92
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Eski Alt Parca Adi',
									id : 'agreementOldSubPartName2',
									name : 'oldSubPartName',
									margin : '4px',
									width : 300
								}, {
									xtype : 'textfield',
									id : 'agreementOldSubPartNamePL2',
									name : 'oldSubPartNamePL',
									margin : '4px',
									width : 92
								}, {
									xtype : 'textfield',
									id : 'agreementOldSubPartNameTR2',
									name : 'oldSubPartNameTR',
									margin : '4px',
									width : 92
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Yeni Ana Parca Adi',
									id : 'agreementNewPartName2',
									name : 'newPartName',
									margin : '4px',
									width : 300
								}, {
									xtype : 'textfield',
									id : 'agreementNewPartNamePL2',
									name : 'newPartNamePL',
									margin : '4px',
									width : 92
								}, {
									xtype : 'textfield',
									id : 'agreementNewPartNameTR2',
									name : 'newPartNameTR',
									margin : '4px',
									width : 92
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Yeni Alt Parca Adi',
									id : 'agreementNewSubPartName2',
									name : 'newSubPartName',
									margin : '4px',
									width : 300
								}, {
									xtype : 'textfield',
									id : 'agreementNewSubPartNamePL2',
									name : 'newSubPartNamePL',
									margin : '4px',
									width : 92
								}, {
									xtype : 'textfield',
									id : 'agreementNewSubPartNameTR2',
									name : 'newSubPartNameTR',
									margin : '4px',
									width : 92
								} ]
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Degisiklik Durumu',
								id : 'agreementChangeStatus2',
								name : 'changeStatus',
								store : [ 'Degisiklik Yok', 'Yeni Parca',
										'Rev Degis- Model Ayni',
										'Rev Degis- Model Degisikligi',
										'Dash Degis- Model Ayni',
										'Dash Degis- Model Degisikligi' ],
								valueField : 'changeStatus',
								editable : false,
								emptyText : 'Select',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Responsible',
								id : 'agreementResponsible2',
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
								id : 'agreementDescription2',
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
											id : 'agreementAddSave2',
											text : 'Save',
											margin : '4px',
											handler : function() {
												var form = Ext.ComponentQuery
														.query('agreementupdateform')[0];
												var formTab = Ext.ComponentQuery
														.query('#agreementUpdateForm')[0];
												var agreementStore = Ext.data.StoreManager
														.get("AgreementStore");
												if (form.isValid()) {
													form
															.submit({
																success : function(
																		form,
																		action) {
																	Ext.Msg
																			.alert(
																					'Info',
																					'Agreement job updated');
																	formTab
																			.close();
																	agreementStore
																			.load();
																},
																failure : function(
																		form,
																		action) {
																	Ext.Msg
																			.alert(
																					'Error',
																					'Agreement job update failed.');
																}
															});
												}
											}
										},
										{
											xtype : 'button',
											id : 'agreementShowPdf',
											text : 'Display PDF',
											margin : '4px',
											handler : function() {
												var fileName = Ext.ComponentQuery
														.query('#agreementPartNumber2')[0]
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
																}).show();
											}
										} ]
							} ]
				});