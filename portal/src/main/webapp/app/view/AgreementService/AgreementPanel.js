Ext.define('Portal.view.AgreementService.AgreementPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.agreementpanel',
	requires : [ 'Portal.view.AgreementService.AgreementFilterForm',
			'Portal.view.AgreementService.AgreementGrid',
			'Portal.view.AgreementService.AgreementSearchForm' ],
	autoScroll : true,
	items : [ {
		xtype : 'agreementsearchform',
		id : 'agreementSearchForm',
	}, {
		xtype : 'agreementfilterform',
		id : 'agreementFilterForm',
	}, {
		xtype : 'agreementgrid',
		id : 'agreementGrid',
	} ]
});