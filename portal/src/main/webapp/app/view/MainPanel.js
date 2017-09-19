Ext.define('Portal.view.MainPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mainpanel',
	requires : [ 'Portal.view.MenuPanel' ],
	autoScroll : true,
	layout : 'hbox',
	region : 'center',
	items : [ {
		xtype : 'menupanel',
		id : 'menuPanel',
		region : 'west',
		autoDestroy : true
	}, {
		xtype : 'tabpanel',
		id : 'tabPanel',
		region : 'center',
		autoDestroy : true
	} ]
});