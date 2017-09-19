Ext.define('Portal.view.MachineToolService.MachineToolListGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.machinetoollistgrid',
	requires : [ 'Portal.view.MachineToolService.MachineToolListUpdateForm' ],
	store : 'MachineToolListStore',
	height : 150,
	autoScroll : true,
	columns : [ {
		header : 'Machine Tool List Name',
		dataIndex : 'name',
		width : 600
	} ],
	listeners : {
		itemdblclick : function(thi, record, item, index, e, eOpts) {
			var role = Ext.ComponentQuery.query('#loginFormHiddenRole')[0]
					.getValue();
			if (role == 'Admin') {
				var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
				if (!tabPanel.getChildByElement('machineToolListUpdateForm')) {
					tabPanel.add({
						xtype : 'machinetoollistupdateform',
						id : 'machineToolListUpdateForm',
						title : 'Update Machine Tool List',
						closable : true
					})
					Ext.ComponentQuery.query('#machineToolListUpdateForm')[0]
							.loadRecord(record);
				}
				tabPanel.setActiveTab("machineToolListUpdateForm");
			}
		},
		itemclick : function(thi, record, item, index, e, eOpts) {
			var machineToolStore = Ext.data.StoreManager
					.get("MachineToolStore");
			machineToolStore.getProxy().setExtraParam('machineToolListId',
					record.get('id'));
			machineToolStore.load();
		}

	}
});