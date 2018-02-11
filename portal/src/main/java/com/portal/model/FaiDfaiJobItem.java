package com.portal.model;

import java.io.Serializable;

import javax.persistence.Column;

public class FaiDfaiJobItem implements Serializable {

	private static final long serialVersionUID = -6142422074178131120L;

	private Integer id;
	private String partNumber;
	private String drpNumber;
	private String projectName;
	private String category;
	private String period;
	private String khCode;
	private String machineCode;
	private String fixtureStart;
	private String fixtureEnd;
	private String fixturePercentage;
	private String catiaStart;
	private String catiaEnd;
	private String catiaPercentage;
	private String documentStart;
	private String documentEnd;
	private String documentPercentage;
	private String benchStart;
	private String benchEnd;
	private String benchPercentage;
	private String description;
	private String nameSurname;
	private String doneDate;
	private Integer responsibleId;
	private String machineName;
	private Integer machineId;
	private Double rawWidth;
	private Double rawLength;
	private Double rawHeigth;

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

	public String getFixtureStart() {
		return fixtureStart;
	}

	public void setFixtureStart(String fixtureStart) {
		this.fixtureStart = fixtureStart;
	}

	public String getFixtureEnd() {
		return fixtureEnd;
	}

	public void setFixtureEnd(String fixtureEnd) {
		this.fixtureEnd = fixtureEnd;
	}

	public String getFixturePercentage() {
		return fixturePercentage;
	}

	public void setFixturePercentage(String fixturePercentage) {
		this.fixturePercentage = fixturePercentage;
	}

	public String getCatiaStart() {
		return catiaStart;
	}

	public void setCatiaStart(String catiaStart) {
		this.catiaStart = catiaStart;
	}

	public String getCatiaEnd() {
		return catiaEnd;
	}

	public void setCatiaEnd(String catiaEnd) {
		this.catiaEnd = catiaEnd;
	}

	public String getCatiaPercentage() {
		return catiaPercentage;
	}

	public void setCatiaPercentage(String catiaPercentage) {
		this.catiaPercentage = catiaPercentage;
	}

	public String getDocumentStart() {
		return documentStart;
	}

	public void setDocumentStart(String documentStart) {
		this.documentStart = documentStart;
	}

	public String getDocumentEnd() {
		return documentEnd;
	}

	public void setDocumentEnd(String documentEnd) {
		this.documentEnd = documentEnd;
	}

	public String getDocumentPercentage() {
		return documentPercentage;
	}

	public void setDocumentPercentage(String documentPercentage) {
		this.documentPercentage = documentPercentage;
	}

	public String getBenchStart() {
		return benchStart;
	}

	public void setBenchStart(String benchStart) {
		this.benchStart = benchStart;
	}

	public String getBenchEnd() {
		return benchEnd;
	}

	public void setBenchEnd(String benchEnd) {
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

	public String getDoneDate() {
		return doneDate;
	}

	public void setDoneDate(String doneDate) {
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

	public String getMachineName() {
		return machineName;
	}

	public void setMachineName(String machineName) {
		this.machineName = machineName;
	}

	public Integer getMachineId() {
		return machineId;
	}

	public void setMachineId(Integer machineId) {
		this.machineId = machineId;
	}

	public Double getRawWidth() {
		return rawWidth;
	}

	public void setRawWidth(Double rawWidth) {
		this.rawWidth = rawWidth;
	}

	public Double getRawLength() {
		return rawLength;
	}

	public void setRawLength(Double rawLength) {
		this.rawLength = rawLength;
	}

	public Double getRawHeigth() {
		return rawHeigth;
	}

	public void setRawHeigth(Double rawHeigth) {
		this.rawHeigth = rawHeigth;
	}

}
