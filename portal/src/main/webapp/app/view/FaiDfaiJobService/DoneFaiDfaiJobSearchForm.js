Ext.define('Portal.view.FaiDfaiJobService.DoneFaiDfaiJobSearchForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.donefaidfaijobsearchform',
	items : [
			{
				xtype : 'container',
				layout : 'hbox',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Part Number',
					id : 'doneFaiDfaiPartNumber',
					name : 'partNumber',
					margin : '4px',
					width : 500
				} ]
			},
			{
				xtype : 'button',
				id : 'doneFaiDfaiAddJob',
				text : 'Find',
				margin : '4px',
				handler : function() {
					var store = Ext.data.StoreManager
							.get("DoneFaiDfaiJobStore");
					store.getProxy()
							.setExtraParam(
									'partNumber',
									Ext.ComponentQuery
											.query('#doneFaiDfaiPartNumber')[0]
											.getValue());
					store.load();
				}
			},
			{
				xtype : 'button',
				id : 'doneFaiDfaiAddReset',
				text : 'Reset',
				margin : '4px',
				handler : function() {
					var form = Ext.ComponentQuery
							.query('donefaidfaijobsearchform')[0];
					form.getForm().reset();
				}
			}, ]
});