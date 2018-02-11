Ext
		.define(
				'Portal.view.FaiDfaiJobService.FaiDfaiJobUpdateForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.faidfaijobupdateform',
					requires : [ 'Portal.view.FaiDfaiJobService.FaiControlListForm' ],
					url : 'createUpdateFaiDfaiJob',
					method : 'POST',
					items : [
							{
								xtype : 'hiddenfield',
								id : 'faiDfaiHiddenId2',
								name : 'id'
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
								xtype : 'container',
								layout : 'hbox',
								items : [
										{
											xtype : 'container',
											layout : 'vbox',
											items : [
													{
														xtype : 'numberfield',
														fieldLabel : 'Period',
														id : 'faiDfaiPeriod2',
														name : 'period',
														minValue : 1,
														maxValue : 52,
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Project Name',
														id : 'faiDfaiProjectName2',
														name : 'projectName',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Category',
														id : 'faiDfaiProjectCategory2',
														name : 'category',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Part Number',
														id : 'faiDfaiPartNumber2',
														name : 'partNumber',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Drp Number',
														id : 'faiDfaiDrpNumber2',
														name : 'drpNumber',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'textfield',
														fieldLabel : 'KH Code',
														id : 'faiDfaiKhCode2',
														name : 'khCode',
														margin : '4px',
														width : 500
													},
													{
														xtype : 'combobox',
														fieldLabel : 'Machine',
														id : 'faiDfaiMachine2',
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
														items : [
																{
																	xtype : 'datefield',
																	fieldLabel : 'Fixture Start',
																	id : 'faiDfaiFixtureStart2',
																	name : 'fixtureStart',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'datefield',
																	fieldLabel : 'Fixture End',
																	id : 'faiDfaiFixtureEnd2',
																	name : 'fixtureEnd',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'numberfield',
																	fieldLabel : '%',
																	id : 'faiDfaiFixturePercentage2',
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
														items : [
																{
																	xtype : 'datefield',
																	fieldLabel : 'Cam | Vericut Start',
																	id : 'faiDfaiCatiaStart2',
																	name : 'catiaStart',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'datefield',
																	fieldLabel : 'Cam | Vericut End',
																	id : 'faiDfaiCatiaEnd2',
																	name : 'catiaEnd',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'numberfield',
																	fieldLabel : '%',
																	id : 'faiDfaiCatiaPercentage2',
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
														items : [
																{
																	xtype : 'datefield',
																	fieldLabel : 'Document Start',
																	id : 'faiDfaiDocumentStart2',
																	name : 'documentStart',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'datefield',
																	fieldLabel : 'Document End',
																	id : 'faiDfaiDocumentEnd2',
																	name : 'documentEnd',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'numberfield',
																	fieldLabel : '%',
																	id : 'faiDfaiDocumentPercentage2',
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
														items : [
																{
																	xtype : 'datefield',
																	fieldLabel : 'Machine Start',
																	id : 'faiDfaiBenchStart2',
																	name : 'benchStart',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'datefield',
																	fieldLabel : 'Machine End',
																	id : 'faiDfaiBenchEnd2',
																	name : 'benchEnd',
																	value : new Date(),
																	editable : false,
																	format : 'd/m/Y',
																	margin : '4px',
																	width : 200
																},
																{
																	xtype : 'numberfield',
																	fieldLabel : '%',
																	id : 'faiDfaiBenchPercentage2',
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
														id : 'faiDfaiResponsible2',
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
														id : 'faiDfaiDescription2',
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
														items : [
																{
																	xtype : 'numberfield',
																	fieldLabel : 'Width',
																	id : 'faiDfaiRawWidth2',
																	name : 'rawWidth',
																	minValue : 0,
																	margin : '4px',
																	width : 160,
																	labelWidth : 60
																},
																{
																	xtype : 'numberfield',
																	fieldLabel : 'Length',
																	id : 'faiDfaiRawLength2',
																	name : 'rawLength',
																	minValue : 0,
																	margin : '4px',
																	width : 162,
																	labelWidth : 62
																},
																{
																	xtype : 'numberfield',
																	fieldLabel : 'Heigth',
																	id : 'faiDfaiRawHeigth2',
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
																	id : 'faiDfaiAddSave2',
																	text : 'Save',
																	margin : '4px',
																	handler : function() {
																		var form = Ext.ComponentQuery
																				.query('faidfaijobupdateform')[0];
																		var formTab = Ext.ComponentQuery
																				.query('#faiDfaiJobUpdateForm')[0];
																		var faiDfaiJobStore = Ext.data.StoreManager
																				.get("FaiDfaiJobStore");
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
																											'Fai/DFai job updated');
																							formTab
																									.close();
																							faiDfaiJobStore
																									.load();
																						},
																						failure : function(
																								form,
																								action) {
																							Ext.Msg
																									.alert(
																											'Error',
																											'Fai/DFai update failed.');
																						}
																					});
																		}
																	}
																},
																{
																	xtype : 'button',
																	id : 'faiDfaiJobShowPdf',
																	text : 'Display PDF',
																	margin : '4px',
																	handler : function() {
																		var fileName = Ext.ComponentQuery
																				.query('#faiDfaiPartNumber2')[0]
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
																},
																{
																	xtype : 'button',
																	id : 'faiControlListOpen1',
																	text : 'FAI Control List 1',
																	margin : '4px',
																	handler : function() {
																		var tabPanel = Ext.ComponentQuery
																				.query('tabpanel')[0];
																		if (!tabPanel
																				.getChildByElement('faiControlListForm')) {
																			tabPanel
																					.add({
																						xtype : 'faicontrollistform',
																						id : 'faiControlListForm',
																						title : 'FAI Control List 1',
																						closable : true
																					})
																			var role = Ext.ComponentQuery
																					.query('#loginFormHiddenRole')[0]
																					.getValue();
																			if (role != 'Admin') {
																				Ext.ComponentQuery
																						.query('#faiCtrlSetupApResp')[0]
																						.setReadOnly(true);
																			}
																			var faiJobId = Ext.ComponentQuery
																					.query('#faiDfaiHiddenId2')[0]
																					.getValue();
																			var store = Ext.data.StoreManager
																					.get("FaiControlListStore");
																			store
																					.getProxy()
																					.setExtraParam(
																							'faiJobId',
																							faiJobId);
																			store
																					.getProxy()
																					.setExtraParam(
																							'listNumber',
																							1);
																			store
																					.load({
																						callback : function() {
																							var record = store
																									.findRecord(
																											'faiJobId',
																											faiJobId);
																							if (record != null) {
																								Ext.ComponentQuery
																										.query('#faiControlListForm')[0]
																										.loadRecord(record);
																							}
																						}
																					});
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenFaiJobId')[0]
																					.setValue(faiJobId);
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenListNumber')[0]
																					.setValue(1);
																		}
																		tabPanel
																				.setActiveTab("faiControlListForm");
																	}
																},
																{
																	xtype : 'button',
																	id : 'faiControlListOpen2',
																	text : 'FAI Control List 2',
																	margin : '4px',
																	handler : function() {
																		var tabPanel = Ext.ComponentQuery
																				.query('tabpanel')[0];
																		if (!tabPanel
																				.getChildByElement('faiControlListForm')) {
																			tabPanel
																					.add({
																						xtype : 'faicontrollistform',
																						id : 'faiControlListForm',
																						title : 'FAI Control List 2',
																						closable : true
																					})
																			var role = Ext.ComponentQuery
																					.query('#loginFormHiddenRole')[0]
																					.getValue();
																			if (role != 'Admin') {
																				Ext.ComponentQuery
																						.query('#faiCtrlSetupApResp')[0]
																						.setReadOnly(true);
																			}
																			var faiJobId = Ext.ComponentQuery
																					.query('#faiDfaiHiddenId2')[0]
																					.getValue();
																			var store = Ext.data.StoreManager
																					.get("FaiControlListStore");
																			store
																					.getProxy()
																					.setExtraParam(
																							'faiJobId',
																							faiJobId);
																			store
																					.getProxy()
																					.setExtraParam(
																							'listNumber',
																							2);
																			store
																					.load({
																						callback : function() {
																							var record = store
																									.findRecord(
																											'faiJobId',
																											faiJobId);
																							if (record != null) {
																								Ext.ComponentQuery
																										.query('#faiControlListForm')[0]
																										.loadRecord(record);
																							}
																						}
																					});
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenFaiJobId')[0]
																					.setValue(faiJobId);
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenListNumber')[0]
																					.setValue(2);
																		}
																		tabPanel
																				.setActiveTab("faiControlListForm");
																	}
																},
																{
																	xtype : 'button',
																	id : 'faiControlListOpen3',
																	text : 'FAI Control List 3',
																	margin : '4px',
																	handler : function() {
																		var tabPanel = Ext.ComponentQuery
																				.query('tabpanel')[0];
																		if (!tabPanel
																				.getChildByElement('faiControlListForm')) {
																			tabPanel
																					.add({
																						xtype : 'faicontrollistform',
																						id : 'faiControlListForm',
																						title : 'FAI Control List 3',
																						closable : true
																					})
																			var role = Ext.ComponentQuery
																					.query('#loginFormHiddenRole')[0]
																					.getValue();
																			if (role != 'Admin') {
																				Ext.ComponentQuery
																						.query('#faiCtrlSetupApResp')[0]
																						.setReadOnly(true);
																			}
																			var faiJobId = Ext.ComponentQuery
																					.query('#faiDfaiHiddenId2')[0]
																					.getValue();
																			var store = Ext.data.StoreManager
																					.get("FaiControlListStore");
																			store
																					.getProxy()
																					.setExtraParam(
																							'faiJobId',
																							faiJobId);
																			store
																					.getProxy()
																					.setExtraParam(
																							'listNumber',
																							3);
																			store
																					.load({
																						callback : function() {
																							var record = store
																									.findRecord(
																											'faiJobId',
																											faiJobId);
																							if (record != null) {
																								Ext.ComponentQuery
																										.query('#faiControlListForm')[0]
																										.loadRecord(record);
																							}
																						}
																					});
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenFaiJobId')[0]
																					.setValue(faiJobId);
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenListNumber')[0]
																					.setValue(3);
																		}
																		tabPanel
																				.setActiveTab("faiControlListForm");
																	}
																},
																{
																	xtype : 'button',
																	id : 'faiControlListOpen4',
																	text : 'FAI Control List 4',
																	margin : '4px',
																	handler : function() {
																		var tabPanel = Ext.ComponentQuery
																				.query('tabpanel')[0];
																		if (!tabPanel
																				.getChildByElement('faiControlListForm')) {
																			tabPanel
																					.add({
																						xtype : 'faicontrollistform',
																						id : 'faiControlListForm',
																						title : 'FAI Control List 4',
																						closable : true
																					})
																			var role = Ext.ComponentQuery
																					.query('#loginFormHiddenRole')[0]
																					.getValue();
																			if (role != 'Admin') {
																				Ext.ComponentQuery
																						.query('#faiCtrlSetupApResp')[0]
																						.setReadOnly(true);
																			}
																			var faiJobId = Ext.ComponentQuery
																					.query('#faiDfaiHiddenId2')[0]
																					.getValue();
																			var store = Ext.data.StoreManager
																					.get("FaiControlListStore");
																			store
																					.getProxy()
																					.setExtraParam(
																							'faiJobId',
																							faiJobId);
																			store
																					.getProxy()
																					.setExtraParam(
																							'listNumber',
																							4);
																			store
																					.load({
																						callback : function() {
																							var record = store
																									.findRecord(
																											'faiJobId',
																											faiJobId);
																							if (record != null) {
																								Ext.ComponentQuery
																										.query('#faiControlListForm')[0]
																										.loadRecord(record);
																							}
																						}
																					});
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenFaiJobId')[0]
																					.setValue(faiJobId);
																			Ext.ComponentQuery
																					.query('#faiCtrlHiddenListNumber')[0]
																					.setValue(4);
																		}
																		tabPanel
																				.setActiveTab("faiControlListForm");
																	}
																} ]
													} ]
										}, {
											xtype : 'image',
											id : 'faiDfaiUpdateImage',
											margin : '4 0 0 50',
											height : 400,
											width : 600
										} ]
							} ]
				});