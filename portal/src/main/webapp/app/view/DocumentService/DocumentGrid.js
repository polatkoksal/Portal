Ext.define('Portal.view.DocumentService.DocumentGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.documentgrid',
	store : 'DocumentStore',
	height : 250,
	autoScroll : true,
	columns : [ {
		header : 'Document Number',
		dataIndex : 'docNumber',
		width : 200
	}, {
		header : 'Document Name',
		dataIndex : 'docName',
		width : 200
	}, {
		header : 'Document Type',
		dataIndex : 'docType',
		width : 200
	}, {
		header : 'Keywords',
		dataIndex : 'keyWord',
		width : 500
	} ],
	listeners : {
		itemclick : function(thi, record, item, index, e, eOpts) {
			Ext.ComponentQuery.query('documentupdateform')[0]
					.loadRecord(record);
		}
	}
});