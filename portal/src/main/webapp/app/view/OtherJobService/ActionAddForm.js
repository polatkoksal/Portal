Ext.define('Portal.view.OtherJobService.ActionAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.actionaddform',
	url : 'createUpdateAction',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'actionHiddenId',
		name : 'id'
	}, {
		xtype : 'hiddenfield',
		id : 'jobHiddenId',
		name : 'jobId'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Action Description',
		id : 'actionDesc',
		name : 'actionDesc',
		margin : '4px',
		width : 500
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'datefield',
			fieldLabel : 'Action Start',
			id : 'actionStart',
			name : 'actionStart',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'datefield',
			fieldLabel : 'Action End',
			id : 'actionEnd',
			name : 'actionEnd',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'numberfield',
			fieldLabel : '%',
			id : 'actionPercentage',
			name : 'actionPercentage',
			minValue : 0,
			maxValue : 100,
			margin : '4px',
			width : 83,
			labelWidth : 20
		} ]
	}, {
		xtype : 'button',
		id : 'actionAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('actionaddform')[0];
			var formTab = Ext.ComponentQuery.query('#actionAddForm')[0];
			var store = Ext.data.StoreManager.get("ActionStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New action added.');
						store.load();
						formTab.close();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Action add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'actionAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('actionaddform')[0];
			form.getForm().reset();
		}
	} ]
});