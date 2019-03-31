Ext.define('Portal.view.AgreementService.AgreementGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.agreementgrid',
	requires : [ 'Portal.view.AgreementService.AgreementUpdateForm' ],
	store : 'AgreementStore',
	height : 500,
	columns : [ {
		header : 'Project Name',
		dataIndex : 'projectName',
		width : 80
	}, {
		header : 'Responsible',
		dataIndex : 'nameSurname',
		width : 80
	}, {
		header : 'Category',
		dataIndex : 'category',
		width : 80
	}, {
		header : 'Part Number',
		dataIndex : 'partNumber',
		width : 80
	}, {
		header : 'KH Code',
		dataIndex : 'khCode',
		width : 80
	}, {
		header : 'Seviye',
		dataIndex : 'level',
		width : 70
	}, {
		header : 'PO Date',
		dataIndex : 'poDate',
		width : 70
	}, {
		header : 'Degisiklik Durumu',
		dataIndex : 'changeStatus',
		width : 70
	}, {
		header : 'Description',
		dataIndex : 'description',
		width : 70
	} ],
	listeners : {
		itemdblclick : function(thi, record, item, index, e, eOpts) {
			var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
			if (!tabPanel.getChildByElement('agreementUpdateForm')) {
				tabPanel.add({
					xtype : 'agreementupdateform',
					id : 'agreementUpdateForm',
					title : 'Update Agreement Job',
					closable : true
				})
				Ext.ComponentQuery.query('#agreementUpdateForm')[0]
						.loadRecord(record);
				var role = Ext.ComponentQuery.query('#loginFormHiddenRole')[0]
						.getValue();
				var responsibleId = parseInt(Ext.ComponentQuery
						.query('#responsibleId')[0].getValue());
				if (!isNaN(responsibleId)) {
					var comboUserStore = Ext.data.StoreManager
							.get("ComboUserStore");
					var responsible = Ext.ComponentQuery
							.query('#agreementResponsible2')[0];
					comboUserStore.load({
						callback : function() {
							responsible.setValue(responsibleId);
						}
					});
				}
			}
			tabPanel.setActiveTab("agreementUpdateForm");
		}
	}
});