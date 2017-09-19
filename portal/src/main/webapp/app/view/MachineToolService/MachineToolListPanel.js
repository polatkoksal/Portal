Ext.define('Portal.view.MachineToolService.MachineToolListPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.machinetoollistpanel',
	requires : [ 'Portal.view.MachineToolService.MachineToolListSearchForm',
			'Portal.view.MachineToolService.MachineToolListFilterForm',
			'Portal.view.MachineToolService.MachineToolListGrid',
			'Portal.view.MachineToolService.MachineToolGrid' ],
	autoScroll : true,
	items : [ {
		xtype : 'machinetoollistsearchform',
		id : 'machineToolListSearchForm',
	}, {
		xtype : 'machinetoollistfilterform',
		id : 'machineToolListFilterForm',
	}, {
		xtype : 'machinetoollistgrid',
		id : 'machineToolListGrid',
	}, {
		xtype : 'machinetoolgrid',
		id : 'machineToolGrid',
	} ]
});