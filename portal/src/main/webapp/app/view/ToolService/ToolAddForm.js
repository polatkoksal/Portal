Ext.define('Portal.view.ToolService.ToolAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.tooladdform',
	url : 'createUpdateTool',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'toolHiddenId',
		name : 'id'
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Op',
			id : 'toolOp',
			name : 'toolOp',
			margin : '4px',
			width : 200
		}, {
			xtype : 'textfield',
			fieldLabel : 'Part Material',
			id : 'partMaterial',
			name : 'partMaterial',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Asm Code',
			id : 'asmCode',
			name : 'asmCode',
			allowBlank : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'textfield',
			fieldLabel : 'Asm Definition',
			id : 'asmDefinition',
			name : 'asmDefinition',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Holder Code',
			id : 'holderCode',
			name : 'holderCode',
			margin : '4px',
			width : 200
		}, {
			xtype : 'textfield',
			fieldLabel : 'Holder Definition',
			id : 'holderDefinition',
			name : 'holderDefinition',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Extension Code',
			id : 'extensionCode',
			name : 'extensionCode',
			margin : '4px',
			width : 200
		}, {
			xtype : 'textfield',
			fieldLabel : 'Extension Definition',
			id : 'extensionDefinition',
			name : 'extensionDefinition',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Shaft Code',
			id : 'shaftCode',
			name : 'shaftCode',
			margin : '4px',
			width : 200
		}, {
			xtype : 'textfield',
			fieldLabel : 'Shaft Definition',
			id : 'shaftDefinition',
			name : 'shaftDefinition',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Cutter Code',
			id : 'cutterCode',
			name : 'cutterCode',
			margin : '4px',
			width : 200
		}, {
			xtype : 'textfield',
			fieldLabel : 'Cutter Definition',
			id : 'cutterDefinition',
			name : 'cutterDefinition',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Insert Code',
			id : 'insertCode',
			name : 'insertCode',
			margin : '4px',
			width : 200
		}, {
			xtype : 'textfield',
			fieldLabel : 'Insert Definition',
			id : 'insertDefinition',
			name : 'insertDefinition',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'numberfield',
			fieldLabel : 'Function Length',
			id : 'functionLength',
			name : 'functionLength',
			margin : '4px',
			width : 200
		}, {
			xtype : 'numberfield',
			fieldLabel : 'Offset Length',
			id : 'offsetLength',
			name : 'offsetLength',
			margin : '4px',
			width : 500
		} ]
	}, {
		xtype : 'textarea',
		fieldLabel : 'Description',
		id : 'toolDescription',
		name : 'description',
		margin : '4px',
		width : 709,
		height : 100
	}, {
		xtype : 'button',
		id : 'toolAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('tooladdform')[0];
			var formTab = Ext.ComponentQuery.query('#toolAddForm')[0];
			var toolStore = Ext.data.StoreManager.get("ToolStore");
			var comboToolStore = Ext.data.StoreManager.get("ComboToolStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New tool added');
						formTab.close();
						toolStore.load();
						comboToolStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Tool add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'toolAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('tooladdform')[0];
			form.getForm().reset();
		}
	} ]
});