package com.portal.dao.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "tool", uniqueConstraints = { @UniqueConstraint(columnNames = { "asm_code" }) })
public class Tool implements Serializable {

	private static final long serialVersionUID = 1571066974465840348L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "tool_op", length = 255)
	private String toolOp;

	@Column(name = "asm_code", length = 255)
	private String asmCode;

	@Column(name = "asm_definition", length = 255)
	private String asmDefinition;

	@Column(name = "holder_code", length = 255)
	private String holderCode;

	@Column(name = "holder_definition", length = 255)
	private String holderDefinition;

	@Column(name = "extension_code", length = 255)
	private String extensionCode;

	@Column(name = "extension_definition", length = 255)
	private String extensionDefinition;

	@Column(name = "shaft_code", length = 255)
	private String shaftCode;

	@Column(name = "shaft_definition", length = 255)
	private String shaftDefinition;

	@Column(name = "cutter_code", length = 255)
	private String cutterCode;

	@Column(name = "cutter_definition", length = 255)
	private String cutterDefinition;

	@Column(name = "insert_code", length = 255)
	private String insertCode;

	@Column(name = "insert_definition", length = 255)
	private String insertDefinition;

	@Column(name = "function_length")
	private Integer functionLength;

	@Column(name = "offset_length")
	private Integer offsetLength;

	@Column(name = "description", length = 500)
	private String description;

	@Column(name = "part_material", length = 255)
	private String partMaterial;

	@OneToOne(mappedBy = "tool")
	private MachineTool machineTool;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getToolOp() {
		return toolOp;
	}

	public void setToolOp(String toolOp) {
		this.toolOp = toolOp;
	}

	public String getAsmCode() {
		return asmCode;
	}

	public void setAsmCode(String asmCode) {
		this.asmCode = asmCode;
	}

	public String getAsmDefinition() {
		return asmDefinition;
	}

	public void setAsmDefinition(String asmDefinition) {
		this.asmDefinition = asmDefinition;
	}

	public String getHolderCode() {
		return holderCode;
	}

	public void setHolderCode(String holderCode) {
		this.holderCode = holderCode;
	}

	public String getHolderDefinition() {
		return holderDefinition;
	}

	public void setHolderDefinition(String holderDefinition) {
		this.holderDefinition = holderDefinition;
	}

	public String getExtensionCode() {
		return extensionCode;
	}

	public void setExtensionCode(String extensionCode) {
		this.extensionCode = extensionCode;
	}

	public String getExtensionDefinition() {
		return extensionDefinition;
	}

	public void setExtensionDefinition(String extensionDefinition) {
		this.extensionDefinition = extensionDefinition;
	}

	public String getShaftCode() {
		return shaftCode;
	}

	public void setShaftCode(String shaftCode) {
		this.shaftCode = shaftCode;
	}

	public String getShaftDefinition() {
		return shaftDefinition;
	}

	public void setShaftDefinition(String shaftDefinition) {
		this.shaftDefinition = shaftDefinition;
	}

	public String getCutterCode() {
		return cutterCode;
	}

	public void setCutterCode(String cutterCode) {
		this.cutterCode = cutterCode;
	}

	public String getCutterDefinition() {
		return cutterDefinition;
	}

	public void setCutterDefinition(String cutterDefinition) {
		this.cutterDefinition = cutterDefinition;
	}

	public String getInsertCode() {
		return insertCode;
	}

	public void setInsertCode(String insertCode) {
		this.insertCode = insertCode;
	}

	public String getInsertDefinition() {
		return insertDefinition;
	}

	public void setInsertDefinition(String insertDefinition) {
		this.insertDefinition = insertDefinition;
	}

	public Integer getFunctionLength() {
		return functionLength;
	}

	public void setFunctionLength(Integer functionLength) {
		this.functionLength = functionLength;
	}

	public Integer getOffsetLength() {
		return offsetLength;
	}

	public void setOffsetLength(Integer offsetLength) {
		this.offsetLength = offsetLength;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public MachineTool getMachineTool() {
		return machineTool;
	}

	public void setMachineTool(MachineTool machineTool) {
		this.machineTool = machineTool;
	}

	public String getPartMaterial() {
		return partMaterial;
	}

	public void setPartMaterial(String partMaterial) {
		this.partMaterial = partMaterial;
	}

}
