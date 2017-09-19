package com.portal.model;

import java.io.Serializable;
import java.util.List;

public class ResultData<T> implements Serializable {
	private static final long serialVersionUID = 1520873429801214019L;

	private int totalCount;
	private List<T> data;

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}
}