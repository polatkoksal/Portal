Ext.define('Portal.view.AgreementService.AgreementAddForm',
		{
			extend : 'Ext.form.Panel',
			alias : 'widget.agreementaddform',
			url : 'createUpdateFaiDfaiJob',
			method : 'POST',
			items : [
					{
						xtype : 'hiddenfield',
						id : 'agreementHiddenId',
						name : 'id'
					},
					{
						xtype : 'hiddenfield',
						id : 'agreementJobState',
						name : 'jobState',
						value : 'agreement'
					},
					{
						xtype : 'textfield',
						fieldLabel : 'Project Name',
						id : 'agreementProjectName',
						name : 'projectName',
						margin : '4px',
						width : 500
					},
					{
						xtype : 'textfield',
						fieldLabel : 'Category',
						id : 'agreementProjectCategory',
						name : 'category',
						margin : '4px',
						width : 500
					},
					{
						xtype : 'textfield',
						fieldLabel : 'Part Number',
						id : 'agreementPartNumber',
						name : 'partNumber',
						margin : '4px',
						width : 500
					},
					{
						xtype : 'textfield',
						fieldLabel : 'KH Code',
						id : 'agreementKhCode',
						name : 'khCode',
						margin : '4px',
						width : 500
					},
					{
						xtype : 'textfield',
						fieldLabel : 'Seviye',
						id : 'agreementLevel',
						name : 'level',
						margin : '4px',
						width : 500
					},
					{
						xtype : 'datefield',
						fieldLabel : 'PO Date',
						id : 'agreementPoDate',
						name : 'poDate',
						value : new Date(),
						format : 'd/m/Y',
						editable : false,
						margin : '4px',
						width : 200
					},
					{
						xtype : 'container',
						layout : 'hbox',
						items : [ {
							xtype : 'textfield',
							fieldLabel : 'Eski Parca Adi',
							id : 'agreementOldPartName',
							name : 'oldPartName',
							margin : '21 4 4 4',
							width : 300
						}, {
							xtype : 'textfield',
							fieldLabel : 'PL Rev.',
							labelAlign: 'top',
							id : 'agreementOldPartNamePL',
							name : 'oldPartNamePL',
							margin : '4px',
							width : 92
						}, {
							xtype : 'textfield',
							fieldLabel : 'TR Rev.',
							labelAlign: 'top',
							id : 'agreementOldPartNameTR',
							name : 'oldPartNameTR',
							margin : '4px',
							width : 92
						} ]
					},
					{
						xtype : 'container',
						layout : 'hbox',
						items : [ {
							xtype : 'textfield',
							fieldLabel : 'Eski Alt Parca Adi',
							id : 'agreementOldSubPartName',
							name : 'oldSubPartName',
							margin : '4px',
							width : 300
						}, {
							xtype : 'textfield',
							id : 'agreementOldSubPartNamePL',
							name : 'oldSubPartNamePL',
							margin : '4px',
							width : 92
						}, {
							xtype : 'textfield',
							id : 'agreementOldSubPartNameTR',
							name : 'oldSubPartNameTR',
							margin : '4px',
							width : 92
						} ]
					},
					{
						xtype : 'container',
						layout : 'hbox',
						items : [ {
							xtype : 'textfield',
							fieldLabel : 'Yeni Ana Parca Adi',
							id : 'agreementNewPartName',
							name : 'newPartName',
							margin : '4px',
							width : 300
						}, {
							xtype : 'textfield',
							id : 'agreementNewPartNamePL',
							name : 'newPartNamePL',
							margin : '4px',
							width : 92
						}, {
							xtype : 'textfield',
							id : 'agreementNewPartNameTR',
							name : 'newPartNameTR',
							margin : '4px',
							width : 92
						} ]
					},
					{
						xtype : 'container',
						layout : 'hbox',
						items : [ {
							xtype : 'textfield',
							fieldLabel : 'Yeni Alt Parca Adi',
							id : 'agreementNewSubPartName',
							name : 'newSubPartName',
							margin : '4px',
							width : 300
						}, {
							xtype : 'textfield',
							id : 'agreementNewSubPartNamePL',
							name : 'newSubPartNamePL',
							margin : '4px',
							width : 92
						}, {
							xtype : 'textfield',
							id : 'agreementNewSubPartNameTR',
							name : 'newSubPartNameTR',
							margin : '4px',
							width : 92
						} ]
					},
					{
						xtype : 'combobox',
						fieldLabel : 'Degisiklik Durumu',
						id : 'agreementChangeStatus',
						name : 'changeStatus',
						store : [ 'Degisiklik Yok', 'Yeni Parca',
								'Rev Degis- Model Ayni',
								'Rev Degis- Model Degisikligi',
								'Dash Degis- Model Ayni',
								'Dash Degis- Model Degisikligi' ],
						editable : false,
						emptyText : 'Select',
						margin : '4px',
						width : 500
					},
					{
						xtype : 'combobox',
						fieldLabel : 'Responsible',
						id : 'agreementResponsible',
						name : 'responsible',
						store : 'ComboUserStore',
						displayField : 'nameSurname',
						valueField : 'id',
						editable : false,
						allowBlank : false,
						emptyText : 'Select Responsible',
						margin : '4px',
						width : 500
					},
					{
						xtype : 'textarea',
						fieldLabel : 'Description',
						id : 'agreementDescription',
						name : 'description',
						margin : '4px',
						width : 500,
						height : 100
					},
					{
						xtype : 'button',
						id : 'agreementAddSave',
						text : 'Save',
						margin : '4px',
						handler : function() {
							var form = Ext.ComponentQuery
									.query('agreementaddform')[0];
							var formTab = Ext.ComponentQuery
									.query('#agreementAddForm')[0];
							var agreementStore = Ext.data.StoreManager
									.get("AgreementStore");
							if (form.isValid()) {
								form.submit({
									success : function(form, action) {
										Ext.Msg.alert('Info',
												'New agreement job added');
										formTab.close();
										agreementStore.load();
									},
									failure : function(form, action) {
										Ext.Msg.alert('Error',
												'Agreement job add failed.');
									}
								});
							}
						}
					},
					{
						xtype : 'button',
						id : 'agreementAddReset',
						text : 'Reset Form',
						margin : '4px',
						handler : function() {
							var form = Ext.ComponentQuery
									.query('agreementaddform')[0];
							form.getForm().reset();
						}
					} ]
		});