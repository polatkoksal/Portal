Ext.define('Portal.view.MachineService.MachinePanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.machinepanel',
	requires : [ 'Portal.view.MachineService.MachineFilterForm',
			'Portal.view.MachineService.MachineGrid',
			'Portal.view.MachineService.MachineUpdateForm' ],
	items : [ {
		xtype : 'machinefilterform',
		id : 'machineFilterForm',
	}, {
		xtype : 'machinegrid',
		id : 'machineGrid',
	}, {
		xtype : 'machineupdateform',
		id : 'machineUpdateForm',
	} ]
});