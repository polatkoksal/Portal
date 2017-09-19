Ext.define('Portal.view.Viewport', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.viewport',
	layout : 'border',
	requires : [ 'Portal.view.LoginForm' ],

	initComponent : function() {
		this.items = [
				{
					region : 'north',
					dockedItems : [ {
						xtype : 'toolbar',
						dock : 'top',
						items : [
								{
									xtype : 'image',
									src : 'img/kale.png',
									height : 40
								},
								{
									xtype : 'tbfill'
								},
								{
									xtype : 'button',
									text : 'Logout',
									handler : function() {
										var loginForm = Ext.ComponentQuery
												.query('loginform')[0];
										var menuPanel = Ext.ComponentQuery
												.query('menupanel')[0];
										var tabPanel = Ext.ComponentQuery
												.query('tabpanel')[0];
										var menuStore = Ext.data.StoreManager
												.get("MenuStore");
										menuPanel.close();
										tabPanel.close();
										loginForm.getForm().reset();
										loginForm.setVisible(true);
									}
								} ]
					} ]
				}, {
					xtype : 'loginform',
					id : 'loginForm',
					region : 'center',
					layout : {
						type : 'vbox',
						align : 'center',
						pack : 'center'
					}
				} ];
		this.callParent();
	}
});