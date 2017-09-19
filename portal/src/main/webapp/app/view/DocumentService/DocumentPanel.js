Ext.define('Portal.view.DocumentService.DocumentPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.documentpanel',
	requires : [ 'Portal.view.DocumentService.DocumentSearchForm',
			'Portal.view.DocumentService.DocumentFilterForm',
			'Portal.view.DocumentService.DocumentGrid',
			'Portal.view.DocumentService.DocumentUpdateForm' ],
	autoScroll : true,
	items : [ {
		xtype : 'documentsearchform',
		id : 'documentSearchForm',
	}, {
		xtype : 'documentfilterform',
		id : 'documentFilterForm',
	}, {
		xtype : 'documentgrid',
		id : 'documentGrid',
	}, {
		xtype : 'documentupdateform',
		id : 'documentUpdateForm',
	} ]
});