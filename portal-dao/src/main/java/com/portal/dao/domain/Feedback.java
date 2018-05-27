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
@Table(name = "feedback")
public class Feedback implements Serializable {

	private static final long serialVersionUID = 4736595235193790204L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "project_name", length = 255)
	private String projectName;

	@Column(name = "part_number", length = 255)
	private String partNumber;

	@Column(name = "kh_code", length = 255)
	private String khCode;

	@Column(name = "pdk_no", length = 255)
	private String pdkNo;

	@Column(name = "feedback_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date feedbackDate;

	@Column(name = "description", length = 500)
	private String description;

	@Column(name = "image_name", length = 500)
	private String imageName;

	@Column(name = "feedback_status", length = 500)
	private String feedbackStatus;

	@ManyToOne
	@JoinColumn(name = "feedback_provider")
	private User feedbackProvider;

	@ManyToOne
	@JoinColumn(name = "responsible")
	private User responsible;

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

	public Date getFeedbackDate() {
		return feedbackDate;
	}

	public void setFeedbackDate(Date feedbackDate) {
		this.feedbackDate = feedbackDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public User getFeedbackProvider() {
		return feedbackProvider;
	}

	public void setFeedbackProvider(User feedbackProvider) {
		this.feedbackProvider = feedbackProvider;
	}

	public User getResponsible() {
		return responsible;
	}

	public void setResponsible(User responsible) {
		this.responsible = responsible;
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

	public String getFeedbackStatus() {
		return feedbackStatus;
	}

	public void setFeedbackStatus(String feedbackStatus) {
		this.feedbackStatus = feedbackStatus;
	}

}
