package com.portal.model;

import java.io.Serializable;

public class ToolItem implements Serializable {

	private static final long serialVersionUID = 1571066974465840348L;

	private Integer id;
	private Integer machineId;
	private String toolOp;
	private String partMaterial;
	private String asmCode;
	private String asmDefinition;
	private String holderCode;
	private String holderDefinition;
	private String extensionCode;
	private String extensionDefinition;
	private String shaftCode;
	private String shaftDefinition;
	private String cutterCode;
	private String cutterDefinition;
	private String insertCode;
	private String insertDefinition;
	private Double functionLength;
	private Double offsetLength;
	private String description;
	private String toolS;
	private String toolF;
	private String toolAp;
	private String toolAe;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getMachineId() {
		return machineId;
	}

	public void setMachineId(Integer machineId) {
		this.machineId = machineId;
	}

	public String getToolOp() {
		return toolOp;
	}

	public void setToolOp(String toolOp) {
		this.toolOp = toolOp;
	}

	public String getPartMaterial() {
		return partMaterial;
	}

	public void setPartMaterial(String partMaterial) {
		this.partMaterial = partMaterial;
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

	public Double getFunctionLength() {
		return functionLength;
	}

	public void setFunctionLength(Double functionLength) {
		this.functionLength = functionLength;
	}

	public Double getOffsetLength() {
		return offsetLength;
	}

	public void setOffsetLength(Double offsetLength) {
		this.offsetLength = offsetLength;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getToolS() {
		return toolS;
	}

	public void setToolS(String toolS) {
		this.toolS = toolS;
	}

	public String getToolF() {
		return toolF;
	}

	public void setToolF(String toolF) {
		this.toolF = toolF;
	}

	public String getToolAp() {
		return toolAp;
	}

	public void setToolAp(String toolAp) {
		this.toolAp = toolAp;
	}

	public String getToolAe() {
		return toolAe;
	}

	public void setToolAe(String toolAe) {
		this.toolAe = toolAe;
	}

}
