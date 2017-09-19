Ext.define('Portal.view.UserService.ManageUsersPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.manageuserspanel',
	requires : [ 'Portal.view.UserService.UpdateUserForm',
			'Portal.view.UserService.UserFilterForm',
			'Portal.view.UserService.UpdateUserGrid' ],
	autoScroll : true,
	items : [ {
		xtype : 'userfilterform',
		id : 'userFilterForm',
	}, {
		xtype : 'updateusergrid',
		id : 'updateUserGrid',
	}, {
		xtype : 'updateuserform',
		id : 'updateUserForm',
	} ]
});