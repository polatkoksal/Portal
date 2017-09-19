Ext.define('Portal.view.MachineService.MachineAddForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.machineaddform',
	url : 'createUpdateMachine',
	method : 'POST',
	items : [ {
		xtype : 'hiddenfield',
		id : 'machineHiddenId',
		name : 'id'
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'textfield',
			fieldLabel : 'Machine Name',
			id : 'machineName',
			name : 'name',
			allowBlank : false,
			margin : '4px',
			width : 600
		}, {
			xtype : 'textfield',
			fieldLabel : 'Machine Type',
			id : 'machineMachineType',
			name : 'type',
			margin : '4px',
			width : 200
		} ]
	}, {
		xtype : 'button',
		id : 'machineAddSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('machineaddform')[0];
			var formTab = Ext.ComponentQuery.query('#machineAddForm')[0];
			var machineStore = Ext.data.StoreManager.get("MachineStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'New machine added');
						formTab.close();
						machineStore.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Machine add failed.');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		id : 'machineAddReset',
		text : 'Reset Form',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('machineaddform')[0];
			form.getForm().reset();
		}
	} ]
});