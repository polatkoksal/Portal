package com.portal.dao.service;

import java.util.Date;
import java.util.List;

import com.portal.dao.domain.Action;
import com.portal.dao.domain.FaiControlList;
import com.portal.dao.domain.FaiDfaiJob;
import com.portal.dao.domain.Feedback;
import com.portal.dao.domain.OtherJob;

public interface IJobServiceDao {

	public Boolean createUpdateFaiDfaiJob(FaiDfaiJob faiDfaiJob, String jobState);

	public Boolean createUpdateJobRequest(Integer responsibleId,
			FaiDfaiJob faiDfaiJob);

	public List<FaiDfaiJob> getFaiDfaiJobs(Integer userId, String period,
			String projectName, String jobState);

	public List<FaiDfaiJob> getJobRequests(Integer userId, String period,
			String projectName);

	public Boolean createUpdateOtherJob(Integer responsibleId, OtherJob otherJob);

	public List<OtherJob> getOtherJobs(Integer userId);

	public Boolean createUpdateAction(Integer jobId, Action action);

	public List<Action> getActions(Integer jobId);

	public Boolean deleteFaiDfaiJob(Integer id);

	public Boolean deleteOtherJob(Integer id);

	public Boolean deleteAction(Integer id);

	public List<FaiDfaiJob> getDoneFaiDfaiJobs(Integer userId, String partNumber);

	public Boolean doneFaiDfaiJob(Integer id, Date doneDate);

	public List<FaiControlList> getFaiControlList(Integer faiJobId,
			Integer listNumber);

	public Boolean createUpdateFaiControlList(FaiControlList faiControlList,
			Integer faiJobId, Integer setId);

	public FaiDfaiJob getFaiDfaiJob(Integer faiJobId);

	public Boolean createUpdateFeedback(Feedback feedback);

	public List<Feedback> getFeedbacks(Integer userId);

	public Boolean deleteFeedback(Integer id);

}
