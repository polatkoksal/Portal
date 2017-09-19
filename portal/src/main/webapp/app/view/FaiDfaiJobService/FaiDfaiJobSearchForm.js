Ext
		.define(
				'Portal.view.FaiDfaiJobService.FaiDfaiJobSearchForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.faidfaijobsearchform',
					items : [
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'numberfield',
									fieldLabel : 'Period',
									id : 'faiDfaiSearchPeriod',
									name : 'period',
									minValue : 1,
									maxValue : 52,
									margin : '4px',
									width : 100,
									labelWidth : 40
								}, {
									xtype : 'textfield',
									fieldLabel : 'Project Name',
									id : 'faiDfaiSearchProjectName',
									name : 'projectName',
									margin : '4px',
									width : 392,
									labelWidth : 80
								} ]
							},
							{
								xtype : 'button',
								id : 'faiDfaiSearchFindButton',
								text : 'Find',
								margin : '4px',
								handler : function() {
									var store = Ext.data.StoreManager
											.get("FaiDfaiJobStore");
									store
											.getProxy()
											.setExtraParam(
													'period',
													Ext.ComponentQuery
															.query('#faiDfaiSearchPeriod')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'projectName',
													Ext.ComponentQuery
															.query('#faiDfaiSearchProjectName')[0]
															.getValue());
									store.load();
								}
							},
							{
								xtype : 'button',
								id : 'faiDfaiSearchClearButton',
								text : 'Clear',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('faidfaijobsearchform')[0];
									form.getForm().reset();
								}
							} ]
				});