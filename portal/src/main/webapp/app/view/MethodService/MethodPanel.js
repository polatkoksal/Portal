Ext.define('Portal.view.MethodService.MethodPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.methodpanel',
	requires : [ 'Portal.view.MethodService.MethodFilterForm',
			'Portal.view.MethodService.MethodGrid',
			'Portal.view.MethodService.MethodSearchForm' ],
	autoScroll : true,
	items : [ {
		xtype : 'methodsearchform',
		id : 'methodSearchForm',
	}, {
		xtype : 'methodfilterform',
		id : 'methodFilterForm',
	}, {
		xtype : 'methodgrid',
		id : 'methodGrid',
	} ]
});