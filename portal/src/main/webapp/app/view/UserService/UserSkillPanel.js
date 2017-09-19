Ext.define('Portal.view.UserService.UserSkillPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.userskillpanel',
	requires : [ 'Portal.view.UserService.UserSkillFilterForm',
			'Portal.view.UserService.UserSkillGrid',
			'Portal.view.UserService.UserSkillUpdateForm' ],
	autoScroll : true,
	items : [ {
		xtype : 'userskillfilterform',
		id : 'userSkillFilterForm',
	}, {
		xtype : 'userskillgrid',
		id : 'userSkillGrid',
	}, {
		xtype : 'userskillupdateform',
		id : 'userSkillUpdateForm',
	} ]
});