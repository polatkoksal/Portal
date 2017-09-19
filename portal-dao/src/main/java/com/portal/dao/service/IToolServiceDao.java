package com.portal.dao.service;

import java.util.List;

import com.portal.dao.domain.Document;
import com.portal.dao.domain.Machine;
import com.portal.dao.domain.MachineToolList;
import com.portal.dao.domain.MachineTool;
import com.portal.dao.domain.Tool;
import com.portal.dao.model.MachineToolSearchParam;

public interface IToolServiceDao {

	public Boolean createUpdateMachineToolList(MachineToolList machine);

	public List<MachineToolList> getMachineToolLists();

	public Boolean createUpdateTool(Tool tool);

	public List<Tool> getTools(MachineToolSearchParam searchParam);

	public Boolean deleteTool(Integer id);

	public Boolean createUpdateMachineTool(Integer machineId, Integer toolId,
			MachineTool machineTool);

	public List<MachineTool> getMachineTools(MachineToolSearchParam searchParam);

	public Boolean deleteMachineToolList(Integer id);

	public Boolean deleteMachineTool(Integer id);

	public List<Machine> getMachines();

	public Boolean createUpdateMachine(Machine machine);

	public Boolean deleteMachine(Integer id);

	public Boolean createUpdateDocument(Document document);

	public List<Document> getDocuments(String docType, String keyWord,
			String docName);

	public Boolean deleteDocument(Integer id);

	public List<Tool> getComboTools(String asmCode);

}
