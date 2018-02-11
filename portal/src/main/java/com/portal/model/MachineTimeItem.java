package com.portal.model;

import java.io.Serializable;

import com.portal.dao.domain.Machine;

public class MachineTimeItem implements Serializable {

	private static final long serialVersionUID = 6432443428568105171L;

	private Integer id;
	private Double op020k;
	private Double op020o;
	private Double op020b;
	private Double op030k;
	private Double op030o;
	private Double op030b;
	private Double takilon;
	private Double change;
	private Integer machineId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Double getOp020k() {
		return op020k;
	}

	public void setOp020k(Double op020k) {
		this.op020k = op020k;
	}

	public Double getOp020o() {
		return op020o;
	}

	public void setOp020o(Double op020o) {
		this.op020o = op020o;
	}

	public Double getOp020b() {
		return op020b;
	}

	public void setOp020b(Double op020b) {
		this.op020b = op020b;
	}

	public Double getOp030k() {
		return op030k;
	}

	public void setOp030k(Double op030k) {
		this.op030k = op030k;
	}

	public Double getOp030o() {
		return op030o;
	}

	public void setOp030o(Double op030o) {
		this.op030o = op030o;
	}

	public Double getOp030b() {
		return op030b;
	}

	public void setOp030b(Double op030b) {
		this.op030b = op030b;
	}

	public Double getTakilon() {
		return takilon;
	}

	public void setTakilon(Double takilon) {
		this.takilon = takilon;
	}

	public Double getChange() {
		return change;
	}

	public void setChange(Double change) {
		this.change = change;
	}

	public Integer getMachineId() {
		return machineId;
	}

	public void setMachineId(Integer machineId) {
		this.machineId = machineId;
	}

}
