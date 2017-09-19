Ext.define('Portal.view.UserService.AddUserForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.adduserform',
	url : 'createUpdateUser',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'addUserHiddenId',
		name : 'id'
	}, {
		xtype : 'hiddenfield',
		id : 'addUserHiddenPassword',
		name : 'password'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Name',
		id : 'addUserName',
		allowBlank : false,
		name : 'name',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Surname',
		id : 'addUserLastName',
		name : 'lastName',
		allowBlank : false,
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'User Name',
		id : 'addUserUserName',
		name : 'userName',
		allowBlank : false,
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Register Number',
		id : 'addUserRegisterNumber',
		name : 'registerNumber',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Duty',
		id : 'addUserDuty',
		name : 'duty',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'Telephone',
		id : 'addUserTelephone',
		name : 'telephone',
		margin : '4px',
		width : 500
	}, {
		xtype : 'textfield',
		fieldLabel : 'E-mail',
		id : 'addUserEmail',
		name : 'email',
		margin : '4px',
		width : 500
	}, {
		xtype : 'combobox',
		fieldLabel : 'Role',
		id : 'addUserRole',
		name : 'role',
		store : [ 'User', 'Admin', 'PM', 'Prod' ],
		editable : false,
		value : 'User',
		margin : '4px',
		width : 500
	}, {
		xtype : 'button',
		id : 'addUserSaveButton',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var addUserForm = Ext.ComponentQuery.query('adduserform')[0];
			if (addUserForm.isValid()) {
				var userStore = Ext.data.StoreManager.get("UserStore");
				addUserForm.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New user added.');
						addUserForm.close();
						userStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'User add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'addUserResetButton',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('adduserform')[0];
			form.getForm().reset();
		}
	} ]
});