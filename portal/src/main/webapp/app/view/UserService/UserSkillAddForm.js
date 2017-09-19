Ext.define('Portal.view.UserService.UserSkillAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.userskilladdform',
	url : 'createUpdateUserSkill',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'addUserSkillHiddenId',
		name : 'id'
	}, {
		xtype : 'hiddenfield',
		id : 'addUserSkillHiddenUserId',
		name : 'userId'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Skill Name',
		id : 'addUserSkillName',
		name : 'name',
		margin : '4px',
		width : 500
	}, {
		xtype : 'combobox',
		fieldLabel : 'Training',
		id : 'addUserSkillTraining',
		name : 'training',
		store : [ 'No', 'Yes' ],
		editable : false,
		value : 'Yes',
		margin : '4px',
		width : 500
	}, {
		xtype : 'datefield',
		fieldLabel : 'Training Date',
		id : 'addUserSkillTrainingDate',
		name : 'trainingDate',
		format : 'd/m/Y',
		editable : false,
		margin : '4px',
		width : 500
	}, {
		xtype : 'numberfield',
		fieldLabel : 'Score',
		id : 'addUserSkillSkore',
		name : 'skore',
		minValue : 0,
		maxValue : 10,
		margin : '4px',
		width : 500
	}, {
		xtype : 'button',
		id : 'addUserSkillSaveButton',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('userskilladdform')[0];
			var formTab = Ext.ComponentQuery.query('#userSkillAddForm')[0];
			if (form.isValid()) {
				var store = Ext.data.StoreManager.get("UserSkillStore");
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New user skill added.');
						formTab.close();
						store.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'User skill add failed.');
					}
				});
			}
		}
	} ]
});