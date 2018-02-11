Ext
		.define(
				'Portal.view.FaiDfaiJobService.FaiDfaiJobGrid',
				{
					extend : 'Ext.grid.Panel',
					alias : 'widget.faidfaijobgrid',
					requires : [ 'Portal.view.FaiDfaiJobService.FaiDfaiJobUpdateForm' ],
					store : 'FaiDfaiJobStore',
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
						header : 'Fixture Start',
						dataIndex : 'fixtureStart',
						width : 70
					}, {
						header : 'Fixture End',
						dataIndex : 'fixtureEnd',
						width : 70
					}, {
						header : '%',
						dataIndex : 'fixturePercentage',
						width : 30
					}, {
						header : 'Cam | Vericut Start',
						dataIndex : 'catiaStart',
						width : 70
					}, {
						header : 'Cam | Vericut End',
						dataIndex : 'catiaEnd',
						width : 70
					}, {
						header : '%',
						dataIndex : 'catiaPercentage',
						width : 30
					}, {
						header : 'Document Start',
						dataIndex : 'documentStart',
						width : 70
					}, {
						header : 'Document End',
						dataIndex : 'documentEnd',
						width : 70
					}, {
						header : '%',
						dataIndex : 'documentPercentage',
						width : 30
					}, {
						header : 'Machine Start',
						dataIndex : 'benchStart',
						width : 70
					}, {
						header : 'Machine End',
						dataIndex : 'benchEnd',
						width : 70
					}, {
						header : '%',
						dataIndex : 'benchPercentage',
						width : 30
					}, {
						header : 'Responsible',
						dataIndex : 'nameSurname',
						width : 80
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
									.getChildByElement('faiDfaiJobUpdateForm')) {
								tabPanel.add({
									xtype : 'faidfaijobupdateform',
									id : 'faiDfaiJobUpdateForm',
									title : 'Update Fai/DFai Job',
									closable : true
								})
								Ext.ComponentQuery
										.query('#faiDfaiJobUpdateForm')[0]
										.loadRecord(record);
								var img = Ext.ComponentQuery
										.query('#faiDfaiUpdateImage')[0];
								var imgName = record.get('partNumber');
								img.setSrc('getImage?imgName=' + imgName);
								var role = Ext.ComponentQuery
										.query('#loginFormHiddenRole')[0]
										.getValue();
								if (role != 'Admin') {
									Ext.ComponentQuery
											.query('#faiDfaiProjectName2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiProjectCategory2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery.query('#faiDfaiPeriod2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery.query('#faiDfaiKhCode2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiPartNumber2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiDrpNumber2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiFixtureStart2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiFixtureEnd2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiCatiaStart2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiCatiaEnd2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiDocumentStart2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiDocumentEnd2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiBenchStart2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiBenchEnd2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiResponsible2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiMachine2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiRawWidth2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiRawLength2')[0]
											.setReadOnly(true);
									Ext.ComponentQuery
											.query('#faiDfaiRawHeigth2')[0]
											.setReadOnly(true);
								}
								if (role == 'PM') {
									Ext.ComponentQuery
											.query('#faiDfaiAddSave2')[0]
											.setVisible(false);
									Ext.ComponentQuery
											.query('#faiControlListOpen1')[0]
											.setVisible(false);
									Ext.ComponentQuery
											.query('#faiControlListOpen2')[0]
											.setVisible(false);
									Ext.ComponentQuery
											.query('#faiControlListOpen3')[0]
											.setVisible(false);
									Ext.ComponentQuery
											.query('#faiControlListOpen4')[0]
											.setVisible(false);
								}

								var responsibleId = parseInt(Ext.ComponentQuery
										.query('#responsibleId')[0].getValue());
								if (!isNaN(responsibleId)) {
									var comboUserStore = Ext.data.StoreManager
											.get("ComboUserStore");
									var responsible = Ext.ComponentQuery
											.query('#faiDfaiResponsible2')[0];
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
											.query('#faiDfaiMachine2')[0];
									machineStore.load({
										callback : function() {
											machine.setValue(machineId);
										}
									});
								}
							}
							tabPanel.setActiveTab("faiDfaiJobUpdateForm");
						}
					}
				});