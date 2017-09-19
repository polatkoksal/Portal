Ext.define('Portal.view.FaiDfaiJobService.DoneFaiDfaiJobGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.donefaidfaijobgrid',
	store : 'DoneFaiDfaiJobStore',
	height : 500,
	columns : [ {
		header : 'Period',
		dataIndex : 'period',
		width : 80
	}, {
		header : 'Project Name',
		dataIndex : 'projectName',
		width : 80
	}, {
		header : 'Category',
		dataIndex : 'category',
		width : 80
	}, {
		header : 'Dpr Number',
		dataIndex : 'drpNumber',
		width : 80
	}, {
		header : 'Part Number',
		dataIndex : 'partNumber',
		width : 80
	}, {
		header : 'KH Code',
		dataIndex : 'khCode',
		width : 80
	}, {
		header : 'Machine Code',
		dataIndex : 'machineCode',
		width : 80
	}, {
		header : 'Setup Ap. Resp.',
		dataIndex : 'setupApResp',
		width : 80
	}, {
		header : 'Fixture Start',
		dataIndex : 'fixtureStart',
		width : 70
	}, {
		header : 'Fixture End',
		dataIndex : 'fixtureEnd',
		width : 70
	}, {
		header : '%',
		dataIndex : 'fixturePercentage',
		width : 30
	}, {
		header : 'Cam | Vericut Start',
		dataIndex : 'catiaStart',
		width : 70
	}, {
		header : 'Cam | Vericut End',
		dataIndex : 'catiaEnd',
		width : 70
	}, {
		header : '%',
		dataIndex : 'catiaPercentage',
		width : 30
	}, {
		header : 'Document Start',
		dataIndex : 'documentStart',
		width : 70
	}, {
		header : 'Document End',
		dataIndex : 'documentEnd',
		width : 70
	}, {
		header : '%',
		dataIndex : 'documentPercentage',
		width : 30
	}, {
		header : 'Machine Start',
		dataIndex : 'benchStart',
		width : 70
	}, {
		header : 'Machine End',
		dataIndex : 'benchEnd',
		width : 70
	}, {
		header : '%',
		dataIndex : 'benchPercentage',
		width : 30
	}, {
		header : 'Responsible',
		dataIndex : 'nameSurname',
		width : 80
	}, {
		header : 'Done Date',
		dataIndex : 'doneDate',
		width : 70
	}, {
		header : 'Description',
		dataIndex : 'description',
		width : 70
	} ]
});