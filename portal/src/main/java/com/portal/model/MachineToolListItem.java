package com.portal.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

public class MachineToolListItem implements Serializable {

	private static final long serialVersionUID = 3227739472537449002L;

	private Integer id;
	private String name;

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

}
