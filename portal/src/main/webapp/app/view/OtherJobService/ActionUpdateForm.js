Ext.define('Portal.view.OtherJobService.ActionUpdateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.actionupdateform',
	url : 'createUpdateAction',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'actionHiddenId2',
		name : 'id'
	}, {
		xtype : 'hiddenfield',
		id : 'jobHiddenId2',
		name : 'jobId'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Action Description',
		id : 'actionDesc2',
		name : 'actionDesc',
		margin : '4px',
		width : 500
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'datefield',
			fieldLabel : 'Action Start',
			id : 'actionStart2',
			name : 'actionStart',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'datefield',
			fieldLabel : 'Action End',
			id : 'actionEnd2',
			name : 'actionEnd',
			value : new Date(),
			format : 'd/m/Y',
			editable : false,
			margin : '4px',
			width : 200
		}, {
			xtype : 'numberfield',
			fieldLabel : '%',
			id : 'actionPercentage2',
			name : 'actionPercentage',
			minValue : 0,
			maxValue : 100,
			margin : '4px',
			width : 83,
			labelWidth : 20
		} ]
	}, {
		xtype : 'button',
		id : 'actionAddSave2',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('actionupdateform')[0];
			var formTab = Ext.ComponentQuery.query('#actionUpdateForm')[0];
			var store = Ext.data.StoreManager.get("ActionStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'Action updated.');
						store.load();
						formTab.close();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Action update failed.');
					}
				});
			}
		}
	} ]
});