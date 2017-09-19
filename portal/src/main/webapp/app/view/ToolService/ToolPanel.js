Ext.define('Portal.view.ToolService.ToolPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.toolpanel',
	requires : [ 'Portal.view.ToolService.ToolSearchForm',
			'Portal.view.ToolService.ToolFilterForm',
			'Portal.view.ToolService.ToolGrid' ],
	autoScroll : true,
	items : [ {
		xtype : 'toolsearchform',
		id : 'toolSearchForm',
	}, {
		xtype : 'toolfilterform',
		id : 'toolFilterForm',
	}, {
		xtype : 'toolgrid',
		id : 'toolGrid',
	} ]
});