Ext.define('Portal.view.FeedbackService.FeedbackGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.feedbackgrid',
	requires : [ 'Portal.view.FeedbackService.FeedbackUpdateForm' ],
	store : 'FeedbackStore',
	height : 500,
	columns : [ {
		header : 'Project Name',
		dataIndex : 'projectName',
		width : 150
	}, {
		header : 'Part Number',
		dataIndex : 'partNumber',
		width : 150
	}, {
		header : 'KH Code',
		dataIndex : 'khCode',
		width : 150
	}, {
		header : 'PDK NO',
		dataIndex : 'pdkNo',
		width : 150
	}, {
		header : 'Feedback Date',
		dataIndex : 'feedbackDate',
		width : 150
	}, {
		header : 'Description',
		dataIndex : 'description',
		width : 150
	}, {
		header : 'Responsible',
		dataIndex : 'responsibleName',
		width : 150
	}, {
		header : 'Feedback Provider',
		dataIndex : 'feedbackProviderName',
		width : 150
	}, {
		header : 'Status',
		dataIndex : 'feedbackStatus',
		width : 150
	} ],
	listeners : {
		itemdblclick : function(thi, record, item, index, e, eOpts) {
			var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];
			if (!tabPanel.getChildByElement('feedbackUpdateForm')) {
				tabPanel.add({
					xtype : 'feedbackupdateform',
					id : 'feedbackUpdateForm',
					title : 'Update Feedback',
					closable : true
				})
				Ext.ComponentQuery.query('#feedbackUpdateForm')[0]
						.loadRecord(record);
				var img = Ext.ComponentQuery.query('#feedbackUpdateImage')[0];
				var imgName = record.get('imageName');
				img.setSrc('getImage?imgName=' + imgName);
				var responsibleId = record.data.responsibleId;
				var feedbackProviderId = record.data.feedbackProviderId;
				var comboUserStore = Ext.data.StoreManager
						.get("ComboUserStore");
				var responsibleCombo = Ext.ComponentQuery
						.query('#feedbackResponsible2')[0];
				var feedbackCombo = Ext.ComponentQuery
						.query('#feedbackProvider2')[0];
				comboUserStore.load({
					callback : function() {
						responsibleCombo.setValue(responsibleId);
						feedbackCombo.setValue(feedbackProviderId);
					}
				});

			}
			tabPanel.setActiveTab("feedbackUpdateForm");
		}
	}
});