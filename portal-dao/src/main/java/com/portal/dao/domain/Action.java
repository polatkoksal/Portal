package com.portal.dao.domain;

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

@Entity
@Table(name = "action")
public class Action implements Serializable {

	private static final long serialVersionUID = 765926324578648570L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "action_desc", length = 500)
	private String actionDesc;

	@Column(name = "action_start")
	@Temporal(TemporalType.TIMESTAMP)
	private Date actionStart;

	@Column(name = "action_end")
	@Temporal(TemporalType.TIMESTAMP)
	private Date actionEnd;

	@Column(name = "action_percentage", length = 255)
	private String actionPercentage;

	@ManyToOne(targetEntity = OtherJob.class)
	@JoinColumn(name = "other_job_id")
	private OtherJob otherJob;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getActionDesc() {
		return actionDesc;
	}

	public void setActionDesc(String actionDesc) {
		this.actionDesc = actionDesc;
	}

	public Date getActionStart() {
		return actionStart;
	}

	public void setActionStart(Date actionStart) {
		this.actionStart = actionStart;
	}

	public Date getActionEnd() {
		return actionEnd;
	}

	public void setActionEnd(Date actionEnd) {
		this.actionEnd = actionEnd;
	}

	public String getActionPercentage() {
		return actionPercentage;
	}

	public void setActionPercentage(String actionPercentage) {
		this.actionPercentage = actionPercentage;
	}

	public OtherJob getOtherJob() {
		return otherJob;
	}

	public void setOtherJob(OtherJob otherJob) {
		this.otherJob = otherJob;
	}

}
