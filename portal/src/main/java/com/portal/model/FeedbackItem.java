package com.portal.model;

import java.io.Serializable;

public class FeedbackItem implements Serializable {

	private static final long serialVersionUID = 7705830378385780204L;

	private Integer id;
	private String projectName;
	private String partNumber;
	private String khCode;
	private String pdkNo;
	private String feedbackDate;
	private String description;
	private String imageName;
	private String feedbackStatus;
	private String responsibleName;
	private String feedbackProviderName;
	private Integer feedbackProviderId;
	private Integer responsibleId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getPartNumber() {
		return partNumber;
	}

	public void setPartNumber(String partNumber) {
		this.partNumber = partNumber;
	}

	public String getKhCode() {
		return khCode;
	}

	public void setKhCode(String khCode) {
		this.khCode = khCode;
	}

	public String getPdkNo() {
		return pdkNo;
	}

	public void setPdkNo(String pdkNo) {
		this.pdkNo = pdkNo;
	}

	public String getFeedbackDate() {
		return feedbackDate;
	}

	public void setFeedbackDate(String feedbackDate) {
		this.feedbackDate = feedbackDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getResponsibleName() {
		return responsibleName;
	}

	public void setResponsibleName(String responsibleName) {
		this.responsibleName = responsibleName;
	}

	public String getFeedbackProviderName() {
		return feedbackProviderName;
	}

	public void setFeedbackProviderName(String feedbackProviderName) {
		this.feedbackProviderName = feedbackProviderName;
	}

	public Integer getFeedbackProviderId() {
		return feedbackProviderId;
	}

	public void setFeedbackProviderId(Integer feedbackProviderId) {
		this.feedbackProviderId = feedbackProviderId;
	}

	public Integer getResponsibleId() {
		return responsibleId;
	}

	public void setResponsibleId(Integer responsibleId) {
		this.responsibleId = responsibleId;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getFeedbackStatus() {
		return feedbackStatus;
	}

	public void setFeedbackStatus(String feedbackStatus) {
		this.feedbackStatus = feedbackStatus;
	}

}
