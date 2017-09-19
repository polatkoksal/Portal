Ext.define('Portal.view.JobRequestService.JobRequestGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.jobrequestgrid',
	requires : [ 'Portal.view.JobRequestService.JobRequestUpdateForm' ],
	store : 'JobRequestStore',
	height : 500,
	columns : [ {
		header : 'Period',
		dataIndex : 'period',
		width : 120
	}, {
		header : 'Project Name',
		dataIndex : 'projectName',
		width : 120
	}, {
		header : 'Category',
		dataIndex : 'category',
		width : 120
	}, {
		header : 'Dpr Number',
		dataIndex : 'drpNumber',
		width : 120
	}, {
		header : 'Part Number',
		dataIndex : 'partNumber',
		width : 120
	}, {
		header : 'KH Code',
		dataIndex : 'khCode',
		width : 120
	}, {
		header : 'Machine Code',
		dataIndex : 'machineCode',
		width : 120
	}, {
		header : 'Responsible',
		dataIndex : 'nameSurname',
		width : 120
	}, {
		header : 'Description',
		dataIndex : 'description',
		width : 120
	} ],
	listeners : {
		itemdblclick : function(thi, record, item, index, e, eOpts) {
			var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
			if (!tabPanel.getChildByElement('jobRequestUpdateForm')) {
				tabPanel.add({
					xtype : 'jobrequestupdateform',
					id : 'jobRequestUpdateForm',
					title : 'Update Job Request',
					closable : true
				})
				Ext.ComponentQuery.query('#jobRequestUpdateForm')[0]
						.loadRecord(record);
			}
			tabPanel.setActiveTab("jobRequestUpdateForm");
		}
	}
});