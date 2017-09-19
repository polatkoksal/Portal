Ext.define('Portal.view.UserService.UserSkillUpdateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.userskillupdateform',
	url : 'createUpdateUserSkill',
	method : 'POST',
	items : [
			{
				xtype : 'hiddenfield',
				id : 'addUserSkillHiddenId2',
				name : 'id'
			},
			{
				xtype : 'hiddenfield',
				id : 'addUserSkillHiddenUserId2',
				name : 'userId'
			},
			{
				xtype : 'textfield',
				fieldLabel : 'Skill Name',
				id : 'addUserSkillName2',
				name : 'name',
				margin : '4px',
				width : 500
			},
			{
				xtype : 'combobox',
				fieldLabel : 'Training',
				id : 'addUserSkillTraining2',
				name : 'training',
				store : [ 'No', 'Yes' ],
				editable : false,
				margin : '4px',
				width : 500
			},
			{
				xtype : 'datefield',
				fieldLabel : 'Training Date',
				id : 'addUserSkillTrainingDate2',
				name : 'trainingDate',
				format : 'd/m/Y',
				editable : false,
				margin : '4px',
				width : 500
			},
			{
				xtype : 'numberfield',
				fieldLabel : 'Score',
				id : 'addUserSkillSkore2',
				name : 'skore',
				minValue : 0,
				maxValue : 10,
				margin : '4px',
				width : 500
			},
			{
				xtype : 'button',
				id : 'addUserSkillSaveButton2',
				text : 'Save',
				margin : '4px',
				handler : function() {
					var grid = Ext.ComponentQuery.query('userskillgrid')[0];
					if (grid.getSelectionModel().hasSelection()) {
						var form = Ext.ComponentQuery
								.query('userskillupdateform')[0];
						if (form.isValid()) {
							var store = Ext.data.StoreManager
									.get("UserSkillStore");
							form.submit({
								success : function(form, action) {
									Ext.Msg
											.alert('Info',
													'User skill updated.');
									store.load();
								},
								failure : function(form, action) {
									Ext.Msg.alert('Error',
											'User skill update failed.');
								}
							});
						}
					} else {
						Ext.Msg.alert('Warning',
								'You should select a user skill.');
					}
				}
			} ]
});