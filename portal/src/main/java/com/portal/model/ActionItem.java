package com.portal.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class ActionItem implements Serializable {

	private static final long serialVersionUID = 765926324578648570L;
	private Integer id;
	private Integer jobId;
	private String actionDesc;
	private String actionStart;
	private String actionEnd;
	private String actionPercentage;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getJobId() {
		return jobId;
	}

	public void setJobId(Integer jobId) {
		this.jobId = jobId;
	}

	public String getActionDesc() {
		return actionDesc;
	}

	public void setActionDesc(String actionDesc) {
		this.actionDesc = actionDesc;
	}

	public String getActionStart() {
		return actionStart;
	}

	public void setActionStart(String actionStart) {
		this.actionStart = actionStart;
	}

	public String getActionEnd() {
		return actionEnd;
	}

	public void setActionEnd(String actionEnd) {
		this.actionEnd = actionEnd;
	}

	public String getActionPercentage() {
		return actionPercentage;
	}

	public void setActionPercentage(String actionPercentage) {
		this.actionPercentage = actionPercentage;
	}

}
