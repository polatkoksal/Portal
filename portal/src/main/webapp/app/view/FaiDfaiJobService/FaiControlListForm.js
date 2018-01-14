Ext
		.define(
				'Portal.view.FaiDfaiJobService.FaiControlListForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.faicontrollistform',
					url : 'createUpdateFaiControlList',
					method : 'POST',
					autoScroll : true,
					items : [
							{
								xtype : 'hiddenfield',
								id : 'faiCtrlHiddenId',
								name : 'id'
							},
							{
								xtype : 'hiddenfield',
								id : 'faiCtrlHiddenFaiJobId',
								name : 'faiJobId'
							},
							{
								xtype : 'hiddenfield',
								id : 'faiCtrlHiddenListNumber',
								name : 'listNumber'
							},
							{
								xtype : 'container',
								layout : 'vbox',
								items : [
										{
											xtype : 'label',
											text : 'BASLANGIC / OFiS KONTROLLERi',
											margin : '10 10 10 10',
											style : 'font-size: 20px; font-weight: bold;'
										},
										{
											xtype : 'textfield',
											fieldLabel : 'Operasyon Kodu',
											id : 'faiCtrlOpCode',
											name : 'operationCode',
											margin : '10 10 10 10',
											labelStyle : 'font-size: 14px; font-weight: bold;',
											width : 400,
											labelWidth : 150
										},
										{
											xtype : 'combobox',
											fieldLabel : 'Setup Ap. Resp.',
											id : 'faiCtrlSetupApResp',
											name : 'setupApRespId',
											store : 'ComboUserStore',
											displayField : 'nameSurname',
											valueField : 'id',
											editable : false,
											allowBlank : false,
											emptyText : 'Select Setup Ap. Resp.',
											labelStyle : 'font-size: 14px; font-weight: bold;',
											margin : '10 10 10 10',
											width : 400,
											labelWidth : 150
										},
										{
											xtype : 'label',
											text : 'CATIA  ve VERICUT',
											margin : '10 10 10 10',
											style : 'font-size: 16px; font-weight: bold;'
										} ]
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlCv11',
								name : 'cv11',
								fieldLabel : '1- CATIA CAM HAZIR MI?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlCv12',
								name : 'cv12',
								fieldLabel : '1- VERICUT REVIEW DATASI KULLANILARAK GAUGE VE EXCESS ANALIZI YAPILDI MI?(TEZGAH MODELI SERVERDAN MI KULLANILIYOR?)',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlCv13',
								name : 'cv13',
								fieldLabel : '2- ETIKET VE PROGRAM ONAY KONTROLU EKLENMIS MI?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlCv14',
								name : 'cv14',
								fieldLabel : '3- TAKIM, HAMMALZEME, PROGRAM SIRASI VE BAGLAMA/TAKLA KONTROLU YAPILMIS MI?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlCv15',
								name : 'cv15',
								fieldLabel : '4- VARSA SOKULECEK PARCA/CIVATA/PABUC KONTROLU EKLENMIS MI?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'label',
								text : 'NC PROGRAMLAR',
								margin : '20 10 10 10',
								style : 'font-size: 16px; font-weight: bold;'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlNc11',
								name : 'nc11',
								fieldLabel : '1- NC PROGRAMLAR OPERASYON BAZINDA SiSTEME KAYDEDiLDi Mi? \\\\192.168.161.35\\CNC PROGRAMLAR',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlNc12',
								name : 'nc12',
								fieldLabel : '2- NC PROGRAM ETiKETiNDEKi POST VERSiYONU iLE YURURLUKTEKi SURUM AYNI MI?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlNc13',
								name : 'nc13',
								fieldLabel : '1- NC PROGRAMLAR\'DA KULLANILAN TAKIM NUMARALARI iLE VERICUT  VE OTF\'DE YAZAN TAKIM NUMARALARI UYUMLU MU?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlNc14',
								name : 'nc14',
								fieldLabel : '2- iSLEM SURESi, SURE ONAY FORMU iLE KONTROL EDiLMiS Mi? SURE TEKLiF SURESi iCiNDE Mi?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'label',
								text : 'SETUP KONTROLU',
								margin : '20 10 10 10',
								style : 'font-size: 16px; font-weight: bold;',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlSe11',
								name : 'se11',
								fieldLabel : '1- GRAIN DIRECTION(HADDELEME YONU)TEKNiK RESiM, HAM MALZEME VE PROGRAMLAMADA ESLESiYOR MU?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlSe12',
								name : 'se12',
								fieldLabel : '2- YENi TAKIMLAR TAKIM LiSTESiNE EKLENDi Mi? / TALEP YAPILDI MI?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'label',
								text : 'OBF ve OTF',
								margin : '20 10 10 10',
								style : 'font-size: 16px; font-weight: bold;'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlOb11',
								name : 'ob11',
								fieldLabel : '1- OBF STANDART TASLAK KULLANILARAK HAZIRLANMIS MI?/iS SIFIRI VERICUT VE CATIA iLE AYNI MI?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlOb12',
								name : 'ob12',
								fieldLabel : '2- OTF HAZIRLIGI YAPILDI MI?(TUM KESiCi TAKIM,FIKSTUR,BAGLANTI ELEMANLARI,OLCUM EKiPMANLARI)',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'container',
								layout : 'vbox',
								items : [
										{
											xtype : 'label',
											text : 'BASLANGIC / TEZGAH BASI KONTROLLERi',
											margin : '10 10 10 10',
											style : 'font-size: 20px; font-weight: bold;'
										},
										{
											xtype : 'label',
											text : 'SETUP KONTROLU',
											margin : '10 10 10 10',
											style : 'font-size: 16px; font-weight: bold;'
										} ]
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlSe21',
								name : 'se21',
								fieldLabel : '1- TAKIMLAR OTF\'DEKi KOD, FONKSiYONEL VE TAM BOY OLARAK DOGRU MU?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlSe22',
								name : 'se22',
								fieldLabel : '2- TEZGAH iS SIFIRI OBF\'YE UYGUN ALINMIS MI?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlSe23',
								name : 'se23',
								fieldLabel : '3- OBF\'YE GORE PARCA VE FIKSTURLERiN UYGUN BAGLANDIGI TEKRAR KONTROL EDiLDi Mi?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlSe24',
								name : 'se24',
								fieldLabel : '4- ACISAL KAFA KULLANILIYOR iSE KESiCi TAKIM iLE SPINDLE EKSENi ARASI KACIKLIK KONTROL EDiLMiS Mi?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'label',
								text : 'BULGULAR (Setup onayi esnasindaki bulgular yazilacaktir)',
								margin : '10 10 10 10',
								style : 'font-size: 20px; font-weight: bold;'
							},
							{
								xtype : 'textarea',
								id : 'faiCtrlNo11',
								name : 'no11',
								margin : '4px',
								width : 620,
								height : 200
							},
							{
								xtype : 'label',
								text : 'NOTLAR (FAI\'yi isleyen Operator tarafindan doldurulacaktir)',
								margin : '10 10 10 10',
								style : 'font-size: 20px; font-weight: bold;',
								hidden : true
							},
							{
								xtype : 'textarea',
								id : 'faiCtrlNo12',
								name : 'no12',
								margin : '4px',
								width : 620,
								height : 200,
								hidden : true
							},
							{
								xtype : 'container',
								layout : 'vbox',
								items : [
										{
											xtype : 'label',
											text : 'KAPANIS',
											margin : '10 10 10 10',
											style : 'font-size: 20px; font-weight: bold;'
										},
										{
											xtype : 'label',
											text : 'CATIA  ve VERICUT',
											margin : '10 10 10 10',
											style : 'font-size: 16px; font-weight: bold;'
										} ]
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlCv21',
								name : 'cv21',
								fieldLabel : '1- CATIA CAM DOSYALARI SiSTEME YUKLENDi Mi? \\\\192.168.161.35\\Muhendislik\\PROJELER\\PROJE\\PARCA BiLGiLERi',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlCv22',
								name : 'cv22',
								fieldLabel : '2- VERICUT DOSYALARI SiSTEME YUKLENDi Mi? \\\\192.168.161.35\\Muhendislik\\PROJELER\\PROJE\\PARCA BiLGiLERi',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'label',
								text : 'NC PROGRAMLAR',
								margin : '10 10 10 10',
								style : 'font-size: 16px; font-weight: bold;'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlNc21',
								name : 'nc21',
								fieldLabel : '1- NC PROGRAM ETiKETLERi DOLDURULUP SiSTEME YUKLENDi Mi? \\\\192.168.161.35\\KaliteDoc\\CNC PROGRAMLAR',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'label',
								text : 'TAKIMLANDIRMA VE FISKTURLER',
								margin : '10 10 10 10',
								style : 'font-size: 16px; font-weight: bold;',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlTa11',
								name : 'ta11',
								fieldLabel : '1- YENi TAKIMLAR TAKIM LiSTESiNE EKLENDi Mi?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlTa12',
								name : 'ta12',
								fieldLabel : '2- TEZGAHTA iSLEME ESNASINDA FIKSTUR REViZYONU YAPILDI iSE MODEL FIKSTUR UZMANINA GONDERiLDi Mi?',
								margin : '10 10 10 10',
								labelWidth : '600px',
								hidden : true
							},
							{
								xtype : 'label',
								text : 'OBF ve OTF',
								margin : '10 10 10 10',
								style : 'font-size: 16px; font-weight: bold;'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlOb21',
								name : 'ob21',
								fieldLabel : '1- OBF SERi iMALATA HAZIR SEKiLDE  SiSTEME YUKLENDi Mi?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlOb22',
								name : 'ob22',
								fieldLabel : '2- FAI PARCASI GORSEL VE OLCU KONTROLLERi NC PROGRAMLAMA TAKIM LiDERi TARAFINDAN YAPILDI MI?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'checkbox',
								id : 'faiCtrlOb23',
								name : 'ob23',
								fieldLabel : '3- OBF iLE ORS ARASI UYUMLU OLACAK SEKiLDE HAZIRLANMIS MI/SiSTEME YUKLENMiS Mi?',
								margin : '10 10 10 10',
								labelWidth : '600px'
							},
							{
								xtype : 'label',
								text : 'FAI SUREC DEGERLENDiRMESi',
								margin : '10 10 10 10',
								style : 'font-size: 16px; font-weight: bold;'
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [ {
									xtype : 'numberfield',
									id : 'faiCtrlFa11',
									name : 'fa11',
									fieldLabel : 'PARCA TOPLAM TEKLiF SURESi',
									minValue : 0,
									margin : '4px',
									width : 160
								}, {
									xtype : 'numberfield',
									id : 'faiCtrlFa12',
									name : 'fa12',
									fieldLabel : 'PARCA FiiLi TOPLAM SURE',
									minValue : 0,
									margin : '4px',
									width : 160
								}, {
									xtype : 'textfield',
									id : 'faiCtrlFa13',
									name : 'fa13',
									fieldLabel : 'SUREC DEGERLENDiRME',
									margin : '4px',
									width : 280
								} ]
							},
							{
								xtype : 'label',
								text : 'FAI KAPANIS YORUMLAR',
								padding : '40 10 20 10',
								style : 'font-size: 16px; font-weight: bold;'
							},
							{
								xtype : 'textarea',
								id : 'faiCtrlFa14',
								name : 'fa14',
								margin : '4px',
								width : 620,
								height : 100
							},
							{
								xtype : 'button',
								id : 'faiCtrlSave',
								text : 'Save',
								margin : '4px',
								handler : function() {
									var form = Ext.ComponentQuery
											.query('faicontrollistform')[0];
									var formTab = Ext.ComponentQuery
											.query('#faiControlListForm')[0];
									var store = Ext.data.StoreManager
											.get("FaiControlListStore");
									if (form.isValid()) {
										form
												.submit({
													success : function(form,
															action) {
														Ext.Msg
																.alert('Info',
																		'FAI control list is saved');
														formTab.close();
														store.load();
													},
													failure : function(form,
															action) {
														Ext.Msg
																.alert('Error',
																		'FAI control list save is failed');
													}
												});
									}
								}
							} ]
				});