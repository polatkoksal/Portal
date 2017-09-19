Ext.define('Portal.view.DocumentService.DocumentAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.documentaddform',
	url : 'createUpdateDocument',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'documentHiddenId',
		name : 'id'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Document Number',
		id : 'documentNumber',
		name : 'docNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Document Name',
		id : 'documentName',
		name : 'docName',
		allowBlank : false,
		margin : '4px',
		width : 500
	}, {
		xtype : 'combobox',
		fieldLabel : 'Document Type',
		id : 'documentType',
		name : 'docType',
		store : [ 'TRN', 'Instruction', 'LLD', 'Technical' ],
		editable : false,
		value : 'TRN',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textarea',
		fieldLabel : 'Keywords',
		id : 'documentKeyWord',
		name : 'keyWord',
		margin : '4px',
		width : 500,
		height : 100
	}, {
		xtype : 'button',
		id : 'documentAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('documentaddform')[0];
			var formTab = Ext.ComponentQuery.query('#documentAddForm')[0];
			var documentStore = Ext.data.StoreManager.get("DocumentStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New document added');
						formTab.close();
						documentStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Document add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'documentAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('documentaddform')[0];
			form.getForm().reset();
		}
	} ]
});