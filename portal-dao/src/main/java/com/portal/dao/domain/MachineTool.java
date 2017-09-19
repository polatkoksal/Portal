package com.portal.dao.domain;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "machine_tool", uniqueConstraints = { @UniqueConstraint(columnNames = { "tool_number" }) })
public class MachineTool implements Serializable {

	private static final long serialVersionUID = 3786634420282072102L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "tool_number", length = 255)
	private String toolNumber;

	@OneToOne
	@JoinColumn(name = "tool")
	private Tool tool;

	@ManyToOne
	@JoinColumn(name = "machine_tool_list")
	private MachineToolList machineToolList;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getToolNumber() {
		return toolNumber;
	}

	public void setToolNumber(String toolNumber) {
		this.toolNumber = toolNumber;
	}

	public Tool getTool() {
		return tool;
	}

	public void setTool(Tool tool) {
		this.tool = tool;
	}

	public MachineToolList getMachineToolList() {
		return machineToolList;
	}

	public void setMachineToolList(MachineToolList machineToolList) {
		this.machineToolList = machineToolList;
	}

}
