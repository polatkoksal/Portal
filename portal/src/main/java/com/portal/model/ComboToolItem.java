package com.portal.model;

import java.io.Serializable;

public class ComboToolItem implements Serializable {

	private static final long serialVersionUID = -6496878888574638925L;

	private Integer id;
	private String asmCode;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAsmCode() {
		return asmCode;
	}

	public void setAsmCode(String asmCode) {
		this.asmCode = asmCode;
	}

}
