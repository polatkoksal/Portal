Ext.define('Portal.view.MachineToolService.MachineToolListAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.machinetoollistaddform',
	url : 'createUpdateMachineToolList',
	method : 'POST',
	items : [
			{
				xtype : 'hiddenfield',
				id : 'machineToolListHiddenId',
				name : 'id'
			},
			{
				xtype : 'textfield',
				fieldLabel : 'Machine Tool List Name',
				labelWidth : 150,
				id : 'machineToolListName',
				name : 'name',
				margin : '4px',
				width : 500
			},
			{
				xtype : 'button',
				id : 'machineToolListAddSave',
				text : 'Save',
				margin : '4px',
				handler : function() {
					var form = Ext.ComponentQuery
							.query('machinetoollistaddform')[0];
					var formTab = Ext.ComponentQuery
							.query('#machineToolListAddForm')[0];
					var store = Ext.data.StoreManager
							.get("MachineToolListStore");
					if (form.isValid()) {
						form.submit({
							success : function(form, action) {
								Ext.Msg.alert('Info',
										'New machine tool list added.');
								formTab.close();
								store.load();
							},
							failure : function(form, action) {
								Ext.Msg.alert('Error',
										'Machine tool list add failed.');
							}
						});
					}
				}
			},
			{
				xtype : 'button',
				id : 'machineAddReset',
				text : 'Reset Form',
				margin : '4px',
				handler : function() {
					var form = Ext.ComponentQuery
							.query('machinetoolistaddform')[0];
					form.getForm().reset();
				}
			} ]
});