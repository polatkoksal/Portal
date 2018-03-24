package com.portal.dao.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "user", uniqueConstraints = { @UniqueConstraint(columnNames = { "user_name" }) })
public class User implements Serializable {

	private static final long serialVersionUID = 8111766133475140982L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "user_name", length = 255)
	private String userName;

	@Column(name = "password", length = 255)
	private String password;

	@Column(name = "name", length = 255)
	private String name;

	@Column(name = "lastName", length = 255)
	private String lastName;

	@Column(name = "register_number", length = 255)
	private String registerNumber;

	@Column(name = "duty", length = 255)
	private String duty;

	@Column(name = "telephone", length = 255)
	private String telephone;

	@Column(name = "email", length = 255)
	private String email;

	@Column(name = "role", length = 255)
	private String role;

	@OneToMany(mappedBy = "responsible")
	private List<FaiDfaiJob> faiDfaiJobs;

	@OneToMany(mappedBy = "setupApResp")
	private List<FaiControlList> setupFaiControlList;

	@OneToMany(mappedBy = "responsible")
	private List<OtherJob> otherJobs;

	@OneToMany(mappedBy = "user")
	private List<UserSkill> userSkills;

	@OneToMany(mappedBy = "feedbackProvider")
	private List<Feedback> providerFeedbacks;

	@OneToMany(mappedBy = "responsible")
	private List<Feedback> responsibleFeedbacks;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRegisterNumber() {
		return registerNumber;
	}

	public void setRegisterNumber(String registerNumber) {
		this.registerNumber = registerNumber;
	}

	public String getDuty() {
		return duty;
	}

	public void setDuty(String duty) {
		this.duty = duty;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<FaiDfaiJob> getFaiDfaiJobs() {
		return faiDfaiJobs;
	}

	public void setFaiDfaiJobs(List<FaiDfaiJob> faiDfaiJobs) {
		this.faiDfaiJobs = faiDfaiJobs;
	}

	public List<OtherJob> getOtherJobs() {
		return otherJobs;
	}

	public void setOtherJobs(List<OtherJob> otherJobs) {
		this.otherJobs = otherJobs;
	}

	public List<UserSkill> getUserSkills() {
		return userSkills;
	}

	public void setUserSkills(List<UserSkill> userSkills) {
		this.userSkills = userSkills;
	}

	public List<FaiControlList> getSetupFaiControlList() {
		return setupFaiControlList;
	}

	public void setSetupFaiControlList(List<FaiControlList> setupFaiControlList) {
		this.setupFaiControlList = setupFaiControlList;
	}

	public List<Feedback> getProviderFeedbacks() {
		return providerFeedbacks;
	}

	public void setProviderFeedbacks(List<Feedback> providerFeedbacks) {
		this.providerFeedbacks = providerFeedbacks;
	}

	public List<Feedback> getResponsibleFeedbacks() {
		return responsibleFeedbacks;
	}

	public void setResponsibleFeedbacks(List<Feedback> responsibleFeedbacks) {
		this.responsibleFeedbacks = responsibleFeedbacks;
	}

}
