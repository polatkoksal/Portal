Ext.define('Portal.view.OtherJobService.OtherJobPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.otherjobpanel',
	requires : [ 'Portal.view.OtherJobService.OtherJobFilterForm',
			'Portal.view.OtherJobService.OtherJobGrid',
			'Portal.view.OtherJobService.ActionGrid' ],
	autoScroll : true,
	items : [ {
		xtype : 'otherjobfilterform',
		id : 'otherJobFilterForm',
	}, {
		xtype : 'otherjobgrid',
		id : 'otherJobGrid',
	}, {
		xtype : 'actiongrid',
		id : 'actionGrid',
	} ]
});