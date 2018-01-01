package com.portal.dao.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "fai_control_list")
public class FaiControlList implements Serializable {

	private static final long serialVersionUID = -6083123613914576003L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "faiJob")
	private FaiDfaiJob faiJob;

	@ManyToOne
	@JoinColumn(name = "setupApResp")
	private User setupApResp;

	@Column(name = "list_number")
	private Integer listNumber;

	@Column(name = "operation_code")
	private String operationCode;

	@Column(name = "cv11")
	private Boolean cv11;

	@Column(name = "cv12")
	private Boolean cv12;

	@Column(name = "cv13")
	private Boolean cv13;

	@Column(name = "cv14")
	private Boolean cv14;

	@Column(name = "cv15")
	private Boolean cv15;

	@Column(name = "nc11")
	private Boolean nc11;

	@Column(name = "nc12")
	private Boolean nc12;

	@Column(name = "nc13")
	private Boolean nc13;

	@Column(name = "nc14")
	private Boolean nc14;

	@Column(name = "se11")
	private Boolean se11;

	@Column(name = "se12")
	private Boolean se12;

	@Column(name = "ob11")
	private Boolean ob11;

	@Column(name = "ob12")
	private Boolean ob12;

	@Column(name = "se21")
	private Boolean se21;

	@Column(name = "se22")
	private Boolean se22;

	@Column(name = "se23")
	private Boolean se23;

	@Column(name = "se24")
	private Boolean se24;

	@Column(name = "no11", length = 4000)
	private String no11;

	@Column(name = "no12", length = 4000)
	private String no12;

	@Column(name = "cv21")
	private Boolean cv21;

	@Column(name = "cv22")
	private Boolean cv22;

	@Column(name = "nc21")
	private Boolean nc21;

	@Column(name = "ta11")
	private Boolean ta11;

	@Column(name = "ta12")
	private Boolean ta12;

	@Column(name = "ob21")
	private Boolean ob21;

	@Column(name = "ob22")
	private Boolean ob22;

	@Column(name = "ob23")
	private Boolean ob23;

	@Column(name = "fa11")
	private Integer fa11;

	@Column(name = "fa12")
	private Integer fa12;

	@Column(name = "fa13", length = 100)
	private String fa13;

	@Column(name = "fa14", length = 500)
	private String fa14;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public FaiDfaiJob getFaiJob() {
		return faiJob;
	}

	public void setFaiJob(FaiDfaiJob faiJob) {
		this.faiJob = faiJob;
	}

	public User getSetupApResp() {
		return setupApResp;
	}

	public void setSetupApResp(User setupApResp) {
		this.setupApResp = setupApResp;
	}

	public Integer getListNumber() {
		return listNumber;
	}

	public void setListNumber(Integer listNumber) {
		this.listNumber = listNumber;
	}

	public String getOperationCode() {
		return operationCode;
	}

	public void setOperationCode(String operationCode) {
		this.operationCode = operationCode;
	}

	public Boolean getCv11() {
		return cv11;
	}

	public void setCv11(Boolean cv11) {
		this.cv11 = cv11;
	}

	public Boolean getCv12() {
		return cv12;
	}

	public void setCv12(Boolean cv12) {
		this.cv12 = cv12;
	}

	public Boolean getCv13() {
		return cv13;
	}

	public void setCv13(Boolean cv13) {
		this.cv13 = cv13;
	}

	public Boolean getCv14() {
		return cv14;
	}

	public void setCv14(Boolean cv14) {
		this.cv14 = cv14;
	}

	public Boolean getCv15() {
		return cv15;
	}

	public void setCv15(Boolean cv15) {
		this.cv15 = cv15;
	}

	public Boolean getNc11() {
		return nc11;
	}

	public void setNc11(Boolean nc11) {
		this.nc11 = nc11;
	}

	public Boolean getNc12() {
		return nc12;
	}

	public void setNc12(Boolean nc12) {
		this.nc12 = nc12;
	}

	public Boolean getNc13() {
		return nc13;
	}

	public void setNc13(Boolean nc13) {
		this.nc13 = nc13;
	}

	public Boolean getNc14() {
		return nc14;
	}

	public void setNc14(Boolean nc14) {
		this.nc14 = nc14;
	}

	public Boolean getSe11() {
		return se11;
	}

	public void setSe11(Boolean se11) {
		this.se11 = se11;
	}

	public Boolean getSe12() {
		return se12;
	}

	public void setSe12(Boolean se12) {
		this.se12 = se12;
	}

	public Boolean getOb11() {
		return ob11;
	}

	public void setOb11(Boolean ob11) {
		this.ob11 = ob11;
	}

	public Boolean getOb12() {
		return ob12;
	}

	public void setOb12(Boolean ob12) {
		this.ob12 = ob12;
	}

	public Boolean getSe21() {
		return se21;
	}

	public void setSe21(Boolean se21) {
		this.se21 = se21;
	}

	public Boolean getSe22() {
		return se22;
	}

	public void setSe22(Boolean se22) {
		this.se22 = se22;
	}

	public Boolean getSe23() {
		return se23;
	}

	public void setSe23(Boolean se23) {
		this.se23 = se23;
	}

	public Boolean getSe24() {
		return se24;
	}

	public void setSe24(Boolean se24) {
		this.se24 = se24;
	}

	public String getNo11() {
		return no11;
	}

	public void setNo11(String no11) {
		this.no11 = no11;
	}

	public String getNo12() {
		return no12;
	}

	public void setNo12(String no12) {
		this.no12 = no12;
	}

	public Boolean getCv21() {
		return cv21;
	}

	public void setCv21(Boolean cv21) {
		this.cv21 = cv21;
	}

	public Boolean getCv22() {
		return cv22;
	}

	public void setCv22(Boolean cv22) {
		this.cv22 = cv22;
	}

	public Boolean getNc21() {
		return nc21;
	}

	public void setNc21(Boolean nc21) {
		this.nc21 = nc21;
	}

	public Boolean getTa11() {
		return ta11;
	}

	public void setTa11(Boolean ta11) {
		this.ta11 = ta11;
	}

	public Boolean getTa12() {
		return ta12;
	}

	public void setTa12(Boolean ta12) {
		this.ta12 = ta12;
	}

	public Boolean getOb21() {
		return ob21;
	}

	public void setOb21(Boolean ob21) {
		this.ob21 = ob21;
	}

	public Boolean getOb22() {
		return ob22;
	}

	public void setOb22(Boolean ob22) {
		this.ob22 = ob22;
	}

	public Boolean getOb23() {
		return ob23;
	}

	public void setOb23(Boolean ob23) {
		this.ob23 = ob23;
	}

	public Integer getFa11() {
		return fa11;
	}

	public void setFa11(Integer fa11) {
		this.fa11 = fa11;
	}

	public Integer getFa12() {
		return fa12;
	}

	public void setFa12(Integer fa12) {
		this.fa12 = fa12;
	}

	public String getFa13() {
		return fa13;
	}

	public void setFa13(String fa13) {
		this.fa13 = fa13;
	}

	public String getFa14() {
		return fa14;
	}

	public void setFa14(String fa14) {
		this.fa14 = fa14;
	}

}
