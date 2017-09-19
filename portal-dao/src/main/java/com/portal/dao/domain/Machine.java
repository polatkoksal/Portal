package com.portal.dao.domain;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "machine")
public class Machine implements Serializable {

	private static final long serialVersionUID = 6494737163628671357L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "name", length = 255)
	private String name;

	@Column(name = "type", length = 255)
	private String type;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
