Ext.define('Portal.view.UserService.UpdateUserGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.updateusergrid',
	store : 'UserStore',
	height : 250,
	columns : [ {
		header : 'Register Number',
		dataIndex : 'registerNumber',
		width : 100
	}, {
		header : 'User Name',
		dataIndex : 'userName',
		width : 120
	}, {
		header : 'Name',
		dataIndex : 'name',
		width : 100
	}, {
		header : 'Last Name',
		dataIndex : 'lastName',
		width : 100
	}, {
		header : 'Duty',
		dataIndex : 'duty',
		width : 250
	}, {
		header : 'Telephone',
		dataIndex : 'telephone',
		width : 100
	}, {
		header : 'E-mail',
		dataIndex : 'email',
		width : 180
	}, {
		header : 'Role',
		dataIndex : 'role',
		width : 50
	} ],
	listeners : {
		itemclick : function(thi, record, item, index, e, eOpts) {
			Ext.ComponentQuery.query('updateuserform')[0].loadRecord(record);
		}
	}
});