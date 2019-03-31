Ext
		.define(
				'Portal.view.MethodService.MethodGrid',
				{
					extend : 'Ext.grid.Panel',
					alias : 'widget.methodgrid',
					requires : [ 'Portal.view.MethodService.MethodUpdateForm' ],
					store : 'MethodStore',
					height : 500,
					columns : [ {
						header : 'Period',
						dataIndex : 'period',
						width : 80
					}, {
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
						header : 'Dpr Number',
						dataIndex : 'drpNumber',
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
						header : 'Machine',
						dataIndex : 'machineName',
						width : 80
					}, {
						header : 'Method Start',
						dataIndex : 'methodStart',
						width : 70
					}, {
						header : 'Method End',
						dataIndex : 'methodEnd',
						width : 70
					}, {
						header : 'Description',
						dataIndex : 'description',
						width : 70
					} ],
					listeners : {
						itemdblclick : function(thi, record, item, index, e,
								eOpts) {
							var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
							if (!tabPanel
									.getChildByElement('methodUpdateForm')) {
								tabPanel.add({
									xtype : 'methodupdateform',
									id : 'methodUpdateForm',
									title : 'Update Method',
									closable : true
								})
								Ext.ComponentQuery
										.query('#methodUpdateForm')[0]
										.loadRecord(record);
								var role = Ext.ComponentQuery
										.query('#loginFormHiddenRole')[0]
										.getValue();
								if (role == 'PM') {
									Ext.ComponentQuery
											.query('#methodAddSave2')[0]
											.setVisible(false);
								}
								var responsibleId = parseInt(Ext.ComponentQuery
										.query('#responsibleId')[0].getValue());
								if (!isNaN(responsibleId)) {
									var comboUserStore = Ext.data.StoreManager
											.get("ComboUserStore");
									var responsible = Ext.ComponentQuery
											.query('#methodResponsible2')[0];
									comboUserStore
											.load({
												callback : function() {
													responsible
															.setValue(responsibleId);
												}
											});
								}

								var machineId = parseInt(Ext.ComponentQuery
										.query('#machineId')[0].getValue());
								if (!isNaN(machineId)) {
									var machineStore = Ext.data.StoreManager
											.get("MachineStore");
									var machine = Ext.ComponentQuery
											.query('#methodMachine2')[0];
									machineStore.load({
										callback : function() {
											machine.setValue(machineId);
										}
									});
								}
							}
							tabPanel.setActiveTab("methodUpdateForm");
						}
					}
				});