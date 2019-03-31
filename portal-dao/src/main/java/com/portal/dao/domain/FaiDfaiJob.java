package com.portal.dao.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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

	@Column(name = "raw_width")
	private Double rawWidth;

	@Column(name = "raw_length")
	private Double rawLength;

	@Column(name = "raw_heigth")
	private Double rawHeigth;

	@Column(name = "method_start")
	@Temporal(TemporalType.TIMESTAMP)
	private Date methodStart;

	@Column(name = "method_end")
	@Temporal(TemporalType.TIMESTAMP)
	private Date methodEnd;

	@Column(name = "dpr_data")
	private Boolean dprData;

	@Column(name = "configuration")
	private Boolean configuration;

	@Column(name = "product_tree")
	private Boolean productTree;

	@Column(name = "mp")
	private Boolean mp;

	@Column(name = "eng_and_cnc_folder")
	private Boolean engAndCncFolder;

	@Column(name = "fixture")
	private Boolean fixture;

	@Column(name = "catia_nc_product")
	private Boolean catiaNcProduct;

	@Column(name = "catia_cat_process")
	private Boolean catiaCatProcess;

	@Column(name = "obf_and_pmkf")
	private Boolean obfAndPmkf;

	@Column(name = "part_card")
	private Boolean partCard;

	@Column(name = "level", length = 255)
	private String level;

	@Column(name = "po_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date poDate;

	@Column(name = "old_part_name", length = 255)
	private String oldPartName;

	@Column(name = "old_part_name_pl", length = 255)
	private String oldPartNamePL;

	@Column(name = "old_part_name_tr", length = 255)
	private String oldPartNameTR;

	@Column(name = "old_sub_part_name", length = 255)
	private String oldSubPartName;

	@Column(name = "old_sub_part_name_pl", length = 255)
	private String oldSubPartNamePL;

	@Column(name = "old_sub_part_name_tr", length = 255)
	private String oldSubPartNameTR;

	@Column(name = "new_part_name", length = 255)
	private String newPartName;

	@Column(name = "new_part_name_pl", length = 255)
	private String newPartNamePL;

	@Column(name = "new_part_name_tr", length = 255)
	private String newPartNameTR;

	@Column(name = "new_sub_part_name", length = 255)
	private String newSubPartName;

	@Column(name = "new_sub_part_name_pl", length = 255)
	private String newSubPartNamePL;

	@Column(name = "new_sub_part_name_tr", length = 255)
	private String newSubPartNameTR;

	@Column(name = "change_status", length = 255)
	private String changeStatus;

	@ManyToOne
	@JoinColumn(name = "responsible")
	private User responsible;

	@OneToMany(mappedBy = "faiJob")
	private List<FaiControlList> controlLists;

	@ManyToOne
	@JoinColumn(name = "machine")
	private Machine machine;

	private Integer responsibleId;

	private Integer machineId;

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

	public List<FaiControlList> getControlLists() {
		return controlLists;
	}

	public void setControlLists(List<FaiControlList> controlLists) {
		this.controlLists = controlLists;
	}

	public Machine getMachine() {
		return machine;
	}

	public void setMachine(Machine machine) {
		this.machine = machine;
	}

	public Integer getResponsibleId() {
		return responsibleId;
	}

	public void setResponsibleId(Integer responsibleId) {
		this.responsibleId = responsibleId;
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

	public Date getMethodStart() {
		return methodStart;
	}

	public void setMethodStart(Date methodStart) {
		this.methodStart = methodStart;
	}

	public Date getMethodEnd() {
		return methodEnd;
	}

	public void setMethodEnd(Date methodEnd) {
		this.methodEnd = methodEnd;
	}

	public Boolean getDprData() {
		return dprData;
	}

	public void setDprData(Boolean dprData) {
		this.dprData = dprData;
	}

	public Boolean getConfiguration() {
		return configuration;
	}

	public void setConfiguration(Boolean configuration) {
		this.configuration = configuration;
	}

	public Boolean getProductTree() {
		return productTree;
	}

	public void setProductTree(Boolean productTree) {
		this.productTree = productTree;
	}

	public Boolean getMp() {
		return mp;
	}

	public void setMp(Boolean mp) {
		this.mp = mp;
	}

	public Boolean getEngAndCncFolder() {
		return engAndCncFolder;
	}

	public void setEngAndCncFolder(Boolean engAndCncFolder) {
		this.engAndCncFolder = engAndCncFolder;
	}

	public Boolean getFixture() {
		return fixture;
	}

	public void setFixture(Boolean fixture) {
		this.fixture = fixture;
	}

	public Boolean getCatiaNcProduct() {
		return catiaNcProduct;
	}

	public void setCatiaNcProduct(Boolean catiaNcProduct) {
		this.catiaNcProduct = catiaNcProduct;
	}

	public Boolean getCatiaCatProcess() {
		return catiaCatProcess;
	}

	public void setCatiaCatProcess(Boolean catiaCatProcess) {
		this.catiaCatProcess = catiaCatProcess;
	}

	public Boolean getObfAndPmkf() {
		return obfAndPmkf;
	}

	public void setObfAndPmkf(Boolean obfAndPmkf) {
		this.obfAndPmkf = obfAndPmkf;
	}

	public Boolean getPartCard() {
		return partCard;
	}

	public void setPartCard(Boolean partCard) {
		this.partCard = partCard;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public Date getPoDate() {
		return poDate;
	}

	public void setPoDate(Date poDate) {
		this.poDate = poDate;
	}

	public String getOldPartName() {
		return oldPartName;
	}

	public void setOldPartName(String oldPartName) {
		this.oldPartName = oldPartName;
	}

	public String getOldPartNamePL() {
		return oldPartNamePL;
	}

	public void setOldPartNamePL(String oldPartNamePL) {
		this.oldPartNamePL = oldPartNamePL;
	}

	public String getOldPartNameTR() {
		return oldPartNameTR;
	}

	public void setOldPartNameTR(String oldPartNameTR) {
		this.oldPartNameTR = oldPartNameTR;
	}

	public String getOldSubPartName() {
		return oldSubPartName;
	}

	public void setOldSubPartName(String oldSubPartName) {
		this.oldSubPartName = oldSubPartName;
	}

	public String getOldSubPartNamePL() {
		return oldSubPartNamePL;
	}

	public void setOldSubPartNamePL(String oldSubPartNamePL) {
		this.oldSubPartNamePL = oldSubPartNamePL;
	}

	public String getOldSubPartNameTR() {
		return oldSubPartNameTR;
	}

	public void setOldSubPartNameTR(String oldSubPartNameTR) {
		this.oldSubPartNameTR = oldSubPartNameTR;
	}

	public String getNewPartName() {
		return newPartName;
	}

	public void setNewPartName(String newPartName) {
		this.newPartName = newPartName;
	}

	public String getNewPartNamePL() {
		return newPartNamePL;
	}

	public void setNewPartNamePL(String newPartNamePL) {
		this.newPartNamePL = newPartNamePL;
	}

	public String getNewPartNameTR() {
		return newPartNameTR;
	}

	public void setNewPartNameTR(String newPartNameTR) {
		this.newPartNameTR = newPartNameTR;
	}

	public String getNewSubPartName() {
		return newSubPartName;
	}

	public void setNewSubPartName(String newSubPartName) {
		this.newSubPartName = newSubPartName;
	}

	public String getNewSubPartNamePL() {
		return newSubPartNamePL;
	}

	public void setNewSubPartNamePL(String newSubPartNamePL) {
		this.newSubPartNamePL = newSubPartNamePL;
	}

	public String getNewSubPartNameTR() {
		return newSubPartNameTR;
	}

	public void setNewSubPartNameTR(String newSubPartNameTR) {
		this.newSubPartNameTR = newSubPartNameTR;
	}

	public String getChangeStatus() {
		return changeStatus;
	}

	public void setChangeStatus(String changeStatus) {
		this.changeStatus = changeStatus;
	}

}
