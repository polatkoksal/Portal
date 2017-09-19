Ext
		.define(
				'Portal.view.MachineService.MachineGrid',
				{
					extend : 'Ext.grid.Panel',
					alias : 'widget.machinegrid',
					store : 'MachineStore',
					height : 400,
					autoScroll : true,
					columns : [ {
						header : 'Machine Name',
						dataIndex : 'name',
						width : 600
					},{
						header : 'Machine Type',
						dataIndex : 'type',
						width : 200
					} ],
					listeners : {
						itemclick : function(thi, record, item, index, e, eOpts) {
							Ext.ComponentQuery.query('machineupdateform')[0]
									.loadRecord(record);
						}
					}
				});