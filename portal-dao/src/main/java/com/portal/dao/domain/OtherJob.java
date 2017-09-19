package com.portal.dao.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "other_job")
public class OtherJob implements Serializable {

	private static final long serialVersionUID = 8114086741172280292L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "job_desc", length = 255)
	private String jobDesc;

	@Column(name = "description", length = 500)
	private String description;

	@OneToMany(mappedBy = "otherJob")
	private List<Action> actions;

	@ManyToOne
	@JoinColumn(name = "responsible")
	private User responsible;

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

	public List<Action> getActions() {
		return actions;
	}

	public void setActions(List<Action> actions) {
		this.actions = actions;
	}

	public User getResponsible() {
		return responsible;
	}

	public void setResponsible(User responsible) {
		this.responsible = responsible;
	}

}
