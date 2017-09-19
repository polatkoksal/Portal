package com.portal.dao.domain;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "document", uniqueConstraints = { @UniqueConstraint(columnNames = { "doc_name" }) })
public class Document implements Serializable {

	private static final long serialVersionUID = -3471460597638008852L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "doc_number", length = 255)
	private String docNumber;

	@Column(name = "doc_name", length = 255)
	private String docName;

	@Column(name = "doc_type", length = 255)
	private String docType;

	@Column(name = "key_word", length = 255)
	private String keyWord;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDocNumber() {
		return docNumber;
	}

	public void setDocNumber(String docNumber) {
		this.docNumber = docNumber;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	public String getKeyWord() {
		return keyWord;
	}

	public void setKeyWord(String keyWord) {
		this.keyWord = keyWord;
	}

}
