Ext.define('Portal.view.MethodService.MethodSearchForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.methodsearchform',
	items : [
			{
				xtype : 'container',
				layout : 'hbox',
				items : [ {
					xtype : 'numberfield',
					fieldLabel : 'Period',
					id : 'methodSearchPeriod',
					name : 'period',
					minValue : 1,
					maxValue : 52,
					margin : '4px',
					width : 100,
					labelWidth : 40
				}, {
					xtype : 'textfield',
					fieldLabel : 'Project Name',
					id : 'methodSearchProjectName',
					name : 'projectName',
					margin : '4px',
					width : 392,
					labelWidth : 80
				} ]
			},
			{
				xtype : 'button',
				id : 'methodSearchFindButton',
				text : 'Find',
				margin : '4px',
				handler : function() {
					var store = Ext.data.StoreManager.get("MethodStore");
					store.getProxy().setExtraParam(
							'period',
							Ext.ComponentQuery.query('#methodSearchPeriod')[0]
									.getValue());
					store.getProxy().setExtraParam(
							'projectName',
							Ext.ComponentQuery
									.query('#methodSearchProjectName')[0]
									.getValue());
					store.load();
				}
			}, {
				xtype : 'button',
				id : 'methodSearchClearButton',
				text : 'Clear',
				margin : '4px',
				handler : function() {
					var form = Ext.ComponentQuery.query('methodsearchform')[0];
					form.getForm().reset();
				}
			} ]
});