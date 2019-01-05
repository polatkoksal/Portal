Ext.require([ 'Portal.view.UserService.ManageUsersPanel',
		'Portal.view.UserService.SessionUserForm',
		'Portal.view.FaiDfaiJobService.FaiDfaiJobPanel',
		'Portal.view.OtherJobService.OtherJobPanel',
		'Portal.view.MachineToolService.MachineToolListPanel',
		'Portal.view.ToolService.ToolPanel',
		'Portal.view.MachineService.MachinePanel',
		'Portal.view.DocumentService.DocumentPanel',
		'Portal.view.UserService.UserSkillPanel',
		'Portal.view.FaiDfaiJobService.DoneFaiDfaiJobPanel',
		'Portal.view.JobRequestService.JobRequestPanel',
		'Portal.view.FeedbackService.FeedbackPanel' ]);

Ext
		.define(
				'Portal.view.MenuPanel',
				{
					extend : 'Ext.tree.Panel',
					alias : 'widget.menupanel',
					store : 'MenuStore',
					title : 'Menu',
					width : 130,
					collapsible : true,
					rootVisible : false,
					listeners : {
						itemclick : function(thi, record, item, index, e, eOpts) {
							var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
							var role = Ext.ComponentQuery
									.query('#loginFormHiddenRole')[0]
									.getValue();
							if (record.data.id == 'personalPage') {
								if (!tabPanel
										.getChildByElement('sessionUserForm')) {
									tabPanel.add({
										xtype : 'sessionuserform',
										id : 'sessionUserForm',
										title : 'Personel Page',
										closable : true
									});
									var sessionUserForm = Ext.ComponentQuery
											.query('#sessionUserForm')[0];
									var sessionUserStore = Ext.data.StoreManager
											.get("SessionUserStore");
									sessionUserStore
											.load({
												callback : function(records,
														operation, success) {
													sessionUserForm
															.loadRecord(sessionUserStore
																	.getAt(0));
												}
											});
								}
								tabPanel.setActiveTab('sessionUserForm');
							} else if (record.data.id == 'manageUsers') {
								if (!tabPanel
										.getChildByElement('manageUsersPanel')) {
									tabPanel.add({
										xtype : 'manageuserspanel',
										id : 'manageUsersPanel',
										title : 'Manage Users',
										closable : true
									});
									var userStore = Ext.data.StoreManager
											.get("UserStore");
									userStore.load();
								}
								tabPanel.setActiveTab('manageUsersPanel');
							} else if (record.data.id == 'faiDfaiJob') {
								if (!tabPanel
										.getChildByElement('faiDfaiJobPanel')) {
									tabPanel.add({
										xtype : 'faidfaijobpanel',
										id : 'faiDfaiJobPanel',
										title : 'Fai/DFai Job',
										closable : true
									});
									if (role != 'Admin' && role != 'PM') {
										var filterForm = Ext.ComponentQuery
												.query('faidfaijobfilterform')[0];
										filterForm.setVisible(false);
									}
									if (role == 'PM') {
										Ext.ComponentQuery
												.query('#faiDfaiAddJob')[0]
												.setVisible(false);
										Ext.ComponentQuery
												.query('#faiDfaiDeleteJob')[0]
												.setVisible(false);
										Ext.ComponentQuery
												.query('#faiDfaiDoneJob')[0]
												.setVisible(false);
									}
									var faiDfaiJobStore = Ext.data.StoreManager
											.get("FaiDfaiJobStore");
									if (role == 'PM') {
										faiDfaiJobStore.getProxy()
												.setExtraParam('userId', -1);
									} else {
										faiDfaiJobStore.getProxy()
												.setExtraParam('userId', 0);
									}
									faiDfaiJobStore.getProxy().setExtraParam(
											'period', '');
									faiDfaiJobStore.getProxy().setExtraParam(
											'projectName', '');
									faiDfaiJobStore.load();
								}
								tabPanel.setActiveTab('faiDfaiJobPanel');
							} else if (record.data.id == 'doneFaiDfaiJob') {
								if (!tabPanel
										.getChildByElement('doneFaiDfaiJobPanel')) {
									tabPanel.add({
										xtype : 'donefaidfaijobpanel',
										id : 'doneFaiDfaiJobPanel',
										title : 'Done Fai/DFai Job',
										closable : true
									});
									if (role != 'Admin') {
										var filterForm = Ext.ComponentQuery
												.query('donefaidfaijobfilterform')[0];
										filterForm.setVisible(false);
									}
									var store = Ext.data.StoreManager
											.get("DoneFaiDfaiJobStore");
									store.getProxy().setExtraParam('userId', 0);
									store.getProxy().setExtraParam(
											'partNumber', '');
									store.load();
								}
								tabPanel.setActiveTab('doneFaiDfaiJobPanel');
							} else if (record.data.id == 'otherJob') {
								if (!tabPanel
										.getChildByElement('otherJobPanel')) {
									tabPanel.add({
										xtype : 'otherjobpanel',
										id : 'otherJobPanel',
										title : 'Other Job',
										closable : true
									});
									if (role != 'Admin') {
										var filterForm = Ext.ComponentQuery
												.query('otherjobfilterform')[0];
										filterForm.setVisible(false);
									}
									var otherJobStore = Ext.data.StoreManager
											.get("OtherJobStore");
									var actionStore = Ext.data.StoreManager
											.get("ActionStore");
									otherJobStore.getProxy().setExtraParam(
											'userId', 0);
									otherJobStore.load();
									actionStore.removeAll();
								}
								tabPanel.setActiveTab('otherJobPanel');
							} else if (record.data.id == 'jobRequest') {
								if (!tabPanel
										.getChildByElement('jobRequestPanel')) {
									tabPanel.add({
										xtype : 'jobrequestpanel',
										id : 'jobRequestPanel',
										title : 'Job Request',
										closable : true
									});
									if (role != 'Admin' && role != 'PM') {
										var selectUserCombo = Ext.ComponentQuery
												.query('#jobRequestSelectUser')[0];
										selectUserCombo.setVisible(false);
									}
									if (role != 'Admin') {
										var addToFaiDfai = Ext.ComponentQuery
												.query('#jobRequestAddFaiDfaiJob')[0];
										addToFaiDfai.setVisible(false);
									}
									var jobRequestStore = Ext.data.StoreManager
											.get("JobRequestStore");
									jobRequestStore.getProxy().setExtraParam(
											'userId', 0);
									jobRequestStore.getProxy().setExtraParam(
											'period', '');
									jobRequestStore.getProxy().setExtraParam(
											'projectName', '');
									jobRequestStore.load();
								}
								tabPanel.setActiveTab('jobRequestPanel');
							} else if (record.data.id == 'machineList') {
								if (!tabPanel.getChildByElement('machinePanel')) {
									tabPanel.add({
										xtype : 'machinepanel',
										id : 'machinePanel',
										title : 'Machine List',
										closable : true
									});
									var filterForm = Ext.ComponentQuery
											.query('machinefilterform')[0];
									if (role != 'Admin') {
										filterForm.setVisible(false);
										Ext.ComponentQuery
												.query('#machineName2')[0]
												.setReadOnly(true);
										Ext.ComponentQuery
												.query('#machineMachineType2')[0]
												.setReadOnly(true);
										Ext.ComponentQuery
												.query('#machineAddSave2')[0]
												.setVisible(false);
									}
									var machineStore = Ext.data.StoreManager
											.get("MachineStore");
									machineStore.load();
								}
								tabPanel.setActiveTab('machinePanel');
							} else if (record.data.id == 'toolList') {
								if (!tabPanel.getChildByElement('toolPanel')) {
									tabPanel.add({
										xtype : 'toolpanel',
										id : 'toolPanel',
										title : 'Tool List',
										closable : true
									});
									var filterForm = Ext.ComponentQuery
											.query('toolfilterform')[0];
									if (role != 'Admin') {
										filterForm.setVisible(false);
									}
									var store = Ext.data.StoreManager
											.get("ToolStore");
									store.getProxy().setExtraParam('asmCode',
											'');
									store.getProxy().setExtraParam(
											'holderCode', '');
									store.getProxy().setExtraParam(
											'holderDefinition', '');
									store.getProxy().setExtraParam('shaftCode',
											'');
									store.getProxy().setExtraParam(
											'shaftDefinition', '');
									store.getProxy().setExtraParam(
											'cutterCode', '');
									store.getProxy().setExtraParam(
											'cutterDefinition', '');
									store.getProxy().setExtraParam(
											'insertCode', '');
									store.getProxy().setExtraParam(
											'insertDefinition', '');
									store.getProxy().setExtraParam(
											'fLengthSmaller', '');
									store.getProxy().setExtraParam(
											'fLengthBigger', '');
									store.getProxy()
											.setExtraParam('toolOp', '');
									store.getProxy().setExtraParam(
											'partMaterial', '');
									store.load();
								}
								tabPanel.setActiveTab('toolPanel');
							} else if (record.data.id == 'machineToolList') {
								if (!tabPanel
										.getChildByElement('machineToolListPanel')) {
									tabPanel.add({
										xtype : 'machinetoollistpanel',
										id : 'machineToolListPanel',
										title : 'Machine Tool List',
										closable : true
									});
									var filterForm = Ext.ComponentQuery
											.query('machinetoollistfilterform')[0];
									if (role != 'Admin') {
										filterForm.setVisible(false);
									}
									var store = Ext.data.StoreManager
											.get("MachineToolStore");
									store.getProxy().setExtraParam('asmCode',
											'');
									store.getProxy().setExtraParam(
											'holderCode', '');
									store.getProxy().setExtraParam(
											'holderDefinition', '');
									store.getProxy().setExtraParam('shaftCode',
											'');
									store.getProxy().setExtraParam(
											'shaftDefinition', '');
									store.getProxy().setExtraParam(
											'cutterCode', '');
									store.getProxy().setExtraParam(
											'cutterDefinition', '');
									store.getProxy().setExtraParam(
											'insertCode', '');
									store.getProxy().setExtraParam(
											'insertDefinition', '');
									store.getProxy().setExtraParam(
											'fLengthSmaller', '');
									store.getProxy().setExtraParam(
											'fLengthBigger', '');
									store.getProxy()
											.setExtraParam('toolOp', '');
									var machineToolListStore = Ext.data.StoreManager
											.get("MachineToolListStore");
									machineToolListStore.load();
									store.removeAll();
								}
								tabPanel.setActiveTab('machineToolListPanel');
							} else if (record.data.id == 'documentList') {
								if (!tabPanel
										.getChildByElement('documentPanel')) {
									tabPanel.add({
										xtype : 'documentpanel',
										id : 'documentPanel',
										title : 'Document List',
										closable : true
									});
									var filterForm = Ext.ComponentQuery
											.query('documentfilterform')[0];
									if (role != 'Admin') {
										filterForm.setVisible(false);
										Ext.ComponentQuery
												.query('#documentNumber2')[0]
												.setReadOnly(true);
										Ext.ComponentQuery
												.query('#documentName2')[0]
												.setReadOnly(true);
										Ext.ComponentQuery
												.query('#documentType2')[0]
												.setReadOnly(true);
										Ext.ComponentQuery
												.query('#documentKeyWord2')[0]
												.setReadOnly(true);
										Ext.ComponentQuery
												.query('#documentAddSave2')[0]
												.setVisible(false);
									}
									var documentStore = Ext.data.StoreManager
											.get("DocumentStore");
									documentStore.getProxy().setExtraParam(
											'docType', '');
									documentStore.getProxy().setExtraParam(
											'keyWord', '');
									documentStore.getProxy().setExtraParam(
											'docName', '');
									documentStore.load();
								}
								tabPanel.setActiveTab('documentPanel');
							} else if (record.data.id == 'feedback') {
								if (!tabPanel
										.getChildByElement('feedbackPanel')) {
									tabPanel.add({
										xtype : 'feedbackpanel',
										id : 'feedbackPanel',
										title : 'Feedback',
										closable : true
									});
									if (role != 'Admin' && role != 'PM') {
										var selectUserCombo = Ext.ComponentQuery
												.query('#feedbackSelectUser')[0];
										selectUserCombo.setVisible(false);
									}
									var feedbackStore = Ext.data.StoreManager
											.get("FeedbackStore");
									feedbackStore.getProxy().setExtraParam(
											'userId', 0);
									feedbackStore.load();
								}
								tabPanel.setActiveTab('feedbackPanel');
							}
						}
					}
				});