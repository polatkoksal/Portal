package com.portal.model;

import java.io.Serializable;

public class ComboUserItem implements Serializable {

	private static final long serialVersionUID = 2627251614435361514L;

	private Integer id;
	private String nameSurname;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNameSurname() {
		return nameSurname;
	}

	public void setNameSurname(String nameSurname) {
		this.nameSurname = nameSurname;
	}

}
