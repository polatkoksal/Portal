Ext.define('Portal.view.JobRequestService.JobRequestPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.jobrequestpanel',
	requires : [ 'Portal.view.JobRequestService.JobRequestFilterForm',
			'Portal.view.JobRequestService.JobRequestGrid',
			'Portal.view.JobRequestService.JobRequestSearchForm' ],
	autoScroll : true,
	items : [ {
		xtype : 'jobrequestsearchform',
		id : 'jobRequestSearchForm',
	}, {
		xtype : 'jobrequestfilterform',
		id : 'jobRequestFilterForm',
	}, {
		xtype : 'jobrequestgrid',
		id : 'jobRequestGrid',
	} ]
});