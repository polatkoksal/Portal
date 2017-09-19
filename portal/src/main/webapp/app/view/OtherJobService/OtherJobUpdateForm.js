Ext.define('Portal.view.OtherJobService.OtherJobUpdateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.otherjobupdateform',
	requires : [ 'Portal.view.OtherJobService.ActionAddForm' ],
	url : 'createUpdateOtherJob',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'otherJobHiddenId2',
		name : 'id'
	}, {
		xtype : 'hiddenfield',
		id : 'otherJobresponsibleId',
		name : 'responsibleId'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Job Description',
		id : 'otherJobDesc2',
		name : 'jobDesc',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textarea',
		fieldLabel : 'Description',
		id : 'otherJobDescription2',
		name : 'description',
		margin : '4px',
		width : 500,
		height : 100
	}, {
		xtype : 'combobox',
		fieldLabel : 'Responsible',
		id : 'otherJobResponsible2',
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
		id : 'otherJobAddSave2',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('otherjobupdateform')[0];
			var formTab = Ext.ComponentQuery.query('#otherJobUpdateForm')[0];
			var otherJobStore = Ext.data.StoreManager.get("OtherJobStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'Other job updated.');
						formTab.close();
						otherJobStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Other job update failed.');
					}
				});
			}
		}
	} ]
});