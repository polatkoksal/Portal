Ext
		.define(
				'Portal.view.JobRequestService.JobRequestGrid',
				{
					extend : 'Ext.grid.Panel',
					alias : 'widget.jobrequestgrid',
					requires : [ 'Portal.view.JobRequestService.JobRequestUpdateForm' ],
					store : 'JobRequestStore',
					height : 500,
					columns : [ {
						header : 'Request Date',
						dataIndex : 'requestDate',
						width : 100
					}, {
						header : 'Request Completion Date',
						dataIndex : 'requestCompletionDate',
						width : 150
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
						header : 'Machine',
						dataIndex : 'machineName',
						width : 120
					}, {
						header : 'Requested By',
						dataIndex : 'nameSurname',
						width : 120
					}, {
						header : 'Description',
						dataIndex : 'description',
						width : 120
					} ],
					listeners : {
						itemdblclick : function(thi, record, item, index, e,
								eOpts) {
							var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
							if (!tabPanel
									.getChildByElement('jobRequestUpdateForm')) {
								tabPanel.add({
									xtype : 'jobrequestupdateform',
									id : 'jobRequestUpdateForm',
									title : 'Update Job Request',
									closable : true
								})
								Ext.ComponentQuery
										.query('#jobRequestUpdateForm')[0]
										.loadRecord(record);
								var img = Ext.ComponentQuery
										.query('#jobRequestUpdateImage')[0];
								var imgName = record.get('partNumber');
								img.setSrc('getImage?imgName=' + imgName);
								var machineId = parseInt(Ext.ComponentQuery
										.query('#jobRequestMachineId2')[0]
										.getValue());
								if (!isNaN(machineId)) {
									var machineStore = Ext.data.StoreManager
											.get("MachineStore");
									var machine = Ext.ComponentQuery
											.query('#jobRequestMachineCode2')[0];
									machineStore.load({
										callback : function() {
											machine.setValue(machineId);
										}
									});
								}
							}
							tabPanel.setActiveTab("jobRequestUpdateForm");
						}
					}
				});