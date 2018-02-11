package com.portal.dao.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "machine_time")
public class MachineTime implements Serializable {

	private static final long serialVersionUID = -1283639116780418192L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "op020k")
	private Double op020k;

	@Column(name = "op020o")
	private Double op020o;

	@Column(name = "op020b")
	private Double op020b;

	@Column(name = "op030k")
	private Double op030k;

	@Column(name = "op030o")
	private Double op030o;

	@Column(name = "op030b")
	private Double op030b;

	@Column(name = "takilon")
	private Double takilon;

	@Column(name = "tool_change")
	private Double toolChange;

	@ManyToOne
	@JoinColumn(name = "machine")
	private Machine machine;

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
		return toolChange;
	}

	public void setChange(Double change) {
		this.toolChange = change;
	}

	public Machine getMachine() {
		return machine;
	}

	public void setMachine(Machine machine) {
		this.machine = machine;
	}

	public Integer getMachineId() {
		return machineId;
	}

	public void setMachineId(Integer machineId) {
		this.machineId = machineId;
	}

}
