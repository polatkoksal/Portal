Ext.define('Portal.view.JobRequestService.JobRequestAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.jobrequestaddform',
	url : 'createUpdateJobRequest',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'jobRequestHiddenId',
		name : 'id'
	}, {
		xtype : 'datefield',
		fieldLabel : 'Request Date',
		id : 'jobRequestDate',
		name : 'requestDate',
		value : new Date(),
		format : 'd/m/Y',
		editable : false,
		margin : '4px',
		width : 500
	}, {
		xtype : 'datefield',
		fieldLabel : 'Request Completion Date',
		id : 'jobRequestCompletionDate',
		name : 'requestCompletionDate',
		value : new Date(),
		format : 'd/m/Y',
		editable : false,
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Project Name',
		id : 'jobRequestProjectName',
		name : 'projectName',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Category',
		id : 'jobRequestProjectCategory',
		name : 'category',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Part Number',
		id : 'jobRequestPartNumber',
		name : 'partNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Dpr Number',
		id : 'jobRequestDrpNumber',
		name : 'drpNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'KH Code',
		id : 'jobRequestKhCode',
		name : 'khCode',
		margin : '4px',
		width : 500
	}, {
		xtype : 'combobox',
		fieldLabel : 'Machine',
		id : 'jobRequestMachineCode',
		name : 'machineCode',
		store : 'MachineStore',
		displayField : 'name',
		valueField : 'id',
		editable : false,
		allowBlank : false,
		emptyText : 'Select Machine',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textarea',
		fieldLabel : 'Description',
		id : 'jobRequestDescription',
		name : 'description',
		margin : '4px',
		width : 500,
		height : 100
	}, {
		xtype : 'button',
		id : 'jobRequestAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('jobrequestaddform')[0];
			var formTab = Ext.ComponentQuery.query('#jobRequestAddForm')[0];
			var jobRequestStore = Ext.data.StoreManager.get("JobRequestStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New job request is added');
						formTab.close();
						jobRequestStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Job request add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'jobRequestAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('jobrequestaddform')[0];
			form.getForm().reset();
		}
	} ]
});