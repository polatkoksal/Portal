Ext.define('Portal.view.MachineService.MachineTimeForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.machinetimeform',
	url : 'createUpdateMachineTime',
	method : 'POST',
	autoScroll : true,
	items : [ {
		xtype : 'hiddenfield',
		id : 'mTimeHiddenId',
		name : 'id'
	}, {
		xtype : 'hiddenfield',
		id : 'mTimeHiddenMachineId',
		name : 'machineId'
	}, {
		xtype : 'label',
		text : 'OP020 FLIP TIME',
		margin : '4px',
		style : 'font-size: 12px; font-weight: bold;'
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'numberfield',
			id : 'mTimeop020k',
			name : 'op020k',
			fieldLabel : 'S',
			minValue : 0,
			margin : '4px',
			labelWidth : 20,
			width : 110
		}, {
			xtype : 'numberfield',
			id : 'mTimeop020o',
			name : 'op020o',
			fieldLabel : 'M',
			minValue : 0,
			margin : '4px',
			labelWidth : 20,
			width : 110
		}, {
			xtype : 'numberfield',
			id : 'mTimeop020b',
			name : 'op020b',
			fieldLabel : 'L',
			minValue : 0,
			margin : '4px',
			labelWidth : 20,
			width : 110
		} ]
	}, {
		xtype : 'label',
		text : 'OP030/OP040/OP050 FLIP TIME',
		margin : '4px',
		style : 'font-size: 12px; font-weight: bold;'
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'numberfield',
			id : 'mTimeop030k',
			name : 'op030k',
			fieldLabel : 'S',
			minValue : 0,
			margin : '4px',
			labelWidth : 20,
			width : 110
		}, {
			xtype : 'numberfield',
			id : 'mTimeop030o',
			name : 'op030o',
			fieldLabel : 'M',
			minValue : 0,
			margin : '4px',
			labelWidth : 20,
			width : 110
		}, {
			xtype : 'numberfield',
			id : 'mTimeop030b',
			name : 'op030b',
			fieldLabel : 'L',
			minValue : 0,
			margin : '4px',
			labelWidth : 20,
			width : 110
		} ]
	}, {
		xtype : 'label',
		text : 'TAKILON / TOOL CHANGE',
		margin : '4px',
		style : 'font-size: 12px; font-weight: bold;'
	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'numberfield',
			id : 'mTimeopTakilon',
			name : 'takilon',
			fieldLabel : 'TAKILON',
			minValue : 0,
			margin : '4px',
			labelWidth : 60,
			width : 145
		}, {
			xtype : 'numberfield',
			id : 'mTimeopChange',
			name : 'change',
			fieldLabel : 'TOOL CHANGE',
			minValue : 0,
			margin : '4px',
			labelWidth : 95,
			width : 195
		} ]
	}, {
		xtype : 'button',
		id : 'mTimeSave',
		text : 'Save',
		margin : '4px',
		handler : function() {
			var form = Ext.ComponentQuery.query('machinetimeform')[0];
			var formTab = Ext.ComponentQuery.query('#machineTimeForm')[0];
			var store = Ext.data.StoreManager.get("MachineTimeStore");
			if (form.isValid()) {
				form.submit({
					success : function(form, action) {
						Ext.Msg.alert('Info', 'Machine times are saved');
						formTab.close();
						store.load();
					},
					failure : function(form, action) {
						Ext.Msg.alert('Error', 'Machine times save is failed');
					}
				});
			}
		}
	} ]
});