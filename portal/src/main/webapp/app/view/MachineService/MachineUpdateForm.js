Ext.define('Portal.view.MachineService.MachineUpdateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.machineupdateform',
	url : 'createUpdateMachine',
	method : 'POST',
	items : [
			{
				xtype : 'hiddenfield',
				id : 'machineHiddenId2',
				name : 'id'
			},
			{
				xtype : 'container',
				layout : 'hbox',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Machine Name',
					id : 'machineName2',
					name : 'name',
					allowBlank : false,
					margin : '4px',
					width : 600
				}, {
					xtype : 'textfield',
					fieldLabel : 'Machine Type',
					id : 'machineMachineType2',
					name : 'type',
					margin : '4px',
					width : 200
				} ]
			},
			{
				xtype : 'button',
				id : 'machineAddSave2',
				text : 'Save',
				margin : '4px',
				handler : function() {
					var grid = Ext.ComponentQuery.query('machinegrid')[0];
					if (grid.getSelectionModel().hasSelection()) {
						var form = Ext.ComponentQuery
								.query('machineupdateform')[0];
						var machineStore = Ext.data.StoreManager
								.get("MachineStore");
						if (form.isValid()) {
							form.submit({
								success : function(form, action) {
									Ext.Msg.alert('Info', 'Machine updated');
									machineStore.load();
								},
								failure : function(form, action) {
									Ext.Msg.alert('Error',
											'Machine update failed.');
								}
							});
						}
					} else {
						Ext.Msg
								.alert('Warning',
										'You should select a machine.');
					}
				}
			},
			{
				xtype : 'button',
				id : 'machineShowPdf',
				text : 'Display PDF',
				margin : '4px',
				handler : function() {
					var grid = Ext.ComponentQuery.query('machinegrid')[0];
					if (grid.getSelectionModel().hasSelection()) {
						var fileName = Ext.ComponentQuery
								.query('#machineName2')[0].getValue();
						Ext.create('Ext.window.Window', {
							title : 'PDF Content',
							width : 850,
							height : 500,
							modal : true,
							layout : 'fit',
							items : [ {
								xtype : 'component',
								autoEl : {
									tag : 'iframe',
									id : 'iframe-win-machine',
									src : 'getPdfFile?fileName=' + fileName
								}
							} ]
						}).show();
					} else {
						Ext.Msg.alert('Warning',
								'You should select a machine.');

					}
				}
			} ]
});