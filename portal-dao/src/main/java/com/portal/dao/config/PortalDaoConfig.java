package com.portal.dao.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.portal.dao.service.JobServiceDao;
import com.portal.dao.service.ToolServiceDao;
import com.portal.dao.service.UserServiceDao;

@Configuration
public class PortalDaoConfig {

	private UserServiceDao userServiceDao;
	private JobServiceDao jobServiceDao;
	private ToolServiceDao toolServiceDao;

	public PortalDaoConfig() {
		userServiceDao = new UserServiceDao();
		jobServiceDao = new JobServiceDao();
		toolServiceDao = new ToolServiceDao();
	}

	@Bean
	public UserServiceDao getUserServiceDao() {
		return userServiceDao;
	}

	@Bean
	public JobServiceDao getJobServiceDao() {
		return jobServiceDao;
	}

	@Bean
	public ToolServiceDao getToolServiceDao() {
		return toolServiceDao;
	}

}
