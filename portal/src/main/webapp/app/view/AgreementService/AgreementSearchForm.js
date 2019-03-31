Ext
		.define(
				'Portal.view.AgreementService.AgreementSearchForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.agreementsearchform',
					items : [
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'textfield',
									fieldLabel : 'Project Name',
									id : 'agreementSearchProjectName',
									name : 'projectName',
									margin : '4px',
									width : 392,
									labelWidth : 80
								} ]
							},
							{
								xtype : 'button',
								id : 'agreementSearchFindButton',
								text : 'Find',
								margin : '4px',
								handler : function() {
									var store = Ext.data.StoreManager
											.get("AgreementStore");
									store
											.getProxy()
											.setExtraParam(
													'projectName',
													Ext.ComponentQuery
															.query('#agreementSearchProjectName')[0]
															.getValue());
									store.load();
								}
							},
							{
								xtype : 'button',
								id : 'agreementSearchClearButton',
								text : 'Clear',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('agreementsearchform')[0];
									form.getForm().reset();
								}
							} ]
				});