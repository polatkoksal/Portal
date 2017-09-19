Ext.define('Portal.view.MachineToolService.MachineToolListUpdateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.machinetoollistupdateform',
	url : 'createUpdateMachineToolList',
	method : 'POST',
	items : [
			{
				xtype : 'hiddenfield',
				id : 'machineToolListHiddenId2',
				name : 'id'
			},
			{
				xtype : 'textfield',
				fieldLabel : 'Machine Tool List Name',
				labelWidth : 150,
				id : 'machineToolListName2',
				name : 'name',
				margin : '4px',
				width : 500
			},
			{
				xtype : 'button',
				id : 'machineToolListAddSave2',
				text : 'Save',
				margin : '4px',
				handler : function() {
					var form = Ext.ComponentQuery
							.query('machinetoollistupdateform')[0];
					var formTab = Ext.ComponentQuery
							.query('#machineToolListUpdateForm')[0];
					var store = Ext.data.StoreManager
							.get("MachineToolListStore");
					if (form.isValid()) {
						form.submit({
							success : function(form, action) {
								Ext.Msg.alert('Info',
										'Seelcted machine tool list updated.');
								formTab.close();
								store.load();
							},
							failure : function(form, action) {
								Ext.Msg.alert('Error',
										'Machine tool list update failed.');
							}
						});
					}
				}
			} ]
});