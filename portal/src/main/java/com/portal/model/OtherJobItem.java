package com.portal.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

public class OtherJobItem implements Serializable {

	private static final long serialVersionUID = 8114086741172280292L;
	private Integer id;
	private String jobDesc;
	private String description;
	private String nameSurname;
	private Integer responsibleId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getJobDesc() {
		return jobDesc;
	}

	public void setJobDesc(String jobDesc) {
		this.jobDesc = jobDesc;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNameSurname() {
		return nameSurname;
	}

	public void setNameSurname(String nameSurname) {
		this.nameSurname = nameSurname;
	}

	public Integer getResponsibleId() {
		return responsibleId;
	}

	public void setResponsibleId(Integer responsibleId) {
		this.responsibleId = responsibleId;
	}

}
