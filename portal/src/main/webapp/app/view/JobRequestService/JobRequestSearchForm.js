Ext
		.define(
				'Portal.view.JobRequestService.JobRequestSearchForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.jobrequestsearchform',
					items : [
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'numberfield',
									fieldLabel : 'Period',
									id : 'jobRequestSearchPeriod',
									name : 'period',
									minValue : 1,
									maxValue : 52,
									margin : '4px',
									width : 100,
									labelWidth : 40
								}, {
									xtype : 'textfield',
									fieldLabel : 'Project Name',
									id : 'jobRequestSearchProjectName',
									name : 'projectName',
									margin : '4px',
									width : 392,
									labelWidth : 80
								} ]
							},
							{
								xtype : 'button',
								id : 'jobRequestSearchFindButton',
								text : 'Find',
								margin : '4px',
								handler : function() {
									var store = Ext.data.StoreManager
											.get("JobRequestStore");
									store
											.getProxy()
											.setExtraParam(
													'period',
													Ext.ComponentQuery
															.query('#jobRequestSearchPeriod')[0]
															.getValue());
									store
											.getProxy()
											.setExtraParam(
													'projectName',
													Ext.ComponentQuery
															.query('#jobRequestSearchProjectName')[0]
															.getValue());
									store.load();
								}
							},
							{
								xtype : 'button',
								id : 'jobRequestSearchClearButton',
								text : 'Clear',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('jobrequestsearchform')[0];
									form.getForm().reset();
								}
							} ]
				});