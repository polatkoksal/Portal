Ext.define('Portal.view.UserService.UserSkillGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userskillgrid',
	store : 'UserSkillStore',
	height : 250,
	columns : [ {
		header : 'Skill Name',
		dataIndex : 'name',
		width : 200
	}, {
		header : 'Training',
		dataIndex : 'training',
		width : 80
	}, {
		header : 'Training Date',
		dataIndex : 'trainingDate',
		width : 100
	}, {
		header : 'Score',
		dataIndex : 'skore',
		width : 60
	} ],
	listeners : {
		itemclick : function(thi, record, item, index, e, eOpts) {
			Ext.ComponentQuery.query('userskillupdateform')[0]
					.loadRecord(record);
		}
	}
});