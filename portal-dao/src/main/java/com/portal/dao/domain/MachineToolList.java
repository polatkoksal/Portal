package com.portal.dao.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "machine_tool_list", uniqueConstraints = { @UniqueConstraint(columnNames = { "name" }) })
public class MachineToolList implements Serializable {

	private static final long serialVersionUID = 3227739472537449002L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "name", length = 255)
	private String name;

	@OneToMany(mappedBy = "machineToolList")
	private List<MachineTool> machineTools;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<MachineTool> getMachineTools() {
		return machineTools;
	}

	public void setMachineTools(List<MachineTool> machineTools) {
		this.machineTools = machineTools;
	}

}
