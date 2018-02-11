package com.portal.dao.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.portal.dao.domain.Document;
import com.portal.dao.domain.Machine;
import com.portal.dao.domain.MachineTime;
import com.portal.dao.domain.MachineTool;
import com.portal.dao.domain.MachineToolList;
import com.portal.dao.domain.Tool;
import com.portal.dao.model.MachineToolSearchParam;

public class ToolServiceDao implements IToolServiceDao {

	private EntityManagerFactory emf;
	private EntityManager em = null;

	public ToolServiceDao() {
		emf = Persistence.createEntityManagerFactory("portal-dao");
	}

	public EntityManager getEntityManager() {
		if (em == null || !em.isOpen()) {
			em = emf.createEntityManager();
		}
		return em;
	}

	@Override
	public Boolean createUpdateMachineToolList(MachineToolList machineToolList) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		if (machineToolList.getId() == null) {
			em.persist(machineToolList);
		} else {
			em.merge(machineToolList);
		}
		et.commit();
		return true;
	}

	@Override
	public List<MachineToolList> getMachineToolLists() {
		em = this.getEntityManager();
		Query query = em
				.createQuery("select u from MachineToolList u order by u.name");
		List<MachineToolList> machineToolLists = query.getResultList();
		return machineToolLists;
	}

	@Override
	public Boolean createUpdateTool(Tool tool) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		if (tool.getId() == null) {
			em.persist(tool);
		} else {
			em.merge(tool);
		}
		et.commit();
		return true;
	}

	@Override
	public List<Tool> getComboTools(String asmCode) {
		em = this.getEntityManager();

		Query query = em
				.createQuery("select u from Tool u where u.asmCode like :asmCode order by u.asmCode");
		query.setParameter("asmCode", asmCode + "%");
		List<Tool> tools = query.getResultList();
		return tools;
	}

	@Override
	public List<Tool> getTools(MachineToolSearchParam searchParam) {
		em = this.getEntityManager();

		String qParams = "";
		if (searchParam.getAsmCode() != null) {
			qParams = qParams + " and u.asmCode like :asmCode";
		}
		if (searchParam.getAsmDefinition() != null) {
			qParams = qParams + " and u.asmDefinition like :asmDefinition";
		}
		if (searchParam.getHolderCode() != null) {
			qParams = qParams + " and u.holderCode like :holderCode";
		}
		if (searchParam.getHolderDefinition() != null) {
			qParams = qParams
					+ " and u.holderDefinition like :holderDefinition";
		}
		if (searchParam.getShaftCode() != null) {
			qParams = qParams + " and u.shaftCode like :shaftCode";
		}
		if (searchParam.getShaftDefinition() != null) {
			qParams = qParams + " and u.shaftDefinition like :shaftDefinition";
		}
		if (searchParam.getCutterCode() != null) {
			qParams = qParams + " and u.cutterCode like :cutterCode";
		}
		if (searchParam.getCutterDefinition() != null) {
			qParams = qParams
					+ " and u.cutterDefinition like :cutterDefinition";
		}
		if (searchParam.getInsertCode() != null) {
			qParams = qParams + " and u.insertCode like :insertCode";
		}
		if (searchParam.getInsertDefinition() != null) {
			qParams = qParams
					+ " and u.insertDefinition like :insertDefinition";
		}
		if (searchParam.getfLengthSmaller() != null) {
			qParams = qParams + " and u.functionLength <:fLengthSmaller";
		}
		if (searchParam.getfLengthBigger() != null) {
			qParams = qParams + " and u.functionLength >:fLengthBigger";
		}
		if (searchParam.getToolOp() != null) {
			qParams = qParams + " and u.toolOp like :toolOp";
		}
		if (searchParam.getPartMaterial() != null) {
			qParams = qParams + " and u.partMaterial like :partMaterial";
		}

		if (!"".equals(qParams)) {
			qParams = " where " + qParams.substring(4);
		}

		String qString = "select u from Tool u" + qParams
				+ " order by u.asmCode";

		Query query = em.createQuery(qString);

		if (searchParam.getAsmCode() != null) {
			query.setParameter("asmCode", "%" + searchParam.getAsmCode() + "%");
		}
		if (searchParam.getAsmDefinition() != null) {
			query.setParameter("asmDefinition",
					"%" + searchParam.getAsmDefinition() + "%");
		}
		if (searchParam.getHolderCode() != null) {
			query.setParameter("holderCode", "%" + searchParam.getHolderCode()
					+ "%");
		}
		if (searchParam.getHolderDefinition() != null) {
			query.setParameter("holderDefinition",
					"%" + searchParam.getHolderDefinition() + "%");
		}
		if (searchParam.getShaftCode() != null) {
			query.setParameter("shaftCode", "%" + searchParam.getShaftCode()
					+ "%");
		}
		if (searchParam.getShaftDefinition() != null) {
			query.setParameter("shaftDefinition",
					"%" + searchParam.getShaftDefinition() + "%");
		}
		if (searchParam.getCutterCode() != null) {
			query.setParameter("cutterCode", "%" + searchParam.getCutterCode()
					+ "%");
		}
		if (searchParam.getCutterDefinition() != null) {
			query.setParameter("cutterDefinition",
					"%" + searchParam.getCutterDefinition() + "%");
		}
		if (searchParam.getInsertCode() != null) {
			query.setParameter("insertCode", "%" + searchParam.getInsertCode()
					+ "%");
		}
		if (searchParam.getInsertDefinition() != null) {
			query.setParameter("insertDefinition",
					"%" + searchParam.getInsertDefinition() + "%");
		}
		if (searchParam.getfLengthSmaller() != null) {
			query.setParameter("fLengthSmaller",
					searchParam.getfLengthSmaller());
		}
		if (searchParam.getfLengthBigger() != null) {
			query.setParameter("fLengthBigger", searchParam.getfLengthBigger());
		}
		if (searchParam.getToolOp() != null) {
			query.setParameter("toolOp", "%" + searchParam.getToolOp() + "%");
		}
		if (searchParam.getPartMaterial() != null) {
			query.setParameter("partMaterial",
					"%" + searchParam.getPartMaterial() + "%");
		}

		List<Tool> tools = query.getResultList();
		return tools;
	}

	@Override
	public Boolean deleteTool(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		Query query = em
				.createQuery("select u from MachineTool u where u.tool.id =:id");
		query.setParameter("id", id);
		List<MachineTool> machineTools = query.getResultList();
		et.begin();
		for (MachineTool m : machineTools) {
			MachineTool mt = em.find(MachineTool.class, m.getId());
			em.remove(mt);
		}
		et.commit();
		et.begin();
		Tool tool = em.find(Tool.class, id);
		em.remove(tool);
		et.commit();
		return true;
	}

	@Override
	public Boolean createUpdateMachineTool(Integer machineToolListId,
			Integer toolId, MachineTool machineTool) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		MachineToolList m = em.find(MachineToolList.class, machineToolListId);
		Tool t = em.find(Tool.class, toolId);
		machineTool.setMachineToolList(m);
		machineTool.setTool(t);
		et.begin();
		if (machineTool.getId() == null) {
			em.persist(machineTool);
		} else {
			em.merge(machineTool);
		}
		et.commit();
		return true;
	}

	@Override
	public List<MachineTool> getMachineTools(MachineToolSearchParam searchParam) {
		em = this.getEntityManager();
		String qParams = "";
		if (searchParam.getAsmCode() != null) {
			qParams = qParams + " and u.tool.asmCode like :asmCode";
		}
		if (searchParam.getAsmDefinition() != null) {
			qParams = qParams + " and u.tool.asmDefinition like :asmDefinition";
		}
		if (searchParam.getHolderCode() != null) {
			qParams = qParams + " and u.tool.holderCode like :holderCode";
		}
		if (searchParam.getHolderDefinition() != null) {
			qParams = qParams
					+ " and u.tool.holderDefinition like :holderDefinition";
		}
		if (searchParam.getShaftCode() != null) {
			qParams = qParams + " and u.tool.shaftCode like :shaftCode";
		}
		if (searchParam.getShaftDefinition() != null) {
			qParams = qParams
					+ " and u.tool.shaftDefinition like :shaftDefinition";
		}
		if (searchParam.getCutterCode() != null) {
			qParams = qParams + " and u.tool.cutterCode like :cutterCode";
		}
		if (searchParam.getCutterDefinition() != null) {
			qParams = qParams
					+ " and u.tool.cutterDefinition like :cutterDefinition";
		}
		if (searchParam.getInsertCode() != null) {
			qParams = qParams + " and u.tool.insertCode like :insertCode";
		}
		if (searchParam.getInsertDefinition() != null) {
			qParams = qParams
					+ " and u.tool.insertDefinition like :insertDefinition";
		}
		if (searchParam.getfLengthSmaller() != null) {
			qParams = qParams + " and u.tool.functionLength <:fLengthSmaller";
		}
		if (searchParam.getfLengthBigger() != null) {
			qParams = qParams + " and u.tool.functionLength >:fLengthBigger";
		}
		if (searchParam.getToolOp() != null) {
			qParams = qParams + " and u.tool.toolOp like :toolOp";
		}
		if (searchParam.getPartMaterial() != null) {
			qParams = qParams + " and u.tool.partMaterial like :partMaterial";
		}

		String qString = "select u from MachineTool u where u.machineToolList.id =:machineToolListId"
				+ qParams + " order by u.toolNumber";

		Query query = em.createQuery(qString);
		query.setParameter("machineToolListId",
				searchParam.getMachineToolListId());
		if (searchParam.getAsmCode() != null) {
			query.setParameter("asmCode", "%" + searchParam.getAsmCode() + "%");
		}
		if (searchParam.getAsmDefinition() != null) {
			query.setParameter("asmDefinition",
					"%" + searchParam.getAsmDefinition() + "%");
		}
		if (searchParam.getHolderCode() != null) {
			query.setParameter("holderCode", "%" + searchParam.getHolderCode()
					+ "%");
		}
		if (searchParam.getHolderDefinition() != null) {
			query.setParameter("holderDefinition",
					"%" + searchParam.getHolderDefinition() + "%");
		}
		if (searchParam.getShaftCode() != null) {
			query.setParameter("shaftCode", "%" + searchParam.getShaftCode()
					+ "%");
		}
		if (searchParam.getShaftDefinition() != null) {
			query.setParameter("shaftDefinition",
					"%" + searchParam.getShaftDefinition() + "%");
		}
		if (searchParam.getCutterCode() != null) {
			query.setParameter("cutterCode", "%" + searchParam.getCutterCode()
					+ "%");
		}
		if (searchParam.getCutterDefinition() != null) {
			query.setParameter("cutterDefinition",
					"%" + searchParam.getCutterDefinition() + "%");
		}
		if (searchParam.getInsertCode() != null) {
			query.setParameter("insertCode", "%" + searchParam.getInsertCode()
					+ "%");
		}
		if (searchParam.getInsertDefinition() != null) {
			query.setParameter("insertDefinition",
					"%" + searchParam.getInsertDefinition() + "%");
		}
		if (searchParam.getfLengthSmaller() != null) {
			query.setParameter("fLengthSmaller",
					searchParam.getfLengthSmaller());
		}
		if (searchParam.getfLengthBigger() != null) {
			query.setParameter("fLengthBigger", searchParam.getfLengthBigger());
		}
		if (searchParam.getToolOp() != null) {
			query.setParameter("toolOp", "%" + searchParam.getToolOp() + "%");
		}
		if (searchParam.getPartMaterial() != null) {
			query.setParameter("partMaterial",
					"%" + searchParam.getPartMaterial() + "%");
		}

		List<MachineTool> machineTools = query.getResultList();
		return machineTools;
	}

	@Override
	public Boolean deleteMachineToolList(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		Query query = em
				.createQuery("select u from MachineTool u where u.machineToolList.id =:id");
		query.setParameter("id", id);
		List<MachineTool> machineTools = query.getResultList();
		et.begin();
		for (MachineTool m : machineTools) {
			MachineTool mt = em.find(MachineTool.class, m.getId());
			em.remove(mt);
		}
		et.commit();
		et.begin();
		MachineToolList machineToolList = em.find(MachineToolList.class, id);
		em.remove(machineToolList);
		et.commit();
		return true;
	}

	@Override
	public Boolean deleteMachineTool(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		MachineTool machineTool = em.find(MachineTool.class, id);
		em.remove(machineTool);
		et.commit();
		return true;
	}

	@Override
	public Boolean createUpdateMachine(Machine machine) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		if (machine.getId() == null) {
			em.persist(machine);
		} else {
			em.merge(machine);
		}
		et.commit();
		return true;
	}

	@Override
	public List<Machine> getMachines() {
		em = this.getEntityManager();
		Query query = em.createQuery("select u from Machine u order by u.name");
		List<Machine> machines = query.getResultList();
		return machines;
	}

	@Override
	public Boolean deleteMachine(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		Machine machine = em.find(Machine.class, id);
		em.remove(machine);
		et.commit();
		return true;
	}

	@Override
	public Boolean createUpdateDocument(Document document) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		if (document.getId() == null) {
			em.persist(document);
		} else {
			em.merge(document);
		}
		et.commit();
		return true;
	}

	@Override
	public List<Document> getDocuments(String docType, String keyWord,
			String docName) {
		em = this.getEntityManager();
		String qParams = "";
		if (docType != null && !"".equals(docType)) {
			qParams = qParams + " and u.docType like :docType";
		}
		if (keyWord != null && !"".equals(keyWord)) {
			qParams = qParams + " and u.keyWord like :keyWord";
		}
		if (docName != null && !"".equals(docName)) {
			qParams = qParams + " and u.docName like :docName";
		}
		if (!"".equals(qParams)) {
			qParams = " where" + qParams.substring(4);
		}

		String qString = "select u from Document u" + qParams
				+ " order by u.docName";

		Query query = em.createQuery(qString);

		if (docType != null && !"".equals(docType)) {
			query.setParameter("docType", docType);
		}
		if (keyWord != null && !"".equals(keyWord)) {
			query.setParameter("keyWord", "%" + keyWord + "%");
		}
		if (docName != null && !"".equals(docName)) {
			query.setParameter("docName", "%" + docName + "%");
		}
		List<Document> documents = query.getResultList();
		return documents;
	}

	@Override
	public Boolean deleteDocument(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		Document document = em.find(Document.class, id);
		em.remove(document);
		et.commit();
		return true;
	}

	@Override
	public Boolean createUpdateMachineTime(MachineTime machineTime) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		Machine m = em.find(Machine.class, machineTime.getMachineId());
		machineTime.setMachine(m);

		if (machineTime.getId() == null) {
			em.persist(machineTime);
		} else {
			em.merge(machineTime);
		}
		et.commit();
		return true;
	}

	@Override
	public List<MachineTime> getMachineTime(Integer machineId) {
		em = this.getEntityManager();

		String parms = "";
		if (machineId != null) {
			parms = "where u.machine.id =:machineId ";
		}

		String qString = "select u from MachineTime u " + parms
				+ "order by u.id";

		Query query = em.createQuery(qString);

		if (machineId != null) {
			query.setParameter("machineId", machineId);
		}

		List<MachineTime> machineTimes = query.getResultList();
		return machineTimes;
	}

}
