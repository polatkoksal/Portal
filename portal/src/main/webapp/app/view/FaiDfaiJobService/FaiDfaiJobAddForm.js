Ext.define('Portal.view.FaiDfaiJobService.FaiDfaiJobAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.faidfaijobaddform',
	url : 'createUpdateFaiDfaiJob',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'faiDfaiHiddenId',
		name : 'id'
	}, {
		xtype : 'numberfield',
		fieldLabel : 'Period',
		id : 'faiDfaiPeriod',
		name : 'period',
		minValue : 1,
		maxValue : 52,
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Project Name',
		id : 'faiDfaiProjectName',
		name : 'projectName',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Category',
		id : 'faiDfaiProjectCategory',
		name : 'category',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Part Number',
		id : 'faiDfaiPartNumber',
		name : 'partNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Dpr Number',
		id : 'faiDfaiDrpNumber',
		name : 'drpNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'KH Code',
		id : 'faiDfaiKhCode',
		name : 'khCode',
		margin : '4px',
		width : 500
	}, {
		xtype : 'combobox',
		fieldLabel : 'Machine',
		id : 'faiDfaiMachine',
		name : 'machine',
		store : 'MachineStore',
		displayField : 'name',
		valueField : 'id',
		editable : false,
		allowBlank : false,
		emptyText : 'Select Machine',
		margin : '4px',
		width : 500
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'datefield',
			fieldLabel : 'Fixture Start',
			id : 'faiDfaiFixtureStart',
			name : 'fixtureStart',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'datefield',
			fieldLabel : 'Fixture End',
			id : 'faiDfaiFixtureEnd',
			name : 'fixtureEnd',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'numberfield',
			fieldLabel : '%',
			id : 'faiDfaiFixturePercentage',
			name : 'fixturePercentage',
			minValue : 0,
			maxValue : 100,
			margin : '4px',
			width : 83,
			labelWidth : 20
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'datefield',
			fieldLabel : 'Cam | Vericut Start',
			id : 'faiDfaiCatiaStart',
			name : 'catiaStart',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'datefield',
			fieldLabel : 'Cam | Vericut  End',
			id : 'faiDfaiCatiaEnd',
			name : 'catiaEnd',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'numberfield',
			fieldLabel : '%',
			id : 'faiDfaiCatiaPercentage',
			name : 'catiaPercentage',
			minValue : 0,
			maxValue : 100,
			margin : '4px',
			width : 83,
			labelWidth : 20
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'datefield',
			fieldLabel : 'Document Start',
			id : 'faiDfaiDocumentStart',
			name : 'documentStart',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'datefield',
			fieldLabel : 'Document End',
			id : 'faiDfaiDocumentEnd',
			name : 'documentEnd',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'numberfield',
			fieldLabel : '%',
			id : 'faiDfaiDocumentPercentage',
			name : 'documentPercentage',
			minValue : 0,
			maxValue : 100,
			margin : '4px',
			width : 83,
			labelWidth : 20
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'datefield',
			fieldLabel : 'Machine Start',
			id : 'faiDfaiBenchStart',
			name : 'benchStart',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'datefield',
			fieldLabel : 'Machine End',
			id : 'faiDfaiBenchEnd',
			name : 'benchEnd',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'numberfield',
			fieldLabel : '%',
			id : 'faiDfaiBenchPercentage',
			name : 'benchPercentage',
			minValue : 0,
			maxValue : 100,
			margin : '4px',
			width : 83,
			labelWidth : 20
		} ]
	}, {
		xtype : 'combobox',
		fieldLabel : 'Responsible',
		id : 'faiDfaiResponsible',
		name : 'responsible',
		store : 'ComboUserStore',
		displayField : 'nameSurname',
		valueField : 'id',
		editable : false,
		allowBlank : false,
		emptyText : 'Select Responsible',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textarea',
		fieldLabel : 'Description',
		id : 'faiDfaiDescription',
		name : 'description',
		margin : '4px',
		width : 500,
		height : 100
	}, {
		xtype : 'label',
		text : 'Raw Material Dimensions:',
		margin : '4px',
		style : 'font-size: 12px; font-weight: bold;'
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'numberfield',
			fieldLabel : 'Width',
			id : 'faiDfaiRawWidth',
			name : 'rawWidth',
			minValue : 0,
			margin : '4px',
			width : 160,
			labelWidth : 60
		}, {
			xtype : 'numberfield',
			fieldLabel : 'Length',
			id : 'faiDfaiRawLength',
			name : 'rawLength',
			minValue : 0,
			margin : '4px',
			width : 162,
			labelWidth : 62
		}, {
			xtype : 'numberfield',
			fieldLabel : 'Heigth',
			id : 'faiDfaiRawHeigth',
			name : 'rawHeigth',
			minValue : 0,
			margin : '4px',
			width : 160,
			labelWidth : 60
		} ]
	}, {
		xtype : 'button',
		id : 'faiDfaiAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('faidfaijobaddform')[0];
			var formTab = Ext.ComponentQuery.query('#faiDfaiJobAddForm')[0];
			var faiDfaiJobStore = Ext.data.StoreManager.get("FaiDfaiJobStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New Fai/DFai job added');
						formTab.close();
						faiDfaiJobStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Fai/DFai add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'faiDfaiAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('faidfaijobaddform')[0];
			form.getForm().reset();
		}
	} ]
});