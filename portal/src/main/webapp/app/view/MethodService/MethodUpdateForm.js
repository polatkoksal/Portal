Ext
		.define(
				'Portal.view.MethodService.MethodUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.methodupdateform',
					url : 'createUpdateFaiDfaiJob',
					method : 'POST',
					autoScroll : true,
					items : [
							{
								xtype : 'hiddenfield',
								id : 'methodHiddenId2',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'methodJobState2',
								name : 'jobState',
								value : 'method'
							},
							{
								xtype : 'hiddenfield',
								id : 'responsibleId',
								name : 'responsibleId'
							},
							{
								xtype : 'hiddenfield',
								id : 'machineId',
								name : 'machineId'
							},
							{
								xtype : 'numberfield',
								fieldLabel : 'Period',
								id : 'methodPeriod2',
								name : 'period',
								minValue : 1,
								maxValue : 52,
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Project Name',
								id : 'methodProjectName2',
								name : 'projectName',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Category',
								id : 'methodProjectCategory2',
								name : 'category',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Part Number',
								id : 'methodPartNumber2',
								name : 'partNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'Drp Number',
								id : 'methodDrpNumber2',
								name : 'drpNumber',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'textfield',
								fieldLabel : 'KH Code',
								id : 'methodKhCode2',
								name : 'khCode',
								margin : '4px',
								width : 500
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Machine',
								id : 'methodMachine2',
								name : 'machine',
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
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'datefield',
									fieldLabel : 'Method Start',
									id : 'methodMethodStart2',
									name : 'methodStart',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 246
								}, {
									xtype : 'datefield',
									fieldLabel : 'Method End',
									id : 'methodMethodEnd2',
									name : 'methodEnd',
									value : new Date(),
									editable : false,
									format : 'd/m/Y',
									margin : '4px',
									width : 246
								} ]
							},
							{
								xtype : 'checkbox',
								id : 'methodDprData2',
								name : 'dprData',
								fieldLabel : 'DPR Data',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodConfiguration2',
								name : 'configuration',
								fieldLabel : 'Konfigurasyon',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodProductTree2',
								name : 'productTree',
								fieldLabel : 'Urun Agaci',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodMp2',
								name : 'mp',
								fieldLabel : 'MP',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodEngAndCncFolder2',
								name : 'engAndCncFolder',
								fieldLabel : 'Muhendislik ve CNC Program Klasoru',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodFixture2',
								name : 'fixture',
								fieldLabel : 'Fikstur',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodCatiaNcProduct2',
								name : 'catiaNcProduct',
								fieldLabel : 'Catia NC_Product',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodCatiaCatProcess2',
								name : 'catiaCatProcess',
								fieldLabel : 'Catia CatProcess',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodObfAndPmkf2',
								name : 'obfAndPmkf',
								fieldLabel : 'OBF ve PMKF',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'checkbox',
								id : 'methodPartCard2',
								name : 'partCard',
								fieldLabel : 'Parca Karti',
								margin : '10 10 10 10',
								labelWidth : '250px'
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Responsible',
								id : 'methodResponsible2',
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
								id : 'methodDescription2',
								name : 'description',
								margin : '4px',
								width : 500,
								height : 100
							},
							{
								xtype : 'label',
								text : 'Raw Material Dimensions (Inch):',
								margin : '4px',
								style : 'font-size: 12px; font-weight: bold;'
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'numberfield',
									fieldLabel : 'Width',
									id : 'methodRawWidth2',
									name : 'rawWidth',
									minValue : 0,
									margin : '4px',
									width : 160,
									labelWidth : 60
								}, {
									xtype : 'numberfield',
									fieldLabel : 'Length',
									id : 'methodRawLength2',
									name : 'rawLength',
									minValue : 0,
									margin : '4px',
									width : 162,
									labelWidth : 62
								}, {
									xtype : 'numberfield',
									fieldLabel : 'Heigth',
									id : 'methodRawHeigth2',
									name : 'rawHeigth',
									minValue : 0,
									margin : '4px',
									width : 160,
									labelWidth : 60
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [
										{
											xtype : 'button',
											id : 'methodAddSave2',
											text : 'Save',
											margin : '4px',
											handler : function() {
												var form = Ext.ComponentQuery
														.query('methodupdateform')[0];
												var formTab = Ext.ComponentQuery
														.query('#methodUpdateForm')[0];
												var methodStore = Ext.data.StoreManager
														.get("MethodStore");
												var agreementStore = Ext.data.StoreManager
														.get("AgreementStore");
												var jobRequestStore = Ext.data.StoreManager
														.get("JobRequestStore");
												if (form.isValid()) {
													form
															.submit({
																success : function(
																		form,
																		action) {
																	Ext.Msg
																			.alert(
																					'Info',
																					'Method job updated');
																	formTab
																			.close();
																	methodStore
																			.load();
																	agreementStore
																			.load();
																	jobRequestStore
																			.load();
																},
																failure : function(
																		form,
																		action) {
																	Ext.Msg
																			.alert(
																					'Error',
																					'Method job update failed.');
																}
															});
												}
											}
										},
										{
											xtype : 'button',
											id : 'methodShowPdf',
											text : 'Display PDF',
											margin : '4px',
											handler : function() {
												var fileName = Ext.ComponentQuery
														.query('#methodPartNumber2')[0]
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