Ext.define('Portal.view.FaiDfaiJobService.DoneFaiDfaiJobPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.donefaidfaijobpanel',
	requires : [ 'Portal.view.FaiDfaiJobService.DoneFaiDfaiJobSearchForm',
			'Portal.view.FaiDfaiJobService.DoneFaiDfaiJobFilterForm',
			'Portal.view.FaiDfaiJobService.DoneFaiDfaiJobGrid' ],
	autoScroll : true,
	items : [ {
		xtype : 'donefaidfaijobsearchform',
		id : 'doneFaiDfaiJobSearchForm',
	}, {
		xtype : 'donefaidfaijobfilterform',
		id : 'doneFaiDfaiJobFilterForm',
	}, {
		xtype : 'donefaidfaijobgrid',
		id : 'doneFaiDfaiJobGrid',
	} ]
});