package com.portal.dao.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.portal.dao.domain.Action;
import com.portal.dao.domain.FaiControlList;
import com.portal.dao.domain.FaiDfaiJob;
import com.portal.dao.domain.Feedback;
import com.portal.dao.domain.Machine;
import com.portal.dao.domain.OtherJob;
import com.portal.dao.domain.User;

public class JobServiceDao implements IJobServiceDao {

	private EntityManagerFactory emf;
	private EntityManager em = null;

	public JobServiceDao() {
		emf = Persistence.createEntityManagerFactory("portal-dao");
	}

	public EntityManager getEntityManager() {
		if (em == null || !em.isOpen()) {
			em = emf.createEntityManager();
		}
		return em;
	}

	@Override
	public Boolean createUpdateJobRequest(Integer responsibleId,
			FaiDfaiJob faiDfaiJob) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		
		Machine m = em.find(Machine.class, faiDfaiJob.getMachineId());
		faiDfaiJob.setMachine(m);
		
		faiDfaiJob.setJobState("request");
		if (faiDfaiJob.getId() == null) {
			User u = em.find(User.class, responsibleId);
			faiDfaiJob.setResponsible(u);
			em.persist(faiDfaiJob);
		} else {
			FaiDfaiJob f = em.find(FaiDfaiJob.class, faiDfaiJob.getId());
			faiDfaiJob.setResponsible(f.getResponsible());
			em.merge(faiDfaiJob);
		}
		et.commit();
		return true;
	}

	@Override
	public Boolean createUpdateFaiDfaiJob(FaiDfaiJob faiDfaiJob, String jobState) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		User u = em.find(User.class, faiDfaiJob.getResponsibleId());
		faiDfaiJob.setResponsible(u);

		if (!jobState.equals("agreement")) {
			Machine m = em.find(Machine.class, faiDfaiJob.getMachineId());
			faiDfaiJob.setMachine(m);
		}

		faiDfaiJob.setJobState(jobState);

		if (faiDfaiJob.getId() == null) {
			em.persist(faiDfaiJob);
		} else {
			em.merge(faiDfaiJob);
		}
		et.commit();
		return true;
	}

	@Override
	public Boolean createUpdateFaiControlList(FaiControlList faiControlList,
			Integer faiJobId, Integer setId) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		FaiDfaiJob u = em.find(FaiDfaiJob.class, faiJobId);
		faiControlList.setFaiJob(u);

		User setUser = em.find(User.class, setId);
		faiControlList.setSetupApResp(setUser);

		if (faiControlList.getId() == null) {
			em.persist(faiControlList);
		} else {
			em.merge(faiControlList);
		}
		et.commit();
		return true;
	}

	@Override
	public List<FaiDfaiJob> getFaiDfaiJobs(Integer userId, String period,
			String projectName, String jobState) {
		em = this.getEntityManager();
		List<Integer> ids = new ArrayList<Integer>();

		if (userId != -1) {
			String cStr = "select c from FaiControlList c where c.setupApResp.id=:userId";
			Query cQuery = em.createQuery(cStr);
			cQuery.setParameter("userId", userId);
			List<FaiControlList> controlList = cQuery.getResultList();
			for (FaiControlList faiControlList : controlList) {
				if (!ids.contains(faiControlList.getFaiJob().getId())) {
					ids.add(faiControlList.getFaiJob().getId());
				}
			}
		}

		String qParams = "";
		if (userId != -1) {
			if (ids.size() == 0) {
				qParams = qParams + " and u.responsible.id =:userId";
			} else {
				qParams = qParams
						+ " and (u.responsible.id =:userId or u.id in :ids)";
			}

		}

		if (period != null && !"".equals(period)) {
			qParams = qParams + " and u.period =:period";
		}

		if (projectName != null && !"".equals(projectName)) {
			qParams = qParams + " and u.projectName like :projectName";
		}

		String qString = "select u from FaiDfaiJob u where "
				+ (jobState.equals("undone") ? "(u.jobState = 'undone' or u.jobState is null)" : "(u.jobState = '" + jobState + "')")
				+ qParams
				+ " order by u.fixtureStart, u.catiaStart, u.documentStart, u.benchStart";

		Query query = em.createQuery(qString);

		if (userId != -1) {
			query.setParameter("userId", userId);
			if (ids.size() > 0) {
				query.setParameter("ids", ids);
			}
		}

		if (period != null && !"".equals(period)) {
			query.setParameter("period", period);
		}
		if (projectName != null && !"".equals(projectName)) {
			query.setParameter("projectName", "%" + projectName + "%");
		}

		List<FaiDfaiJob> faiDfaiJobs = query.getResultList();

		return faiDfaiJobs;
	}

	@Override
	public FaiDfaiJob getFaiDfaiJob(Integer faiJobId) {
		if (faiJobId == null) {
			return null;
		}

		em = this.getEntityManager();

		String queryStr = "select u from FaiDfaiJob u where u.id =:id";

		Query query = em.createQuery(queryStr);
		query.setParameter("id", faiJobId);

		FaiDfaiJob f = (FaiDfaiJob) query.getSingleResult();

		return f;
	}

	@Override
	public List<FaiControlList> getFaiControlList(Integer faiJobId,
			Integer listNumber) {
		em = this.getEntityManager();

		String parms = "";
		if (faiJobId != null) {
			parms = "where u.faiJob.id =:faiJobId ";
		}

		if (listNumber != null && listNumber == 1) {
			parms += "and (u.listNumber =:listNumber or u.listNumber is null) ";
		} else if (listNumber != null) {
			parms += "and u.listNumber =:listNumber ";
		}

		String qString = "select u from FaiControlList u " + parms
				+ "order by u.id";

		Query query = em.createQuery(qString);

		if (faiJobId != null) {
			query.setParameter("faiJobId", faiJobId);
		}

		if (listNumber != null) {
			query.setParameter("listNumber", listNumber);
		}

		List<FaiControlList> faiControlList = query.getResultList();
		return faiControlList;
	}

	@Override
	public List<FaiDfaiJob> getJobRequests(Integer userId, String period,
			String projectName) {
		em = this.getEntityManager();

		String qParams = "";
		if (userId != -1) {
			qParams = qParams + " and u.responsible.id =:userId";
		}

		if (period != null && !"".equals(period)) {
			qParams = qParams + " and u.period =:period";
		}

		if (projectName != null && !"".equals(projectName)) {
			qParams = qParams + " and u.projectName like :projectName";
		}

		String qString = "select u from FaiDfaiJob u where "
				+ "u.jobState = 'request'" + qParams + " order by u.id";

		Query query = em.createQuery(qString);

		if (userId != -1) {
			query.setParameter("userId", userId);
		}

		if (period != null && !"".equals(period)) {
			query.setParameter("period", period);
		}
		if (projectName != null && !"".equals(projectName)) {
			query.setParameter("projectName", "%" + projectName + "%");
		}

		List<FaiDfaiJob> faiDfaiJobs = query.getResultList();
		return faiDfaiJobs;
	}

	@Override
	public List<FaiDfaiJob> getDoneFaiDfaiJobs(Integer userId, String partNumber) {
		em = this.getEntityManager();

		String qParams = "";
		if (userId != null && userId != -1) {
			qParams = qParams + " and u.responsible.id =:userId";
		}
		if (partNumber != null) {
			qParams = qParams + " and u.partNumber like :partNumber";
		}

		String qString = "select u from FaiDfaiJob u where u.jobState = 'done'"
				+ qParams + " order by u.id";
		Query query = em.createQuery(qString);

		if (userId != null && userId != -1) {
			query.setParameter("userId", userId);
		}
		if (partNumber != null) {
			query.setParameter("partNumber", "%" + partNumber + "%");
		}

		List<FaiDfaiJob> faiDfaiJobs = query.getResultList();
		return faiDfaiJobs;
	}

	@Override
	public Boolean createUpdateOtherJob(Integer responsibleId, OtherJob otherJob) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		User u = em.find(User.class, responsibleId);
		otherJob.setResponsible(u);

		if (otherJob.getId() == null) {
			em.persist(otherJob);
		} else {
			em.merge(otherJob);
		}
		et.commit();
		return true;
	}

	@Override
	public List<OtherJob> getOtherJobs(Integer userId) {
		em = this.getEntityManager();
		Query query = em
				.createQuery("select u from OtherJob u where u.responsible.id =:id order by u.id");
		query.setParameter("id", userId);
		List<OtherJob> otherJobs = query.getResultList();
		return otherJobs;
	}

	@Override
	public Boolean createUpdateAction(Integer jobId, Action action) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		OtherJob oj = em.find(OtherJob.class, jobId);
		action.setOtherJob(oj);

		if (action.getId() == null) {
			em.persist(action);
		} else {
			em.merge(action);
		}
		et.commit();
		return true;
	}

	@Override
	public List<Action> getActions(Integer jobId) {
		em = this.getEntityManager();
		Query query = em
				.createQuery("select u from Action u where u.otherJob.id =:id order by u.id");
		query.setParameter("id", jobId);
		List<Action> actions = query.getResultList();
		return actions;
	}

	@Override
	public Boolean deleteFaiDfaiJob(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		Query query = em
				.createQuery("select u from FaiControlList u where u.faiJob.id =:id");
		query.setParameter("id", id);
		List<FaiControlList> controlLists = query.getResultList();
		et.begin();
		for (FaiControlList a : controlLists) {
			FaiControlList c = em.find(FaiControlList.class, a.getId());
			em.remove(c);
		}
		et.commit();
		et.begin();
		FaiDfaiJob faiDfaiJob = em.find(FaiDfaiJob.class, id);
		em.remove(faiDfaiJob);
		et.commit();
		return true;
	}

	private void deleteFaiControlList(Integer faiId) {
		em = this.getEntityManager();
		Query query = em
				.createQuery("delete u from FaiControlList u where u.faiJob.id =:id");
		query.setParameter("id", faiId);
		query.executeUpdate();
	}

	@Override
	public Boolean deleteOtherJob(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		Query query = em
				.createQuery("select u from Action u where u.otherJob.id =:id");
		query.setParameter("id", id);
		List<Action> actions = query.getResultList();
		et.begin();
		for (Action a : actions) {
			Action ac = em.find(Action.class, a.getId());
			em.remove(ac);
		}
		et.commit();
		et.begin();
		OtherJob oj = em.find(OtherJob.class, id);
		em.remove(oj);
		et.commit();
		return true;
	}

	@Override
	public Boolean deleteAction(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		Action action = em.find(Action.class, id);
		em.remove(action);
		et.commit();
		return true;
	}

	@Override
	public Boolean doneFaiDfaiJob(Integer id, Date doneDate) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		FaiDfaiJob faiDfaiJob = em.find(FaiDfaiJob.class, id);
		faiDfaiJob.setJobState("done");
		faiDfaiJob.setDoneDate(doneDate);
		et.begin();
		em.merge(faiDfaiJob);
		et.commit();
		return true;
	}

	@Override
	public Boolean createUpdateFeedback(Feedback feedback) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		User u1 = em.find(User.class, feedback.getResponsibleId());
		feedback.setResponsible(u1);

		User u2 = em.find(User.class, feedback.getFeedbackProviderId());
		feedback.setFeedbackProvider(u2);

		if (feedback.getId() == null) {
			em.persist(feedback);
		} else {
			em.merge(feedback);
		}
		et.commit();
		return true;
	}

	@Override
	public List<Feedback> getFeedbacks(Integer userId) {
		em = this.getEntityManager();

		StringBuilder sb = new StringBuilder("select u from Feedback u ");
		if (userId != -1) {
			sb.append("where u.feedbackProvider.id =:userId or u.responsible.id =:userId ");
		}
		sb.append("order by u.id");

		Query query = em.createQuery(sb.toString());

		if (userId != -1) {
			query.setParameter("userId", userId);
		}

		List<Feedback> feedbacks = query.getResultList();

		return feedbacks;
	}

	@Override
	public Boolean deleteFeedback(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		Feedback feedback = em.find(Feedback.class, id);
		em.remove(feedback);
		et.commit();
		return true;
	}

}
