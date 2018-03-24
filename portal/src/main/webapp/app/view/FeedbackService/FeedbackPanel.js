Ext.define('Portal.view.FeedbackService.FeedbackPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.feedbackpanel',
	requires : [ 'Portal.view.FeedbackService.FeedbackFilterForm',
			'Portal.view.FeedbackService.FeedbackGrid' ],
	autoScroll : true,
	items : [ {
		xtype : 'feedbackfilterform',
		id : 'FeedbackFilterForm',
	}, {
		xtype : 'feedbackgrid',
		id : 'FeedbackGrid',
	} ]
});