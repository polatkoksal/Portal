Ext.define('Portal.view.MethodService.MethodAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.methodaddform',
	url : 'createUpdateFaiDfaiJob',
	method : 'POST',
	autoScroll : true,
	items : [ {
		xtype : 'hiddenfield',
		id : 'methodHiddenId',
		name : 'id'
	}, {
		xtype : 'hiddenfield',
		id : 'methodJobState',
		name : 'jobState',
		value : 'method'
	}, {
		xtype : 'numberfield',
		fieldLabel : 'Period',
		id : 'methodPeriod',
		name : 'period',
		minValue : 1,
		maxValue : 52,
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Project Name',
		id : 'methodProjectName',
		name : 'projectName',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Category',
		id : 'methodProjectCategory',
		name : 'category',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Part Number',
		id : 'methodPartNumber',
		name : 'partNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Dpr Number',
		id : 'methodDrpNumber',
		name : 'drpNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'KH Code',
		id : 'methodKhCode',
		name : 'khCode',
		margin : '4px',
		width : 500
	}, {
		xtype : 'combobox',
		fieldLabel : 'Machine',
		id : 'methodMachine',
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
			fieldLabel : 'Method Start',
			id : 'methodMethodStart',
			name : 'methodStart',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 246
		}, {
			xtype : 'datefield',
			fieldLabel : 'Method End',
			id : 'methodMethodEnd',
			name : 'methodEnd',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 246
		} ]
	}, {
		xtype : 'checkbox',
		id : 'methodDprData',
		name : 'dprData',
		fieldLabel : 'DPR Data',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodConfiguration',
		name : 'configuration',
		fieldLabel : 'Konfigurasyon',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodProductTree',
		name : 'productTree',
		fieldLabel : 'Urun Agaci',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodMp',
		name : 'mp',
		fieldLabel : 'MP',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodEngAndCncFolder',
		name : 'engAndCncFolder',
		fieldLabel : 'Muhendislik ve CNC Program Klasoru',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodFixture',
		name : 'fixture',
		fieldLabel : 'Fikstur',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodCatiaNcProduct',
		name : 'catiaNcProduct',
		fieldLabel : 'Catia NC_Product',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodCatiaCatProcess',
		name : 'catiaCatProcess',
		fieldLabel : 'Catia CatProcess',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodObfAndPmkf',
		name : 'obfAndPmkf',
		fieldLabel : 'OBF ve PMKF',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'checkbox',
		id : 'methodPartCard',
		name : 'partCard',
		fieldLabel : 'Parca Karti',
		margin : '10 10 10 10',
		labelWidth : '250px'
	}, {
		xtype : 'combobox',
		fieldLabel : 'Responsible',
		id : 'methodResponsible',
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
		id : 'methodDescription',
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
			id : 'methodRawWidth',
			name : 'rawWidth',
			minValue : 0,
			margin : '4px',
			width : 160,
			labelWidth : 60
		}, {
			xtype : 'numberfield',
			fieldLabel : 'Length',
			id : 'methodRawLength',
			name : 'rawLength',
			minValue : 0,
			margin : '4px',
			width : 162,
			labelWidth : 62
		}, {
			xtype : 'numberfield',
			fieldLabel : 'Heigth',
			id : 'methodRawHeigth',
			name : 'rawHeigth',
			minValue : 0,
			margin : '4px',
			width : 160,
			labelWidth : 60
		} ]
	}, {
		xtype : 'button',
		id : 'methodAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('methodaddform')[0];
			var formTab = Ext.ComponentQuery.query('#methodAddForm')[0];
			var methodStore = Ext.data.StoreManager.get("MethodStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New method job added');
						formTab.close();
						methodStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Method job add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'methodAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('methodaddform')[0];
			form.getForm().reset();
		}
	} ]
});