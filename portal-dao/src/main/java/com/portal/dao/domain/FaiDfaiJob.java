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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "fai_dfai_job")
public class FaiDfaiJob implements Serializable {

	private static final long serialVersionUID = -6142422074178131120L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "part_number", length = 255)
	private String partNumber;

	@Column(name = "drp_number", length = 255)
	private String drpNumber;

	@Column(name = "project_name", length = 255)
	private String projectName;

	@Column(name = "category", length = 255)
	private String category;

	@Column(name = "period", length = 255)
	private String period;

	@Column(name = "kh_code", length = 255)
	private String khCode;

	@Column(name = "machine_code", length = 255)
	private String machineCode;

	@Column(name = "fixture_start")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fixtureStart;

	@Column(name = "fixture_end")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fixtureEnd;

	@Column(name = "fixture_percentage", length = 255)
	private String fixturePercentage;

	@Column(name = "catia_start")
	@Temporal(TemporalType.TIMESTAMP)
	private Date catiaStart;

	@Column(name = "catia_end")
	@Temporal(TemporalType.TIMESTAMP)
	private Date catiaEnd;

	@Column(name = "catia_percentage", length = 255)
	private String catiaPercentage;

	@Column(name = "document_start")
	@Temporal(TemporalType.TIMESTAMP)
	private Date documentStart;

	@Column(name = "document_end")
	@Temporal(TemporalType.TIMESTAMP)
	private Date documentEnd;

	@Column(name = "document_percentage", length = 255)
	private String documentPercentage;

	@Column(name = "bench_start")
	@Temporal(TemporalType.TIMESTAMP)
	private Date benchStart;

	@Column(name = "bench_end")
	@Temporal(TemporalType.TIMESTAMP)
	private Date benchEnd;

	@Column(name = "bench_percentage", length = 255)
	private String benchPercentage;

	@Column(name = "description", length = 500)
	private String description;

	@Column(name = "job_state", length = 255)
	private String jobState;

	@Column(name = "done_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date doneDate;

	@ManyToOne
	@JoinColumn(name = "responsible")
	private User responsible;

	@ManyToOne
	@JoinColumn(name = "setupApResp")
	private User setupApResp;

	@OneToOne(mappedBy = "faiJob")
	private FaiControlList controlList;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPartNumber() {
		return partNumber;
	}

	public void setPartNumber(String partNumber) {
		this.partNumber = partNumber;
	}

	public String getDrpNumber() {
		return drpNumber;
	}

	public void setDrpNumber(String drpNumber) {
		this.drpNumber = drpNumber;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getKhCode() {
		return khCode;
	}

	public void setKhCode(String khCode) {
		this.khCode = khCode;
	}

	public String getMachineCode() {
		return machineCode;
	}

	public void setMachineCode(String machineCode) {
		this.machineCode = machineCode;
	}

	public Date getCatiaStart() {
		return catiaStart;
	}

	public void setCatiaStart(Date catiaStart) {
		this.catiaStart = catiaStart;
	}

	public Date getCatiaEnd() {
		return catiaEnd;
	}

	public void setCatiaEnd(Date catiaEnd) {
		this.catiaEnd = catiaEnd;
	}

	public String getCatiaPercentage() {
		return catiaPercentage;
	}

	public void setCatiaPercentage(String catiaPercentage) {
		this.catiaPercentage = catiaPercentage;
	}

	public Date getFixtureStart() {
		return fixtureStart;
	}

	public void setFixtureStart(Date fixtureStart) {
		this.fixtureStart = fixtureStart;
	}

	public Date getFixtureEnd() {
		return fixtureEnd;
	}

	public void setFixtureEnd(Date fixtureEnd) {
		this.fixtureEnd = fixtureEnd;
	}

	public String getFixturePercentage() {
		return fixturePercentage;
	}

	public void setFixturePercentage(String fixturePercentage) {
		this.fixturePercentage = fixturePercentage;
	}

	public Date getDocumentStart() {
		return documentStart;
	}

	public void setDocumentStart(Date documentStart) {
		this.documentStart = documentStart;
	}

	public Date getDocumentEnd() {
		return documentEnd;
	}

	public void setDocumentEnd(Date documentEnd) {
		this.documentEnd = documentEnd;
	}

	public String getDocumentPercentage() {
		return documentPercentage;
	}

	public void setDocumentPercentage(String documentPercentage) {
		this.documentPercentage = documentPercentage;
	}

	public Date getBenchStart() {
		return benchStart;
	}

	public void setBenchStart(Date benchStart) {
		this.benchStart = benchStart;
	}

	public Date getBenchEnd() {
		return benchEnd;
	}

	public void setBenchEnd(Date benchEnd) {
		this.benchEnd = benchEnd;
	}

	public String getBenchPercentage() {
		return benchPercentage;
	}

	public void setBenchPercentage(String benchPercentage) {
		this.benchPercentage = benchPercentage;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getJobState() {
		return jobState;
	}

	public void setJobState(String jobState) {
		this.jobState = jobState;
	}

	public User getResponsible() {
		return responsible;
	}

	public void setResponsible(User responsible) {
		this.responsible = responsible;
	}

	public User getSetupApResp() {
		return setupApResp;
	}

	public void setSetupApResp(User setupApResp) {
		this.setupApResp = setupApResp;
	}

	public Date getDoneDate() {
		return doneDate;
	}

	public void setDoneDate(Date doneDate) {
		this.doneDate = doneDate;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPeriod() {
		return period;
	}

	public void setPeriod(String period) {
		this.period = period;
	}

	public FaiControlList getControlList() {
		return controlList;
	}

	public void setControlList(FaiControlList controlList) {
		this.controlList = controlList;
	}

}
