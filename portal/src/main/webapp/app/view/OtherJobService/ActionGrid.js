Ext.define('Portal.view.OtherJobService.ActionGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.actiongrid',
	requires : [ 'Portal.view.OtherJobService.ActionUpdateForm' ],
	store : 'ActionStore',
	height : 200,
	autoScroll : true,
	columns : [ {
		header : 'Action Desc',
		dataIndex : 'actionDesc',
		width : 200
	}, {
		header : 'Action Start',
		dataIndex : 'actionStart',
		width : 70
	}, {
		header : 'Action End',
		dataIndex : 'actionEnd',
		width : 70
	}, {
		header : '%',
		dataIndex : 'actionPercentage',
		width : 30
	} ],
	listeners : {
		itemdblclick : function(thi, record, item, index, e, eOpts) {
			var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
			if (!tabPanel.getChildByElement('actionUpdateForm')) {
				tabPanel.add({
					xtype : 'actionupdateform',
					id : 'actionUpdateForm',
					title : 'Update Action',
					closable : true
				})
				Ext.ComponentQuery.query('#actionUpdateForm')[0]
						.loadRecord(record);
				var role = Ext.ComponentQuery.query('#loginFormHiddenRole')[0]
						.getValue();
				if (role != 'Admin') {
					Ext.ComponentQuery.query('#actionDesc2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#actionStart2')[0]
							.setReadOnly(true);
					Ext.ComponentQuery.query('#actionEnd2')[0]
							.setReadOnly(true);
				}
			}
			tabPanel.setActiveTab("actionUpdateForm");
		}
	}
});