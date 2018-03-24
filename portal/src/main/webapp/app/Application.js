Ext.application({
	name : 'Portal',
	autoCreateViewport : true,
	models : [],
	stores : [ 'MenuStore', 'UserStore', 'SessionUserStore', 'ComboUserStore',
			'FaiDfaiJobStore', 'OtherJobStore', 'ActionStore',
			'MachineToolListStore', 'ToolStore', 'MachineToolStore',
			'ComboToolStore', 'MachineStore', 'DocumentStore',
			'UserSkillStore', 'DoneFaiDfaiJobStore', 'ComboFaiUserStore',
			'JobRequestStore', 'FaiControlListStore', 'MachineTimeStore',
			'FeedbackStore' ],
	controllers : [],
	views : [],
	launch : function() {
	}
});
