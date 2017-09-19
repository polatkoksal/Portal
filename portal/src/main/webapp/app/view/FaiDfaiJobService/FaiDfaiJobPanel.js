Ext.define('Portal.view.FaiDfaiJobService.FaiDfaiJobPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.faidfaijobpanel',
	requires : [ 'Portal.view.FaiDfaiJobService.FaiDfaiJobFilterForm',
			'Portal.view.FaiDfaiJobService.FaiDfaiJobGrid',
			'Portal.view.FaiDfaiJobService.FaiDfaiJobSearchForm' ],
	autoScroll : true,
	items : [ {
		xtype : 'faidfaijobsearchform',
		id : 'faiDfaiJobSearchForm',
	}, {
		xtype : 'faidfaijobfilterform',
		id : 'faiDfaiJobFilterForm',
	}, {
		xtype : 'faidfaijobgrid',
		id : 'faiDfaiJobGrid',
	} ]
});