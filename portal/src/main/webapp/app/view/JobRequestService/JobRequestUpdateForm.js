Ext.define('Portal.view.JobRequestService.JobRequestUpdateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.jobrequestupdateform',
	url : 'createUpdateJobRequest',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'jobRequestHiddenId2',
		name : 'id'
	}, {
		xtype : 'numberfield',
		fieldLabel : 'Period',
		id : 'jobRequestPeriod2',
		name : 'period',
		minValue : 1,
		maxValue : 52,
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Project Name',
		id : 'jobRequestProjectName2',
		name : 'projectName',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Category',
		id : 'jobRequestProjectCategory2',
		name : 'category',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Part Number',
		id : 'jobRequestPartNumber2',
		name : 'partNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Dpr Number',
		id : 'jobRequestDrpNumber2',
		name : 'drpNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'KH Code',
		id : 'jobRequestKhCode2',
		name : 'khCode',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Machine Code',
		id : 'jobRequestMachineCode2',
		name : 'machineCode',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textarea',
		fieldLabel : 'Description',
		id : 'jobRequestDescription2',
		name : 'description',
		margin : '4px',
		width : 500,
		height : 100
	}, {
		xtype : 'button',
		id : 'jobRequestAddSave2',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('jobrequestupdateform')[0];
			var formTab = Ext.ComponentQuery.query('#jobRequestUpdateForm')[0];
			var jobRequestStore = Ext.data.StoreManager.get("JobRequestStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'Job request is updated');
						formTab.close();
						jobRequestStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Job request update failed.');
					}
				});
			}
		}
	} ]
});