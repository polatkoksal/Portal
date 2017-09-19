Ext.define('Portal.view.OtherJobService.OtherJobAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.otherjobaddform',
	url : 'createUpdateOtherJob',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'otherJobHiddenId',
		name : 'id'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Job Description',
		id : 'otherJobDesc',
		name : 'jobDesc',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textarea',
		fieldLabel : 'Description',
		id : 'otherJobDescription',
		name : 'description',
		margin : '4px',
		width : 500,
		height : 100
	}, {
		xtype : 'combobox',
		fieldLabel : 'Responsible',
		id : 'otherJobResponsible',
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
		xtype : 'button',
		id : 'otherJobAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('otherjobaddform')[0];
			var formTab = Ext.ComponentQuery.query('#otherJobAddForm')[0];
			var otherJobStore = Ext.data.StoreManager.get("OtherJobStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New other job added.');
						formTab.close();
						otherJobStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Other job add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'otherJobAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('otherjobaddform')[0];
			form.getForm().reset();
		}
	} ]
});