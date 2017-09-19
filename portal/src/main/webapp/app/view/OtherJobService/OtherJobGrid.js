Ext.define('Portal.view.OtherJobService.OtherJobGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.otherjobgrid',
	requires : [ 'Portal.view.OtherJobService.OtherJobUpdateForm' ],
	store : 'OtherJobStore',
	height : 350,
	autoScroll : true,
	columns : [ {
		header : 'Job Description',
		dataIndex : 'jobDesc',
		width : 200
	}, {
		header : 'Description',
		dataIndex : 'description',
		width : 600
	} ],
	listeners : {
		itemdblclick : function(thi, record, item, index, e, eOpts) {
			var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
			if (!tabPanel.getChildByElement('otherJobUpdateForm')) {
				tabPanel.add({
					xtype : 'otherjobupdateform',
					id : 'otherJobUpdateForm',
					title : 'Update Other Job',
					closable : true
				})
				Ext.ComponentQuery.query('#otherJobUpdateForm')[0]
						.loadRecord(record);
				var role = Ext.ComponentQuery.query('#loginFormHiddenRole')[0]
						.getValue();
				if (role != 'Admin') {
					Ext.ComponentQuery.query('#otherJobDesc2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#otherJobResponsible2')[0]
							.setReadOnly(true);
				}
				var comboUserStore = Ext.data.StoreManager
						.get("ComboUserStore");
				var responsibleId = parseInt(Ext.ComponentQuery
						.query('#otherJobresponsibleId')[0].getValue());
				var responsible = Ext.ComponentQuery
						.query('#otherJobResponsible2')[0];
				comboUserStore.load({
					callback : function() {
						responsible.setValue(responsibleId);
					}
				});
			}
			tabPanel.setActiveTab("otherJobUpdateForm");
		},
		itemclick : function(thi, record, item, index, e, eOpts) {
			var actionStore = Ext.data.StoreManager.get("ActionStore");
			actionStore.getProxy().setExtraParam('jobId', record.get('id'));
			actionStore.load();
		}

	}
});